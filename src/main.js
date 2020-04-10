import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import './theme/noto.scss'
import VueIpfs from './plugins/vue-ipfs';
import Axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$axios = Axios
Vue.use(VueIpfs);
new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
