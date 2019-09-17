import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from './tools/index.js'

Vue.prototype.$toast = toast
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
