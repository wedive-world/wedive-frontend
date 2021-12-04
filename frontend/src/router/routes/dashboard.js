export default [
  {
    path: '/dashboard/ecommerce',
    name: 'dashboard-ecommerce',
    component: () => import('@/views/dashboard/ecommerce/Ecommerce.vue'),
  },
  {
    path: '/dashboard/interest',
    name: 'dashboard-interest',
    component: () => import('@/views/dashboard/wedive/InterestAdd.vue'),
  },
  {
    path: '/dashboard/site',
    name: 'dashboard-site',
    component: () => import('@/views/dashboard/wedive/SitesList.vue'),
  },
  {
    path: '/dashboard/center',
    name: 'dashboard-center',
    component: () => import('@/views/dashboard/wedive/CentersList.vue'),
  },
  {
    path: '/dashboard/point',
    name: 'dashboard-point',
    component: () => import('@/views/dashboard/wedive/PointsList.vue'),
  },
  
]
