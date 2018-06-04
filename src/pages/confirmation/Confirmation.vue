<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <Header></Header>
    <b-container class="top">
      <b-row>
        <b-col cols="4">
            <b-card class="post-it post-it-presence" text-variant="white" title="Não se esqueça">
              <p class="card-text">
                Você tem até o dia <b>07 de Agosto</b> para confirmar sua presença.
              </p>
            </b-card>
        </b-col>
        <b-col cols="8">
            <b-card class="post-it post-it-second"  title="Confirmar sua presença é bem simples basta seguir o<br> passo a passo:">
              <p class="card-text">
                <ul class="list-steps">
                    <li>Busque seu nome com sobrenome no campo: "Buscar" , <b>ex: Camila Elias</b>.</li>
                    <li>Em seguida, abrirá uma caixa de mensagem onde você deve marcar o campo que ficará verde.</li>
                    <li>
                      Logo em seguida é só colocar o seu email , <b>ex: camilaelas@gmail.com</b>, que voce sempre tenha acesso.
                    </li>
                    <li>E ai, é só sugerir uma música que você gostaria de ouvir sendo tocada na festa! =)</li>
                </ul>

                <p class="text-danger" style="font-weight:bold">
                  * Utilize um email que você tenha acesso, pois,será por lá que você recebera todas as informações e avisos sobre o casamento.
                </p>
             </p>
            </b-card>
        </b-col>
      </b-row>
      <b-row style="margin-top:2%">
        <b-input-group>
          <b-form-input v-model="name" placeholder="Buscar" ></b-form-input>
          <b-input-group-append>
            <b-btn @click="searchUser" variant="outline-primary"><icon name="search" scale="2" ></icon></b-btn>
          </b-input-group-append>
        </b-input-group>
      </b-row>

      <b-row style="margin-top:2%" v-if="wishesList.length > 0">
        <b-col cols="12">
          <h4>As mais pedidas:</h4>
        </b-col>
        <b-col>
          <b-list-group>
            <b-list-group-item v-for="(music, index) in wishesList" :key="index">{{music.music}} - {{music.name}} <!-- <icon name="play" color="#000"></icon> --></b-list-group-item>
          </b-list-group>
        </b-col>
        <b-col class="warning">
          <iframe scrolling="no" frameborder="0" allowTransparency="true" src="https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=700&height=350&color=007FEB&layout=dark&size=medium&type=playlist&id=30595446&app_id=1" width="700" height="350"></iframe>
        </b-col>
      </b-row>


      <b-modal id="modalConfirmation" cancel-title="Cancelar" @ok="submit" ok-title="Tudo certo, pode confirmar" centered hide-header ref="modalConfirmation" size="lg" >
        <b-container>
          <b-row>
          <b-col cols="12">
            <h4>Confirme sua presença</h4>
          </b-col>
          <b-col cols="12">
            <b-form-checkbox id="checkbox1"
              v-model="confirmed"
              >
              {{guest.name}}
            </b-form-checkbox>
            <b-form-input v-model="email"
                  type="text"
                  placeholder="Email"></b-form-input>
          </b-col>
        </b-row>
        <b-row style="margin-top:4rem" v-if="email && confirmed">
          <b-col cols="12">
            <h4>Peça sua música</h4>
          </b-col>
          <b-col cols="12">
              <p>Dance ao som  de sua música favorita! Todos os pedidos serão repassados ao DJ</p>
              <div>
                <label for="inputFormatter">Nome do Artista</label>
                  <b-form-input v-model="artistName"
                    type="text" style="margin-bottom:1rem"
                    placeholder="Nome do Artista"></b-form-input>
              </div>

              <div>
                <label for="inputFormatter">Nome da música</label>
                  <b-form-input v-model="artistMusic"
                      type="text" style="margin-bottom:1rem"
                      placeholder="Nome da Música"></b-form-input>
              </div>
              <div>
                <label for="inputFormatter">Link</label>
                  <b-form-input v-model="linkMusic"
                    type="text" style="margin-bottom:1rem"
                    placeholder="Link"></b-form-input>
              </div>
            </b-col>
        </b-row>
        <b-row v-if="email && confirmed">
           <b-col>
            <b-card class="post-it post-it-tip" text-variant="white" title="Dica">
              <p class="card-text">
               Caso ocorra algum imprevisto e você não possa comparecer depois de ter confirmado sua presença, é só cancelar sua confirmação.
               Você poderá fazer isso até o dia 25 de agosto. Não esqueça, isso nos ajudará muito =)
              </p>
            </b-card>
           </b-col>
        </b-row>

        </b-container>
      </b-modal>

      <b-modal id="modalUncheck" cancel-title="Cancelar" @ok="uncheck" ok-title="Desmarcar presença" centered hide-header ref="modalUncheck" size="lg" >
        <b-container>
          <b-row>
            <b-col cols="12">
              <h4>Desmarcar presença</h4>
              <p>Olá <strong>{{this.guest.name}}</strong>, após confirmar a desmarcação , alteum texto aqui...</p>
               <b-form-input v-model="email"
                  type="text"
                  placeholder="Email"></b-form-input>
            </b-col>
          </b-row>
        </b-container>
    </b-modal>

    </b-container>
  </div>
