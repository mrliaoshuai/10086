import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 土司
import toast from "components/common/toast"
import './mock/index'

import './assets/iconfont/iconfont.css'
import Fastclick from "fastclick"
import VueLazyload from 'vue-lazyload'


Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()
Vue.config.devtools = true
Vue.prototype.$http = axios

Vue.use(ElementUI);
Vue.use(toast)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// Fastclick.attach(document.body)
// Vue.use(VueLazyload, { loading: require("") })