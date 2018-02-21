import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import 'vue-awesome/icons';
import Icon from 'vue-awesome/components/Icon';
import Vuelidate from 'vuelidate';
import * as VueGoogleMaps from 'vue2-google-maps';

export default {
  inject: () => {
    Vue.use(BootstrapVue);
    Vue.use(Vuelidate);
    Vue.use(VueGoogleMaps, {
      load: {
        key: 'AIzaSyBtIjwbejWnYhwAuXIZF_JZVZecirnDGdQ',
        libraries: 'places' // This is required if you use the Autocomplete plugin
        // OR: libraries: 'places,drawing'
        // OR: libraries: 'places,drawing,visualization'
        // (as you require)
      }
    });
    Vue.component('icon', Icon);
    Vue.config.productionTip = false;
  }
};
