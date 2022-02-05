<template>
  <b-sidebar
    id="add-new-recommendation-sidebar"
    :visible="isAddNewRecommendationSidebarActive"
    bg-variant="white"
    sidebar-class="sidebar-lg"
    shadow
    backdrop
    no-header
    right
    @hidden="resetForm"
    @change="(val) => $emit('update:is-add-new-recommendation-sidebar-active', val)"
  >
    <template #default="{ hide }">
      <!-- Header -->
      <div class="d-flex justify-content-between align-items-center content-sidebar-header px-2 py-1">
        <h5 class="mb-0">
          Add New Recommendation
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
          <h4>추천타입</h4>
          <!-- Status -->
          <validation-provider
            #default="validationContext"
            name="recommendationType"
            rules="required"
          >
            <b-form-group
              label="타입선택"
              label-for="recommendationType"
              :state="getValidationState(validationContext)"
            >
              <v-select
                v-model="recommendationData.recommendationType"
                :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                :options="recommendationType"
                :clearable="false"
                input-id="recommendationType"
              />
              <b-form-invalid-feedback :state="getValidationState(validationContext)">
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>
          
          <hr>
          <h4 class="mt-3">기본정보</h4>
          <!-- title -->
          <validation-provider
            #default="validationContext"
            name="title"
            rules="required"
          >
            <b-form-group
              label="title"
              label-for="title"
            >
              <b-form-input
                id="title"
                v-model="recommendationData.title"
                autofocus
                :state="getValidationState(validationContext)"
                trim
                placeholder="제목"
              />

              <b-form-invalid-feedback>
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>

          <!-- description -->
          <validation-provider
            #default="validationContext"
            name="description"
          >
            <b-form-group
              label="description"
              label-for="description"
            >
              <b-form-input
                id="description"
                v-model="recommendationData.description"
                autofocus
                :state="getValidationState(validationContext)"
                trim
                placeholder="설명을 입력하세요."
              />

              <b-form-invalid-feedback>
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>

          <!-- cssStyle -->
          <validation-provider
            #default="validationContext"
            name="cssStyle"
          >
            <b-form-group
              label="cssStyle"
              label-for="cssStyle"
            >
              <b-form-input
                id="cssStyle"
                v-model="recommendationData.cssStyle"
                autofocus
                :state="getValidationState(validationContext)"
                trim
                placeholder="cssStyle을 입력하세요."
              />

              <b-form-invalid-feedback>
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>

          <!-- previewCount -->
          <validation-provider
            #default="validationContext"
            name="previewCount"
            rules="required"
          >
            <b-form-group
              label="previewCount"
              label-for="previewCount"
            >
              <b-form-input
                id="previewCount"
                v-model="recommendationData.previewCount"
                autofocus
                :state="getValidationState(validationContext)"
                type="number"
                trim
                placeholder="previewCount을 입력하세요."
              />

              <b-form-invalid-feedback>
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>

          <h4 class="mt-3">관심사항</h4>
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
                :options="interestData"
              >
              <template slot="option" slot-scope="option">
                {{ option.title }} ({{option.type}})
              </template>
              </v-select>
            </b-col>
          </b-row>


          <h4 class="mt-3">Arguments</h4>
          <validation-provider
            #default="validationContext"
            name="arguments"
            rules="required"
          >
            <b-form-group
            >
              <draggable :list="argumentItems" group="argumentItems" @start="drag=true" @end="drag=false">
                <div v-for="(item, index) in argumentItems" style="cursor: move" :key="index">
                  <!-- Row Loop -->
                  <b-row
                    :id="'arguments'+index"
                    :key="'arguments'+index"
                    ref="argumentRow"
                    >

                    <!-- Video ID -->
                    <b-col md="11" class="pr-0">
                        <b-form-group
                        label="argument"
                        :label-for="'argument'+index"
                        >
                        <b-form-input
                            :id="'argument'+index"
                            type="text"
                            v-model="argumentItems[index]"
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
                        @click="argumentRemoveItem(index)"
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
                </div>
              </draggable>
              <b-button
                v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                variant="flat-primary"
                @click="argumentRepeateAgain"
                >
                <feather-icon
                    icon="PlusIcon"
                    class="mr-25"
                />
                <span>Add New argument</span>
              </b-button>
              <b-form-invalid-feedback>
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>















          <h4 class="mt-3">배경 이미지</h4>

          <validation-provider
            #default="validationContext"
            name="backgroundImages"
            rules="required"
          >
            <b-form-group
            >
              <draggable :list="backgroundItems" group="backgroundItems" @start="drag=true" @end="drag=false">
                <div v-for="(item, index) in backgroundItems" style="cursor: move" :key="index">
                  <!-- Row Loop -->
                  <b-row
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
                            v-model="item.file"
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
                        :label-for="'backgroundImagesRef'+index"
                        >
                        <b-form-input
                            :id="'backgroundImagesRef'+index"
                            v-model="item.reference"
                            type="text"
                            placeholder=""
                        />
                        </b-form-group>
                    </b-col>

                    <!-- File Name -->
                    <b-col md="4" class="pr-0">
                        <b-form-group
                        label="이름"
                        :label-for="'backgroundImagesName'+index"
                        >
                        <b-form-input
                            :id="'backgroundImagesName'+index"
                            v-model="item.description"
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
                </div>
              </draggable>
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





          <h4 class="mt-3">내용 이미지</h4>

          <validation-provider
            #default="validationContext"
            name="images"
            rules="required"
          >
            <b-form-group
            >
              <draggable :list="imageItems" group="imageItems" @start="drag=true" @end="drag=false">
                <div v-for="(item, index) in imageItems" style="cursor: move" :key="index">
                  <!-- Row Loop -->
                  <b-row
                    :id="item.id"
                    :key="item.id"
                    ref="row"
                    >

                    <!-- File -->
                    <b-col md="4" class="pr-0">
                        <b-form-group
                        label="파일"
                        :label-for="'images' + index"
                        >
                        <b-form-file
                            :id="'images' + index"
                            v-model="item.file"
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
                        :label-for="'imagesRef'+index"
                        >
                        <b-form-input
                            :id="'imagesRef'+index"
                            v-model="item.reference"
                            type="text"
                            placeholder=""
                        />
                        </b-form-group>
                    </b-col>

                    <!-- File Name -->
                    <b-col md="4" class="pr-0">
                        <b-form-group
                        label="이름"
                        :label-for="'imagesName'+index"
                        >
                        <b-form-input
                            :id="'imagesName'+index"
                            v-model="item.description"
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
                        @click="imageRemoveItem(index)"
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
                </div>
              </draggable>
              <b-button
                v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                variant="flat-primary"
                @click="imageRepeateAgain"
                >
                <feather-icon
                    icon="PlusIcon"
                    class="mr-25"
                />
                <span>Add New Image</span>
              </b-button>
              <b-form-invalid-feedback>
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
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
import draggable from 'vuedraggable'
import store from '@/store'
const { upsertRecommendation } = require('@/wedive-frontend-graphql/recommendation-service')
const { uploadSingleImage, updateImage, getImageUrl } = require('@/wedive-frontend-graphql/image-service')
const { upsertHighlight, deleteHighlightById } = require('@/wedive-frontend-graphql/highlight-service')

