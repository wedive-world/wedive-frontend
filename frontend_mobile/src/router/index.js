import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import RecommendPage from '@/components/RecommendPage'
import BuddyCreatePage from '@/components/BuddyCreatePage'
import BuddyCreatePage2 from '@/components/BuddyCreatePage2'
import BuddyCreateAllPage from '@/components/BuddyCreateAllPage'
import BuddyCreateSwimmingPage from '@/components/BuddyCreateSwimmingPage'
import BuddyCreateSeaPage from '@/components/BuddyCreateSeaPage'
import BuddyCreateAbroadPage from '@/components/BuddyCreateAbroadPage'
import BuddyHomePage from '@/components/BuddyHomePage'
import UserProfilePage from '@/components/UserProfilePage'
import UserCreatePage from '@/components/UserCreatePage'
import CenterHomePage from '@/components/CenterHomePage'
import CenterDetailPage from '@/components/CenterDetailPage'
import CenterDetailPage2 from '@/components/CenterDetailPage2'
import DiveShopDetailPage from '@/components/DiveShopDetailPage'
import ReviewAllPage from '@/components/ReviewAllPage'
import SiteSearchPage from '@/components/SiteSearchPage'
import CenterListMapPage from '@/components/CenterListMapPage'
import CoursePage from '@/components/CoursePage'
import SiteHomePage from '@/components/SiteHomePage'
import SiteHomeListPage from '@/components/SiteHomeListPage'
import RecommendationDetailPage from '@/components/RecommendationDetailPage'
import SiteDetailPage from '@/components/SiteDetailPage'
import PointDetailPage from '@/components/PointDetailPage'
import PointDetailPage2 from '@/components/PointDetailPage2'
import DivingSearchPage from '@/components/DivingSearchPage'
import DivingDetailPage from '@/components/DivingDetailPage'
import UserDetailPage from '@/components/UserDetailPage'
import ChatHomePage from '@/components/ChatHomePage'
import ChatDetailPage from '@/components/ChatDetailPage'
import ChatDummyPage from '@/components/ChatDummyPage'
import ShopHomePage from '@/components/ShopHomePage'
import ShopDetailPage from '@/components/ShopDetailPage'
import StaticPage from '@/components/StaticPage'
import TrainingPage from '@/components/TrainingPage'
import TrainingListPage from '@/components/TrainingListPage'
import TrainingSettingPage from '@/components/TrainingSettingPage'
import TrainingStartPage from '@/components/TrainingStartPage'
import ForumPage from '@/components/ForumPage'
import ForumSearchPage from '@/components/ForumSearchPage'
import ForumDetailPage from '@/components/ForumDetailPage'
import ReviewMorePage from '@/components/ReviewMorePage'
import OhterPage from '@/components/OhterPage'
import NotificationPage from '@/components/NotificationPage'
import CommunityDetailPage from '@/components/CommunityDetailPage'
import CommunitySearchPage from '@/components/CommunitySearchPage'
import OtherDivingPage from '@/components/OtherDivingPage'
import OtherSubscribePage from '@/components/OtherSubscribePage'
import OhterReservationPage from '@/components/OhterReservationPage'
import OtherNotiPage from '@/components/OtherNotiPage'
import OtherPrivacyPage from '@/components/OtherPrivacyPage'
import InstructorCreatePage from '@/components/InstructorCreatePage'

