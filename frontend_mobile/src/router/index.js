import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import RecommendPage from '@/components/RecommendPage'
import BuddyCreatePage from '@/components/BuddyCreatePage'
import BuddyHomePage from '@/components/BuddyHomePage'
import UserProfilePage from '@/components/UserProfilePage'
import CenterHomePage from '@/components/CenterHomePage'
import CenterDetailPage from '@/components/CenterDetailPage'
import CenterListPage from '@/components/CenterListPage'
import CenterListMapPage from '@/components/CenterListMapPage'
import CoursePage from '@/components/CoursePage'
import SiteHomePage from '@/components/SiteHomePage'
import SiteDetailPage from '@/components/SiteDetailPage'
import PointDetailPage from '@/components/PointDetailPage'
import ChatHomePage from '@/components/ChatHomePage'
import ChatDetailPage from '@/components/ChatDetailPage'
import StaticPage from '@/components/StaticPage'

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
      path: '/buddy_home',
      name: 'BuddyHomePage',
      component: BuddyHomePage
    },
    {
      path: '/user',
      name: 'UserProfilePage',
      component: UserProfilePage
    },
    {
      path: '/center_home',
      name: 'CenterHomePage',
      component: CenterHomePage
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
      path: '/site_home',
      name: 'SiteHomePage',
      component: SiteHomePage
    },
    {
      path: '/site',
      name: 'SiteDetailPage',
      component: SiteDetailPage
    },
    {
      path: '/point',
      name: 'PointDetailPage',
      component: PointDetailPage
    },
    {
      path: '/chat_home',
      name: 'ChatHomePage',
      component: ChatHomePage
    },
    {
      path: '/chat',
      name: 'ChatDetailPage',
      component: ChatDetailPage
    },
    {
      path: '/static',
      name: 'StaticPage',
      component: StaticPage
    }
  ],
  mode: 'history'
})
