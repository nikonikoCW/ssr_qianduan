// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueClipboard from 'vue-clipboard2'
import store from './store/index'
import axios from 'axios'
import qs from 'qs'
Vue.use(VueClipboard)
Vue.use(BootstrapVue)
Vue.prototype.$ajax = axios
Vue.prototype.$qs = qs
//统一管理请求地址和端口后面的axios请求只需要直接跟后缀就行比如 axios.get('api/ssr')
axios.defaults.baseURL = 'http://47.98.43.2:8080'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store: store,
  components: { App },
  template: '<App/>'
})
