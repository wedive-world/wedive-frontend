<template>
  <b-sidebar
    id="add-new-point-sidebar"
    :visible="isAddNewPointSidebarActive"
    bg-variant="white"
    sidebar-class="sidebar-lg"
    shadow
    backdrop
    no-header
    right
    @hidden="resetForm"
    @change="(val) => $emit('update:is-add-new-point-sidebar-active', val)"
  >
    <template #default="{ hide }">
      <!-- Header -->
      <div class="d-flex justify-content-between align-items-center content-sidebar-header px-2 py-1">
        <h5 class="mb-0">
          Add New Point
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
                v-model="pointData.publishStatus"
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
                v-model="pointData.address"
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

          <!-- Point name -->
          <validation-provider
            #default="validationContext"
            name="name"
            rules="required"
          >
            <b-form-group
              label="Point Name"
              label-for="pointname"
            >
              <b-form-input
                id="pointname"
                v-model="pointData.name"
                :state="getValidationState(validationContext)"
                trim
                placeholder="문섬"
              />

              <b-form-invalid-feedback>
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>



          <!-- Point name -->
          <validation-provider
            #default="validationContext"
            name="name"
            rules="required"
          >
            <b-form-group
              label="사이트 선택"
              label-for="siteId"
            >
              <v-select
                id="siteId"
                v-model="pointData.diveSiteId"
                value="_id"
                :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                label="name"
                :options="siteData"
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
              v-model="pointData.description"
              rows="3"
            />
            </b-form-group>
          </validation-provider>

          <br/><br/>

          <!-- Total Score -->
          <validation-provider
            #default="validationContext"
            name="adminScore"
            rules="required"
            v-for="index in 4"
          >
            <b-form-group
              :label="adminScoreLabel[index]"
              label-for="'adminScore'+index"
            >
              <b-form-spinbutton
                :id="'adminScore'+index"
                v-model="pointData[adminScoreName[index]]"
                min="1"
                max="100"
              />
              <b-form-invalid-feedback>
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>

          <b-row
            class="mb-1"
          >
            <b-col md="6">
                <!-- Deep (min) -->
                <validation-provider
                    #default="validationContext"
                    name="Latitude"
                    rules="required"
                >
                    <b-form-group
                      label="최저 수심(m)"
                      label-for="minDepth"
                    >
                    <b-form-input
                      id="minDepth"
                      v-model="pointData.minDepth"
                      :state="getValidationState(validationContext)"
                      placeholder="10"
                      trim
                    />
                    <b-form-invalid-feedback>
                    {{ validationContext.errors[0] }}
                    </b-form-invalid-feedback>
                    </b-form-group>
                </validation-provider>
            </b-col>
            <b-col md="6">
                <!-- Deep (max) -->
                <validation-provider
                    #default="validationContext"
                    name="Latitude"
                    rules="required"
                >
                    <b-form-group
                      label="최고 수심(m)"
                      label-for="maxDepth"
                    >
                    <b-form-input
                      id="maxDepth"
                      v-model="pointData.maxDepth"
                      :state="getValidationState(validationContext)"
                      placeholder="48"
                      trim
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
              v-model="pointData.latitude"
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
              v-model="pointData.longitude"
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
                v-model="pointData.highlightDescription"
                :state="getValidationState(validationContext)"
                max="80"
                trim
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
                :key="'rowBack' + index"
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
          <h4 class="mt-3">하이라이트</h4>
          <div>
            <div>
              <!-- Row Loop -->
              <b-row
                v-for="(item, index) in highlightItems"
                :id="item.id"
                :key="'rowHigh'+index"
                ref="row"
                style="background: #d0d1d2;border-radius: 10px;margin-bottom:10px;"
                >

                <!-- Content -->
                <b-col md="11" class="pr-0">
                    <b-form-group
                    label="내용"
                    :label-for="'highlightContent' + index"
                    >
                    <b-form-input
                        :id="'highlightContent' + index"
                        v-model="pointData.highlightContents[index]"
                        autofocus
                        placeholder="국내 최대규모의 연산호 군락지, 유네스코 생물권 보호지역"
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
                    @click="highlightRemoveItem(index)"
                    >
                    <feather-icon
                        icon="XIcon"
                        class="mr-25"
                    />
                    </b-button>
                </b-col>
                <b-col cols="12">
                    <validation-provider
                        #default="validationContext"
                        name="highlightImages"
                        rules="required"
                    >
                        <b-form-group
                        >
                        <!-- Row Loop -->
                        <b-row
                            v-for="(item, index) in highlightImageItems[index]"
                            :id="item.id"
                            :key="'rowHighItem'+index"
                            ref="row2"
                            >

                            <!-- File -->
                            <b-col md="4" class="pr-0">
                                <b-form-group
                                label="파일"
                                :label-for="'highlightImagesFile' + index + '_' + index2"
                                >
                                <b-form-file
                                    :id="'highlightImagesFile' + index + '_' + index2"
                                    v-model="highlightImagesFile[index][index2]"
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
                                label-for="highlightImagesRef"
                                >
                                <b-form-input
                                    id="highlightImagesRef"
                                    type="text"
                                    placeholder=""
                                />
                                </b-form-group>
                            </b-col>

                            <!-- File Name -->
                            <b-col md="4" class="pr-0">
                                <b-form-group
                                label="이름"
                                label-for="highlightImagesName"
                                >
                                <b-form-input
                                    id="highlightImagesRef"
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
                                @click="highlightImageRemoveItem(index, index2)"
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
                            @click="highlightImageRepeateAgain(index)"
                            >
                            <feather-icon
                                icon="PlusIcon"
                                class="mr-25"
                            />
                            <span>Add New Highlight Image</span>
                        </b-button>
                        <b-form-invalid-feedback>
                            {{ validationContext.errors[0] }}
                        </b-form-invalid-feedback>
                        </b-form-group>
                    </validation-provider>
                </b-col>
              </b-row>
              <b-button
                v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                variant="flat-primary"
                @click="highlightRepeateAgain"
                >
                <feather-icon
                    icon="PlusIcon"
                    class="mr-25"
                />
                <span>Add New Highlight</span>
              </b-button>
            </div>
          </div>


          <hr>
          <h4 class="mt-3">월별 관심사항 (추천에 사용됨)</h4>
          <label><code>수중 환경</code>정보는 필수 입력 (동굴, 마크로, 난파선 등)</label>
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
                :options="interestData.filter(interest => interest.type!='aquaticLife'&&interest.type!='climate'&&interest.type!='popularity')"
              >
              <template slot="option" slot-scope="option">
                {{ option.title }} ({{option.type}})
              </template>
              </v-select>
            </b-col>
          </b-row>
          <label>월별에는 타입이 <code>aquaticLife</code>(수중생물), <code>climate</code>, <code>popularity</code> 인것만 추가 가능</label>
          <b-row
            v-for="index in 12"
            class="mb-1"
            :key="'rowMonth'+index"
          >
            <b-col md="2" class="pr-0">
              {{ index }}월
            </b-col>
            <b-col md="10">
              <v-select
                v-model="interestSelected[index]"
                :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                multiple
                label="title"
                :options="interestData.filter(interest => interest.type=='aquaticLife')"
              >
              <template slot="option" slot-scope="option">
                {{ option.title }} ({{option.type}})
              </template>
              </v-select>
            </b-col>
          </b-row>

          
          <hr>
          <h4 class="mt-3">포인트 이미지</h4>
          <validation-provider
            #default="validationContext"
            name="pointImages"
            rules="required"
          >
            <b-form-group
            >
              <!-- Row Loop -->
              <b-row
                v-for="(item, index) in pointItems"
                :id="item.id"
                :key="'rowImage'+index"
                ref="row"
                >

                <!-- File -->
                <b-col md="4" class="pr-0">
                    <b-form-group
                    label="파일"
                    :label-for="'pointImagesFile' + index"
                    >
                    <b-form-file
                        :id="'pointImagesFile' + index"
                        v-model="pointImages[index]"
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
                    label-for="pointImagesRef"
                    >
                    <b-form-input
                        id="pointImagesRef"
                        v-model="pointImageRef[index]"
                        type="text"
                        placeholder=""
                    />
                    </b-form-group>
                </b-col>

                <!-- File Name -->
                <b-col md="4" class="pr-0">
                    <b-form-group
                    label="이름"
                    label-for="pointImagesName"
                    >
                    <b-form-input
                        id="pointImagesRef"
                        v-model="pointImageName[index]"
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
                    @click="pointRemoveItem(index)"
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
                @click="pointRepeateAgain"
                >
                <feather-icon
                    icon="PlusIcon"
                    class="mr-25"
                />
                <span>Add New Point Image</span>
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
                :key="'rowYoutube'+index"
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
                        v-model="pointData.youtubeVideoIds[index]"
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
                :key="'rowRefernce' + index"
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
                        v-model="pointData.referenceUrls[index]"
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
              v-model="pointData.memo"
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
const { upsertDivePoint } = require('@/wedive-frontend-graphql/dive-point-service')
const { uploadSingleImage, updateImage, getImageUrl } = require('@/wedive-frontend-graphql/image-service')

