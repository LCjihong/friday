import Vue from 'vue'
import App from './App'
import router from './router'
<<<<<<< HEAD
import axios from 'axios'
=======
<<<<<<< Updated upstream
import axios from '../node_modules/axios'
>>>>>>> 4094455c3f236a40dd46abdd1fdd46eb83e980d3
import qs from 'qs';

axios.defaults.withCredentials = true;
axios.defaults.withCredentials = true;
Vue.prototype.$axios = axios;
Vue.prototype.$qs = qs;
=======
// import { Button, Main, Header } from 'element-ui'
import Element from "element-ui";
import axios from 'axios'
import qs from 'qs'

// Vue.prototype.$ELEMENT = {
//   size: 'small',
//   zIndex: 3000
// };
Vue.use(Element, {
  size: 'small',
  zIndex: 3000
})
console.log(qs.stringify({name:'renjihong', age:21}));

// Vue.use(Button)
// Vue.use(Main)
// Vue.use(Header)
>>>>>>> Stashed changes

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
