export default [
  {
    header: 'Dashboard',
    icon: 'FileTextIcon',
    tag: '3',
    tagVariant: 'light-warning',
    children: [
      {
        title: 'Site manage',
        route: 'charts-apex-chart',
      },
      {
        title: 'Point manage',
        route: 'charts-chartjs',
      },
      {
        title: 'Interest manage',
        route: 'dashboard-interest',
      },
    ],
  },
]
