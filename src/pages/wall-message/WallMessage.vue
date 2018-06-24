<template>
  <div>
      <div class="container text-center">

           <b-row>
            <b-col>
              <h2>Mural de Mensagens</h2>
             <b-button size="lg" v-b-modal.modalFillMessage variant="outline-primary">
                Deixe sua Mensagem
              </b-button>
            </b-col>
           </b-row>


            <b-row>
              <b-col class="line" cols="4" v-for="(m, key)  in messages" :key="m._id">
                 <b-card v-bind:class="{ 'post-it-three ': key % 2 !== 0,'post-it-two': key % 2 === 0 }" class="post-it " text-variant="white">
                    <p>{{m.message}}</p>
                    <small>{{m.author}}</small>
                </b-card>
              </b-col>
            </b-row>


          <!-- <b-row class="line reverse">
            <h1><span>A</span><span>M</span><span>O</span><span>R</span></h1>
          </b-row> -->
    </div>


      <b-modal id="modalFillMessage" cancel-title="Cancelar" ok-title="Enviar" centered hide-header ref="modalFillMessage" size="lg" >
        <b-container>
          <b-row>
            <b-col>
              <p>Deixe sua mensagem para nós!</p>
            </b-col>
          </b-row>
          <b-row style="margin-top:4rem">
            <b-col>
              <b-form-textarea id="textarea1"
                     v-model="message"
                     placeholder="Comentário..."
                     :rows="3"
                     :max-rows="6">
              </b-form-textarea>
            </b-col>
            <b-col cols="12" style="margin-top:1rem">
                <b-form-input v-model="author"
                    type="text" style="margin-bottom:1rem"
                    placeholder="Nome"></b-form-input>
            </b-col>
            </b-row>
        </b-container>
      </b-modal>
  </div>
</template>

<script>
import { http } from '@/services/http';
// import config from '@/config/settings';
// import _ from 'lodash';

export default {
  name: 'WallMessage',
  components: {},
  data() {
    return {
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
      const res = await http.get('wall-messages');
      this.messages = res.data;
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
  //  background: linear-gradient(#0a0a0a, #474747);
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
      font-family: 'Indie Flower', cursive;
    }
  }

  .heart {
    width: 8rem;
    display: flex;
  }
  .reverse {
    flex-direction: row-reverse;
  }
}

.post-it {
  height: 12rem;

  border: 0;
  box-shadow: 2px 4px 14px #868686;
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

