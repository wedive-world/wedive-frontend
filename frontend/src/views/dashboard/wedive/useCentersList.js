import { ref, watch, computed } from '@vue/composition-api'
import store from '@/store'
import { title } from '@core/utils/filter'

// Notification
import { useToast } from 'vue-toastification/composition'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'

export default function useCentersList() {
  // Use toast
  const toast = useToast()

  const refCenterListTable = ref(null)

  // Table Handlers
  const tableColumns = [
    { key: 'address', sortable: true },
    { key: 'name', sortable: true },
    { key: 'countryCode', sortable: true },
    { key: 'publishStatus', sortable: true },
    { key: 'actions' },
  ]
  const perPage = ref(10)
  const totalCenters = ref(0)
  const currentPage = ref(1)
  const perPageOptions = [10, 25, 50, 100]
  const searchQuery = ref('')
  const sortBy = ref('id')
  const isSortDirDesc = ref(true)
  const countryFilter = ref(null)
  const statusFilter = ref(null)

  const dataMeta = computed(() => {
    const localItemsCount = refCenterListTable.value ? refCenterListTable.value.localItems.length : 0
    return {
      from: perPage.value * (currentPage.value - 1) + (localItemsCount ? 1 : 0),
      to: perPage.value * (currentPage.value - 1) + localItemsCount,
      of: totalCenters.value,
    }
  })

  const refetchData = () => {
    refCenterListTable.value.refresh()
  }

  watch([currentPage, perPage, searchQuery, countryFilter, statusFilter], () => {
    refetchData()
  })

  const fetchCenters = (ctx, callback) => {
    store
      .dispatch('app-center/fetchCenters', {
        q: searchQuery.value,
        perPage: perPage.value,
        page: currentPage.value,
        sortBy: sortBy.value,
        sortDesc: isSortDirDesc.value,
        country: countryFilter.value,
        status: statusFilter.value,
      })
      .then(response => {
        const { centers, total } = response

        callback(centers)
        totalCenters.value = total
      })
      .catch((e) => {
        console.log(e);
        toast({
          component: ToastificationContent,
          props: {
            title: 'Error fetching Centers list',
            icon: 'AlertTriangleIcon',
            variant: 'danger',
          },
        })
      })
  }

  const fetchCenter = (ctx, callback) => {
    store
      .dispatch('app-center/fetchCenter', {
        q: searchQuery.value,
        perPage: perPage.value,
        page: currentPage.value,
        sortBy: sortBy.value,
        sortDesc: isSortDirDesc.value,
        country: countryFilter.value,
        status: statusFilter.value,
      })
      .then(response => {
        const { center } = response

        callback(center)
        totalCenters.value = total
      })
      .catch((e) => {
        console.log(e);
        toast({
          component: ToastificationContent,
          props: {
            title: 'Error fetching Center by id',
            icon: 'AlertTriangleIcon',
            variant: 'danger',
          },
        })
      })
  }

  // *===============================================---*
  // *--------- UI ---------------------------------------*
  // *===============================================---*

  const resolveCenterRoleVariant = role => {
    if (role === 'subscriber') return 'primary'
    if (role === 'author') return 'warning'
    if (role === 'maintainer') return 'success'
    if (role === 'editor') return 'info'
    if (role === 'admin') return 'danger'
    return 'primary'
  }

  const resolveCenterRoleIcon = role => {
    if (role === 'subscriber') return 'CenterIcon'
    if (role === 'author') return 'SettingsIcon'
    if (role === 'maintainer') return 'DatabaseIcon'
    if (role === 'editor') return 'Edit2Icon'
    if (role === 'admin') return 'ServerIcon'
    return 'CenterIcon'
  }

  const resolveCenterStatusVariant = status => {
    if (status === 'pending') return 'warning'
    if (status === 'active') return 'success'
    if (status === 'inactive') return 'secondary'
    return 'primary'
  }

  return {
    fetchCenters,
    fetchCenter,
    tableColumns,
    perPage,
    currentPage,
    totalCenters,
    dataMeta,
    perPageOptions,
    searchQuery,
    sortBy,
    isSortDirDesc,
    refCenterListTable,

    resolveCenterRoleVariant,
    resolveCenterRoleIcon,
    resolveCenterStatusVariant,
    refetchData,

    // Extra Filters
    countryFilter,
    statusFilter,
  }
}
