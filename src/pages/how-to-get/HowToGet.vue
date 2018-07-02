<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <b-container class="top">
      <h1 class="main-title">Como chegar?</h1>
      <b-row>
        <b-col md="6" sm="12">
        <gmap-map
          :center="location"
          :zoom="14"
          class="map-in"
        >
          <gmap-marker
            :position="location"
            :center="location"
          ></gmap-marker>

          <gmap-polyline v-if="this.path.length > 0"
              :path="path"
              :editable="false"
              ref="polygon">
          </gmap-polyline>

          <gmap-marker
            :position="currentPosition"
            :center="location"
          ></gmap-marker>

        </gmap-map>
        </b-col>
        <b-col md="6" sm="12" class="box-addres">
          <p><strong>Espaço Garças Pampulha</strong></p>
          <p><strong>Av. Otacílio Negrão de Lima, 4200 - Pampulha, Belo Horizonte - MG, 31365-450</strong></p>
          <div>
            <b-button variant="success" @click="getRoute">Traçar Rota</b-button>
          </div>
          <div class="box-space">
            <div class="box-space" v-if="uberEstimations.length > 0" v-for="(item, index) in uberEstimations" :key="index">
              <h4>{{item.display_name}}</h4>
              <strong>Distancia</strong>: {{`${item.distance} Km`}}
              <strong>Estimativa</strong>: {{item.estimate}}
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Loading from 'vue-loading-overlay';
import getUberEstimation from '@/services/uber-estimation';
import { drawRoute } from '@/services/address';

export default {
  name: 'HowToGet',
  components: {
    Loading
  },
  data() {
    return {
      isLoading: false,
      path: {},
      location: {},
      currentPosition: {},
      uberEstimations: {}
    };
  },
  created() {
    this.location = {
      lat: -19.8547145,
      lng: -43.9803289
    };
    this.getLocation();
  },
  methods: {
    async getLocation() {
      if (navigator.geolocation) {
        try {
          this.isLoading = true;
          const self = this;
          navigator.geolocation.getCurrentPosition(
            async position => {
              self.currentPosition = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
              };

              const start = self.currentPosition;
              const end = self.location;
              const estimation = await getUberEstimation(start, end);
              self.uberEstimations = estimation;
              this.isLoading = false;
            },
            err => {
              if (err) {
                self.isLoading = false;
              }
            }
          );
        } catch (error) {
          console.log(error);
          this.isLoading = false;
        }
      }
    },
    async getRoute() {
      console.log(this.currentPosition, this.location);
      const route = await drawRoute(this.currentPosition, this.location);
      this.path = route;
    }
  }
};
</script>

<style lang="scss" scoped>
@import '~assets/scss/index.scss';
.disabled {
  cursor: not-allowed;
}
.box-space {
  margin-top: 2rem;
}
.box-addres {
  @include media-breakpoint-down(md) {
    margin-top: 1rem;
  }
}
.map-in {
  width: 100%;
  height: 500px;
  @include media-breakpoint-down(md) {
    height: 300px;
  }
}
.card {
  background-color: #cfd9e2;
  background-repeat: no-repeat;
  padding: 1rem;
}
.container {
  padding-bottom: 8rem;
}
</style>
