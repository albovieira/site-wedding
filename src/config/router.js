import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/home/Home';
import Bestmen from '@/pages/bestmen/Bestmen';
import Error from '@/pages/error/Error';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: { title: 'Inicio' }
    },
    {
      path: '/padrinhos',
      name: 'Bestmen',
      component: Bestmen,
      meta: { title: 'Padrinhos' }
    },
    {
      path: '*',
      name: 'Error',
      component: Error
    }
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return {
        selector: to.hash
      };
    }
    return { x: 0, y: 0 };
  }
});
