import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import RecommendPage from '@/components/RecommendPage'
import BuddyCreatePage from '@/components/BuddyCreatePage'
import BuddyHomePage from '@/components/BuddyHomePage'
import UserProfilePage from '@/components/UserProfilePage'
import UserCreatePage from '@/components/UserCreatePage'
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
import ShopHomePage from '@/components/ShopHomePage'
import ShopDetailPage from '@/components/ShopDetailPage'
import StaticPage from '@/components/StaticPage'
import TrainingPage from '@/components/TrainingPage'
import TrainingListPage from '@/components/TrainingListPage'
import TrainingSettingPage from '@/components/TrainingSettingPage'
import TrainingStartPage from '@/components/TrainingStartPage'

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
      path: '/user_create',
      name: 'UserCreatePage',
      component: UserCreatePage
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
      path: '/site/:id',
      name: 'SiteDetailPage',
      props: true,
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
      path: '/shop_home',
      name: 'ShopHomePage',
      component: ShopHomePage
    },
    {
      path: '/shop',
      name: 'ShopDetailPage',
      component: ShopDetailPage
    },
    {
      path: '/static',
      name: 'StaticPage',
      component: StaticPage
    },
    {
      path: '/training',
      name: 'TrainingPage',
      component: TrainingPage
    },
    {
      path: '/training_list',
      name: 'TrainingListPage',
      component: TrainingListPage
    },
    {
      path: '/training_setting',
      name: 'TrainingSettingPage',
      component: TrainingSettingPage
    },
    {
      path: '/training_start',
      name: 'TrainingStartPage',
      component: TrainingStartPage
    }
    
    
  ],
  mode: 'history'
})
