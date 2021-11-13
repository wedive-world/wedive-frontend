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
            name="publishStatus"
            rules="required"
          >
            <b-form-group
              label="상태선택"
              label-for="publishStatus"
              :state="getValidationState(validationContext)"
            >
              <v-select
                v-model="siteData.publishStatus"
                :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                :options="statusOptions"
                :clearable="false"
                input-id="publishStatus"
              />
              <b-form-invalid-feedback :state="getValidationState(validationContext)">
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>
          
          <hr>
          <h4 class="mt-3">기본정보</h4>
          <!-- URL -->
          <validation-provider
            #default="validationContext"
            name="URL"
            rules="required"
          >
            <b-form-group
              label="URL"
              label-for="url"
            >
              <b-form-input
                id="url"
                v-model="siteData.uniqueName"
                autofocus
                :state="getValidationState(validationContext)"
                trim
                placeholder="yangyang"
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
                placeholder="양양"
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
              <b-form-input
                id="adminScore"
                v-model="siteData.adminScore"
                min="1"
                max="100"
                type="number"
                trim
                placeholder="양양"
              />

              <b-form-invalid-feedback>
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>

          <hr>
          <!-- waterEnvironment Score -->
          <validation-provider
            #default="validationContext"
            name="waterEnvironmentScore"
            rules="required"
          >
            <b-form-group
              label="환경 점수 (초기점수)"
              label-for="waterEnvironmentScore"
            >
              <b-form-input
                id="waterEnvironmentScore"
                v-model="siteData.waterEnvironmentScore"
                min="1"
                max="100"
                type="number"
                trim
                placeholder="양양"
              />

              <b-form-invalid-feedback>
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>
          <!-- flowRate Score -->
          <validation-provider
            #default="validationContext"
            name="flowRateScore"
            rules="required"
          >
            <b-form-group
              label="유속 점수 (초기점수)"
              label-for="flowRateScore"
            >
              <b-form-input
                id="flowRateScore"
                v-model="siteData.flowRateScore"
                min="1"
                max="100"
                type="number"
                trim
                placeholder="양양"
              />

              <b-form-invalid-feedback>
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>
          <!-- eyeSight Score -->
          <validation-provider
            #default="validationContext"
            name="eyeSightScore"
            rules="required"
          >
            <b-form-group
              label="시야 점수 (초기점수)"
              label-for="eyeSightScore"
            >
              <b-form-input
                id="eyeSightScore"
                v-model="siteData.eyeSightScore"
                min="1"
                max="100"
                type="number"
                trim
                placeholder="양양"
              />

              <b-form-invalid-feedback>
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>

          <b-row
            class=""
          >
            <b-col md="6" class="">
              <!-- minSight meter -->
              <validation-provider
                #default="validationContext"
                name="minSight"
                rules="required"
              >
                <b-form-group
                  label="시야 최저m (초기값)"
                  label-for="minSight"
                >
                  <b-form-input
                    id="minSight"
                    v-model="siteData.minSight"
                    min="1"
                    max="100"
                    type="number"
                    trim
                    placeholder="양양"
                  />

                  <b-form-invalid-feedback>
                    {{ validationContext.errors[0] }}
                  </b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>
            </b-col>
            <b-col md="6" class="">
                  <!-- maxSight meter -->
              <validation-provider
                #default="validationContext"
                name="maxSight"
                rules="required"
              >
                <b-form-group
                  label="시야 최고m (초기값)"
                  label-for="maxSight"
                >
                  <b-form-input
                    id="maxSight"
                    v-model="siteData.maxSight"
                    min="1"
                    max="100"
                    type="number"
                    trim
                    placeholder="양양"
                  />

                  <b-form-invalid-feedback>
                    {{ validationContext.errors[0] }}
                  </b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>
            </b-col>
          </b-row>

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
            name="visitTimeDescription"
          >
            <b-form-group
              label="방문시기"
              label-for="visitTimeDescription"
            >
              <b-form-input
                id="visitTimeDescription"
                v-model="siteData.visitTimeDescription"
                :state="getValidationState(validationContext)"
                max="80"
                trim
              />
            </b-form-group>
          </validation-provider>

          <!-- info Temperature -->
          <validation-provider
            #default="validationContext"
            name="waterTemperatureDescription"
          >
            <b-form-group
              label="수온"
              label-for="waterTemperatureDescription"
            >
              <b-form-input
                id="waterTemperatureDescription"
                v-model="siteData.waterTemperatureDescription"
                :state="getValidationState(validationContext)"
                max="80"
                trim
              />
            </b-form-group>
          </validation-provider>

          <!-- info Deep -->
          <validation-provider
            #default="validationContext"
            name="deepDescription"
          >
            <b-form-group
              label="수심"
              label-for="deepDescription"
            >
              <b-form-input
                id="deepDescription"
                v-model="siteData.deepDescription"
                :state="getValidationState(validationContext)"
                max="80"
                trim
              />
            </b-form-group>
          </validation-provider>

          <!-- info Current -->
          <validation-provider
            #default="validationContext"
            name="waterFlowDescription"
          >
            <b-form-group
              label="해류"
              label-for="waterFlowDescription"
            >
              <b-form-input
                id="waterFlowDescription"
                v-model="siteData.waterFlowDescription"
                :state="getValidationState(validationContext)"
                max="80"
                trim
              />
            </b-form-group>
          </validation-provider>

          <!-- info Sight -->
          <validation-provider
            #default="validationContext"
            name="eyeSightDescription"
          >
            <b-form-group
              label="시야"
              label-for="eyeSightDescription"
            >
              <b-form-input
                id="eyeSightDescription"
                v-model="siteData.eyeSightDescription"
                :state="getValidationState(validationContext)"
                max="80"
                trim
              />
            </b-form-group>
          </validation-provider>

          <!-- info Highlight -->
          <validation-provider
            #default="validationContext"
            name="highlightDescription"
          >
            <b-form-group
              label="하이라이트"
              label-for="highlightDescription"
            >
              <b-form-input
                id="highlightDescription"
                v-model="siteData.highlightDescription"
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
                :options="interestData.filter(interest => interest.type!='aquaticLife')"
              >
              <template slot="option" slot-scope="option">
                {{ option.title }} ({{option.type}})
              </template>
              </v-select>
            </b-col>
          </b-row>
          <label>월별관심 사항은 포인트에서 읽어옵니다.</label>
          

          <hr>
          <h4 class="mt-3">스쿠버 지수</h4>

          <!-- Scuba Index -->
          <validation-provider
            name="scubaIndex"
          >
            <b-form-group
              label="실시간 지수 (해수부)"
              label-for="scubaIndex"
            >
              <v-select
                disabled
                v-model="siteData.scubaIndex"
                :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                :options="khoaOptions"
                :clearable="false"
                input-id="scubaIndex"
              />
            </b-form-group>
          </validation-provider>

          <!-- Sea Temperature -->
          <validation-provider
            name="seaTemperature"
          >
            <b-form-group
              label="월별 수온 (seaTemperature)"
              label-for="seaTemperature"
            >
              <v-select
                disabled
                v-model="siteData.seaTemperature"
                :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                :options="seaTempOptions"
                :clearable="false"
                input-id="seaTemperature"
              />
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
                    :label-for="'backgroundImages' + index"
                    >
                    <b-form-file
                        :id="'backgroundImages' + index"
                        v-model="backgroundImages[index]"
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
                        v-model="backgroundImageRef[index]"
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
                        v-model="backgroundImageName[index]"
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
                :id="'youtubeVideoIds'+index"
                :key="'youtubeVideoIds'+index"
                ref="youtubeRow"
                >

                <!-- Video ID -->
                <b-col md="11" class="pr-0">
                    <b-form-group
                    label="유튜브 코드"
                    :label-for="'youtubeVideoId'+index"
                    >
                    <b-form-input
                        :id="'youtubeVideoId'+index"
                        type="text"
                        v-model="siteData.youtubeVideoIds[index]"
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
                :id="'referenceItems'+index"
                :key="'referenceItems'+index"
                ref="referenceRow"
                >

                <!-- Video ID -->
                <b-col md="11" class="pr-0">
                    <b-form-group
                    label="URL"
                    :label-for="'referenceUrl'+index"
                    >
                    <b-form-input
                        :id="'referenceUrl'+index"
                        type="text"
                        v-model="siteData.referenceUrls[index]"
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
              @click="submitClick"
            >
              {{ submitText }}
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
const { upsertDiveSite } = require('@/wedive-frontend-graphql/dive-site-service')
const { uploadSingleImage, updateImage, getImageUrl } = require('@/wedive-frontend-graphql/image-service')

