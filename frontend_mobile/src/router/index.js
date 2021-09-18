import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import BuddyCreatePage from '@/components/BuddyCreatePage'
import CenterDetailPage from '@/components/CenterDetailPage'
import CenterListPage from '@/components/CenterListPage'
import CenterListMapPage from '@/components/CenterListMapPage'
import CoursePage from '@/components/CoursePage'
import PointDetailPage from '@/components/PointDetailPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/buddy_create',
      name: 'BuddyCreatePage',
      component: BuddyCreatePage
    },
    {
      path: '/center',
      name: 'CenterDetailPage',
      component: CenterDetailPage
    },
    {
      path: '/center_list',
      name: 'CenterListPage',
      component: CenterListPage
    },
    {
      path: '/center_map',
      name: 'CenterListMapPage',
      component: CenterListMapPage
    },
    {
      path: '/course',
      name: 'CoursePage',
      component: CoursePage
    },
    {
      path: '/point',
      name: 'PointDetailPage',
      component: PointDetailPage
    }
    
  ],
  mode: 'history'
})
