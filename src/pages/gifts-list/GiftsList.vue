<template>
  <div>
    <b-container class="top">
        <h1 class="main-title">Lista de presentes</h1>
        <b-card class="post-it">
            <h4><strong>Observação</strong></h4>
            <p class="card-text">
              Endereço para entrega dos produtos comprados no site:<br>
              <strong>Rua</strong> Mariana 1013 - Bonfim - <strong>CEP</strong> 31210-420 - Belo Horizonte/MG
            </p>
        </b-card>

        <b-row>
          <b-col class="block" md="4" sm="12">
            <b-card @click="showModal('modalKitchenHelps')"
                img-src="/static/imgs/cooking.svg"
                img-center>
              <p class="card-text text-center">
                Ajudinha na Cozinha
              </p>
              </b-card>
          </b-col>
          <b-col class="block" md="4" sm="12" @click="showModal('modalHomeHelps')">
            <b-card
                img-src="/static/imgs/pin.svg"
                img-center>
              <p class="card-text text-center">
                Ajudinha na casa
              </p>
              </b-card>
          </b-col>

          <b-col class="block" md="4" sm="12"  @click="showModal('modalHoneymoon')">
            <b-card
                img-src="/static/imgs/honeymoon.svg"
                img-center>
              <p class="card-text text-center">
                Ajudinha na lua-de-mel
              </p>
              </b-card>
          </b-col>

        </b-row>


        <b-modal id="modalKitchenHelps" @hidden="onHidden" title="Ajudinha na Cozinha" cancel-title="Fechar"  centered  ref="modalKitchenHelps" size="lg" >
          <b-container>
            <b-row >
              <b-col sm="12" md="6" class="d-flex">
                <b-input-group>
                  <b-form-input v-model="filter.kitchen.productName" placeholder="Buscar..."></b-form-input>
                  <b-input-group-append class="center-d">
                    <b-btn @click="setFilter('productName','kitchen')" variant="outline-success">
                      <icon name="search" scale="2" ></icon>
                    </b-btn>
                  </b-input-group-append>
                </b-input-group>
              </b-col>
              <b-col sm="12" md="6" class="d-flex d-bottom">
                <b-button-group>
                  <b-button variant="outline-success" :pressed="filter.kitchen.low" @click="setFilter('low','kitchen')">Menor Valor</b-button>
                  <b-button variant="outline-success" :pressed="filter.kitchen.high" @click="setFilter('high','kitchen')">Maior Valor</b-button>
                  <!-- <b-button variant="outline-success">Mais relevante</b-button> -->
                </b-button-group>
              </b-col>
            </b-row>
            <b-row class="top">
              <b-col class="container-product" md="4" sm="12" v-for="(item, key) in kitchenItems" :key="key">
                 <pay-pal-button :certificate="item.certificate" :price="`R$ ${item.price}`" :name="item.name" :img="item.img" />
              </b-col>
            </b-row>
            </b-container>
        </b-modal>

        <b-modal id="modalHomeHelps" @hidden="onHidden" title="Ajudinha na Casa" cancel-title="Fechar"  centered  ref="modalHomeHelps" size="lg" >
          <b-container>
            <b-row>
              <b-col md="6" sm="12" class="d-flex">
                <b-input-group>
                  <b-form-input v-model="filter.home.productName" placeholder="Buscar..."></b-form-input>
                  <b-input-group-append class="center-d">
                    <b-btn @click="setFilter('productName','home')" variant="outline-success">
                      <icon name="search" scale="2" ></icon>
                    </b-btn>
                  </b-input-group-append>
                </b-input-group>
              </b-col>
              <b-col sm="12" md="6" class="d-flex d-bottom">
                <b-button-group>
                  <b-button variant="outline-success" :pressed="filter.home.low" @click="setFilter('low','home')">Menor Valor</b-button>
                  <b-button variant="outline-success" :pressed="filter.home.high" @click="setFilter('high','home')">Maior Valor</b-button>
                  <!-- <b-button variant="outline-success">Mais relevante</b-button> -->
                </b-button-group>
              </b-col>
            </b-row>
            <b-row class="top">
              <b-col class="container-product" md="4" sm="12" v-for="(item, key) in homeItems" :key="key">
                 <pay-pal-button :certificate="item.certificate" :price="`R$ ${item.price}`" :name="item.name" :img="item.img" />
              </b-col>
            </b-row>
            </b-container>
        </b-modal>

        <b-modal id="modalHoneymoon" @hidden="onHidden" title="Ajudinha na Lua de Mel" cancel-title="Fechar"  centered  ref="modalHoneymoon" size="lg" >
          <b-container>

            <b-row >
              <b-col class="container-product" md="4" sm="12" v-for="(item, key) in honeymoonItems" :key="key">
                 <pay-pal-button :certificate="item.certificate" :price="`R$ ${item.price}`" :name="item.name" :img="item.img" />
              </b-col>
            </b-row>
            </b-container>
        </b-modal>

    </b-container>
  </div>
