import { ref, watch, computed } from '@vue/composition-api'
import store from '@/store'
import { title } from '@core/utils/filter'

// Notification
import { useToast } from 'vue-toastification/composition'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'

export default function usePointsList() {
  // Use toast
  const toast = useToast()

  const refPointListTable = ref(null)

  // Table Handlers
  const tableColumns = [
    { key: 'address', sortable: true },
    { key: 'name', sortable: true },
    { key: 'countryCode', sortable: true },
    { key: 'publishStatus', sortable: true },
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

  const fetchPoints = (ctx, callback) => {
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
        const { points, total } = response

        callback(points)
        totalPoints.value = total
      })
      .catch((e) => {
        console.log(e);
        toast({
          component: ToastificationContent,
          props: {
            title: 'Error fetching points list',
            icon: 'AlertTriangleIcon',
            variant: 'danger',
          },
        })
      })
  }

  const fetchPoint = (ctx, callback) => {
    store
      .dispatch('app-point/fetchPoint', {
        q: searchQuery.value,
        perPage: perPage.value,
        page: currentPage.value,
        sortBy: sortBy.value,
        sortDesc: isSortDirDesc.value,
        country: countryFilter.value,
        status: statusFilter.value,
      })
      .then(response => {
        const { point } = response

        callback(point)
        totalPoints.value = total
      })
      .catch((e) => {
        console.log(e);
        toast({
          component: ToastificationContent,
          props: {
            title: 'Error fetching point by id',
            icon: 'AlertTriangleIcon',
            variant: 'danger',
          },
        })
      })
  }

  // *===============================================---*
  // *--------- UI ---------------------------------------*
  // *===============================================---*

  const resolvePointRoleVariant = role => {
    if (role === 'subscriber') return 'primary'
    if (role === 'author') return 'warning'
    if (role === 'maintainer') return 'success'
    if (role === 'editor') return 'info'
    if (role === 'admin') return 'danger'
    return 'primary'
  }

  const resolvePointRoleIcon = role => {
    if (role === 'subscriber') return 'PointIcon'
    if (role === 'author') return 'SettingsIcon'
    if (role === 'maintainer') return 'DatabaseIcon'
    if (role === 'editor') return 'Edit2Icon'
    if (role === 'admin') return 'ServerIcon'
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
    fetchPoint,
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

    resolvePointRoleVariant,
    resolvePointRoleIcon,
    resolvePointStatusVariant,
    refetchData,

    // Extra Filters
    countryFilter,
    statusFilter,
  }
}
