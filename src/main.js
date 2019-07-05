// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios';

import {
  MdIcon
} from 'vue-material/dist/components'
import VueMaterial from 'vue-material'
import infiniteScroll from 'vue-infinite-scroll'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css' // This line here


axios.defaults.baseURL='http://www.virgilsun.com/TinyDashboard'
Vue.prototype.axios=axios
Vue.config.productionTip = false
Vue.use(VueMaterial)
Vue.use(MdIcon)
Vue.use(infiniteScroll)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
