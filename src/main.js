import Vue from 'vue'
import App from './App.vue'

import './assets/css/styles.css'
import './assets/css/custom.css'
import './assets/js/scripts'

import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
Vue.use(VueSweetalert2)
Vue.use(require('vue-moment'))

import VueCountdown from '@chenfengyuan/vue-countdown'
Vue.component('VueCountdown', VueCountdown)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
