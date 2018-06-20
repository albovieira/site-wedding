<template>
  <div>
    <b-container class="top">
      <b-row>
        <b-col>
        <gmap-map
          :center="location"
          :zoom="14"
          style="width: 500px; height: 300px"
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
        <b-col>
          <p><strong>Espaço Garças Pampulha</strong></p>
          <p><strong>Av. Otacílio Negrão de Lima, 4200 - Pampulha, Belo Horizonte - MG, 31365-450</strong></p>
          <div>
            <b-button @click="getLocation" :disabled="!currentPosition.length > 0">Usar minha localização</b-button>
            <b-button @click="getRoute">Traçar Rota</b-button>
          </div>
          <div>
            <div v-if="uberEstimations.length > 0" v-for="(item, index) in uberEstimations" :key="index">
              <h3>{{item.display_name}}</h3>
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
import getUberEstimation from '@/services/uber-estimation';
import { drawRoute } from '@/services/address';

export default {
  name: 'HowToGet',
  components: {},
  data() {
    return {
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
        const self = this;
        navigator.geolocation.getCurrentPosition(async position => {
          self.currentPosition = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };

          const start = self.currentPosition;
          const end = self.location;
          const estimation = await getUberEstimation(start, end);
          self.uberEstimations = estimation;
        });
      }
    },
    async getRoute() {
      console.log(this.currentPosition, this.location);
      const route = await drawRoute(this.currentPosition, this.location);
      this.path = route;
    }
    /* async getUberEstimation() {
      const query = buildQuery({
        start_latitude: this.currentPosition.lat,
        start_longitude: this.currentPosition.lng,
        end_latitude: this.location.lat,
        end_longitude: this.location.lng
      });
      const url = `https://api.uber.com/v1.2/estimates/price?${query}`;
      const http = axios.create({
        baseURL: url,
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Token EiSC1gcBMNpsmN4PC5GlEkQ6WjQuU0amxa7HLRC_'
        }
      });

      const res = await http.get();
      this.uberEstimations = res.data.prices;
      console.log(this.uberEstimations);
      // https://api.uber.com/v1.2/estimates/price?start_latitude=37.7752315&start_longitude=-122.418075&end_latitude=37.7752415&end_longitude=-122.518075
      // EiSC1gcBMNpsmN4PC5GlEkQ6WjQuU0amxa7HLRC_
    } */
  }
};
</script>

<style lang="scss" scoped>
@import '~assets/scss/index.scss';
.card {
  background-color: #cfd9e2;
  background-repeat: no-repeat;
  padding: 1rem;
}
.container {
  padding-bottom: 8rem;
}
</style>
