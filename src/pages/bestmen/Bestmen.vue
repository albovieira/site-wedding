<template>
  <div>
    <Header></Header>
    <b-container class="top">
      <b-row>
        <b-col>
          <h2>Padrinhos</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non sagittis ipsum. Nunc imperdiet est vitae lectus commodo, eu finibus eros tempor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris accumsan nulla vel tellus posuere, eget aliquet lectus malesuada. Sed tincidunt dolor id dignissim consequat. Aenean et ligula quam. Donec arcu lacus, sodales a bibendum sit amet, commodo sed tellus. Praesent in interdum est. Cras sit amet auctor turpis, at sagittis justo. Phasellus ut commodo quam. Donec in dui vulputate, posuere odio at, faucibus metus. Suspendisse nec justo eleifend, porttitor orci eget, viverra lacus.</p>
        </b-col>
      </b-row>
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

