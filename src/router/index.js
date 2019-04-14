import Vue from 'vue';
import Router from 'vue-router';

import AboutPage from '@/pages/About';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/about',
      name: 'About',
      component: AboutPage,
    },
  ],
});
