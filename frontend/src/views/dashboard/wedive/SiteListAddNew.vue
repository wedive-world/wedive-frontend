<template>
  <b-sidebar
    id="add-new-site-sidebar"
    :visible="isAddNewSiteSidebarActive"
    bg-variant="white"
    sidebar-class="sidebar-lg"
    shadow
    backdrop
    no-header
    right
    @hidden="resetForm"
    @change="(val) => $emit('update:is-add-new-site-sidebar-active', val)"
  >
    <template #default="{ hide }">
      <!-- Header -->
      <div class="d-flex justify-content-between align-items-center content-sidebar-header px-2 py-1">
        <h5 class="mb-0">
          Add New Site
        </h5>

        <feather-icon
          class="ml-1 cursor-pointer"
          icon="XIcon"
          size="16"
          @click="hide"
        />

      </div>

      <!-- BODY -->
      <validation-observer
        #default="{ handleSubmit }"
        ref="refFormObserver"
      >
        <!-- Form -->
        <b-form
          class="p-2"
          @submit.prevent="handleSubmit(onSubmit)"
          @reset.prevent="resetForm"
        >
          <h4>현재상태</h4>
          <!-- Status -->
          <validation-provider
            #default="validationContext"
            name="status"
            rules="required"
          >
            <b-form-group
              label="상태선택"
              label-for="status"
              :state="getValidationState(validationContext)"
            >
              <v-select
                v-model="siteData.status"
                :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                :options="statusOptions"
                :clearable="false"
                input-id="status"
              />
              <b-form-invalid-feedback :state="getValidationState(validationContext)">
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>
          
          <hr>
          <h4 class="mt-3">기본정보</h4>
          <!-- URL Address -->
          <validation-provider
            #default="validationContext"
            name="URL Address"
            rules="required"
          >
            <b-form-group
              label="URL Address"
              label-for="url-address"
            >
              <b-form-input
                id="url-address"
                v-model="siteData.address"
                autofocus
                :state="getValidationState(validationContext)"
                trim
                placeholder="mun-island"
              />

              <b-form-invalid-feedback>
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>

          <!-- Sitename -->
          <validation-provider
            #default="validationContext"
            name="Sitename"
            rules="required"
          >
            <b-form-group
              label="Site Name"
              label-for="sitename"
            >
              <b-form-input
                id="sitename"
                v-model="siteData.name"
                :state="getValidationState(validationContext)"
                trim
                placeholder="문섬"
              />

              <b-form-invalid-feedback>
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>

          <!-- Content -->
          <validation-provider
            #default="validationContext"
            name="Content"
          >
            <b-form-group
              label="Description"
              label-for="content"
            >
            <b-form-textarea
              id="content"
              placeholder="설명을 입력하세요"
              v-model="siteData.description"
              rows="3"
            />
            </b-form-group>
          </validation-provider>

          <!-- Total Score -->
          <validation-provider
            #default="validationContext"
            name="adminScore"
            rules="required"
          >
            <b-form-group
              label="해당 사이트 총점"
              label-for="adminScore"
            >
              <b-form-spinbutton
                id="adminScore"
                v-model="siteData.adminScore"
                min="1"
                max="100"
              />
              <b-form-invalid-feedback>
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>

          <hr>
          <h4 class="mt-3">위치정보</h4>
          <!-- Latitude -->
          <validation-provider
            #default="validationContext"
            name="Latitude"
            rules="required"
          >
            <b-form-group
              label="Latitude"
              label-for="latitude"
            >
            <b-form-input
              id="latitude"
              v-model="siteData.latitude"
              :state="getValidationState(validationContext)"
              placeholder="위도 (구글맵 좌측)"
              trim
            />
            <b-form-invalid-feedback>
              {{ validationContext.errors[0] }}
            </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>

           <!-- Longitude -->
          <validation-provider
            #default="validationContext"
            name="Longitude"
            rules="required"
          >
            <b-form-group
              label="Longitude"
              label-for="longitude"
            >
            <b-form-input
              id="longitude"
              v-model="siteData.longitude"
              :state="getValidationState(validationContext)"
              placeholder="경도 (구글맵 우측)"
              trim
            />
            <b-form-invalid-feedback>
              {{ validationContext.errors[0] }}
            </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>
          
          <hr>

          <h4 class="mt-3">이곳은 어떤 곳인가요?</h4>
          <!-- info Visit -->
          <validation-provider
            #default="validationContext"
            name="infoVisit"
          >
            <b-form-group
              label="방문시기"
              label-for="infoVisit"
            >
              <b-form-input
                id="infoVisit"
                v-model="siteData.infoVisit"
                :state="getValidationState(validationContext)"
                max="80"
                trim
              />
            </b-form-group>
          </validation-provider>

          <!-- info Temperature -->
          <validation-provider
            #default="validationContext"
            name="infoTemperature"
          >
            <b-form-group
              label="수온"
              label-for="infoTemperature"
            >
              <b-form-input
                id="infoTemperature"
                v-model="siteData.infoTemperature"
                :state="getValidationState(validationContext)"
                max="80"
                trim
              />
            </b-form-group>
          </validation-provider>

          <!-- info Deep -->
          <validation-provider
            #default="validationContext"
            name="infoDeep"
          >
            <b-form-group
              label="수심"
              label-for="infoDeep"
            >
              <b-form-input
                id="infoDeep"
                v-model="siteData.infoDeep"
                :state="getValidationState(validationContext)"
                max="80"
                trim
              />
            </b-form-group>
          </validation-provider>

          <!-- info Current -->
          <validation-provider
            #default="validationContext"
            name="infoCurrent"
          >
            <b-form-group
              label="해류"
              label-for="infoCurrent"
            >
              <b-form-input
                id="infoCurrent"
                v-model="siteData.infoCurrent"
                :state="getValidationState(validationContext)"
                max="80"
                trim
              />
            </b-form-group>
          </validation-provider>

          <!-- info Sight -->
          <validation-provider
            #default="validationContext"
            name="infoSight"
          >
            <b-form-group
              label="시야"
              label-for="infoSight"
            >
              <b-form-input
                id="infoSight"
                v-model="siteData.infoSight"
                :state="getValidationState(validationContext)"
                max="80"
                trim
              />
            </b-form-group>
          </validation-provider>

          <!-- info Highlight -->
          <validation-provider
            #default="validationContext"
            name="infoHighlight"
          >
            <b-form-group
              label="하이라이트"
              label-for="infoHighlight"
            >
              <b-form-input
                id="infoHighlight"
                v-model="siteData.infoHighlight"
                :state="getValidationState(validationContext)"
                max="80"
                trim
              />
            </b-form-group>
          </validation-provider>

          <hr>
          <h4 class="mt-3">관심사항 (추천에 사용됨)</h4>
          <label>'수중 금강산'같은 별칭을 '관심사항'에 추가</label>
          <b-row
            class="mb-1"
          >
            <b-col md="2" class="pr-0">
              전체
            </b-col>
            <b-col md="10">
              <v-select
                v-model="interestSelectedTotal"
                :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                multiple
                label="title"
                :options="interests.filter(interest => interest.type!='aquaticLife')"
              />
            </b-col>
          </b-row>
          <label>월별관심 사항은 포인트에서 읽어옵니다.</label>
          

          <hr>
          <h4 class="mt-3">스쿠버 지수</h4>

          <!-- Scuba Index -->
          <validation-provider
            #default="validationContext"
            name="scubaIndex"
            rules="required"
          >
            <b-form-group
              label="실시간 지수 (해수부)"
              label-for="scubaIndex"
              :state="getValidationState(validationContext)"
            >
              <v-select
                v-model="siteData.scubaIndex"
                :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                :options="khoaOptions"
                :clearable="false"
                input-id="scubaIndex"
              />
              <b-form-invalid-feedback :state="getValidationState(validationContext)">
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>

          <!-- Sea Temperature -->
          <validation-provider
            #default="validationContext"
            name="seaTemperature"
            rules="required"
          >
            <b-form-group
              label="월별 수온 (seaTemperature)"
              label-for="seaTemperature"
              :state="getValidationState(validationContext)"
            >
              <v-select
                v-model="siteData.seaTemperature"
                :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                :options="seaTempOptions"
                :clearable="false"
                input-id="seaTemperature"
              />
              <b-form-invalid-feedback :state="getValidationState(validationContext)">
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>



          <validation-provider
            #default="validationContext"
          >
            <b-form-group
              label="월별 인기도 (1~3)"
              class="mt-2"
            >
              <div 
                class="d-inline-block mr-1"
                v-for="index in 12"
              >
                <label 
                  :for="'monthlyPopular'+index"
                >{{ index }}월</label><br/>
                <b-form-spinbutton
                  :id="'monthlyPopular'+index"
                  v-model="siteData.monthlyPopular[index]"
                  vertical
                  min="1"
                  max="3"
                />
              </div>
              
            </b-form-group>
          </validation-provider>


          <validation-provider
            #default="validationContext"
          >
            <b-form-group
              label="월별 날씨 (1:해, 2:구름, 3:비, 4:강한비)"
              class="mt-3"
            >
              <div 
                class="d-inline-block mr-1"
                v-for="index in 12"
              >
                <label
                  :for="'monthlyWeather'+index"
                >{{ index }}월</label><br/>
                <b-form-spinbutton
                  :id="'monthlyWeather'+index"
                  v-model="siteData.monthlyWeather[index]"
                  vertical
                  min="1"
                  max="3"
                />
              </div>
            </b-form-group>
          </validation-provider>
          
          
          <hr>
          <h4 class="mt-3">배경 이미지</h4>

          <validation-provider
            #default="validationContext"
            name="backgroundImages"
            rules="required"
          >
            <b-form-group
            >
              <!-- Row Loop -->
              <b-row
                v-for="(item, index) in backgroundItems"
                :id="item.id"
                :key="item.id"
                ref="row"
                >

                <!-- File -->
                <b-col md="4" class="pr-0">
                    <b-form-group
                    label="파일"
                    :label-for="'backgroundImagesFile' + index"
                    >
                    <b-form-file
                        :id="'backgroundImagesFile' + index"
                        v-model="backgroundImagesFile[index]"
                        placeholder="Choose or drop"
                        drop-placeholder="Drop here"
                        accept=".jpg,.jpeg,.png"
                    />
                    </b-form-group>
                </b-col>

                <!-- File Reference -->
                <b-col md="3" class="pr-0">
                    <b-form-group
                    label="출처"
                    label-for="backgroundImagesRef"
                    >
                    <b-form-input
                        id="backgroundImagesRef"
                        type="text"
                        placeholder=""
                    />
                    </b-form-group>
                </b-col>

                <!-- File Name -->
                <b-col md="4" class="pr-0">
                    <b-form-group
                    label="이름"
                    label-for="backgroundImagesName"
                    >
                    <b-form-input
                        id="backgroundImagesRef"
                        type="text"
                        placeholder=""
                    />
                    </b-form-group>
                </b-col>

               

                <!-- Remove Button -->
                <b-col
                    md="1"
                    class="mb-50"
                >
                    <b-button
                    variant="flat-danger"
                    class="mt-0 mt-md-2 pl-0 pr-0"
                    @click="backgroundRemoveItem(index)"
                    >
                    <feather-icon
                        icon="XIcon"
                        class="mr-25"
                    />
                    </b-button>
                </b-col>
                <b-col cols="12">
                    <hr class="mt-0" style="border-top: 1px dashed #ebe9f1 !important;">
                </b-col>
              </b-row>
              <b-button
                v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                variant="flat-primary"
                @click="backgroundRepeateAgain"
                >
                <feather-icon
                    icon="PlusIcon"
                    class="mr-25"
                />
                <span>Add New Background Image</span>
              </b-button>
              <b-form-invalid-feedback>
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>



          <hr>
        
          <h4 class="mt-3">유튜브 영상</h4>
          <validation-provider
            #default="validationContext"
            name="youtubeVideoIds"
            rules="required"
          >
            <b-form-group
            >
              <!-- Row Loop -->
              <b-row
                v-for="(item, index) in youtubeItems"
                :id="item.id"
                :key="item.id"
                ref="row"
                >

                <!-- Video ID -->
                <b-col md="11" class="pr-0">
                    <b-form-group
                    label="유튜브 코드"
                    label-for="youtubeVideoId"
                    >
                    <b-form-input
                        id="youtubeVideoId"
                        type="text"
                        placeholder="11자리 입력"
                    />
                    </b-form-group>
                </b-col>

                <!-- Remove Button -->
                <b-col
                    md="1"
                    class="mb-50"
                >
                    <b-button
                    variant="flat-danger"
                    class="mt-0 mt-md-2 pl-0 pr-0"
                    @click="youtubeRemoveItem(index)"
                    >
                    <feather-icon
                        icon="XIcon"
                        class="mr-25"
                    />
                    </b-button>
                </b-col>
                <b-col cols="12">
                    <hr class="mt-0" style="border-top: 1px dashed #ebe9f1 !important;">
                </b-col>
              </b-row>
              <b-button
                v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                variant="flat-primary"
                @click="youtubeRepeateAgain"
                >
                <feather-icon
                    icon="PlusIcon"
                    class="mr-25"
                />
                <span>Add New Youtube Video</span>
              </b-button>
              <b-form-invalid-feedback>
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>



          <hr>
        
          <h4 class="mt-3">참고 사이트</h4>
          <validation-provider
            #default="validationContext"
            name="referenceUrls"
            rules="required"
          >
            <b-form-group
            >
              <!-- Row Loop -->
              <b-row
                v-for="(item, index) in referenceItems"
                :id="item.id"
                :key="item.id"
                ref="row"
                >

                <!-- Video ID -->
                <b-col md="11" class="pr-0">
                    <b-form-group
                    label="URL"
                    label-for="referenceUrl"
                    >
                    <b-form-input
                        id="referenceUrl"
                        type="text"
                        placeholder="실제 사이트에는 보이지 않음"
                    />
                    </b-form-group>
                </b-col>

                <!-- Remove Button -->
                <b-col
                    md="1"
                    class="mb-50"
                >
                    <b-button
                    variant="flat-danger"
                    class="mt-0 mt-md-2 pl-0 pr-0"
                    @click="referenceRemoveItem(index)"
                    >
                    <feather-icon
                        icon="XIcon"
                        class="mr-25"
                    />
                    </b-button>
                </b-col>
                <b-col cols="12">
                    <hr class="mt-0" style="border-top: 1px dashed #ebe9f1 !important;">
                </b-col>
              </b-row>
              <b-button
                v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                variant="flat-primary"
                @click="referenceRepeateAgain"
                >
                <feather-icon
                    icon="PlusIcon"
                    class="mr-25"
                />
                <span>Add New Reference URL</span>
              </b-button>
              <b-form-invalid-feedback>
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>



          <hr>
        
          <h4 class="mt-3">메모</h4>
          <!-- Memo -->
          <validation-provider
            #default="validationContext"
            name="memo"
          >
            <b-form-group
            >
            <b-form-textarea
              id="content"
              placeholder="나중에 OOO입력필요"
              v-model="siteData.memo"
              rows="3"
            />
            </b-form-group>
          </validation-provider>





          <!-- Form Actions -->
          <div class="d-flex mt-2">
            <b-button
              v-ripple.400="'rgba(255, 255, 255, 0.15)'"
              variant="primary"
              class="mr-2"
              type="submit"
            >
              Add
            </b-button>
            <b-button
              v-ripple.400="'rgba(186, 191, 199, 0.15)'"
              type="button"
              variant="outline-secondary"
              @click="hide"
            >
              Cancel
            </b-button>
          </div>

        </b-form>
      </validation-observer>
    </template>
  </b-sidebar>
