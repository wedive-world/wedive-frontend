// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueApollo from 'vue-apollo'
import ApolloClient, { InMemoryCache } from 'apollo-boost'

import VueEditableGrid from 'vue-editable-grid'
import 'vue-editable-grid/dist/VueEditableGrid.css'

import dotenv from "dotenv"
import path from "path"
import fs from "fs"

let result = dotenv.config(path.join('/root/.env'));

//const GRAPHQL_URL = process.env.VUE_APP_API_PATH || 'http://localhost:4000/graphql'
const GRAPHQL_URL = process.env.VUE_APP_API_PATH || 'https://api.wedives.com/graphql'
const apolloClient = new ApolloClient({
  uri: GRAPHQL_URL,
  cache: new InMemoryCache(),
  headers: {
    countryCode: "ko",
  }
})

Vue.use(VueApollo)

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})


Vue.config.productionTip = false
Vue.component('vue-editable-grid', VueEditableGrid)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  apolloProvider,
  components: { App },
  template: '<App/>'
})
