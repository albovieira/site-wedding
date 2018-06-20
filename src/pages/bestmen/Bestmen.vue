<template>
  <div>
    <b-container class="top">

    <div>
      <b-row class="block">
        <b-col cols="12">
          <h2>Madrinhas</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non sagittis ipsum. Nunc imperdiet est vitae lectus commodo, eu finibus eros tempor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris accumsan nulla vel tellus posuere, eget aliquet lectus malesuada. Sed tincidunt dolor id dignissim consequat. Aenean et ligula quam. Donec arcu lacus, sodales a bibendum sit amet, commodo sed tellus. Praesent in interdum est. Cras sit amet auctor turpis, at sagittis justo. Phasellus ut commodo quam. Donec in dui vulputate, posuere odio at, faucibus metus. Suspendisse nec justo eleifend, porttitor orci eget, viverra lacus.</p>
        </b-col>
      </b-row>

      <slick ref="slick" :options="slickOptions">
        <b-card
                img-src="/static/imgs/bestmen/alvaro.jpg"
                img-alt="Álvaro Borges"
                img-center>
            <p class="card-text text-center">
                Álvaro Borges
            </p>
        </b-card>
        <b-card
                img-src="/static/imgs/bestmen/victor.jpeg"
                img-alt="Victor Elias"
                img-center>
            <p class="card-text text-center">
                Victor Elias
            </p>
        </b-card>
        <b-card
                img-src="/static/imgs/bestmen/rafael.jpg"
                img-alt="Rafael Armenio"
                img-center>
            <p class="card-text text-center">
                Victor Elias
            </p>
        </b-card>
        <b-card
                img-src="/static/imgs/bestmen/rafael.jpg"
                img-alt="Rafael Armenio"
                img-center>
            <p class="card-text text-center">
                Victor Elias
            </p>
        </b-card>
      </slick>
    </div>

    <div>
      <b-row class="block">
        <b-col cols="12">
          <h2>Padrinhos</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non sagittis ipsum. Nunc imperdiet est vitae lectus commodo, eu finibus eros tempor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris accumsan nulla vel tellus posuere, eget aliquet lectus malesuada. Sed tincidunt dolor id dignissim consequat. Aenean et ligula quam. Donec arcu lacus, sodales a bibendum sit amet, commodo sed tellus. Praesent in interdum est. Cras sit amet auctor turpis, at sagittis justo. Phasellus ut commodo quam. Donec in dui vulputate, posuere odio at, faucibus metus. Suspendisse nec justo eleifend, porttitor orci eget, viverra lacus.</p>
        </b-col>
      </b-row>

      <slick ref="slick" :options="slickOptions">
        <b-card
                img-src="/static/imgs/bestmen/alvaro.jpg"
                img-alt="Álvaro Borges"
                img-center>
            <p class="card-text text-center">
                Álvaro Borges
            </p>
        </b-card>
        <b-card
                img-src="/static/imgs/bestmen/victor.jpeg"
                img-alt="Victor Elias"
                img-center>
            <p class="card-text text-center">
                Victor Elias
            </p>
        </b-card>
        <b-card
                img-src="/static/imgs/bestmen/rafael.jpg"
                img-alt="Rafael Armenio"
                img-center>
            <p class="card-text text-center">
                Victor Elias
            </p>
        </b-card>
        <b-card
                img-src="/static/imgs/bestmen/rafael.jpg"
                img-alt="Rafael Armenio"
                img-center>
            <p class="card-text text-center">
                Victor Elias
            </p>
        </b-card>
      </slick>
    </div>


    <div>
      <b-row class="block">
        <b-col cols="12">
          <h2>Daminhas</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non sagittis ipsum. Nunc imperdiet est vitae lectus commodo, eu finibus eros tempor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris accumsan nulla vel tellus posuere, eget aliquet lectus malesuada. Sed tincidunt dolor id dignissim consequat. Aenean et ligula quam. Donec arcu lacus, sodales a bibendum sit amet, commodo sed tellus. Praesent in interdum est. Cras sit amet auctor turpis, at sagittis justo. Phasellus ut commodo quam. Donec in dui vulputate, posuere odio at, faucibus metus. Suspendisse nec justo eleifend, porttitor orci eget, viverra lacus.</p>
        </b-col>
      </b-row>

      <slick ref="slick" :options="slickOptions">
        <b-card
                img-src="/static/imgs/bestmen/alvaro.jpg"
                img-alt="Álvaro Borges"
                img-center>
            <p class="card-text text-center">
                Álvaro Borges
            </p>
        </b-card>
        <b-card
                img-src="/static/imgs/bestmen/victor.jpeg"
                img-alt="Victor Elias"
                img-center>
            <p class="card-text text-center">
                Victor Elias
            </p>
        </b-card>
        <b-card
                img-src="/static/imgs/bestmen/rafael.jpg"
                img-alt="Rafael Armenio"
                img-center>
            <p class="card-text text-center">
                Victor Elias
            </p>
        </b-card>
        <b-card
                img-src="/static/imgs/bestmen/rafael.jpg"
                img-alt="Rafael Armenio"
                img-center>
            <p class="card-text text-center">
                Victor Elias
            </p>
        </b-card>
      </slick>
    </div>

    </b-container>
  </div>
</template>

<script>
import Slick from 'vue-slick';

export default {
  name: 'Bestmen',
  components: {
    Slick
  },
  data() {
    return {
      slickOptions: {
        centerMode: true,
        autoplay: false,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerPadding: '40px',
              centerMode: true,
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
      }
    };
  }
};
</script>

<style lang="scss" scoped>
@import '~assets/scss/index.scss';
.card {
  background-repeat: no-repeat;
  padding: 1rem;
  background-color: #000;
  background-repeat: no-repeat;
  padding: 1rem;
  color: #fff;
  font-weight: bold;
  font-size: 1.2rem;
}
.block {
  margin-top: 4rem;
}
.container {
  padding-bottom: 8rem;
}
</style>