const enumPopularity = ["nothing", "unrecommended", "soso", "popular"];
const enumClimate = ["nothing", "sunny", "cloudy", "rain", "heavyRain"];
const blankSiteData = {
  _id: null,
  address: '',
  latitude: '',
  longitude: '',
  countryCode: 'kr',
  name: '',
  uniqueName: '',
  description: '',
  images: [],
  backgroundImages: [],
  youtubeVideoIds: [],
  referenceUrls: [],
  memo: '',
  publishStatus: 'inactive',
  month1: [],
  month2: [],
  month3: [],
  month4: [],
  month5: [],
  month6: [],
  month7: [],
  month8: [],
  month9: [],
  month10: [],
  month11: [],
  month12: [],
  waterTemperatureScore: 0,
  adminScore: 70,
  eyeSightScore: 50,
  flowRateScore: 50,
  waterEnvironmentScore: 50,
  minSight: 0,
  maxSight: 0,
  visitTimeDescription: '',
  waterTemperatureDescription: '',
  deepDescription: '',
  waterFlowDescription: '',
  eyeSightDescription: '',
  highlightDescription: '',
  
  
  
  
  
  scubaIndex: '',
  seaTemperature: '',
  monthlyPopular: [0, 2, 1, 1, 1, 2, 3, 3, 3, 3, 2, 1, 1],
  monthlyWeather: [0, 2, 2, 2, 2, 2, 2, 1, 3, 3, 2, 2, 2],
};


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
    interestData: {
      type: Array,
      required: true,
    },
    /*siteData: {
      type: Object,
      required: true,
    },*/
  },
  data() {
    return {
      interest_types: [],
      required,
      alphaNum,
      statusOptions: ['pending', 'active', 'inactive', 'deleted',],
      khoaOptions : ['동명항', '남애항', '강문해변', '오산항', '울릉도', '월포해수욕장', '구조리해수욕장', '미조도', '거문도', '홍도', '제주-성산일출봉', '제주-어멍(북부)', '제주-문섬'],
      seaTempOptions: ['강릉 (강원도)/kang-neung', '속초 (강원도)/sogcho', '동해 (강원도)/tonghae', '인천/incheon', '고양 (왜있지)/goyang', '안산 (경기도)/ansan', '화성 (경기도)/hwaseong', '포항/hoko', '울산/ulsan', '부산/busan', '진해 (창원)/chinhae', '마산/masan', '거제/kyosai', '여수/reisui', '순천/sunchun', '군산 (전라북도)/kunsan', '목포 (전라남도)/moppo', '신안 (전라남도)/sinan', '태안 (충청남도)/taesal-li', '제주-어영(북서부)/gaigeturi', '제주-제주시(북부)/jeju'],
      backgroundItems: [],
      youtubeItems: [],
      referenceItems: [],
      nextImageId: 1,
      backgroundImages: [],
      backgroundImageRef: [],
      backgroundImageName: [],
      interestSelectedTotal: [],
      interestSelected: [],
      submitText: 'Add',
    }
  },
  setup(props, { emit }) {
    const siteData = JSON.parse(JSON.stringify(blankSiteData))
    const resetSiteData = () => {
      //siteData = JSON.parse(JSON.stringify(blankSiteData))
    }

    const onSubmit = () => {
      /*store.dispatch('app-site/addSite', siteData)
        .then(() => {
          emit('refetch-data')
          emit('update:is-add-new-site-sidebar-active', false)
        })*/
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
    setSiteData: function(_data) {
      for (var key in this.siteData) {
        if (_data[key]) {
          if (key.includes('month')) {
            if (_data[key] != null) {
              _data[key].map((item, index) => {
                if (item.type == 'climate') {
                  this.siteData.monthlyWeather[index+1] = enumClimate.findIndex((climate) => climate === item.title);
                } else if (item.type == 'popularity') {
                  this.siteData.monthlyPopular[index+1] = enumPopularity.findIndex((popularity) => popularity === item.title)
                }
              })
            }
          } else if (key == 'backgroundImages') {
            _data[key].map(image=>{
              this.backgroundItems.push({
                id: image._id
              })
              this.nextImageId += this.nextImageId;
              this.backgroundImages.push(new File([""], (image.name == null) ? '' : image.name));
              this.backgroundImageRef.push((image.reference == null) ? '' : image.reference);
              this.backgroundImageName.push((image.description == null) ? '' : image.description);
            });
            this.siteData[key] = _data[key];
          } else {
            this.siteData[key] = _data[key];
          }
        }
      }
      
      this.youtubeItems = [];
      _data.youtubeVideoIds.map(()=>{this.youtubeItems.push('')});
      this.referenceItems = [];
      _data.referenceUrls.map(()=>{this.referenceItems.push('')});
      this.submitText = 'Update';


      // 인기도 및 날씨정보
      {
        var popular_id = this.interestData.filter(interest=>interest.type=='popularity' && interest.title=='popular')[0]._id
        var soso_id = this.interestData.filter(interest=>interest.type=='popularity' && interest.title=='soso')[0]._id
        var unrecommended_id = this.interestData.filter(interest=>interest.type=='popularity' && interest.title=='unrecommended')[0]._id
        var popularity_id_list = {};
        popularity_id_list[popular_id] = 3;
        popularity_id_list[soso_id] = 2;
        popularity_id_list[unrecommended_id] = 1;

        var sunny_id = this.interestData.filter(interest=>interest.type=='climate' && interest.title=='sunny')[0]._id
        var cloudy_id = this.interestData.filter(interest=>interest.type=='climate' && interest.title=='cloudy')[0]._id
        var rain_id = this.interestData.filter(interest=>interest.type=='climate' && interest.title=='rain')[0]._id
        var heavyRain_id = this.interestData.filter(interest=>interest.type=='climate' && interest.title=='heavyRain')[0]._id
        var climate_id_list = {};
        climate_id_list[sunny_id] = 1;
        climate_id_list[cloudy_id] = 2;
        climate_id_list[rain_id] = 3;
        climate_id_list[heavyRain_id] = 4;
        
        for (var i=1; i<13; i++) {
          for (var j=0; j<_data["month"+i].length; j++) {
            var _id = _data["month"+i][j]._id;
            if (popularity_id_list.hasOwnProperty(_id)) {
              this.siteData.monthlyPopular[i] = popularity_id_list[_id];
            }
            if (climate_id_list.hasOwnProperty(_id)) {
              this.siteData.monthlyWeather[i] = climate_id_list[_id];
            }
          }
        }
      }

      // 전체 인터레스트
      {
        _data.interests.map(interest => {
          this.interestSelectedTotal.push(interest);
        })
      }
      
      
    },
    backgroundRepeateAgain() {
      this.backgroundItems.push({
        id: this.nextImageId += this.nextImageId,
      })
    },
    backgroundRemoveItem(index) {
      var _id = this.backgroundItems[index].id;
      this.backgroundItems.splice(index, 1);
      
      if (_id.length > 20) {
        this.backgroundImages.splice(index, 1);
        this.backgroundImageRef.splice(index, 1);
        this.backgroundImageName.splice(index, 1);
        try {
          for (var i=0; i<this.siteData.backgroundImages.length; i++) {
            if (this.siteData.backgroundImages[i]._id == _id) {
              this.siteData.backgroundImages.splice(i, 1);
            }
          }
        } catch (e) {console.log(e)};
      }
    },


    youtubeRepeateAgain() {
      this.youtubeItems.push('');
      this.siteData.youtubeVideoIds.push('');
    },
    youtubeRemoveItem(index) {
      this.youtubeItems.splice(index, 1)
      this.siteData.youtubeVideoIds.splice(index, 1)
    },
    referenceRepeateAgain() {
      this.referenceItems.push('');
      this.siteData.referenceUrls.push('');
    },
    referenceRemoveItem(index) {
      this.referenceItems.splice(index, 1);
      this.siteData.referenceUrls.splice(index, 1);
    },
    async submitClick() {
      var _siteData = JSON.parse(JSON.stringify(this.siteData));
      if (_siteData.latitude == '' || _siteData.longitude == '') {
        this.$swal({
          title: 'Error!',
          text: 'Please input latitude and longitude!!',
          icon: 'error',
          customClass: {
            confirmButton: 'btn btn-primary',
          },
          buttonsStyling: false,
        })
        return false;
      }
      _siteData.latitude = parseFloat(_siteData.latitude);
      _siteData.longitude = parseFloat(_siteData.longitude);
      
      // 백그라운드 이미지
      {
        // background Images for just id
        var _id_list = [];
        for (var i=0; i<_siteData.backgroundImages.length; i++) {
          if (_siteData.backgroundImages[i].hasOwnProperty("_id")) {
            var _id = _siteData.backgroundImages[i]._id;
            _id_list.push(_id);
          }
        }
        delete _siteData.backgroundImages;
        _siteData.backgroundImages = _id_list;

        // upload background image
        for (var i=0; i<this.backgroundImages.length; i++) {
          var image = this.backgroundImages[i];
          var _id = _siteData.backgroundImages[i];
          if (_id == null) {
            var result = await uploadSingleImage(image);
            _id = result.uploadImage._id;
            _siteData.backgroundImages.push(_id);
          }
          var result2 = await updateImage({_id: _id, reference: this.backgroundImageRef[i], name: image.name, description: this.backgroundImageName[i], uploaderId: 'apneaofficer'})
        }
      }

      // 월별 인기도 및 날씨 정보 입력
      {
        var popular_id = this.interestData.filter(interest=>interest.type=='popularity' && interest.title=='popular')[0]._id
        var soso_id = this.interestData.filter(interest=>interest.type=='popularity' && interest.title=='soso')[0]._id
        var unrecommended_id = this.interestData.filter(interest=>interest.type=='popularity' && interest.title=='unrecommended')[0]._id
        var popularity_id_list = {popular_id: popular_id, soso_id: soso_id, unrecommended_id: unrecommended_id};

        var sunny_id = this.interestData.filter(interest=>interest.type=='climate' && interest.title=='sunny')[0]._id
        var cloudy_id = this.interestData.filter(interest=>interest.type=='climate' && interest.title=='cloudy')[0]._id
        var rain_id = this.interestData.filter(interest=>interest.type=='climate' && interest.title=='rain')[0]._id
        var heavyRain_id = this.interestData.filter(interest=>interest.type=='climate' && interest.title=='heavyRain')[0]._id
        var climate_id_list = {sunny_id: sunny_id, cloudy_id: cloudy_id, rain_id: rain_id, heavyRain_id: heavyRain_id};
        var arr_popularity_climate = [popular_id, soso_id, unrecommended_id, sunny_id, cloudy_id, rain_id, heavyRain_id];

        for (var i=1; i<13; i++) {
          var _id_list = [];
          for (var j=0; j<_siteData["month" + i].length; j++) {
            if (typeof(_siteData["month" + i][j] == 'object')) {
              if (arr_popularity_climate.includes(_siteData["month" + i][j]._id) == false)
                _id_list.push(_siteData["month" + i][j]._id);
            }
          }
          delete _siteData["month" + i];
          _siteData["month" + i] = _id_list;
        }

        _siteData.latitude = parseFloat(_siteData.latitude);
        _siteData.longitude = parseFloat(_siteData.longitude);
        

        _siteData.monthlyPopular.map((pop, index) => {
          if (pop != 0) { // skip 0
            _siteData["month"+index].push(popularity_id_list[enumPopularity[pop]+'_id'])
          }
        })

        _siteData.monthlyWeather.map((cli, index) => {
          if (cli != 0) { // skip 0
            _siteData["month"+index].push(climate_id_list[enumClimate[cli]+'_id'])
          }
        })
      }
      
      // 전체 인터레스트 입력
      _siteData.interests = [];
      this.interestSelectedTotal.map(interest => {
        _siteData.interests.push(interest._id);
      })
      

      if (_siteData._id == null) delete _siteData._id;
      delete _siteData.scubaIndex;
      delete _siteData.seaTemperature;

      delete _siteData.monthlyPopular;
      delete _siteData.monthlyWeather;

      
      try {
        _siteData.adminScore = parseInt(_siteData.adminScore);
        _siteData.eyeSightScore = parseInt(_siteData.eyeSightScore);
        _siteData.flowRateScore = parseInt(_siteData.flowRateScore);
        _siteData.waterEnvironmentScore = parseInt(_siteData.waterEnvironmentScore);
        _siteData.minSight = parseInt(_siteData.minSight);
        _siteData.maxSight = parseInt(_siteData.maxSight);
        await upsertDiveSite(_siteData);
      } catch (e) {
        this.$swal({
          title: 'Error!',
          text: e,
          icon: 'error',
          customClass: {
            confirmButton: 'btn btn-primary',
          },
          buttonsStyling: false,
        })
      }
      
      this.$emit('update:is-add-new-site-sidebar-active', false)
      this.siteData = JSON.parse(JSON.stringify(blankSiteData));
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
