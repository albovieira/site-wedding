<template>
  <div>
    <b-container class="top">
      <h1 class="main-title">Padrinhos</h1>
      <div>
        <b-row class="">
          <b-col cols="12">
            <h2 class="title pink">Madrinhas</h2>
          </b-col>
        </b-row>

        <slick ref="slick" :options="slickOptions">
          <b-card

                  img-src="/static/imgs/bestmen/dri.jpg"
                  img-alt="Álvaro Borges"
                  img-center>
              <p class="card-text text-center">
                  Adriane
              </p>
          </b-card>
          <b-card

                  img-src="/static/imgs/bestmen/amanda.jpg"
                  img-alt="Amanda"
                  img-center>
              <p class="card-text text-center">
                  Amanda
              </p>
          </b-card>
          <b-card

                  img-src="/static/imgs/bestmen/ana.jpg"
                  img-alt="Ana"
                  img-center>
              <p class="card-text text-center">
                  Ana
              </p>
          </b-card>
          <b-card

                  img-src="/static/imgs/bestmen/dina.jpg"
                  img-alt="Dina"
                  img-center>
              <p class="card-text text-center">
                  Diná
              </p>
          </b-card>
          <b-card

                  img-src="/static/imgs/bestmen/natalia.jpg"
                  img-alt="Natalia"
                  img-center>
              <p class="card-text text-center">
                  Natalia
              </p>
          </b-card>
          <b-card

                  img-src="/static/imgs/bestmen/yasmine.jpg"
                  img-alt="Yasminne"
                  img-center>
              <p class="card-text text-center">
                  Yasminne
              </p>
          </b-card>
        </slick>
      </div>

      <div>
        <b-row class="block">
          <b-col cols="12">
            <h2 class="title blue">Padrinhos</h2>
          </b-col>
        </b-row>

        <slick ref="slick" :options="slickOptions">
          <b-card

                  img-src="/static/imgs/bestmen/alvaro.jpg"
                  img-alt="Álvaro Borges"
                  img-center>
              <p class="card-text text-center">
                  Alvaro
              </p>
          </b-card>
          <b-card
                  img-src="/static/imgs/bestmen/victor.jpg"
                  img-alt="Victor Elias"
                  img-center>
              <p class="card-text text-center">
                  Victor
              </p>
          </b-card>
          <b-card

                  img-src="/static/imgs/bestmen/rafael.jpg"
                  img-alt="Rafael Armenio"
                  img-center>
              <p class="card-text text-center">
                  Rafael
              </p>
          </b-card>
          <b-card

                  img-src="/static/imgs/bestmen/pedro.jpg"
                  img-alt="Pedro"
                  img-center>
              <p class="card-text text-center">
                  Pedro Henrique
              </p>
          </b-card>

          <b-card

                  img-src="/static/imgs/bestmen/douglas.jpg"
                  img-alt="Douglas"
                  img-center>
              <p class="card-text text-center">
                  Douglas
              </p>
          </b-card>
          <b-card

                  img-src="/static/imgs/bestmen/daniel.jpg"
                  img-alt="Daniel"
                  img-center>
              <p class="card-text text-center">
                  Daniel
              </p>
          </b-card>
        </slick>
      </div>

      <div>
        <b-row class="block">
          <b-col cols="12">
            <h2 class="title yellow">Daminhas</h2>
          </b-col>
        </b-row>

        <slick ref="slick" :options="slickOptions">
            <b-card

                  img-src="/static/imgs/bestmen/analuisa.jpg"
                  img-alt="Lulu"
                  img-center>
              <p class="card-text text-center">
                  Ana Luísa
              </p>
            </b-card>
            <b-card

                    img-src="/static/imgs/bestmen/thais.jpg"
                    img-alt="Thais"
                    img-center>
                <p class="card-text text-center">
                    Thais
                </p>
            </b-card>
            <b-card

                    img-src="/static/imgs/bestmen/rafaela.jpg"
                    img-alt="Rafaela"
                    img-center>
                <p class="card-text text-center">
                    Rafaela
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
  background-color: #cccccc26;
  background-repeat: no-repeat;
  padding: 1rem;
  color: #000;
  font-weight: bold;
  font-size: 1.2rem;
  @include media-breakpoint-down(md) {
    font-size: 1rem !important;
    width: 15rem;
  }
}
.card-img {
  width: 100%;
  border-radius: calc(0.25rem - 1px);
  @include media-breakpoint-down(md) {
    // height: 10rem !important;
  }
}

.block {
  margin-top: 2rem;
}
.title {
  padding: 1rem;
  @include media-breakpoint-down(md) {
    font-size: 1.2rem !important;
  }
}

.pink {
  background-color: #ffc0cb3d;
}
.yellow {
  background-color: #dab9dc47;
}
.blue {
  background-color: #d4ebff5c;
}
</style>

