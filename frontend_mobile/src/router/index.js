import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import CenterDetailPage from '@/components/CenterDetailPage'
import CenterListMapPage from '@/components/CenterListMapPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/center',
      name: 'CenterDetailPage',
      component: CenterDetailPage
    },
    {
      path: '/center_map',
      name: 'CenterListMapPage',
      component: CenterListMapPage
    }
  ],
  mode: 'history'
})
