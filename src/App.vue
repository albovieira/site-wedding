<template>
  <div id="app">
     <Header />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header';

export default {
  name: 'app',
  data() {
    return {};
  },
  components: {
    Header
  },
  created() {}
};
</script>

<style lang='scss'>
@import './assets/scss/index.scss';
</style>
