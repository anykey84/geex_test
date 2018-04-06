import Vue from 'vue'
import App from './App.vue'
import vuescroll from 'vue-scroll'

Vue.use(vuescroll)

new Vue({
  el: '#app',
  render: h => h(App)
})
