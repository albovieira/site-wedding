import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import 'vue-awesome/icons';
import Icon from 'vue-awesome/components/Icon';
import Vuelidate from 'vuelidate';
import VueSilentbox from 'vue-silentbox';
import ReadMore from 'vue-read-more';
import VueMask from 'v-mask';
import * as VueGoogleMaps from 'vue2-google-maps';

export default {
  inject: () => {
    Vue.use(BootstrapVue);
    Vue.use(Vuelidate);
    Vue.use(VueGoogleMaps, {
      load: {
        key: 'AIzaSyBtvGy-VKFY8WR4D6O5OmWY02InfLtFOuI',
        libraries: 'places' // This is required if you use the Autocomplete plugin
        // OR: libraries: 'places,drawing'
        // OR: libraries: 'places,drawing,visualization'
        // (as you require)
      }
    });
    Vue.use(VueSilentbox);
    Vue.component('icon', Icon);
    Vue.config.productionTip = false;
    Vue.use(ReadMore);
    Vue.use(VueMask);
  }
};