const enumPopularity = ["nothing", "unrecommended", "soso", "popular"];
const enumClimate = ["nothing", "sunny", "cloudy", "rain", "heavyRain"];
const blankRecommendationData = {
  _id: null,
  title: '',
  description: '',
  cssStyle: '',
  previewCount: 0,
  images: [],
  backgroundImages: [],
  arguements: [],
  recommendationType: 'new',
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
    draggable,
  },
  directives: {
    Ripple,
  },
  model: {
    prop: 'isAddNewRecommendationSidebarActive',
    event: 'update:is-add-new-recommendation-sidebar-active',
  },
  props: {
    isAddNewRecommendationSidebarActive: {
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
    /*recommendationData: {
      type: Object,
      required: true,
    },*/
  },
  data() {
    return {
      interest_types: [],
      required,
      alphaNum,
      recommendationType: ['interest', 'new', 'onePersonLeft', 'custom', 'search', 'nearBy',],
      backgroundItems: [],
      imageItems: [],
      highlightItems: [],
      argumentItems: [],
      referenceItems: [],
      interestSelectedTotal: [],
      interestSelected: [],
      submitText: 'Add',
    }
  },
  setup(props, { emit }) {
    const recommendationData = JSON.parse(JSON.stringify(blankRecommendationData))
    const resetRecommendationData = () => {
      //recommendationData = JSON.parse(JSON.stringify(blankRecommendationData))
    }

    const onSubmit = () => {
      /*store.dispatch('app-recommendation/addRecommendation', recommendationData)
        .then(() => {
          emit('refetch-data')
          emit('update:is-add-new-recommendation-sidebar-active', false)
        })*/
    }

    const {
      refFormObserver,
      getValidationState,
      resetForm,
    } = formValidation(resetRecommendationData)

    return {
      recommendationData,
      onSubmit,

      refFormObserver,
      getValidationState,
      resetForm,
    }
  },
  methods: {
    setRecommendationData: function(_data) {
      this.recommendationData = JSON.parse(JSON.stringify(blankRecommendationData));
      this.backgroundItems = [];
      this.highlightItems = [];
      this.argumentItems = [];
      this.referenceItems = [];


      for (var key in this.recommendationData) {
        if (_data[key]) {
          if (key.includes('month')) {
            if (_data[key] != null) {
              _data[key].map((item, index) => {
                if (item.type == 'climate') {
                  this.recommendationData.monthlyWeather[index+1] = enumClimate.findIndex((climate) => climate === item.title);
                } else if (item.type == 'popularity') {
                  this.recommendationData.monthlyPopular[index+1] = enumPopularity.findIndex((popularity) => popularity === item.title)
                }
              })
            }
          } else if (key == 'backgroundImages') {
            _data[key].forEach(image=>{
              this.backgroundItems.push(image)
            });
          } else if (key == 'highlights') {
            _data[key].forEach(highlight=>{
              this.highlightItems.push(highlight);
            });
            this.recommendationData[key] = _data[key];
          } else if (key == 'argumentIds') {
            if (_data[key]) {
              _data[key].map(argument=>{
                this.argumentItems.push(argument);
              });
            }
          } else if (key == 'referenceUrls') {
            if (_data[key]) {
              _data[key].map(reference=>{
                this.referenceItems.push(reference);
              });
            }
          } else {
            this.recommendationData[key] = _data[key];
          }
        }
      }
      
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
              this.recommendationData.monthlyPopular[i] = popularity_id_list[_id];
            }
            if (climate_id_list.hasOwnProperty(_id)) {
              this.recommendationData.monthlyWeather[i] = climate_id_list[_id];
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
      this.backgroundItems.push({reference: "", description: "", file: null});
    },
    async backgroundRemoveItem(index) {
      var id = this.backgroundItems[index]._id;
      if (id != null) {
        // jjangs 여기 구현 필요
        //var result = await deleteImageById(id);
        //console.log(result);
      }
      this.backgroundItems.splice(index, 1);
    },
    imageRepeateAgain() {
      this.imageItems.push({reference: "", description: "", file: null});
    },
    async imageRemoveItem(index) {
      var id = this.imageItems[index]._id;
      if (id != null) {
        // jjangs 여기 구현 필요
        //var result = await deleteImageById(id);
        //console.log(result);
      }
      this.imageItems.splice(index, 1);
    },
    


    argumentRepeateAgain() {
      this.argumentItems.push('');
    },
    argumentRemoveItem(index) {
      this.argumentItems.splice(index, 1)
    },
    referenceRepeateAgain() {
      this.referenceItems.push('');
    },
    referenceRemoveItem(index) {
      this.referenceItems.splice(index, 1);
    },
    async submitClick() {
      this.$swal({
        title: '저장중 입니다.',
        allowEscapeKey: false,
        allowOutsideClick: false,
        onOpen: () => {
          this.$swal.showLoading();
        }
      });
      var _recommendationData = JSON.parse(JSON.stringify(this.recommendationData));
      
      
      // 백그라운드 이미지
      {
        _recommendationData.backgroundImages = [];
        for (var i=0; i<this.backgroundItems.length; i++) {
          // Upload Image first
          if (this.backgroundItems[i].file != null) {
            var result = await uploadSingleImage(this.backgroundItems[i].file);
            this.backgroundItems[i]._id = result.uploadImage._id;
            this.backgroundItems[i].name = this.backgroundItems[i].file.name;
          }
          
          delete this.backgroundItems[i].file;
          this.backgroundItems[i].uploaderId = 'apneaofficer';
          var result2 = await updateImage(this.backgroundItems[i]);
          _recommendationData.backgroundImages.push(result2.updateImage._id);
        }
      }


      // 이미지
      {
        _recommendationData.images = [];
        for (var i=0; i<this.imageItems.length; i++) {
          // Upload Image first
          if (this.imageItems[i].file != null) {
            var result = await uploadSingleImage(this.imageItems[i].file);
            this.imageItems[i]._id = result.uploadImage._id;
            this.imageItems[i].name = this.imageItems[i].file.name;
          }
          
          delete this.imageItems[i].file;
          this.imageItems[i].uploaderId = 'apneaofficer';
          var result2 = await updateImage(this.imageItems[i]);
          _recommendationData.images.push(result2.updateImage._id);
        }
      }

      
      // 전체 인터레스트 입력
      _recommendationData.interests = [];
      this.interestSelectedTotal.map(interest => {
        _recommendationData.interests.push(interest._id);
      })

      // argumentVideoIds
      _recommendationData.argumentVideoIds = [];
      for (var i=0; i<this.argumentItems.length; i++) {
        _recommendationData.argumentVideoIds.push(this.argumentItems[i]);
      }
      if (_recommendationData._id == null) delete _recommendationData._id;
      
      console.log(_recommendationData);
      try {
        await upsertRecommendation(_recommendationData);
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
      
      this.$emit('update:is-add-new-recommendation-sidebar-active', false)
      this.recommendationData = JSON.parse(JSON.stringify(blankRecommendationData));

      //location.reload();
    },
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';

#add-new-recommendation-sidebar {
  .vs__dropdown-menu {
    max-height: 200px !important;
  }
}
</style>