</template>

<script>
import {
  BRow, BCol, BSidebar, BForm, BFormGroup, BFormInput, BFormInvalidFeedback, BButton, BFormTextarea, BFormSpinbutton, BFormFile, 
} from 'bootstrap-vue'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import { ref } from '@vue/composition-api'
import { required, alphaNum } from '@validations'
import formValidation from '@core/comp-functions/forms/form-validation'
import Ripple from 'vue-ripple-directive'
import vSelect from 'vue-select'
import store from '@/store'
import gql from 'graphql-tag'

const GET_INTERESTS = gql`
    query GetInerests {
        interests {
            _id
            title
            type
            iconType
            iconName
            iconUrl
            iconColor
        }
    }
`;

export default {
  components: {
    BRow,
    BCol,
    BSidebar,
    BForm,
    BFormGroup,
    BFormInput,
    BFormInvalidFeedback,
    BButton,
    vSelect,
    BFormTextarea,
    BFormSpinbutton,
    BFormFile,

    // Form Validation
    ValidationProvider,
    ValidationObserver,
  },
  directives: {
    Ripple,
  },
  model: {
    prop: 'isAddNewSiteSidebarActive',
    event: 'update:is-add-new-site-sidebar-active',
  },
  props: {
    isAddNewSiteSidebarActive: {
      type: Boolean,
      required: true,
    },
    countryOptions: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      required,
      alphaNum,
      statusOptions: ['pending', 'active', 'inactive', 'deleted',],
      khoaOptions : ['동명항', '남애항', '강문해변', '오산항', '울릉도', '월포해수욕장', '구조리해수욕장', '미조도', '거문도', '홍도', '제주-성산일출봉', '제주-어멍(북부)', '제주-문섬'],
      seaTempOptions: ['강릉 (강원도)/kang-neung', '속초 (강원도)/sogcho', '동해 (강원도)/tonghae', '인천/incheon', '고양 (왜있지)/goyang', '안산 (경기도)/ansan', '화성 (경기도)/hwaseong', '포항/hoko', '울산/ulsan', '부산/busan', '진해 (창원)/chinhae', '마산/masan', '거제/kyosai', '여수/reisui', '순천/sunchun', '군산 (전라북도)/kunsan', '목포 (전라남도)/moppo', '신안 (전라남도)/sinan', '태안 (충청남도)/taesal-li', '제주-어영(북서부)/gaigeturi', '제주-제주시(북부)/jeju'],
      backgroundItems: [],
      youtubeItems: [],
      referenceItems: [],
      nextTodoId: 2,
      backgroundImagesFile: [],
      interestSelectedTotal: [],
      interestSelected: [],
      interests: []
    }
  },
  apollo: {
    interests: {
        query: GET_INTERESTS
    }
  },
  setup(props, { emit }) {
    const blankSiteData = {
      status: 'inactive',
      address: '',
      name: '',
      description: '',
      adminScore: 70,

      latitude: '',
      longitude: '',
      infoVisit: '',
      infoTemperature: '',
      infoDeep: '',
      infoCurrent: '',
      infoSight: '',
      infoHighlight: '',
      scubaIndex: '',
      seaTemperature: '',
      monthlyPopular: [0, 2, 1, 1, 1, 2, 3, 3, 3, 3, 2, 1, 1],
      monthlyWeather: [0, 2, 2, 2, 2, 2, 2, 1, 3, 3, 2, 2, 2],
      monthlyWeather1: 2,
      monthlyWeather2: 2,
      monthlyWeather3: 2,
      monthlyWeather4: 2,
      monthlyWeather5: 2,
      monthlyWeather6: 2,
      monthlyWeather7: 1,
      monthlyWeather8: 3,
      monthlyWeather9: 3,
      monthlyWeather10: 2,
      monthlyWeather11: 2,
      monthlyWeather12: 2,
      backgroundImagesFile: null,
      memo: '',
    }

    const siteData = ref(JSON.parse(JSON.stringify(blankSiteData)))
    const resetSiteData = () => {
      siteData.value = JSON.parse(JSON.stringify(blankSiteData))
    }

    const onSubmit = () => {
      store.dispatch('app-site/addSite', siteData.value)
        .then(() => {
          emit('refetch-data')
          emit('update:is-add-new-site-sidebar-active', false)
        })
    }

    const {
      refFormObserver,
      getValidationState,
      resetForm,
    } = formValidation(resetSiteData)

    return {
      siteData,
      onSubmit,

      refFormObserver,
      getValidationState,
      resetForm,
    }
  },
  methods: {
    backgroundRepeateAgain() {
      this.backgroundItems.push({
        id: this.nextTodoId += this.nextTodoId,
      })

      this.$nextTick(() => {
        //this.trAddHeight(this.$refs.row[0].offsetHeight)
      })
    },
    backgroundRemoveItem(index) {
      this.backgroundItems.splice(index, 1)
      //this.trTrimHeight(this.$refs.row[0].offsetHeight)
    },


    youtubeRepeateAgain() {
      this.youtubeItems.push({
        id: this.nextTodoId += this.nextTodoId,
      })

      this.$nextTick(() => {
        //this.trAddHeight(this.$refs.row[0].offsetHeight)
      })
    },
    youtubeRemoveItem(index) {
      this.youtubeItems.splice(index, 1)
      //this.trTrimHeight(this.$refs.row[0].offsetHeight)
    },
    
    
    referenceRepeateAgain() {
      this.referenceItems.push({
        id: this.nextTodoId += this.nextTodoId,
      })

      this.$nextTick(() => {
        //this.trAddHeight(this.$refs.row[0].offsetHeight)
      })
    },
    referencRemoveItem(index) {
      this.referenceItems.splice(index, 1)
      //this.trTrimHeight(this.$refs.row[0].offsetHeight)
    },
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';

#add-new-site-sidebar {
  .vs__dropdown-menu {
    max-height: 200px !important;
  }
}
</style>