const blankPointData = {
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
  diveSiteId: '',
  adminScore: 70,
  waterEnvironmentScore: 40,
  flowRateScore: 50,
  eyeSightScore: 30,
  minDepth: '',
  maxDepth: '',
  highlightDescription: '',

  scubaIndex: '',
  seaTemperature: '',
  highlights: [],
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
    prop: 'isAddNewPointSidebarActive',
    event: 'update:is-add-new-point-sidebar-active',
  },
  props: {
    isAddNewPointSidebarActive: {
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
    siteData: {
      type: Array,
      required: true,
    }
  },
  data() {
    return {
      required,
      alphaNum,
      adminScoreLabel: ['', '해당 포인트 총점', '수중환경 점수', '유속 점수', '시야 점수'],
      adminScoreName: ['', 'adminScore', 'waterEnvironmentScore', 'flowRateScore', 'eyeSightScore'],
      statusOptions: ['pending', 'active', 'inactive', 'deleted',],
      khoaOptions : ['동명항', '남애항', '강문해변', '오산항', '울릉도', '월포해수욕장', '구조리해수욕장', '미조도', '거문도', '홍도', '제주-성산일출봉', '제주-어멍(북부)', '제주-문섬'],
      seaTempOptions: ['강릉 (강원도)/kang-neung', '속초 (강원도)/sogcho', '동해 (강원도)/tonghae', '인천/incheon', '고양 (왜있지)/goyang', '안산 (경기도)/ansan', '화성 (경기도)/hwaseong', '포항/hoko', '울산/ulsan', '부산/busan', '진해 (창원)/chinhae', '마산/masan', '거제/kyosai', '여수/reisui', '순천/sunchun', '군산 (전라북도)/kunsan', '목포 (전라남도)/moppo', '신안 (전라남도)/sinan', '태안 (충청남도)/taesal-li', '제주-어영(북서부)/gaigeturi', '제주-제주시(북부)/jeju'],
      backgroundItems: [],
      highlightItems: [],
      highlightImageItems: [],
      highlightImagesFile: [],
      pointItems: [],
      youtubeItems: [],
      referenceItems: [],
      nextBackgroundImageId: 1,
      nextTodoId: 2,
      backgroundImages: [],
      backgroundImageRef: [],
      backgroundImageName: [],
      pointImages: [],
      pointImageRef: [],
      pointImageName: [],
      siteSelected: [],
      interestSelectedTotal: [],
      interestSelected: [],
      submitText: 'Add',
    }
  },
  setup(props, { emit }) {
    const pointData = ref(JSON.parse(JSON.stringify(blankPointData)))
    const resetPointData = () => {
      pointData.value = JSON.parse(JSON.stringify(blankPointData))
    }

    const onSubmit = () => {
      store.dispatch('app-point/addPoint', pointData.value)
        .then(() => {
          emit('refetch-data')
          emit('update:is-add-new-point-sidebar-active', false)
        })
    }

    const {
      refFormObserver,
      getValidationState,
      resetForm,
    } = formValidation(resetPointData)

    return {
      pointData,
      onSubmit,

      refFormObserver,
      getValidationState,
      resetForm,
    }
  },
  methods: {
    setPointData: function(_data) {
      for (var key in this.pointData) {
        if (_data[key]) {
          if (key == 'backgroundImages') {
            _data[key].map(image=>{
              this.backgroundItems.push({
                id: this.nextBackgroundImageId += this.nextBackgroundImageId,
              })
              this.backgroundImages.push(new File([""], (image.name == null) ? '' : image.name));
              this.backgroundImageRef.push((image.reference == null) ? '' : image.reference);
              this.backgroundImageName.push((image.description == null) ? '' : image.description);
            });
            this.pointData[key] = _data[key];
          } else if (key == 'images') {
            _data[key].map(image=>{
              this.pointItems.push({
                id: this.nextImageId += this.nextImageId,
              })
              this.pointImages.push(new File([""], (image.name == null) ? '' : image.name));
              this.pointImageRef.push((image.reference == null) ? '' : image.reference);
              this.pointImageName.push((image.description == null) ? '' : image.description);
            });
            this.pointData[key] = _data[key];
          } else {
            this.pointData[key] = _data[key];
          }
        }
      }
      
      this.youtubeItems = [];
      _data.youtubeVideoIds.map(()=>{this.youtubeItems.push('')});
      this.referenceItems = [];
      _data.referenceUrls.map(()=>{this.referenceItems.push('')});
      this.submitText = 'Update';


      // set Site name
      var selectedSite = this.siteData.filter(site => site._id == _data.diveSiteId);
      setTimeout(function(name) {
        document.querySelector("#siteId .vs__selected").innerText = name;
      },100, selectedSite[0].name)
      
    },
    backgroundRepeateAgain() {
      this.backgroundItems.push({
        id: this.nextBackgroundImageId += this.nextBackgroundImageId,
      })
    },
    backgroundRemoveItem(index) {
      this.backgroundItems.splice(index, 1)
    },

    
    highlightRepeateAgain() {
      this.highlightItems.push({
        id: this.nextBackgroundImageId += this.nextBackgroundImageId,
      })

      this.highlightImagesFile.push([])
      this.highlightImageItems.push([])
    },
    highlightRemoveItem(index) {
      this.highlightItems.splice(index, 1)
    },


    highlightImageRepeateAgain(index) {
      this.highlightImageItems[index].push({
        id: this.nextTodoId += this.nextTodoId,
      })
    },
    highlightImageRemoveItem(index, index2) {
      this.highlightImageItems[index].splice(index2, 1)
    },

    pointRepeateAgain() {
      this.pointItems.push({
        id: this.nextImageId += this.nextImageId,
      })
    },
    pointRemoveItem(index) {
      this.pointItems.splice(index, 1)
    },
    


    youtubeRepeateAgain() {
      this.youtubeItems.push('');
      this.pointData.youtubeVideoIds.push('');
    },
    youtubeRemoveItem(index) {
      this.youtubeItems.splice(index, 1)
      this.pointData.youtubeVideoIds.splice(index, 1)
    },
    referenceRepeateAgain() {
      this.referenceItems.push('');
      this.pointData.referenceUrls.push('');
    },
    referencRemoveItem(index) {
      this.referenceItems.splice(index, 1);
      this.pointData.referenceUrls.splice(index, 1);
    },
    async submitClick() {
      var _pointData = JSON.parse(JSON.stringify(this.pointData));
      if (_pointData.latitude == '' || _pointData.longitude == '') {
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
      _pointData.latitude = parseFloat(_pointData.latitude);
      _pointData.longitude = parseFloat(_pointData.longitude);
      _pointData.uniqueName = _pointData.address;
      _pointData.minDepth = parseInt(_pointData.minDepth);
      _pointData.maxDepth = parseInt(_pointData.maxDepth);

      if (typeof(_pointData.diveSiteId) == 'object' ) {
        var site_id = _pointData.diveSiteId._id;
        delete _pointData.diveSiteId;
        _pointData.diveSiteId = site_id;
      }

      if (_pointData._id == null) delete _pointData._id;
      delete _pointData.scubaIndex;
      delete _pointData.seaTemperature;

      // 백그라운드 이미지
      {
        // background Images for just id
        var _id_list = [];
        for (var i=0; i<_pointData.backgroundImages.length; i++) {
          if (_pointData.backgroundImages[i].hasOwnProperty("_id")) {
            var _id = _pointData.backgroundImages[i]._id;
            _id_list.push(_id);
          }
        }
        delete _pointData.backgroundImages;
        _pointData.backgroundImages = _id_list;

        // upload background image
        for (var i=0; i<this.backgroundImages.length; i++) {
          var image = this.backgroundImages[i];
          var _id = _pointData.backgroundImages[i];
          if (_id == null) {
            var result = await uploadSingleImage(image);
            _id = result.uploadImage._id;
            _pointData.backgroundImages.push(_id);
          }
          var result2 = await updateImage({_id: _id, reference: this.backgroundImageRef[i], name: image.name, description: this.backgroundImageName[i], uploaderId: 'apneaofficer'})
        }
      }

      // 포인트 이미지
      {
        // point Images for just id
        var _id_list = [];
        for (var i=0; i<_pointData.images.length; i++) {
          if (_pointData.images[i].hasOwnProperty("_id")) {
            var _id = _pointData.images[i]._id;
            _id_list.push(_id);
          }
        }
        delete _pointData.images;
        _pointData.images = _id_list;

        // upload point image
        for (var i=0; i<this.pointImages.length; i++) {
          var image = this.pointImages[i];
          var _id = _pointData.images[i];
          if (_id == null) {
            var result = await uploadSingleImage(image);
            _id = result.uploadImage._id;
            _pointData.images.push(_id);
          }
          var result2 = await updateImage({_id: _id, reference: this.pointImageRef[i], name: image.name, description: this.pointImageName[i], uploaderId: 'apneaofficer'})
        }
      }

      try {
        await upsertDivePoint(_pointData);
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
      
      
      this.$emit('update:is-add-new-point-sidebar-active', false)
      this.pointData = JSON.parse(JSON.stringify(blankPointData));
    },
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';

#add-new-point-sidebar {
  .vs__dropdown-menu {
    max-height: 200px !important;
  }
}
</style>
