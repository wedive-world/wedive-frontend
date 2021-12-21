// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueTypeaheadBootstrap from 'vue-typeahead-bootstrap';
import VueScrollPicker from "vue-scroll-picker"
import VCalendar from 'v-calendar';
import { initializeApp } from 'firebase/app';

Vue.config.productionTip = false
Vue.component('vue-typeahead-bootstrap', VueTypeaheadBootstrap)
Vue.use(VueScrollPicker)

require('dotenv').config();

Vue.use(VCalendar);

Vue.filter("makeComma", val => {
  return String(val).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
})
Vue.filter("makeReference", val => {
  return String(val).replace("https://", "").replace("http://", "").replace("www.", "");
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


import 'firebase/auth';
// TODO: Replace the following with your app's Firebase project configuration
import firebaseConfig from '../firebaseConfig.js';
const firebaseApp = initializeApp(firebaseConfig);


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

const userAgent = navigator.userAgent.toLowerCase();
const userAuthKey = 'userAuth';

try {
  if (userAgent.indexOf('android') !== -1) {
    const userInformation = JSON.parse(Android.getUserInformation());
  
    console.log(`android connected, ${JSON.stringify(userInformation)}`);
    localStorage.setItem(userAuthKey, userInformation);
    if (userInformation.uid) localStorage.uid = userInformation.uid;
    if (userInformation.idToken) localStorage.uid = userInformation.idToken;
    if (userInformation.email) localStorage.userEmail = userInformation.email;
    if (userInformation.languageCode) localStorage.languageCode = userInformation.languageCode;

    var axios = require("axios");
    axios({
      url: 'https://api.wedives.com/graphql',
      method: 'post',
      headers: {
        countrycode: 'ko',
        idtoken: (localStorage.idToken) ? localStorage.idToken : "",
      },
      data: {
          query: `
              query Query($uid: ID!) {
                getUserByUid(uid: $uid) {
                  _id
                  nickName
                  birthAge
                  gender
                }
              }
          `,
          variables: {
              "uid": localStorage.uid
          }
      }
    }).then(function(result) {
      if (result.data.data.getUserByUid != null) {
        localStorage.nickName = result.data.data.getUserByUid.nickName;
        localStorage.userId = result.data.data.getUserByUid._id;
      }
    })
    
  
  } else if (userAgent.indexOf('iphone') !== -1 || userAgent.indexOf('ipad') !== -1) {
    
    // console.log(`ios connected, ${JSON.stringify(JSON.parse(iOS.getUserInformation()))}`)
    // localStorage.setItem(userAuthKey, JSON.parse(iOS.getUserInformation()));
  
  } else { // 안드로이드, IOS 가 아닌 경우 (더 조건을 추가해서 처리해도 됨)
    console.log(`web client connected.`);
  
  }
} catch(e) {

}

