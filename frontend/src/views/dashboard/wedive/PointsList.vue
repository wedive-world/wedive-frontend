<template>

  <div>

    <point-list-add-new
      :is-add-new-point-sidebar-active.sync="isAddNewPointSidebarActive"
      :country-options="countryOptions"
      :point-data="pointData"
      :site-data="sites"
      :interest-data="interests"
      @refetch-data="refetchData"
      ref="pointAddNewRef"
    />

    <!-- Filters -->
    <points-list-filters
      :country-filter.sync="countryFilter"
      :status-filter.sync="statusFilter"
      :country-options="countryOptions"
      :status-options="statusOptions"
    />

    <!-- Table Container Card -->
    <b-card
      no-body
      class="mb-0"
    >

      <div class="m-2">

        <!-- Table Top -->
        <b-row>

          <!-- Per Page -->
          <b-col
            cols="12"
            md="6"
            class="d-flex align-items-center justify-content-start mb-1 mb-md-0"
          >
            <label>Show</label>
            <v-select
              v-model="perPage"
              :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
              :options="perPageOptions"
              :clearable="false"
              class="per-page-selector d-inline-block mx-50"
            />
            <label>entries</label>
          </b-col>

          <!-- Search -->
          <b-col
            cols="12"
            md="6"
          >
            <div class="d-flex align-items-center justify-content-end">
              <b-form-input
                v-model="searchQuery"
                class="d-inline-block mr-1"
                placeholder="Search..."
              />
              <b-button
                variant="primary"
                @click="isAddNewPointSidebarActive = true"
              >
                <span class="text-nowrap">Add Point</span>
              </b-button>
            </div>
          </b-col>
        </b-row>

      </div>

      <b-table
        ref="refPointListTable"
        class="position-relative"
        :items="fetchPoints"
        responsive
        :fields="tableColumns"
        primary-key="id"
        :sort-by.sync="sortBy"
        show-empty
        empty-text="No matching records found"
        :sort-desc.sync="isSortDirDesc"
      >

        <!-- Column: Point -->
        <template #cell(point)="data">
          <b-media vertical-align="center">
            <template #aside>
              <b-avatar
                size="32"
                :src="data.item.avatar"
                :text="avatarText(data.item.fullName)"
                :variant="`light-${resolvePointCountryVariant(data.item.country)}`"
                :to="{ name: 'app-point/fetchPoint', params: { id: data.item.id } }"
              />
            </template>
            <b-link
              :to="{ name: 'app-point/fetchPoint', params: { id: data.item.id } }"
              class="font-weight-bold d-block text-nowrap"
            >
              {{ data.item.fullName }}
            </b-link>
            <small class="text-muted">@{{ data.item.pointname }}</small>
          </b-media>
        </template>

        <!-- Column: country -->
        <template #cell(country)="data">
          <div class="text-nowrap">
            <feather-icon
              :icon="resolvePointCountryIcon(data.item.country)"
              size="18"
              class="mr-50"
              :class="`text-${resolvePointCountryVariant(data.item.country)}`"
            />
            <span class="align-text-top text-capitalize">{{ data.item.country }}</span>
          </div>
        </template>

        <!-- Column: Status -->
        <template #cell(status)="data">
          <b-badge
            pill
            :variant="`light-${resolvePointStatusVariant(data.item.status)}`"
            class="text-capitalize"
          >
            {{ data.item.status }}
          </b-badge>
        </template>

        <!-- Column: Actions -->
        <template #cell(actions)="data">
          <feather-icon
            :id="`point-row-${data.item.id}-detail-icon`"
            icon="FileTextIcon"
            class="cursor-pointer"
            size="16"
            @click="$refs.pointAddNewRef.setPointData(data.item);isAddNewPointSidebarActive = true;"
          />
          <b-tooltip
            title="Details"
            class="cursor-pointer"
            :target="`point-row-${data.item.id}-detail-icon`"
          />

          <b-dropdown
            variant="link"
            no-caret
            :right="$store.state.appConfig.isRTL"
          >

            <template #button-content>
              <feather-icon
                icon="MoreVerticalIcon"
                size="16"
                class="align-middle text-body"
              />
            </template>
            <b-dropdown-item 
              @click="$refs.pointAddNewRef.setPointData(data.item);isAddNewPointSidebarActive = true;"
            >
              <feather-icon icon="FileTextIcon" />
              <span class="align-middle ml-50">Details</span>
            </b-dropdown-item>

            
            <b-dropdown-item
              @click="deletePoint(data.item)"
            >
              <feather-icon icon="TrashIcon" />
              <span class="align-middle ml-50">Delete</span>
            </b-dropdown-item>
          </b-dropdown>
        </template>

      </b-table>
      <div class="mx-2 mb-2">
        <b-row>

          <b-col
            cols="12"
            sm="6"
            class="d-flex align-items-center justify-content-center justify-content-sm-start"
          >
            <span class="text-muted">Showing {{ dataMeta.from }} to {{ dataMeta.to }} of {{ dataMeta.of }} entries</span>
          </b-col>
          <!-- Pagination -->
          <b-col
            cols="12"
            sm="6"
            class="d-flex align-items-center justify-content-center justify-content-sm-end"
          >

            <b-pagination
              v-model="currentPage"
              :total-rows="totalPoints"
              :per-page="perPage"
              first-number
              last-number
              class="mb-0 mt-1 mt-sm-0"
              prev-class="prev-item"
              next-class="next-item"
            >
              <template #prev-text>
                <feather-icon
                  icon="ChevronLeftIcon"
                  size="18"
                />
              </template>
              <template #next-text>
                <feather-icon
                  icon="ChevronRightIcon"
                  size="18"
                />
              </template>
            </b-pagination>

          </b-col>

        </b-row>
      </div>
    </b-card>
  </div>
