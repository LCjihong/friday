import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import qs from 'qs';
import Element from "element-ui";

axios.defaults.withCredentials = true;
Vue.prototype.$axios = axios;
Vue.prototype.$qs = qs;

// Vue.prototype.$router = router;


Vue.use(Element, {
  size: 'small',
  zIndex: 3000
})
console.log(qs.stringify({name:'renjihong', age:21}));

Vue.config.productionTip = false

axios.defaults.baseURL = 'http://renjihong.zone:8080'
Vue.prototype.$axios = axios
Vue.prototype.$qs = qs

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
