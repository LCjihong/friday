import Vue from 'vue'
import App from './App'
import router from './router'
import axios from '../node_modules/axios'
import qs from 'qs';
Vue.prototype.$axios = axios;
Vue.prototype.$qs = qs;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
