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
            name="status"
            rules="required"
          >
            <b-form-group
              label="상태선택"
              label-for="status"
              :state="getValidationState(validationContext)"
            >
              <v-select
                v-model="pointData.status"
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
            name="Pointname"
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
            name="Pointname"
            rules="required"
          >
            <b-form-group
              label="사이트 선택"
              label-for="siteId"
            >
              <v-select
                id="siteId"
                v-model="siteSelected"
                :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                label="title"
                :options="interests.filter(interest => interest.type!='aquaticLife')"
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
                v-model="pointData.adminScore[index]"
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
                    label-for="deepMin"
                    >
                    <b-form-input
                    id="deepMin"
                    v-model="pointData.deepMin"
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
                    label-for="deepMax"
                    >
                    <b-form-input
                    id="deepMax"
                    v-model="pointData.deepMax"
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
            name="infoHighlight"
          >
            <b-form-group
              label="하이라이트"
              label-for="infoHighlight"
            >
              <b-form-input
                id="infoHighlight"
                v-model="pointData.infoHighlight"
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
          <h4 class="mt-3">하이라이트</h4>
          <div>
            <div>
              <!-- Row Loop -->
              <b-row
                v-for="(item, index) in highlightItems"
                :id="item.id"
                :key="item.id"
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
                            v-for="(item2, index2) in highlightImageItems[index]"
                            :id="item2.id"
                            :key="item2.id"
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
                :options="interests.filter(interest => interest.type!='aquaticLife')"
              />
            </b-col>
          </b-row>
          <label>월별에는 타입이 <code>aquaticLife</code>(수중생물) 인것만 추가 가능</label>
          <b-row
            v-for="index in 12"
            class="mb-1"
            :key="index"
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
                :options="interests.filter(interest => interest.type=='aquaticLife')"
              />
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
                :key="item.id"
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
                        v-model="pointImagesFile[index]"
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
    query Query {
      getAllInterests {
        _id
        title
        type
        iconType
        iconName
        iconColor
        iconUrl
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
  },
  data() {
    return {
      required,
      alphaNum,
      adminScoreLabel: ['', '해당 포인트 총점', '수중환경 점수', '유속 점수', '시야 점수'],
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
      nextTodoId: 2,
      backgroundImagesFile: [],
      pointImagesFile: [],
      siteSelected: [],
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
    const blankPointData = {
      status: 'inactive',
      address: '',
      pointname: '',
      description: '',
      adminScore: [0, 70, 70, 70, 70],
      deepMin: '',
      deepMax: '',

      highlightContents: [],

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
      monthlyPopular1: 2,
      monthlyPopular2: 1,
      monthlyPopular3: 1,
      monthlyPopular4: 1,
      monthlyPopular5: 1,
      monthlyPopular6: 2,
      monthlyPopular7: 3,
      monthlyPopular8: 3,
      monthlyPopular9: 3,
      monthlyPopular10: 2,
      monthlyPopular11: 1,
      monthlyPopular12: 1,
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

    
    highlightRepeateAgain() {
      this.highlightItems.push({
        id: this.nextTodoId += this.nextTodoId,
      })

      this.highlightImagesFile.push([])
      this.highlightImageItems.push([])

      this.$nextTick(() => {
        //this.trAddHeight(this.$refs.row[0].offsetHeight)
      })
    },
    highlightRemoveItem(index) {
      this.highlightItems.splice(index, 1)
      //this.trTrimHeight(this.$refs.row[0].offsetHeight)
    },


    highlightImageRepeateAgain(index) {
      this.highlightImageItems[index].push({
        id: this.nextTodoId += this.nextTodoId,
      })

      this.$nextTick(() => {
        //this.trAddHeight(this.$refs.row[0].offsetHeight)
      })
    },
    highlightImageRemoveItem(index, index2) {
      this.highlightImageItems[index].splice(index2, 1)
      //this.trTrimHeight(this.$refs.row[0].offsetHeight)
    },

    
    pointRepeateAgain() {
      this.pointItems.push({
        id: this.nextTodoId += this.nextTodoId,
      })

      this.$nextTick(() => {
        //this.trAddHeight(this.$refs.row[0].offsetHeight)
      })
    },
    pointRemoveItem(index) {
      this.pointItems.splice(index, 1)
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

#add-new-point-sidebar {
  .vs__dropdown-menu {
    max-height: 200px !important;
  }
}
</style>
