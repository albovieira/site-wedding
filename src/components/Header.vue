<template>
  <div class="container">
    <b-jumbotron class="cursiveFont text-center" header="Camila & Albo">
        <template slot="lead">
          <div>
            <icon name="heart"></icon>
          </div>
          <strong >07.Setembro.2018</strong>
        </template>
      </b-jumbotron>

      <slick style="text-shadow: 1px 1px 2px #333;z-index:-1;width:100%" ref="slick" :options="slickOptions">
        <div class="banner">
           <img src="/static/imgs/banner/banner_1.jpeg" />
        </div>
<!--          <div class="banner">
           <img src="/static/imgs/banner/banner_2.jpeg" />
        </div>
        <div class="banner">
          <img src="/static/imgs/banner/banner_3.jpeg" />
        </div>
        <div class="banner">
          <img src="/static/imgs/banner/banner_4.jpeg" />
        </div>
        <div class="banner">
          <img src="/static/imgs/banner/banner_5.jpeg" />
        </div>
        <div class="banner">
          <img src="/static/imgs/banner/banner_6.jpeg" />
        </div>
        <div class="banner">
          <img src="/static/imgs/banner/banner_7.jpeg" />
        </div>
        <div class="banner">
          <img src="/static/imgs/banner/banner_8.jpeg" />
        </div>
 -->    </slick>
     <div class="container-countdown">
       <div class="countdown pd-right">
          <strong>{{countdown.days}}</strong> <br>
          <strong class="time-description">Dias</strong>
        </div>
        <div class="countdown">
          <strong>{{countdown.hours}}</strong> <br>
          <strong class="time-description">Horas</strong>
        </div>
        <div class="countdown">
          <strong>:</strong> <br>
        </div>
        <div class="countdown">
          <strong>{{countdown.minutes}}</strong> <br>
          <strong class="time-description">Minutos</strong>
        </div>
        <div class="countdown">
          <strong>:</strong> <br>
        </div>

        <div class="countdown">
          <strong>{{countdown.seconds}}</strong> <br>
          <strong class="time-description">Segundos</strong>
        </div>
     </div>

    <b-navbar class="nav-menu" toggleable="md">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
            <b-nav-item active-class="active" to="/inicio">Nossa Historia</b-nav-item>
            <b-nav-item active-class="active"  to="/mural">Mural de Mensagens</b-nav-item>
            <b-nav-item active-class="active" to="/padrinhos">Padrinhos</b-nav-item>
            <b-nav-item active-class="active" to="/lista-de-presentes">Lista de Presentes</b-nav-item>
            <b-nav-item active-class="active" to="/confirmar-presenca">Confirme sua presença</b-nav-item>
            <b-nav-item active-class="active" to="/fotos">Fotos</b-nav-item>
            <b-nav-item active-class="active" to="/como-chegar">Como chegar?</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

  </div>
</template>

<script>
import moment from 'moment';
import Slick from 'vue-slick';

export default {
  name: 'Header',
  components: {
    Slick
  },
  data() {
    return {
      countdown: {},
      slide: null,
      slickOptions: {
        autoplay: true,
        dots: false,
        arrows: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        adaptiveHeight: false,
        cssEase: 'linear',
        fade: true,
        centerMode: true
      }
    };
  },
  created() {
    this.timer();
  },
  methods: {
    timer() {
      const eventTime = moment('2018-09-07 16:30');
      const currentTime = moment();
      // const diffDays = eventTime.diff(currentTime, 'days');
      const diffTime = eventTime.diff(currentTime, 'milliseconds');

      // const diffTime = eventTime - currentTime;
      let duration = moment.duration(diffTime, 'milliseconds');
      const interval = 1000;

      const self = this;
      setInterval(() => {
        duration = moment.duration(duration - interval, 'milliseconds');
        self.countdown = {
          days: `${Math.floor(duration.asDays())}`,
          hours:
            duration.hours() < 10 ? `0${duration.hours()}` : duration.hours(),
          minutes:
            duration.minutes() < 10
              ? `0${duration.minutes()}`
              : duration.minutes(),
          seconds:
            duration.seconds() < 10
              ? `0${duration.seconds()}`
              : duration.seconds()
        };
      }, interval);
    }
  }
};
</script>

<style lang="scss" scope  d>
@import '~assets/scss/index.scss';

.slick-slide {
  margin: 0 auto;
}
.banner {
  margin: 0 auto;
  width: 100%;
  @include media-breakpoint-down(xs) {
    img {
      width: 110%;
      height: 22rem;
    }
  }
  @media (min-width: 1300px) and (max-width: 1400px) {
    height: 40rem;
  }
}

.jumbotron {
  padding-top: 1rem;
  margin-bottom: 0;
  background-color: transparent;
  position: absolute;
  margin: 0 auto;
  margin: 0 auto;
  left: 0;
  right: 0;
  color: floralwhite;
  text-shadow: 2px 3px 3px black;

  h1 {
    font-size: 6rem;
    @include media-breakpoint-down(xs) {
      font-size: 2rem;
    }
  }
  strong {
    font-size: 3rem;
    @include media-breakpoint-down(xs) {
      font-size: 1rem;
    }
  }
}
.bg {
  background: url(/static/imgs/couple.jpg) no-repeat;
  /* background-position: center 10rem; */
  background-color: #cfd9e2;
  height: 40rem;
  /* background-size: 19rem; */
  background-size: cover;
}

.container-countdown {
  //background: #ffdbee;
  display: flex;
  justify-content: center;
  margin-top: -14rem;
  background: linear-gradient(#ffdbeecc, #ffdbee);
  color: white;
  text-align: center;
  padding: 0 8rem;
  text-shadow: 1px 1px 2px black;
  @include media-breakpoint-down(xs) {
    margin-top: 0;
    padding: 0.5rem 1rem;
    margin-top: -4rem;
  }
  @media (min-width: 1300px) and (max-width: 1400px) {
    margin-top: -13.2rem;
  }
}

.pd-right {
  padding-right: 4rem;
  @include media-breakpoint-down(xs) {
    padding: 0.1rem;
  }
}
.countdown {
  line-height: 1;
  padding: 1rem;
  @include media-breakpoint-down(xs) {
    padding: 0.2rem;
  }
  strong {
    font-size: 4rem;
    padding: 1rem;
    @include media-breakpoint-down(xs) {
      font-size: 1.4rem;
      padding: 0.4rem;
    }
  }
  .time-description {
    font-size: 1.5rem;
    @include media-breakpoint-down(xs) {
      font-size: 0.5rem;
    }
  }
}

.nav-menu {
  width: 100%;
  padding: 1rem;
}
li.nav-item {
  a.nav-link {
    &.active {
      font-weight: 900;
      text-shadow: 1px 1px 1px black;
    }
  }

  &.show {
    margin-bottom: 8rem;
  }
}
</style>

