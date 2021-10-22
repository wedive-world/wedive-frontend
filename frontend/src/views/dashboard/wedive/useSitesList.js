import { ref, watch, computed } from '@vue/composition-api'
import store from '@/store'
import { title } from '@core/utils/filter'

// Notification
import { useToast } from 'vue-toastification/composition'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
//import gql from 'graphql-tag'
const { createDiveSite, getDiveSiteById, searchDiveSiteByName, nearByDiveSites, getAllDiveSites } = require('@/wedive-frontend-graphql/dive-site-service')
const { getAllInterests } = require ('@/wedive-frontend-graphql/interest-service')

export default function useSitesList() {
  // Use toast
  const toast = useToast()

  const refSiteListTable = ref(null)

  // Table Handlers
  const tableColumns = [
    { key: 'address', sortable: true },
    { key: 'name', sortable: true },
    { key: 'countryCode', sortable: true },
    { key: 'status', sortable: true },
    { key: 'actions' },
  ]
  const perPage = ref(10)
  const totalSites = ref(0)
  const currentPage = ref(1)
  const perPageOptions = [10, 25, 50, 100]
  const searchQuery = ref('')
  const sortBy = ref('id')
  const isSortDirDesc = ref(true)
  const countryFilter = ref(null)
  const statusFilter = ref(null)

  const dataMeta = computed(() => {
    const localItemsCount = refSiteListTable.value ? refSiteListTable.value.localItems.length : 0
    return {
      from: perPage.value * (currentPage.value - 1) + (localItemsCount ? 1 : 0),
      to: perPage.value * (currentPage.value - 1) + localItemsCount,
      of: totalSites.value,
    }
  })

  const refetchData = () => {
    refSiteListTable.value.refresh()
  }

  watch([currentPage, perPage, searchQuery, countryFilter, statusFilter], () => {
    refetchData()
  })

  const fetchSites = async (ctx, callback) => {
    var sites = await getAllDiveSites();
    var total = sites.length;
    console.log("sites ==================");
    console.log(sites);
    console.log(total);

    callback(sites)
    totalSites.value = total
  }
  

  /*const fetchSites = (ctx, callback) => {
    store
      .dispatch('app-site/fetchSites', {
        q: searchQuery.value,
        perPage: perPage.value,
        page: currentPage.value,
        sortBy: sortBy.value,
        sortDesc: isSortDirDesc.value,
        country: countryFilter.value,
        status: statusFilter.value,
      })
      .then(response => {
        const { sites, total } = response.data

        callback(sites)
        totalSites.value = total
      })
      .catch(() => {
        toast({
          component: ToastificationContent,
          props: {
            title: 'Error fetching sites list',
            icon: 'AlertTriangleIcon',
            variant: 'danger',
          },
        })
      })
  }*/

  // *===============================================---*
  // *--------- UI ---------------------------------------*
  // *===============================================---*

  const resolveSiteCountryVariant = country => {
    if (country === 'subscriber') return 'primary'
    if (country === 'author') return 'warning'
    if (country === 'maintainer') return 'success'
    if (country === 'editor') return 'info'
    if (country === 'admin') return 'danger'
    return 'primary'
  }

  const resolveSiteCountryIcon = country => {
    if (country === 'subscriber') return 'SiteIcon'
    if (country === 'author') return 'SettingsIcon'
    if (country === 'maintainer') return 'DatabaseIcon'
    if (country === 'editor') return 'Edit2Icon'
    if (country === 'admin') return 'ServerIcon'
    return 'SiteIcon'
  }

  const resolveSiteStatusVariant = status => {
    if (status === 'pending') return 'warning'
    if (status === 'active') return 'success'
    if (status === 'inactive') return 'secondary'
    return 'primary'
  }

  return {
    fetchSites,
    tableColumns,
    perPage,
    currentPage,
    totalSites,
    dataMeta,
    perPageOptions,
    searchQuery,
    sortBy,
    isSortDirDesc,
    refSiteListTable,

    resolveSiteCountryVariant,
    resolveSiteCountryIcon,
    resolveSiteStatusVariant,
    refetchData,

    // Extra Filters
    countryFilter,
    statusFilter,
  }
}
