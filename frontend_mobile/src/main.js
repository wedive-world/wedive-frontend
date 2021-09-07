// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import * as VueGoogleMaps from 'vue2-google-maps'
Vue.use(VueGoogleMaps, {
  load: {
    //dev: AIzaSyCWu8Fw-h-f1t8Sp3I7R3l_Ukr24HunXQM
    //prd: AIzaSyDyUUz9L7rzczg_SpeWjO_jKuZCWXyAUsM
    key: 'AIzaSyCWu8Fw-h-f1t8Sp3I7R3l_Ukr24HunXQM',
    libraries: 'places', // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)
 
    //// If you want to set the version, you can do so:
    // v: '3.26',
  },

})


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