</template>

<script>
import _ from 'lodash';
import PayPalButton from './PayPalButton';
import { getKitchen, getHome, getHoneymoon } from '../../services/gifts';

export default {
  name: 'GifstList',
  components: {
    PayPalButton
  },
  data() {
    return {
      filter: {
        kitchen: {
          productName: '',
          low: false,
          high: false
        },
        home: {
          productName: '',
          low: false,
          high: false
        },
        honeymoon: {
          productName: '',
          low: false,
          high: false
        }
      },
      kitchenItems: [],
      homeItems: [],
      honeymoonItems: []
    };
  },
  created() {
    this.kitchenItems = getKitchen();
    this.homeItems = getHome();
    this.honeymoonItems = getHoneymoon();
  },

  methods: {
    setFilter(data, field) {
      if (data === 'low') {
        this.filter[field].low = true;
        this.filter[field].high = false;
      } else if (data === 'high') {
        this.filter[field].high = true;
        this.filter[field].low = false;
      }

      const objRef = {
        kitchen: this.kitchenItems,
        home: this.homeItems
      };

      this.applyFilters(field, objRef[field]);
    },

    applyFilters(field, list) {
      let newList = list;

      const self = this;
      if (field === 'kitchen') {
        newList = getKitchen();
      } else if (field === 'home') {
        newList = getHome();
      } else if (field === 'honeymoon') {
        newList = getHoneymoon();
      }

      newList = _.filter(newList, i => {
        return i.name.match(
          new RegExp(`.*${self.filter[field].productName}.*`, 'i')
        );
      });

      if (this.filter[field].low) {
        newList = _.orderBy(newList, ['price'], ['asc']);
      } else if (this.filter[field].high) {
        newList = _.orderBy(newList, ['price'], ['desc']);
      }

      if (field === 'kitchen') {
        this.kitchenItems = newList;
      } else if (field === 'home') {
        this.homeItems = newList;
      } else if (field === 'honeymoon') {
        this.homeItems = newList;
      }
    },

    showModal(modal) {
      this.$refs[modal].show();
    },
    onHidden() {
      this.filter.kitchen.productName = '';
      this.filter.kitchen.high = false;
      this.filter.kitchen.low = false;

      this.kitchenItems = getKitchen();

      this.filter.home.productName = '';
      this.filter.home.high = false;
      this.filter.home.low = false;
      this.homeItems = getHome();

      // this.filter.honeymoon.productName = '';
    }
  }
};
</script>

<style lang="scss" scoped>
@import '~assets/scss/index.scss';
.top {
  margin-top: 2rem;
}
.d-bottom {
  margin-top: 1rem;
}
.d-flex {
  display: flex;
  align-self: center;
}
.center-d {
  align-self: center;
}
.container-product {
  padding: 1rem;
}

.item {
  font-weight: bold;
}
.price {
  font-weight: bold;
  font-size: 1.5rem;
}
.card {
  cursor: pointer;
  height: 29rem;
  @include media-breakpoint-down(md) {
    height: 15rem !important;
  }
  box-shadow: 1px 4px 8px #ccc;
  p {
    font-weight: 700;
    font-size: 1rem;
  }
}
.block {
  // margin-top: 2rem;
}
.card-img {
  padding: 5rem;
  align-self: center;
  @include media-breakpoint-down(md) {
    padding: 1rem;
    width: 10rem;
    height: 10rem;
  }
}
.post-it {
  h4 {
    font-size: 1.2rem !important;
  }
  p {
    font-size: 0.8rem !important;
  }
  margin: 2rem 0 2rem 0;
  height: auto !important;
  border: 0;
  box-shadow: 2px 4px 14px #868686;
  background: pink !important;
}
</style>

