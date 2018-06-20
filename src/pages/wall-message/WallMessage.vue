<template>
  <div>
      <div class="wrapper text-center">

           <b-row>
            <b-col>
              <h2>Mural de Mensagens</h2>
]              <b-button size="lg" v-b-modal.modalFillMessage variant="outline-primary">
                Deixe sua Mensagen
              </b-button>
            </b-col>
           </b-row>


            <b-row>
              <b-col class="line" cols="4" v-for="m in messages" :key="m._id">
                <p>{{m.message}}</p>
                <small>{{m.author}}</small>
              </b-col>
            </b-row>


          <!-- <b-row class="line reverse">
            <h1><span>A</span><span>M</span><span>O</span><span>R</span></h1>
          </b-row> -->
    </div>


      <b-modal id="modalFillMessage" cancel-title="Cancelar" ok-title="Enviar" centered hide-header ref="modalFillMessage" size="lg" >
        <b-container>
          <b-row style="margin-top:4rem">
            <b-col>
              <b-form-textarea id="textarea1"
                     v-model="text"
                     placeholder="Comentário"
                     :rows="3"
                     :max-rows="6">
              </b-form-textarea>
            </b-col>
            <b-col cols="12" style="margin-top:1rem">
                <b-form-input v-model="author"
                    type="text" style="margin-bottom:1rem"
                    placeholder="Nome"></b-form-input>
                <b-form-input v-model="email"
                    type="text" style="margin-bottom:1rem"
                    placeholder="email"></b-form-input>
                <small>Seu endereço de email não será públicado =)</small>
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

.wrapper {
  min-height: 10rem;
  padding: 3rem;
  background: url('/static/imgs/quadro_negro.jpg');
  background-size: 100%;
  //  background: linear-gradient(#0a0a0a, #474747);
  box-shadow: inset 0 0 2px 2px rgba(0, 0, 0, 0.3),
    inset 0 30px 30px rgba(255, 255, 255, 0.1);
  h2,
  p,
  small {
    color: #fff;
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

@import url(https://fonts.googleapis.com/css?family=Signika:700,300,600);
h1 {
  font-size: 5em;
  font: bold 7.5vw/1.6 'Signika', sans-serif;
  user-select: none;
}
.reverse {
  span {
    color: #f379ff;
  }
}

//
</style>

