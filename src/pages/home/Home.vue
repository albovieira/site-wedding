<template>
  <div>
      <b-jumbotron style="margin-bottom:0" class="cursiveFont bg text-center" header="Camila & Albo">
        <template slot="lead">
          <div>
            <icon name="heart"></icon>
          </div>
          <strong >07.Setembro.2018</strong>
        </template>
      </b-jumbotron>
      <b-row class="container-countdown">
        <b-col class="countdown">
          <strong>{{countdown.days}}</strong> <br>
          <strong class="time-description">Dias</strong>
        </b-col>
        <b-col class="countdown">
          <strong>{{countdown.hours}}:</strong> <br>
          <strong class="time-description">Horas</strong>
        </b-col>
        <b-col class="countdown">
          <strong>{{countdown.minutes}}:</strong> <br>
          <strong class="time-description">Minutos</strong>
        </b-col>
        <b-col class="countdown">
          <strong>{{countdown.seconds}}</strong> <br>
          <strong class="time-description">Segundos</strong>
        </b-col>
      </b-row>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'home',
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
      const currentTime = new Date();
      const diffDays = eventTime.diff(currentTime, 'days');
      const diffTime = eventTime.diff(currentTime, 'milliseconds');

      // const diffTime = eventTime - currentTime;
      let duration = moment.duration(diffTime, 'milliseconds');
      const interval = 1000;

      const self = this;
      setInterval(() => {
        duration = moment.duration(duration - interval, 'milliseconds');
        self.countdown = {
          days: `${diffDays}`,
          hours: duration.hours(),
          minutes: duration.minutes(),
          seconds: duration.seconds()
        };
      }, interval);
    }
  }
};
</script>

<style lang="scss" scoped>
@import '~assets/scss/index.scss';

.bg {
  background: url('/static/imgs/banner.png') no-repeat;
  background-position: center 12rem;
  background-color: #cfd9e2;
  height: 26rem;
  background-size: 35rem;
}

.container-countdown {
  background: #71b8f7;
  color: white;
  text-align: center;
}
.countdown {
  line-height: 1.3;
  padding: 1rem;
  strong {
    font-size: 4rem;
  }
  .time-description {
    font-size: 2rem;
  }
}
</style>

