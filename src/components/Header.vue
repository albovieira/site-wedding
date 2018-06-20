<template>
  <div>
      <b-jumbotron class="cursiveFont bg text-center" header="Camila & Albo">
        <template slot="lead">
          <div>
            <icon name="heart"></icon>
          </div>
          <strong >07.Setembro.2018</strong>
        </template>
      </b-jumbotron>
      <b-row class="container-countdown">
        <div class="countdown">
          <strong>{{countdown.days}}</strong> <br>
          <strong class="time-description">Dias</strong>
        </div>
        <div class="countdown">
          <strong>{{countdown.hours}}:</strong> <br>
          <strong class="time-description">Horas</strong>
        </div>
        <div class="countdown">
          <strong>{{countdown.minutes}}:</strong> <br>
          <strong class="time-description">Minutos</strong>
        </div>
        <div class="countdown">
          <strong>{{countdown.seconds}}</strong> <br>
          <strong class="time-description">Segundos</strong>
        </div>
      </b-row>
      <b-row>
        <b-nav class="nav-menu"  center>
          <b-nav-item active-class="active" to="/inicio"><!-- <icon name="home" color="#fff"></icon> --> Nossa Historia</b-nav-item>
          <b-nav-item active-class="active"  to="/mural"><!-- <icon name="comment" color="#fff"></icon> --> Mural de Mensagens</b-nav-item>
          <b-nav-item active-class="active" to="/padrinhos"><!-- <icon name="users" color="#fff" /> --> Padrinhos</b-nav-item>
          <b-nav-item active-class="active" to="/lista-de-presentes"><!-- <icon name="gift" color="#fff" /> --> Lista de Presentes</b-nav-item>
          <b-nav-item active-class="active" to="/confirmar-presenca"><!-- <icon name="calendar" color="#fff" /> --> Confirme sua presença</b-nav-item>
          <b-nav-item active-class="active" to="/fotos"><!-- <icon name="camera-retro" color="#fff" /> --> Fotos</b-nav-item>
          <b-nav-item active-class="active" to="/como-chegar"><!-- <icon name="map" color="#fff" /> --> Como chegar?</b-nav-item>
        </b-nav>
      </b-row>
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
  margin-top: -7rem;
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

