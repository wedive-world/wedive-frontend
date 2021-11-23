// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueTypeaheadBootstrap from 'vue-typeahead-bootstrap';
import VueScrollPicker from "vue-scroll-picker"
import VCalendar from 'v-calendar';


Vue.config.productionTip = false
Vue.component('vue-typeahead-bootstrap', VueTypeaheadBootstrap)
Vue.use(VueScrollPicker)

require('dotenv').config();

Vue.use(VCalendar);

Vue.filter("makeComma", val =>{
  return String(val).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
})


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

const userAgent = navigator.userAgent.toLowerCase();

if (userAgent.indexOf('android') !== -1) {

//console.log(`android connected, ${JSON.stringify(JSON.parse(Android.getUserInformation()))}`)
localStorage.setItem("android", JSON.stringify(JSON.parse(Android.getUserInformation())));


} else if (userAgent.indexOf('iphone') !== -1 || userAgent.indexOf('ipad') !== -1) {
  //ios
} else { // 안드로이드, IOS 가 아닌 경우 (더 조건을 추가해서 처리해도 됨)
}
