<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <b-container class="top">
      <h1 class="main-title">Confirmar presença</h1>
       <b-row>
        <b-col md="4" sm="12">
            <b-card class="post-it post-it-tip" text-variant="white" title="Traje - Social">
              <p class="card-text">
                Conferir algumas <a href="https://br.pinterest.com/mimicaelias/casamento-no-campo/" target="_blank"><strong>inspirações</strong></a>
              </p>

              <div class="container-img">
                <img class="img-clothes" src="/static/imgs/dress.svg" />
                <img class="img-clothes" src="/static/imgs/terno.svg" />
              </div>


            </b-card>
            <b-card style="margin-top:2rem" class="post-it post-it-presence" text-variant="white" title="Não se esqueça,">
              <p class="card-text">
                Você tem até o dia <b>07 de Agosto</b> para confirmar sua presença!
              </p>

              <p class="card-text">
                <strong>Esperamos você lá =)</strong>
              </p>
            </b-card>
        </b-col>
        <b-col md="8" sm="12" class="post2">
            <b-card class="post-it post-it-second"  title="Confirmar sua presença é bem simples basta seguir o<br> passo a passo:">
              <p class="card-text">
                <ul class="list-steps">
                    <li>Busque seu nome com sobrenome (sem acentuação)  no campo : "Buscar nome".<br> <b>(ex: Camila Elias)</b></li>
                    <li>Abrirá uma caixa de mensagem onde você deverá marcar o campo com seu nome, que ficará verde.</li>
                    <li>
                      Logo em seguida, coloque seu email que você sempre acesse. <br><b>(ex: camilaelas@gmail.com)</b> ou telefone.
                    </li>
                    <li>E ai, é só sugerir uma música que você queira ouvir sendo tocada na festa! <strong>=)</strong></li>
                </ul>

                <p class="text-danger" style="font-weight:bold">
                  * Utilize um email que você sempre tenha acesso, pois, será por lá que você receberá todas as informações e avisos sobre o casamento.
                </p>

            </b-card>
        </b-col>
      </b-row>
      <b-row class="search">
        <b-col>
          <b-input-group>
          <b-form-input v-model="name" placeholder="Buscar nome..." ></b-form-input>
          <b-input-group-append>
            <b-btn @click="searchUser" variant="outline-primary"><icon name="search" scale="2" ></icon></b-btn>
          </b-input-group-append>
        </b-input-group>

        </b-col>
      </b-row>

      <b-row style="margin-top:6%" v-if="wishesList.length > 0">
        <b-col cols="12">
          <h4 style="display:flex"><icon scale="2" name="headphones" /> <span style="justify-content: center;align-self: center;padding-left: 0.5rem;">As músicas mais pedidas:</span></h4>
        </b-col>
        <b-col>
          <b-list-group>
            <b-list-group-item v-for="(music, index) in wishesList" :key="index">{{music.music}} - {{music.name}} <!-- <icon name="play" color="#000"></icon> --></b-list-group-item>
          </b-list-group>
        </b-col>
        <b-col class="warning">
          <iframe scrolling="no" frameborder="0" allowTransparency="true" src="https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=700&height=350&color=007FEB&layout=dark&size=medium&type=playlist&id=4421478286&app_id=1" width="700" height="350"></iframe>
        </b-col>
      </b-row>


      <b-modal id="modalConfirmation" cancel-title="Cancelar" @ok="submit" ok-title="Tudo certo, pode confirmar" centered hide-header ref="modalConfirmation" size="lg" >
        <b-container>
          <b-row>
            <b-col cols="12">
              <h4>Confirme sua presença</h4>
            </b-col>
            <b-col cols="12" style="margin-top:2rem">
              <b-form-checkbox v-bind:class="{'bold text-success': confirmed}" id="checkbox1" v-model="confirmed">
                <p class="guest-name ">{{guest.name}}</p>
              </b-form-checkbox>
            <div>
              <label for="inputFormatter">Telefone</label>
              <input  v-mask="'(##)#####-####'" v-model="phone"
               type="text" placeholder="Telefone" class="form-control" style="margin-bottom: 1rem;">
            </div>

            <div>
              <label for="inputFormatter">Email</label>
                <b-form-input v-model="email"
                    type="text" style="margin-bottom:1rem"
                    placeholder="Email"></b-form-input>
            </div>

            </b-col>
          </b-row>

          <b-row class="block">
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
              </b-col>
        </b-row>
        <b-row>
           <b-col>
            <b-card class="post-it post-it-tip" text-variant="white" title="Dica">
              <p class="card-text">
                Caso ocorra algum imprevisto que impeça você de ir ao casamento após a confirmação da sua presença, gentileza cancelar seu comparecimento no próprio site do casamento.
              </p>
              <p>
                Você deverá fazer isso até o dia <strong>25 de agosto de 2018</strong>.
              </p>
              <p>
                <strong>Não se esqueça, pois isso nos ajudará muito =)</strong>
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
              <p>Olá <strong>{{this.guest.name}}</strong>, tem certeza que deseja confirmar a desmarcação? </p>
              <b-form-input v-if="guest.phone" v-model="phone"
                  type="text"
                  placeholder="Telefone" style="margin-bottom: 1rem;"></b-form-input>
              <b-form-input v-if="guest.email" v-model="email"
                  type="text"
                  placeholder="Email" style="margin-bottom: 1rem;"></b-form-input>
            </b-col>
          </b-row>
        </b-container>
    </b-modal>

    </b-container>
  </div>
