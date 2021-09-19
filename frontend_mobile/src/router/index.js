import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import RecommendPage from '@/components/RecommendPage'
import BuddyCreatePage from '@/components/BuddyCreatePage'
import BuddyListPage from '@/components/BuddyListPage'
import UserProfilePage from '@/components/UserProfilePage'
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
      path: '/recommend',
      name: 'RecommendPage',
      component: RecommendPage
    },
    {
      path: '/buddy_create',
      name: 'BuddyCreatePage',
      component: BuddyCreatePage
    },
    {
      path: '/buddy_list',
      name: 'BuddyListPage',
      component: BuddyListPage
    },
    {
      path: '/user',
      name: 'UserProfilePage',
      component: UserProfilePage
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
