import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import 'vue-awesome/icons';
import Icon from 'vue-awesome/components/Icon';
import Vuelidate from 'vuelidate';

export default {
  inject: () => {
    Vue.use(BootstrapVue);
    Vue.use(Vuelidate);
    Vue.component('icon', Icon);
    Vue.config.productionTip = false;
  }
};
