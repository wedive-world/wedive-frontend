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
]
