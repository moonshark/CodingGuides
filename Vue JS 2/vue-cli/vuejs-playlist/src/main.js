import Vue from 'vue'
import App from './App.vue'

new Vue({
  el: '#app',
  // Taking our root component 'App' that is importing and rendering it to #app
  render: h => h(App)
})
