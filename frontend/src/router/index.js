import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import DashboardPage from '@/components/DashboardPage'
import DashSiteManagePage from '@/components/DashSiteManagePage'
import DashSiteAddPage from '@/components/DashSiteAddPage'

import DashPointAddPage from '@/components/DashPointAddPage'
import DashInterestPage from '@/components/DashInterestPage'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/dashboard',
      name: 'DashboardPage',
      component: DashboardPage,
      children: [
        {
          path: "site_manage",
          component: DashSiteManagePage
        },
        {
          path: "site_add",
          component: DashSiteAddPage
        },
        {
          path: "point_add",
          component: DashPointAddPage
        },
        {
          path: "interest_add",
          component: DashInterestPage
        },
        
      ]
    },
  ],
  mode: "history"
})