</template>

<script>
import Header from '@/components/Header';
import Autocomplete from 'vuejs-auto-complete';
import Loading from 'vue-loading-overlay';

// import * as SpotifyWebApi from 'spotify-web-api-js';
import config from '@/config/settings';
import swal from 'sweetalert';
import { http } from '@/services/http';

export default {
  name: 'Confirmation',
  components: {
    Header,
    Autocomplete,
    Loading
  },
  data() {
    return {
      isLoading: false,
      guests: [],
      guest: {
        _id: '',
        name: '',
        confirmed: false,
        email: ''
      },
      name: '',
      email: '',
      confirmed: false,
      status: false,
      artistName: '',
      artistMusic: '',
      linkMusic: '',
      wishesList: []
    };
  },
  async created() {
    this.fetchMusics();
  },
  methods: {
    async uncheck(evt) {
      try {
        evt.preventDefault();
        if (!this.email) {
          swal('Preencha seu email', 'Digite seu email', 'error');
        }

        const payload = {
          _id: this.guest._id,
          confirmed: false
        };

        const res = await http.patch('guests', payload);
        swal('Tudo certo!', 'Presença desmarcada, obrigado!', 'success');
        this.$refs.modalUncheck.hide();
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    },
    async submit(evt) {
      try {
        evt.preventDefault();
        if (!this.confirmed || !this.email) {
          swal('Preencha seu email', 'Digite seu email', 'error');
        }

        const payload = {
          _id: this.guest._id,
          confirmed: this.confirmed
        };

        if (this.artistName && this.artistMusic) {
          payload.music = {};
          payload.music.name = this.artistName;
          payload.music.music = this.artistMusic;
          payload.music.link = this.linkMusic;
        }

        const res = await http.patch('guests', payload);
        swal('Tudo certo!', 'Presença confirmada, obrigado!', 'success');
        this.$refs.modalConfirmation.hide();
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    },
    async fetchMusics() {
      this.wishesList = (await http.get('ranking')).data;
    },
    clean() {
      this.email = '';
      this.artistName = '';
      this.artistMusic = '';
      this.linkMusic = '';
    },
    async searchUser() {
      try {
        this.clean();
        this.isLoading = true;
        const res = await http.get(
          `${config.weddingAPI.url}guests?name=${this.name}`
        );

        if (res.data.length > 1) {
          swal('Digite seu nome completo', 'warning');
          swal(
            'Não conseguimos te encontrar',
            'Digite seu nome completo',
            'warning'
          );
        } else {
          this.guest = res.data[0];
          if (this.guest.confirmed) {
            this.showUncheckModal();
          } else {
            this.showConfirmationModal();
          }
        }
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        swal(
          'Não conseguimos te encontrar',
          'Digite seu nome completo',
          'error'
        );
        console.log(error);
      }
    },
    showConfirmationModal() {
      this.$refs.modalConfirmation.show();
    },
    showUncheckModal() {
      this.$refs.modalUncheck.show();
    }
  }
};
</script>

<style lang="scss" scoped>
@import '~assets/scss/index.scss';
.warning {
  display: inherit;
  p {
    padding-left: 1rem;
  }
}
h4 {
  font-weight: bold;
}
.post-it {
  border: 0;
  box-shadow: 2px 4px 14px #868686;
}
.post-it-presence {
  background: pink !important;
  p,
  h4 {
    color: #000 !important;
  }
}
.post-it-second {
  background: #d4ebff !important;
}
.post-it-tip {
  background: #ecff93 !important;
  ,
  p,
  h4 {
    color: #000 !important;
  }
}

.card-title {
  font-weight: 600;
}
.list-steps {
  padding: 1rem;
}
</style>

