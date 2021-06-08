import Vue from 'vue'
import App from './App.vue'
import css from  './assets/main.css'
Vue.config.productionTip = false

new Vue({
  css,
  render: h => h(App),
}).$mount('#app')
