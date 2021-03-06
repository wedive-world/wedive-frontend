export default [
  {
    path: '/dashboard/ecommerce',
    name: 'dashboard-ecommerce',
    component: () => import('@/views/dashboard/ecommerce/Ecommerce.vue'),
  },
  {
    path: '/dashboard/site',
    name: 'dashboard-site',
    component: () => import('@/views/dashboard/wedive/SitesList.vue'),
  },
  {
    path: '/dashboard/point',
    name: 'dashboard-point',
    component: () => import('@/views/dashboard/wedive/PointsList.vue'),
  },
  {
    path: '/dashboard/center',
    name: 'dashboard-center',
    component: () => import('@/views/dashboard/wedive/CentersList.vue'),
  },
  {
    path: '/dashboard/interest',
    name: 'dashboard-interest',
    component: () => import('@/views/dashboard/wedive/InterestAdd.vue'),
  },
  {
    path: '/dashboard/recommendation',
    name: 'dashboard-recommendation',
    component: () => import('@/views/dashboard/wedive/RecommendationsList.vue'),
  },
  {
    path: '/dashboard/site2',
    name: 'dashboard-site2',
    component: () => import('@/views/dashboard/wedive/SiteExcel.vue'),
  },
  {
    path: '/dashboard/point2',
    name: 'dashboard-point2',
    component: () => import('@/views/dashboard/wedive/PointExcel.vue'),
  },
  {
    path: '/dashboard/center2',
    name: 'dashboard-center2',
    component: () => import('@/views/dashboard/wedive/CenterExcel.vue'),
  },
  {
    path: '/dashboard/center/:id',
    name: 'dashboard-center-detail',
    props: true,
    component: () => import('@/views/dashboard/wedive/CenterPage.vue'),
  },
  {
    path: '/dashboard/site/:id',
    name: 'dashboard-site-detail',
    props: true,
    component: () => import('@/views/dashboard/wedive/SitePage.vue'),
  },
  {
    path: '/dashboard/diving2',
    name: 'dashboard-diving2',
    component: () => import('@/views/dashboard/wedive/DivingExcel.vue'),
  },
  
  
]