</template>

<script>
import {
  BCard, BRow, BCol, BFormInput, BButton, BTable, BMedia, BAvatar, BLink,
  BBadge, BDropdown, BDropdownItem, BPagination, BTooltip,
} from 'bootstrap-vue'
import vSelect from 'vue-select'
import store from '@/store'
import { ref, onUnmounted } from '@vue/composition-api'
import { avatarText } from '@core/utils/filter'
import PointsListFilters from './PointsListFilters.vue'
import usePointsList from './usePointsList'

import pointStoreModule from '../pointStoreModule'
import PointListAddNew from './PointListAddNew.vue'
const { getAllDiveSites } = require('@/wedive-frontend-graphql/dive-site-service')
const { getAllInterests, getInterestTypes } = require ('@/wedive-frontend-graphql/interest-service')
const { deleteDivePointById } = require('@/wedive-frontend-graphql/dive-point-service')

export default {
  components: {
    PointsListFilters,
    PointListAddNew,

    BCard,
    BRow,
    BCol,
    BFormInput,
    BButton,
    BTable,
    BMedia,
    BAvatar,
    BLink,
    BBadge,
    BDropdown,
    BDropdownItem,
    BPagination,
    BTooltip,

    vSelect,
  },
  setup() {
    const POINT_APP_STORE_MODULE_NAME = 'app-point'

    // Register module
    if (!store.hasModule(POINT_APP_STORE_MODULE_NAME)) store.registerModule(POINT_APP_STORE_MODULE_NAME, pointStoreModule)

    // UnRegister on leave
    onUnmounted(() => {
      if (store.hasModule(POINT_APP_STORE_MODULE_NAME)) store.unregisterModule(POINT_APP_STORE_MODULE_NAME)
    })

    const isAddNewPointSidebarActive = ref(false)

    const countryOptions = [
      { label: '대한민국', value: 'kr' },
      { label: '미국', value: 'us' },
      { label: '호주', value: 'au' },
      { label: '아프가니스탄', value: 'af' },
      { label: '방글라데시', value: 'bd' },
      { label: '브루나이', value: 'bn' },
      { label: '캄보디아', value: 'kh' },
      { label: '중국', value: 'cn' },
      { label: '크리스마스섬', value: 'cx' },
      { label: '동티모르', value: 'tl' },
      { label: '홍콩', value: 'hk' },
      { label: '인도', value: 'in' },
      { label: '인도네시아', value: 'id' },
      { label: '일본', value: 'jp' },
      { label: '라오스', value: 'la' },
      { label: '마카오', value: 'mo' },
      { label: '말레이시아', value: 'my' },
      { label: '몽골', value: 'mn' },
      { label: '북한', value: 'kp' },
      { label: '파키스탄', value: 'pk' },
      { label: '필리핀', value: 'ph' },
      { label: '싱가포르', value: 'sg' },
      { label: '스리랑카', value: 'lk' },
      { label: '대만', value: 'tw' },
      { label: '태국', value: 'th' },
      { label: '베트남', value: 'vm' },
    ]

    const statusOptions = [
      { label: 'Pending', value: 'pending' },
      { label: 'Active', value: 'active' },
      { label: 'Inactive', value: 'inactive' },
      { label: 'Deleted', value: 'deleted' },
    ]

    const {
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
      refetchData,

      // UI
      resolvePointCountryVariant,
      resolvePointCountryIcon,
      resolvePointStatusVariant,

      // Extra Filters
      countryFilter,
      statusFilter,
    } = usePointsList()


    return {
      interests: [],
      interest_types: [],
      sites: [],

      // Sidebar
      isAddNewPointSidebarActive,

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
      refetchData,

      // Filter
      avatarText,

      // UI
      resolvePointCountryVariant,
      resolvePointCountryIcon,
      resolvePointStatusVariant,

      countryOptions,
      statusOptions,

      // Extra Filters
      countryFilter,
      statusFilter,

      // point data
      pointData: {},
    }
  },
  async beforeRouteEnter(to, from, next) {
    var interests = await getAllInterests();
    var interest_types = await getInterestTypes();
    var sites = await getAllDiveSites();
    next(vm => {vm.setInterests(interests, interest_types, sites)});
  },
  methods: {
    setInterests: function(interests, interest_types, sites) {
      this.interests = interests;
      this.interest_types = interest_types;
      this.sites = sites.getAllDiveSites;
    },
    deletePoint(_data) {
      this.$swal({
        title: 'Are you sure?',
        text: "삭제하시면 되돌릴 수 없습니다.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, 삭제합니다',
        customClass: {
          confirmButton: 'btn btn-primary',
          cancelButton: 'btn btn-outline-danger ml-1',
        },
        buttonsStyling: false,
      }).then(result => {
        if (result.value) {
          console.log(_data);
          deleteDivePointById(_data._id);
          this.$swal({
            icon: 'success',
            title: 'Deleted!',
            text: 'Your file has been deleted.',
            customClass: {
              confirmButton: 'btn btn-success',
            },
          })
        }
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.per-page-selector {
  width: 90px;
}
</style>

<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';
</style>