</template>

<script>
import Autocomplete from 'vuejs-auto-complete';
import Loading from 'vue-loading-overlay';

// import * as SpotifyWebApi from 'spotify-web-api-js';
import config from '@/config/settings';
import swal from 'sweetalert';
import { http } from '@/services/http';

export default {
  name: 'Confirmation',
  components: {
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
        email: '',
        phone: ''
      },
      name: '',
      email: '',
      phone: '',
      confirmed: false,
      status: false,
      artistName: '',
      artistMusic: '',
      linkMusic: '',
      wishesList: [],

      fieldOptions: [
        { text: 'Email', value: 'email' },
        { text: 'Telefone', value: 'phone' }
      ],
      fieldSelected: ''
    };
  },
  async created() {
    this.fetchMusics();
  },
  methods: {
    async uncheck(evt) {
      try {
        evt.preventDefault();
        if (!this.email && !this.phone) {
          swal('Preencha o contato que voce cadastrou', '', 'error');
          return;
        }
        this.isLoading = true;
        const payload = {
          _id: this.guest._id,
          confirmed: false
        };

        if (this.email) {
          if (this.email !== this.guest.email) {
            swal('Email não bate com o cadastrado', '', 'error');
            return;
          }
          payload.email = this.email;
        }
        if (this.phone) {
          if (this.phone !== this.guest.phone) {
            swal('Telefone não bate com o cadastrado', '', 'error');
            return;
          }
          payload.phone = this.phone;
        }

        const res = await http.patch('guests', payload);
        swal('Tudo certo!', 'Presença desmarcada, obrigado!', 'success');
        this.$refs.modalUncheck.hide();
        console.log(res);
        this.isLoading = false;
      } catch (error) {
        console.log(error);
        swal('Erro ao desmarcar', '', 'error');
        this.isLoading = false;
      }
    },
    async submit(evt) {
      try {
        this.isLoading = true;
        evt.preventDefault();
        if (!this.confirmed) {
          swal('Marque o checkbox', '', 'error');
          return;
        }
        if (!this.email && !this.phone) {
          swal('Preencha seu email e/ou telefone', '', 'error');
          return;
        }

        const payload = {
          _id: this.guest._id,
          confirmed: this.confirmed,
          email: this.email,
          phone: this.phone
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
        this.isLoading = false;
        console.log(res);
      } catch (error) {
        console.log(error);
        this.isLoading = false;
      }
    },
    async fetchMusics() {
      this.wishesList = (await http.get('ranking')).data;
    },
    clean() {
      this.email = '';
      this.phone = '';
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

        if (res.data.length === 0) {
          swal(
            'Não conseguimos te encontrar',
            'Digite seu nome completo',
            'error'
          );
          this.isLoading = false;
          return;
        }

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
.block {
  margin-top: 4rem;
  @include media-breakpoint-down(md) {
    margin-top: 2rem;
  }
}
.guest-name {
  padding: 0.4rem 1rem 0;
  font-size: 1rem;
  @include media-breakpoint-down(md) {
    font-size: 0.8rem;
    padding: 0rem 1rem 0;
  }
}
.post2 {
  @include media-breakpoint-down(md) {
    margin-top: 2rem;
  }
}
.search {
  margin-top: 2rem;
}
.warning {
  @include media-breakpoint-down(md) {
    margin-top: 2rem;
  }
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

.container-img {
  float: right;
  margin-top: -4rem;
}
.img-clothes {
  width: 50px;
}
</style>

