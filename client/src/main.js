import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import vuetify from './vuetify';
import {setUp} from './axios_config';

Vue.config.productionTip = false

setUp();

new Vue({
  render: h => h(App),
  store,
  router,
  vuetify
}).$mount('#app')
