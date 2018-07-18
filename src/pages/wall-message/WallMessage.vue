<template>
  <div>
      <loading :active.sync="isLoading"></loading>
      <div class="container">
          <h1 class="main-title">Mural de Mensagens</h1>
           <b-row>
            <b-col class="text-center">
             <b-button size="lg" v-b-modal.modalFillMessage variant="outline-primary">
                Deixe sua Mensagem
              </b-button>
            </b-col>
           </b-row>


            <b-row class="text-center">
              <b-col class="line" md="4" sm="12" v-for="(m, key)  in messages" :key="m._id">
                 <b-card v-bind:class="{ 'post-it-three ': key % 2 !== 0,'post-it-two': key % 2 === 0 }" class="post-it " text-variant="white">
                    <read-more class="text" more-str="Ver mais" :text="m.message" link="#" less-str="Ver menos" :max-chars="50"></read-more>
                    <p class="author">{{m.author}}</p>
                </b-card>
              </b-col>
            </b-row>
    </div>


      <b-modal id="modalFillMessage" cancel-title="Cancelar" @ok="saveMessage" ok-title="Enviar" centered hide-header ref="modalFillMessage" size="lg" >
        <b-container>
          <b-row>
            <b-col>
              <p>Deixe sua mensagem para nós!</p>
            </b-col>
          </b-row>
          <b-row style="margin-top:1rem">
            <b-col>
              <b-form-textarea id="comment"
                     v-model="message"
                     placeholder="Mensagem..."
                     :rows="8"
                     :max-rows="6">
              </b-form-textarea>
            </b-col>
            <b-col cols="12" style="margin-top:1rem">
                <b-form-input v-model="author"
                    type="text" style="margin-bottom:1rem"
                    placeholder="Seu nome"></b-form-input>
            </b-col>
            </b-row>
        </b-container>
      </b-modal>
  </div>
</template>

<script>
import Loading from 'vue-loading-overlay';
import swal from 'sweetalert';
import { http } from '@/services/http';
// import config from '@/config/settings';
// import _ from 'lodash';

export default {
  name: 'WallMessage',
  components: {
    Loading
  },
  data() {
    return {
      isLoading: false,
      author: '',
      message: '',
      messages: []
    };
  },
  created() {
    this.getMessages();
  },
  methods: {
    async getMessages() {
      try {
        this.isLoading = true;
        const res = await http.get('wall-messages');
        this.messages = res.data;
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;

        console.log(error);
      }
    },
    async saveMessage() {
      try {
        if (!this.author || !this.message) {
          swal('Digite a mensagem e o seu nome', '', 'error');
          return;
        }

        this.isLoading = true;
        await http.post('wall-messages', {
          author: this.author,
          message: this.message
        });
        swal('Obrigado pela sua mensagem!', '', 'success');
        await this.getMessages();
        this.isLoading = false;
      } catch (error) {
        console.log(error);
        this.isLoading = false;
      }
    },
    showModal() {
      this.$refs.modalFillMessage.show();
    }
  }
};
</script>

<style lang="scss" scoped>
@import '~assets/scss/index.scss';

.container {
  min-height: 10rem;
  padding: 3rem;
  h2,
  p,
  small {
    color: #000;
  }
  p {
    font-size: 1.5rem;
  }
  small {
    font-size: 1rem;
  }

  .line {
    margin-top: 4rem;
    p,
    small {
      font-family: 'Indie Flower', cursive !important;
    }
  }

  .text {
    font-family: 'Indie Flower', cursive !important;
    color: #000;
  }
}

.post-it {
  height: auto;
  border: 0;
  box-shadow: 2px 4px 14px #868686;

  p.author {
    font-size: 1rem;
  }
}
.post-it-one {
  background: pink !important;
}
.post-it-two {
  background: #d4ebff !important;
}
.post-it-three {
  background: #ecff93 !important;
}

//
</style>

