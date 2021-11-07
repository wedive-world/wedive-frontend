<template>
  <b-sidebar
    id="add-new-center-sidebar"
    :visible="isAddNewCenterSidebarActive"
    bg-variant="white"
    sidebar-class="sidebar-lg"
    shadow
    backdrop
    no-header
    right
    @hidden="resetForm"
    @change="(val) => $emit('update:is-add-new-center-sidebar-active', val)"
  >
    <template #default="{ hide }">
      <!-- Header -->
      <div class="d-flex justify-content-between align-items-center content-sidebar-header px-2 py-1">
        <h5 class="mb-0">
          Add New Center
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
                v-model="centerData.publishStatus"
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
                v-model="centerData.address"
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

          <!-- Center name -->
          <validation-provider
            #default="validationContext"
            name="Centername"
            rules="required"
          >
            <b-form-group
              label="Center Name"
              label-for="centername"
            >
              <b-form-input
                id="centername"
                v-model="centerData.name"
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
              v-model="centerData.description"
              rows="3"
            />
            </b-form-group>
          </validation-provider>

          <br/>

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
                v-model="centerData.adminScore"
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

          <!-- View Score -->
          <validation-provider
            #default="validationContext"
            name="viewScore"
            rules="required"
          >
            <b-form-group
              label="경치 총점"
              label-for="viewScore"
            >
              <b-form-input
                id="viewScore"
                v-model="centerData.viewScore"
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

          <!-- Education Score -->
          <validation-provider
            #default="validationContext"
            name="educationScore"
            rules="required"
          >
            <b-form-group
              label="교육 총점"
              label-for="educationScore"
            >
              <b-form-input
                id="educationScore"
                v-model="centerData.educationScore"
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

          <!-- Facility Score -->
          <validation-provider
            #default="validationContext"
            name="facilityScore"
            rules="required"
          >
            <b-form-group
              label="시설 총점"
              label-for="facilityScore"
            >
              <b-form-input
                id="facilityScore"
                v-model="centerData.facilityScore"
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

          <!-- Service Score -->
          <validation-provider
            #default="validationContext"
            name="serviceScore"
            rules="required"
          >
            <b-form-group
              label="서비스 총점"
              label-for="serviceScore"
            >
              <b-form-input
                id="serviceScore"
                v-model="centerData.serviceScore"
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







          <br/>
          <!-- 전화번호 -->
          <validation-provider
            #default="validationContext"
            name="phoneNumber"
            rules="required"
          >
            <b-form-group
              label="전화번호"
              label-for="phoneNumber"
            >
              <b-form-input
                id="phoneNumber"
                v-model="centerData.phoneNumber"
                type="text"
                trim
                placeholder="02-1234-1234"
              />

              <b-form-invalid-feedback>
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>

          <!-- 전화번호 -->
          <validation-provider
            #default="validationContext"
            name="geoAddress"
            rules="required"
          >
            <b-form-group
              label="주소"
              label-for="geoAddress"
            >
              <b-form-input
                id="geoAddress"
                v-model="centerData.geoAddress"
                type="text"
                trim
                placeholder="서울특별시 송파구 올림픽로 25 종합운동장"
              />

              <b-form-invalid-feedback>
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>

          <!-- 홈페이지 -->
          <validation-provider
            #default="validationContext"
            name="webPageUrl"
            rules="required"
          >
            <b-form-group
              label="홈페이지"
              label-for="webPageUrl"
            >
              <b-form-input
                id="webPageUrl"
                v-model="centerData.webPageUrl"
                type="text"
                trim
                placeholder="https://kua.or.kr/"
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
              v-model="centerData.latitude"
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
              v-model="centerData.longitude"
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

          <h4 class="mt-3">Wedive's comments</h4>
          <validation-provider
            #default="validationContext"
            name="wedivesCommentUrls"
            rules="required"
          >
            <b-form-group
            >
              <!-- Row Loop -->
              <b-row
                v-for="(item, index) in wedivesCommentItems"
                :id="'wedivesCommentItems'+index"
                :key="'wedivesCommentItems'+index"
                ref="wedivesCommentRow"
                >

                <!-- Video ID -->
                <b-col md="11" class="pr-0">
                    <b-form-group
                    label="Comment"
                    :label-for="'wedivesComment'+index"
                    >
                    <b-form-input
                        :id="'wedivesComment'+index"
                        type="text"
                        v-model="centerData.wediveComments[index]"
                        placeholder="대한민국에서 가장 수중환경이 뛰어난 제주 남부 다이빙 사이트 근처에 있습니다."
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
                    @click="wedivesCommentRemoveItem(index)"
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
                @click="wedivesCommentRepeateAgain"
                >
                <feather-icon
                    icon="PlusIcon"
                    class="mr-25"
                />
                <span>Add New Wedive's comment</span>
              </b-button>
              <b-form-invalid-feedback>
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>
          

          <hr>
          <h4 class="mt-3">관심사항 (추천에 사용됨)</h4>
          <label>'실내수영장'인 경우 필수적으로 추가 필요</label>
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


          <b-row
            class="mb-1"
          >
            <b-col md="2" class="pr-0">
              가격 ($,$$)
            </b-col>
            <b-col md="10">
              <v-select
                v-model="interestPrice"
                :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                multiple
                label="title"
                :options="interestData.filter(interest => interest.type=='priceIndex')"
              >
              <template slot="option" slot-scope="option">
                {{ option.title }} ({{option.type}})
              </template>
              </v-select>
            </b-col>
          </b-row>

          <b-row
            class="mb-1"
          >
            <b-col md="2" class="pr-0">
              시설
            </b-col>
            <b-col md="10">
              <v-select
                v-model="interestFacility"
                :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                multiple
                label="title"
                :options="interestData.filter(interest => interest.type=='facility')"
              >
              <template slot="option" slot-scope="option">
                {{ option.title }} ({{option.type}})
              </template>
              </v-select>
            </b-col>
          </b-row>

          <b-row
            class="mb-1"
          >
            <b-col md="2" class="pr-0">
              언어
            </b-col>
            <b-col md="10">
              <v-select
                v-model="interestLanguage"
                :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                multiple
                label="title"
                :options="interestData.filter(interest => interest.type=='language')"
              >
              <template slot="option" slot-scope="option">
                {{ option.title }} ({{option.type}})
              </template>
              </v-select>
            </b-col>
          </b-row>

          <b-row
            class="mb-1"
          >
            <b-col md="2" class="pr-0">
              지불
            </b-col>
            <b-col md="10">
              <v-select
                v-model="interestPayment"
                :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                multiple
                label="title"
                :options="interestData.filter(interest => interest.type=='payment')"
              >
              <template slot="option" slot-scope="option">
                {{ option.title }} ({{option.type}})
              </template>
              </v-select>
            </b-col>
          </b-row>
          
          
      
      
          

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
                v-model="centerData.scubaIndex"
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
                v-model="centerData.seaTemperature"
                :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                :options="seaTempOptions"
                :clearable="false"
                input-id="seaTemperature"
              />
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
                        v-model="centerData.youtubeVideoIds[index]"
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
                        v-model="centerData.referenceUrls[index]"
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
              v-model="centerData.memo"
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
const { upsertDiveCenter } = require('@/wedive-frontend-graphql/dive-center-service')
const { uploadSingleImage, updateImage, getImageUrl } = require('@/wedive-frontend-graphql/image-service')

