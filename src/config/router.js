import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/home/Home';
import Bestmen from '@/pages/bestmen/Bestmen';
import GiftsList from '@/pages/gifts-list/GiftsList';
import Confirmation from '@/pages/confirmation/Confirmation';
import Gallery from '@/pages/gallery/Gallery';
import HowToGet from '@/pages/how-to-get/HowToGet';
import WallMessage from '@/pages/wall-message/WallMessage';

import Error from '@/pages/error/Error';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      alias: '/inicio',
      name: 'Home',
      component: Home,
      meta: { title: 'Inicio' }
    },
    {
      path: '/mural',
      name: 'WallMessage',
      component: WallMessage,
      meta: { title: 'Mural' }
    },
    {
      path: '/padrinhos',
      name: 'Bestmen',
      component: Bestmen,
      meta: { title: 'Padrinhos' }
    },
    {
      path: '/lista-de-presentes',
      name: 'GiftsList',
      component: GiftsList,
      meta: { title: 'Lista de presentes' }
    },
    {
      path: '/confirmar-presenca',
      name: 'Confirmation',
      component: Confirmation,
      meta: { title: 'Confirmar Presença' }
    },
    {
      path: '/fotos',
      name: 'Gallery',
      component: Gallery,
      meta: { title: 'Fotos' }
    },
    {
      path: '/como-chegar',
      name: 'HowToGet',
      component: HowToGet,
      meta: { title: 'Como chegar' }
    },
    {
      path: '*',
      name: 'Error',
      component: Error
    }
  ]
  /* scrollBehavior(to) {
    if (to.hash) {
      return {
        selector: to.hash
      };
    }
    return { x: 0, y: 0 };
  } */
});
