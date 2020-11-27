import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import qs from 'qs';

axios.defaults.withCredentials = true;
axios.defaults.withCredentials = true;
Vue.prototype.$axios = axios;
Vue.prototype.$qs = qs;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
