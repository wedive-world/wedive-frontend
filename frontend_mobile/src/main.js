// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueTypeaheadBootstrap from 'vue-typeahead-bootstrap';
import VueScrollPicker from "vue-scroll-picker"
import VCalendar from 'v-calendar';
import { initializeApp } from 'firebase/app';


// for apollo graphql
//import ApolloClient, { InMemoryCache } from 'apollo-boost'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache, IntrospectionFragmentMatcher } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import { split } from 'apollo-link'
import { WebSocketLink } from 'apollo-link-ws'
import { getMainDefinition } from 'apollo-utilities'
import { onError } from 'apollo-link-error';
import promiseToObservable from './promiseToObservable';


import VueApollo from 'vue-apollo'


export default (refreshToken) =>
  onError(({
    forward,
    graphQLErrors,
    networkError = {},
    operation,
    // response,
  }) => {
    console.log(networkError);
    //UNAUTHENTICATED --> by jjangs
    if (networkError.message === 'UNAUTHORIZED') { // or whatever you want to check
      // note: await refreshToken, then call its link middleware again!
      return promiseToObservable(refreshToken()).flatMap(() => forward(operation));
    }
  });



var _apolloClient = null;
const GRAPHQL_URL = process.env.VUE_APP_API_PATH || 'https://chat.wedives.com/graphql'
const GRAPHQL_API_URL = process.env.VUE_APP_API_PATH || 'https://api.wedives.com/graphql'
if (window.location.pathname.indexOf('/chat/') == 0) {
  const httpLink = new HttpLink({
    // You should use an absolute URL here
    uri: GRAPHQL_URL,
    headers: {
      countryCode: "ko",
      idtoken: (localStorage.idToken) ? localStorage.idToken : "",
    },
  })
  
  // Create the subscription websocket link
  const wsLink = new WebSocketLink({
    uri: 'wss://chat.wedives.com/graphql',
    options: {
      reconnect: true,
      connectionParams: {
        "content-type": "application/json",
        countryCode: "ko",
        idtoken: (localStorage.idToken) ? localStorage.idToken : "",
      },
    }
  })
  
  const link1 = split(
    // split based on operation type
    ({ query }) => {
      const definition = getMainDefinition(query)
      return definition.kind === 'OperationDefinition' &&
        definition.operation === 'subscription'
    },
    wsLink,
    httpLink
  )
  
  // Create the apollo client
  _apolloClient = new ApolloClient({
    link: link1,
    cache: new InMemoryCache(),
    connectToDevTools: true,
  })
} else if (window.location.pathname.indexOf('/chat') == 0) {
  const httpLink = new HttpLink({
    // You should use an absolute URL here
    uri: GRAPHQL_URL,
    headers: {
      countryCode: "ko",
      idtoken: (localStorage.idToken) ? localStorage.idToken : "",
    },
  })
  
  // Create the apollo client
  _apolloClient = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  })
} else if (window.location.pathname == '/site_list' || window.location.pathname == '/' || window.location.pathname == '/other/notification' || window.location.pathname == '/other/subscribe' || window.location.pathname == '/forum_home' || window.location.pathname.indexOf('/recommend/') == 0 || window.location.pathname.indexOf('/center/') == 0 || window.location.pathname.indexOf('/site/') == 0 || window.location.pathname.indexOf('/community/') == 0 || window.location.pathname.indexOf('/agenda/') == 0 || window.location.pathname.indexOf('/diving/') == 0 || window.location.pathname.indexOf('/review/') == 0) {
  const httpLink = new HttpLink({
    // You should use an absolute URL here
    uri: GRAPHQL_API_URL,
    headers: {
      countryCode: "ko",
      idtoken: (localStorage.idToken) ? localStorage.idToken : "",
    },
  })
  
  // Create the apollo client
  _apolloClient = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
  })
}
const apolloClient = _apolloClient
Vue.use(VueApollo)

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})








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
  apolloProvider,
  components: { App },
  template: '<App/>'
})

const userAgent = navigator.userAgent.toLowerCase();
const userAuthKey = 'userAuth';
var axios = require("axios");

// searchSuggestion
var currentTime = (new Date()).getTime();
if (localStorage.suggestionDate == null) {
  localStorage.suggestionDate = currentTime - 86400010;
}
var headers = (localStorage.idToken) ? {countrycode: 'ko', idtoken: localStorage.idToken} : {countrycode: 'ko'};
if (currentTime - parseInt(localStorage.suggestionDate) > 86400000) {
  axios({
    url: 'https://api.wedives.com/graphql',
    method: 'post',
    headers: headers,
    data: {
        query: `
            query Query {
              getAllSearchSuggestions
            }
        `
    }
  }).then(function(result) {
    localStorage.suggestionDate = currentTime;
    if (result.data.data.getAllSearchSuggestions != null) {
      var tmp_list = result.data.data.getAllSearchSuggestions;
      var tmp_result = new Array();
      tmp_list.forEach(x => {
        if (x == null || x == '') {
          // skip
        } else if (x.length == 10 && /^[a-z0-9][a-z0-9]*$/.test(x)) {
          // skip
        } else if (x.replace(/\$/gi, '') == '') {
          // skip
        } else {
          tmp_result.push(x);
        }
      });
      localStorage.suggestion = JSON.stringify(tmp_result);
    }
  })
}

// Android
try {
  if (userAgent.indexOf('android') !== -1) {
    const userInformation = JSON.parse(Android.getUserInformation());
  
    console.log(`android connected, ${JSON.stringify(userInformation)}`);
    localStorage.setItem(userAuthKey, userInformation);
    if (userInformation.uid) localStorage.uid = userInformation.uid;
    if (userInformation.idToken) localStorage.idToken = userInformation.idToken;
    if (userInformation.email) localStorage.userEmail = userInformation.email;
    if (userInformation.languageCode) localStorage.languageCode = userInformation.languageCode;

    //var axios = require("axios");
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
    
    // console.log(`ios connected, ${JSON.stringify(JfSON.parse(iOS.getUserInformation()))}`)
    // localStorage.setItem(userAuthKey, JSON.parse(iOS.getUserInformation()));
  
  } else { // 안드로이드, IOS 가 아닌 경우 (더 조건을 추가해서 처리해도 됨)
    //console.log(`web client connected.`);
  
  }
} catch(e) {

}


// add 22-03-06 from custom.js
if(localStorage.getItem(pwaName+'-Theme') == "dark-mode"){document.body.className = 'theme-dark';}
if(localStorage.getItem(pwaName+'-Theme') == "light-mode"){document.body.className = 'theme-light';}