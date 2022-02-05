import { ref, watch, computed } from '@vue/composition-api'
import store from '@/store'
import { title } from '@core/utils/filter'

// Notification
import { useToast } from 'vue-toastification/composition'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'

export default function useRecommendationsList() {
  // Use toast
  const toast = useToast()

  const refRecommendationListTable = ref(null)

  // Table Handlers
  const tableColumns = [
    { key: 'uniqueName', sortable: true },
    { key: 'name', sortable: true },
    { key: 'countryCode', sortable: true },
    { key: 'publishStatus', sortable: true },
    { key: 'actions' },
  ]
  const perPage = ref(10)
  const totalRecommendations = ref(0)
  const currentPage = ref(1)
  const perPageOptions = [10, 25, 50, 100]
  const searchQuery = ref('')
  const sortBy = ref('id')
  const isSortDirDesc = ref(true)
  const countryFilter = ref(null)
  const statusFilter = ref(null)

  const dataMeta = computed(() => {
    const localItemsCount = refRecommendationListTable.value ? refRecommendationListTable.value.localItems.length : 0
    return {
      from: perPage.value * (currentPage.value - 1) + (localItemsCount ? 1 : 0),
      to: perPage.value * (currentPage.value - 1) + localItemsCount,
      of: totalRecommendations.value,
    }
  })

  const refetchData = () => {
    refRecommendationListTable.value.refresh()
  }

  watch([currentPage, perPage, searchQuery, countryFilter, statusFilter], () => {
    refetchData()
  })

  const fetchRecommendations = (ctx, callback) => {
    store
      .dispatch('app-recommendation/fetchRecommendations', {
        q: searchQuery.value,
        perPage: perPage.value,
        page: currentPage.value,
        sortBy: sortBy.value,
        sortDesc: isSortDirDesc.value,
        country: countryFilter.value,
        status: statusFilter.value,
      })
      .then(response => {
        const { recommendations, total } = response

        callback(recommendations)
        totalRecommendations.value = total
      })
      .catch((e) => {
        console.log(e);
        toast({
          component: ToastificationContent,
          props: {
            title: 'Error fetching recommendations list',
            icon: 'AlertTriangleIcon',
            variant: 'danger',
          },
        })
      })
  }

  

  // *===============================================---*
  // *--------- UI ---------------------------------------*
  // *===============================================---*

  const resolveRecommendationRoleVariant = role => {
    if (role === 'subscriber') return 'primary'
    if (role === 'author') return 'warning'
    if (role === 'maintainer') return 'success'
    if (role === 'editor') return 'info'
    if (role === 'admin') return 'danger'
    return 'primary'
  }

  const resolveRecommendationRoleIcon = role => {
    if (role === 'subscriber') return 'RecommendationIcon'
    if (role === 'author') return 'SettingsIcon'
    if (role === 'maintainer') return 'DatabaseIcon'
    if (role === 'editor') return 'Edit2Icon'
    if (role === 'admin') return 'ServerIcon'
    return 'RecommendationIcon'
  }

  const resolveRecommendationStatusVariant = status => {
    if (status === 'pending') return 'warning'
    if (status === 'active') return 'success'
    if (status === 'inactive') return 'secondary'
    return 'primary'
  }

  return {
    fetchRecommendations,
    tableColumns,
    perPage,
    currentPage,
    totalRecommendations,
    dataMeta,
    perPageOptions,
    searchQuery,
    sortBy,
    isSortDirDesc,
    refRecommendationListTable,

    resolveRecommendationRoleVariant,
    resolveRecommendationRoleIcon,
    resolveRecommendationStatusVariant,
    refetchData,

    // Extra Filters
    countryFilter,
    statusFilter,
  }
}
