// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueApollo from 'vue-apollo'
import ApolloClient from 'apollo-boost'

console.log(`:::::::::::::::prod.env:::::::::::::`)
console.log(JSON.stringify(process.env))
console.log(`:::::::::::::::prod.env:::::::::::::`)

const GRAPHQL_URL = process.env.VUE_APP_API_PATH || 'http://localhost:4000/graphql'

const apolloClient = new ApolloClient({
  uri: GRAPHQL_URL,
})

Vue.use(VueApollo)

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  apolloProvider,
  components: { App },
  template: '<App/>'
})
