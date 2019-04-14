import Vue from 'vue';
import App from './App';
import router from './router';

Vue.config.productionTip = false;
Vue.config.devtools = process.env.NODE_ENV === 'development';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
