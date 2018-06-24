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

    <b-carousel id="carousel1"
                style="text-shadow: 1px 1px 2px #333;z-index:-1"
                controls

                background="#ababab"
                :interval="6000"
                img-width="1024"
    >

      <!-- Text slides with image -->
      <b-carousel-slide img-src="/static/imgs/banner/banner_1.jpeg" img-height="100">

      </b-carousel-slide>


      <b-carousel-slide img-src="/static/imgs/banner/banner_2.jpeg">
      </b-carousel-slide>

       <b-carousel-slide img-src="/static/imgs/banner/banner_3.jpeg">
      </b-carousel-slide>
      <b-carousel-slide img-src="/static/imgs/banner/banner_4.jpeg">
      </b-carousel-slide>


      <b-carousel-slide img-src="/static/imgs/banner/banner_5.jpeg">
      </b-carousel-slide>

      <b-carousel-slide img-src="/static/imgs/banner/banner_6.jpeg">
      </b-carousel-slide>

      <b-carousel-slide img-src="/static/imgs/banner/banner_7.jpeg">
      </b-carousel-slide>

      <b-carousel-slide img-src="/static/imgs/banner/banner_8.jpeg">
      </b-carousel-slide>


    </b-carousel>
      <!-- <b-jumbotron class="cursiveFont bg text-center" header="Camila & Albo">
        <template slot="lead">
          <div>
            <icon name="heart"></icon>
          </div>
          <strong >07.Setembro.2018</strong>
        </template>
      </b-jumbotron> -->
      <b-row class="container-countdown" style="margin-left: 0;margin-right: 0;">
        <div class="countdown" style="padding-right:4rem">
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
      </b-row>
        <b-nav class="nav-menu"  center>
          <b-nav-item active-class="active" to="/inicio"><!-- <icon name="home" color="#fff"></icon> --> Nossa Historia</b-nav-item>
          <b-nav-item active-class="active"  to="/mural"><!-- <icon name="comment" color="#fff"></icon> --> Mural de Mensagens</b-nav-item>
          <b-nav-item active-class="active" to="/padrinhos"><!-- <icon name="users" color="#fff" /> --> Padrinhos</b-nav-item>
          <b-nav-item active-class="active" to="/lista-de-presentes"><!-- <icon name="gift" color="#fff" /> --> Lista de Presentes</b-nav-item>
          <b-nav-item active-class="active" to="/confirmar-presenca"><!-- <icon name="calendar" color="#fff" /> --> Confirme sua presença</b-nav-item>
          <b-nav-item active-class="active" to="/fotos"><!-- <icon name="camera-retro" color="#fff" /> --> Fotos</b-nav-item>
          <b-nav-item active-class="active" to="/como-chegar"><!-- <icon name="map" color="#fff" /> --> Como chegar?</b-nav-item>
        </b-nav>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'Header',
  data() {
    return {
      countdown: {}
    };
  },
  created() {
    this.timer();
  },
  methods: {
    timer() {
      const eventTime = moment('2018-09-07 16:30');
      const currentTime = moment();
      const diffDays = eventTime.diff(currentTime, 'days');
      const diffTime = eventTime.diff(currentTime, 'milliseconds');

      // const diffTime = eventTime - currentTime;
      let duration = moment.duration(diffTime, 'milliseconds');
      console.log(duration);
      const interval = 1000;

      const self = this;
      setInterval(() => {
        duration = moment.duration(duration - interval, 'milliseconds');
        self.countdown = {
          days: `${diffDays}`,
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

<style lang="scss" scoped>
@import '~assets/scss/index.scss';

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
    font-size: 5rem;
  }
  strong {
    font-size: 3rem;
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
  margin-top: -14rem;
  background: linear-gradient(#ffdbeecc, #ffdbee);
  color: white;
  text-align: center;
  padding: 0 8rem;
  text-shadow: 1px 1px 2px black;
  justify-content: center;
}
.countdown {
  line-height: 1;
  padding: 1rem;
  strong {
    font-size: 4rem;
    padding: 1rem;
  }
  .time-description {
    font-size: 1.5rem;
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

