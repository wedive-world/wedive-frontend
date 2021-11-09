// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueTypeaheadBootstrap from 'vue-typeahead-bootstrap';
import VueScrollPicker from "vue-scroll-picker"

Vue.config.productionTip = false
Vue.component('vue-typeahead-bootstrap', VueTypeaheadBootstrap)
Vue.use(VueScrollPicker)

require('dotenv').config();


/*
console.log(`==============================Env Information==============================`)
Object.keys(process.env)
  .forEach(key => {
    console.log(`${key}=${process.env[key]}`)
  })
console.log(`==============================================================================`)
*/
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
