import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import './../public/css/style.css'
import './../public/js/jquery.js'
// import './../public/js/plugins.js'
// import './../public/js/plugins2.js'
// import './../public/js/custom.js'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