import BeginnerPage from '@/components/guide/BeginnerPage'
import Beginner1Page from '@/components/guide/Beginner1Page'
import Beginner2Page from '@/components/guide/Beginner2Page'
import Beginner3Page from '@/components/guide/Beginner3Page'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: BuddyHomePage
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
      path: '/buddy_create2',
      name: 'BuddyCreatePage2',
      component: BuddyCreatePage2
    },
    {
      path: '/buddy/create',
      name: 'BuddyCreateAllPage',
      component: BuddyCreateAllPage
    },
    {
      path: '/buddy/swimming',
      name: 'BuddyCreateSwimmingPage',
      component: BuddyCreateSwimmingPage
    },
    {
      path: '/buddy/sea',
      name: 'BuddyCreateSeaPage',
      component: BuddyCreateSeaPage
    },
    {
      path: '/buddy/abroad',
      name: 'BuddyCreateAbroadPage',
      component: BuddyCreateAbroadPage
    },
    {
      path: '/buddy_home',
      name: 'BuddyHomePage',
      component: BuddyHomePage
    },
    {
      path: '/user/my',
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
      path: '/center/:id',
      name: 'CenterDetailPage',
      props: true,
      component: CenterDetailPage
    },
    {
      path: '/center2',
      name: 'CenterDetailPage2',
      component: CenterDetailPage2
    },
    {
      path: '/shop/:id',
      name: 'DiveShopDetailPage',
      component: DiveShopDetailPage
    },
    {
      path: '/review2/:id',
      name: 'ReviewAllPage',
      props: true,
      component: ReviewAllPage
    },
    {
      path: '/site_map',
      name: 'SiteHomePage',
      component: SiteHomePage
    },
    {
      path: '/site/search',
      name: 'SiteSearchPage',
      component: SiteSearchPage
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
      path: '/site_list',
      name: 'SiteHomeListPage',
      component: SiteHomeListPage
    },
    {
      path: '/recommend/:id',
      name: 'RecommendationDetailPage',
      props: true,
      component: RecommendationDetailPage
    },
    {
      path: '/site/:id',
      name: 'SiteDetailPage',
      props: true,
      component: SiteDetailPage
    },
    {
      path: '/point/:id',
      name: 'PointDetailPage',
      props: true,
      component: PointDetailPage
    },
    {
      path: '/point2',
      name: 'PointDetailPage2',
      component: PointDetailPage2
    },
    {
      path: '/diving/search',
      name: 'DivingSearchPage',
      component: DivingSearchPage
    },
    {
      path: '/diving/my',
      name: 'OtherDivingPage',
      component: OtherDivingPage
    },
    {
      path: '/other/subscribe',
      name: 'OtherSubscribePage',
      component: OtherSubscribePage
    },
    {
      path: '/other/reservation',
      name: 'OhterReservationPage',
      component: OhterReservationPage
    },
    {
      path: '/other/noti',
      name: 'OtherNotiPage',
      component: OtherNotiPage
    },
    {
      path: '/other/privacy',
      name: 'OtherPrivacyPage',
      component: OtherPrivacyPage
    },
    {
      path: '/diving/:id',
      name: 'DivingDetailPage',
      props: true,
      component: DivingDetailPage
    },
    {
      path: '/user/:id',
      name: 'UserDetailPage',
      props: true,
      component: UserDetailPage
    },
    {
      path: '/chat_home',
      name: 'ChatHomePage',
      component: ChatHomePage
    },
    {
      path: '/chat/:id',
      name: 'ChatDetailPage',
      props: true,
      component: ChatDetailPage
    },
    {
      path: '/chat/create',
      name: 'ChatDummyPage',
      component: ChatDummyPage
    },
    {
      path: '/shopping_home',
      name: 'ShopHomePage',
      component: ShopHomePage
    },
    {
      path: '/shopping',
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
    },
    {
      path: '/forum_home',
      name: 'ForumPage',
      component: ForumPage
    },
    {
      path: '/forum/search',
      name: 'ForumSearchPage',
      component: ForumSearchPage
    },
    {
      path: '/agenda/:id',
      name: 'ForumDetailPage',
      props: true,
      component: ForumDetailPage
    },
    {
      path: '/review/:id',
      name: 'ReviewMorePage',
      props: true,
      component: ReviewMorePage
    },
    {
      path: '/other_home',
      name: 'OhterPage',
      component: OhterPage
    },
    {
      path: '/other/notification',
      name: 'NotificationPage',
      component: NotificationPage
    },
    {
      path: '/community/search',
      name: 'CommunitySearchPage',
      component: CommunitySearchPage
    },
    {
      path: '/community/:id',
      name: 'CommunityDetailPage',
      props: true,
      component: CommunityDetailPage
    },
    {
      path: '/instructor/create',
      name: 'InstructorCreatePage',
      component: InstructorCreatePage
    },
    {
      path: '/guide/beginner',
      name: 'BeginnerPage',
      component: BeginnerPage
    },
    {
      path: '/guide/beginner1',
      name: 'Beginner1Page',
      component: Beginner1Page
    },
    {
      path: '/guide/beginner2',
      name: 'Beginner2Page',
      component: Beginner2Page
    },
    {
      path: '/guide/beginner3',
      name: 'Beginner3Page',
      component: Beginner3Page
    },
    
    
    
    
  ],
  mode: 'history'
})
