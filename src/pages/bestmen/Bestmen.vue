<template>
  <div>
    <Header></Header>
    <b-container class="top">
      <b-row>
        <b-col>
          <b-card
                  img-src="/static/imgs/bestmen/alvaro.jpg"
                  img-alt="Álvaro Borges"
                  img-center>
              <p class="card-text text-center">
                  Álvaro Borges
              </p>
          </b-card>
        </b-col>
        <b-col>
          <b-card
                  img-src="/static/imgs/bestmen/victor.jpeg"
                  img-alt="Victor Elias"
                  img-center>
              <p class="card-text text-center">
                  Victor Elias
              </p>
          </b-card>
        </b-col>
        <b-col>
          <b-card
                  img-src="/static/imgs/bestmen/rafael.jpg"
                  img-alt="Rafael Armenio"
                  img-center>
              <p class="card-text text-center">
                  Victor Elias
              </p>
          </b-card>
        </b-col>
    </b-row>
    </b-container>
  </div>
</template>

<script>
import Header from '@/components/Header';

export default {
  name: 'Bestmen',
  components: {
    Header
  },
  data() {
    return {};
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
</style>

