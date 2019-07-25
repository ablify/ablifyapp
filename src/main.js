import Vue from 'vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import jQuery from 'jquery'
import Popper from 'popper.js/dist/popper'

import App from './App.vue'
import router from './router'
import store from './store'
global.jQuery = jQuery
global.Popper = Popper

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