const blankCenterData = {
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
  wediveComments: [],
  memo: '',
  publishStatus: 'inactive',
  adminScore: 70,
  viewScore: 50,
  educationScore: 50,
  facilityScore: 50,
  serviceScore: 60,
  phoneNumber: '',
  geoAddress: '',
  webPageUrl: '',
  
  scubaIndex: '',
  seaTemperature: '',
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
    prop: 'isAddNewCenterSidebarActive',
    event: 'update:is-add-new-center-sidebar-active',
  },
  props: {
    isAddNewCenterSidebarActive: {
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
    /*centerData: {
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
      wedivesCommentItems: [],
      nextImageId: 1,
      backgroundImages: [],
      backgroundImageRef: [],
      backgroundImageName: [],
      interestSelectedTotal: [],
      interestPrice: [],
      interestFacility: [],
      interestLanguage: [],
      interestPayment: [],
      interestSelected: [],
      submitText: 'Add',
    }
  },
  setup(props, { emit }) {
    const centerData = JSON.parse(JSON.stringify(blankCenterData))
    const resetcenterData = () => {
      //centerData = JSON.parse(JSON.stringify(blankCenterData))
    }

    const onSubmit = () => {
      /*store.dispatch('app-center/addCenter', centerData)
        .then(() => {
          emit('refetch-data')
          emit('update:is-add-new-center-sidebar-active', false)
        })*/
    }

    const {
      refFormObserver,
      getValidationState,
      resetForm,
    } = formValidation(resetcenterData)

    return {
      centerData,
      onSubmit,

      refFormObserver,
      getValidationState,
      resetForm,
    }
  },
  methods: {
    setcenterData: function(_data) {
      for (var key in this.centerData) {
        if (_data[key]) {
          if (key == 'backgroundImages') {
            _data[key].map(image=>{
              this.backgroundItems.push({
                id: this.nextImageId += this.nextImageId,
              })
              this.backgroundImages.push(new File([""], (image.name == null) ? '' : image.name));
              this.backgroundImageRef.push((image.reference == null) ? '' : image.reference);
              this.backgroundImageName.push((image.description == null) ? '' : image.description);
            });
            this.centerData[key] = _data[key];
          } else {
            this.centerData[key] = _data[key];
          }
        }
      }
      
      this.youtubeItems = [];
      _data.youtubeVideoIds.map(()=>{this.youtubeItems.push('')});
      this.referenceItems = [];
      _data.referenceUrls.map(()=>{this.referenceItems.push('')});
      this.wedivesCommentItems = [];
      _data.wediveComments.map(()=>{this.wedivesCommentItems.push('')});
      this.submitText = 'Update';


      
      // 전체 인터레스트
      {
        _data.interests.map(interest => {
          if (interest.type != 'priceIndex' && interest.type != 'facility' && interest.type != 'language' && interest.type != 'payment')
            this.interestSelectedTotal.push(interest);
        })
      }

      // 가격 인터레스트
      {
        _data.interests.map(interest => {
          if (interest.type == 'priceIndex')
            this.interestPrice.push(interest);
        })
      }

      // 시설 인터레스트
      {
        _data.interests.map(interest => {
          if (interest.type == 'facility')
            this.interestFacility.push(interest);
        })
      }
      
      // 언어 인터레스트
      {
        _data.interests.map(interest => {
          if (interest.type == 'language')
            this.interestLanguage.push(interest);
        })
      }

      // 결재수단 인터레스트
      {
        _data.interests.map(interest => {
          if (interest.type == 'payment')
            this.interestPayment.push(interest);
        })
      }
      
      
      
    },
    backgroundRepeateAgain() {
      this.backgroundItems.push({
        id: this.nextImageId += this.nextImageId,
      })
    },
    backgroundRemoveItem(index) {
      this.backgroundItems.splice(index, 1)
    },


    youtubeRepeateAgain() {
      this.youtubeItems.push('');
      this.centerData.youtubeVideoIds.push('');
    },
    youtubeRemoveItem(index) {
      this.youtubeItems.splice(index, 1)
      this.centerData.youtubeVideoIds.splice(index, 1)
    },
    referenceRepeateAgain() {
      this.referenceItems.push('');
      this.centerData.referenceUrls.push('');
    },
    referenceRemoveItem(index) {
      this.referenceItems.splice(index, 1);
      this.centerData.referenceUrls.splice(index, 1);
    },
    wedivesCommentRepeateAgain() {
      this.wedivesCommentItems.push('');
      this.centerData.wediveComments.push('');
    },
    wedivesCommentRemoveItem(index) {
      this.wedivesCommentItems.splice(index, 1);
      this.centerData.wediveComments.splice(index, 1);
    },
    async submitClick() {
      var _centerData = JSON.parse(JSON.stringify(this.centerData));
      if (_centerData.latitude == '' || _centerData.longitude == '') {
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
      _centerData.latitude = parseFloat(_centerData.latitude);
      _centerData.longitude = parseFloat(_centerData.longitude);
      _centerData.uniqueName = _centerData.address;
      
      
      // 백그라운드 이미지
      {
        // background Images for just id
        var _id_list = [];
        for (var i=0; i<_centerData.backgroundImages.length; i++) {
          if (_centerData.backgroundImages[i].hasOwnProperty("_id")) {
            var _id = _centerData.backgroundImages[i]._id;
            _id_list.push(_id);
          }
        }
        delete _centerData.backgroundImages;
        _centerData.backgroundImages = _id_list;

        // upload background image
        for (var i=0; i<this.backgroundImages.length; i++) {
          var image = this.backgroundImages[i];
          var _id = _centerData.backgroundImages[i];
          if (_id == null) {
            var result = await uploadSingleImage(image);
            _id = result.uploadImage._id;
            _centerData.backgroundImages.push(_id);
          }
          var result2 = await updateImage({_id: _id, reference: this.backgroundImageRef[i], name: image.name, description: this.backgroundImageName[i], uploaderId: 'apneaofficer'})
        }
      }

      // 월별 인기도 및 날씨 정보 입력
      {
        var _centerData = JSON.parse(JSON.stringify(this.centerData));
        _centerData.latitude = parseFloat(_centerData.latitude);
        _centerData.longitude = parseFloat(_centerData.longitude);
        _centerData.uniqueName = _centerData.address;


      }

      
      _centerData.interests = [];
      // 전체 인터레스트 입력
      this.interestSelectedTotal.map(interest => {
        _centerData.interests.push(interest._id);
      })
      // 가격 인터레스트 입력
      this.interestPrice.map(interest => {
        _centerData.interests.push(interest._id);
      })
      // 시설 인터레스트 입력
      this.interestFacility.map(interest => {
        _centerData.interests.push(interest._id);
      })
      // 지원언어 인터레스트 입력
      this.interestLanguage.map(interest => {
        _centerData.interests.push(interest._id);
      })
      // 결재수단 인터레스트 입력
      this.interestPayment.map(interest => {
        _centerData.interests.push(interest._id);
      })

      

      if (_centerData._id == null) delete _centerData._id;
      delete _centerData.scubaIndex;
      delete _centerData.seaTemperature;

      
      
      try {
        _centerData.adminScore = parseInt(_centerData.adminScore);
        _centerData.viewScore = parseInt(_centerData.viewScore);
        _centerData.educationScore = parseInt(_centerData.educationScore);
        _centerData.facilityScore = parseInt(_centerData.facilityScore);
        _centerData.serviceScore = parseInt(_centerData.serviceScore);
        console.log(_centerData);
        await upsertDiveCenter(_centerData);
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
      
      this.$emit('update:is-add-new-center-sidebar-active', false)
      this.centerData = JSON.parse(JSON.stringify(blankCenterData));
    },
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';

#add-new-center-sidebar {
  .vs__dropdown-menu {
    max-height: 200px !important;
  }
}
</style>
