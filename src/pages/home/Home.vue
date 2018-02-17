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
  background: url('/static/imgs/banner.png') no-repeat;
  background-position: center 10rem;
  background-color: #cfd9e2;
  height: 28rem;
  background-size: 19rem;
}

.container-countdown {
  background: #a2bfd8;
  color: white;
  text-align: center;
  padding: 0 8rem;
  text-shadow: 1px 1px 2px black;
}
.countdown {
  line-height: 1.3;
  padding: 1rem;
  strong {
    font-size: 2rem;
  }
  .time-description {
    font-size: 1rem;
  }
}
</style>

