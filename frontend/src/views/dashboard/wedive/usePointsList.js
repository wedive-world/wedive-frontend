import { ref, watch, computed } from '@vue/composition-api'
import store from '@/store'
import { title } from '@core/utils/filter'

// Notification
import { useToast } from 'vue-toastification/composition'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
//import gql from 'graphql-tag'
const { createDivePoint, getDivePointById, searchDivePointByName, nearByDivePoints, getAllDivePoints } = require('@/wedive-frontend-graphql/dive-point-service')
const { getAllInterests } = require ('@/wedive-frontend-graphql/interest-service')

export default function usePointsList() {
  // Use toast
  const toast = useToast()

  const refPointListTable = ref(null)

  // Table Handlers
  const tableColumns = [
    { key: 'address', sortable: true },
    { key: 'name', sortable: true },
    { key: 'countryCode', sortable: true },
    { key: 'status', sortable: true },
    { key: 'actions' },
  ]
  const perPage = ref(10)
  const totalPoints = ref(0)
  const currentPage = ref(1)
  const perPageOptions = [10, 25, 50, 100]
  const searchQuery = ref('')
  const sortBy = ref('id')
  const isSortDirDesc = ref(true)
  const countryFilter = ref(null)
  const statusFilter = ref(null)

  const dataMeta = computed(() => {
    const localItemsCount = refPointListTable.value ? refPointListTable.value.localItems.length : 0
    return {
      from: perPage.value * (currentPage.value - 1) + (localItemsCount ? 1 : 0),
      to: perPage.value * (currentPage.value - 1) + localItemsCount,
      of: totalPoints.value,
    }
  })

  const refetchData = () => {
    refPointListTable.value.refresh()
  }

  watch([currentPage, perPage, searchQuery, countryFilter, statusFilter], () => {
    refetchData()
  })

  const fetchPoints = async (ctx, callback) => {
    var points = await getAllDivePoints();
    var total = points.length;
    console.log("points ==================");
    console.log(points);
    console.log(total);

    callback(points)
    totalPoints.value = total
  }
  

  /*const fetchPoints = (ctx, callback) => {
    store
      .dispatch('app-point/fetchPoints', {
        q: searchQuery.value,
        perPage: perPage.value,
        page: currentPage.value,
        sortBy: sortBy.value,
        sortDesc: isSortDirDesc.value,
        country: countryFilter.value,
        status: statusFilter.value,
      })
      .then(response => {
        const { points, total } = response.data

        callback(points)
        totalPoints.value = total
      })
      .catch(() => {
        toast({
          component: ToastificationContent,
          props: {
            title: 'Error fetching points list',
            icon: 'AlertTriangleIcon',
            variant: 'danger',
          },
        })
      })
  }*/

  // *===============================================---*
  // *--------- UI ---------------------------------------*
  // *===============================================---*

  const resolvePointCountryVariant = country => {
    if (country === 'subscriber') return 'primary'
    if (country === 'author') return 'warning'
    if (country === 'maintainer') return 'success'
    if (country === 'editor') return 'info'
    if (country === 'admin') return 'danger'
    return 'primary'
  }

  const resolvePointCountryIcon = country => {
    if (country === 'subscriber') return 'PointIcon'
    if (country === 'author') return 'SettingsIcon'
    if (country === 'maintainer') return 'DatabaseIcon'
    if (country === 'editor') return 'Edit2Icon'
    if (country === 'admin') return 'ServerIcon'
    return 'PointIcon'
  }

  const resolvePointStatusVariant = status => {
    if (status === 'pending') return 'warning'
    if (status === 'active') return 'success'
    if (status === 'inactive') return 'secondary'
    return 'primary'
  }

  return {
    fetchPoints,
    tableColumns,
    perPage,
    currentPage,
    totalPoints,
    dataMeta,
    perPageOptions,
    searchQuery,
    sortBy,
    isSortDirDesc,
    refPointListTable,

    resolvePointCountryVariant,
    resolvePointCountryIcon,
    resolvePointStatusVariant,
    refetchData,

    // Extra Filters
    countryFilter,
    statusFilter,
  }
}
