<template>
  <b-sidebar
    id="add-new-recommenation-sidebar"
    :visible="isAddNewRecommenationSidebarActive"
    bg-variant="white"
    sidebar-class="sidebar-lg"
    shadow
    backdrop
    no-header
    right
    @hidden="resetForm"
    @change="(val) => $emit('update:is-add-new-recommenation-sidebar-active', val)"
  >
    <template #default="{ hide }">
      <!-- Header -->
      <div class="d-flex justify-content-between align-items-center content-sidebar-header px-2 py-1">
        <h5 class="mb-0">
          Add New Recommenation
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
                v-model="recommenationData.publishStatus"
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
                v-model="recommenationData.uniqueName"
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
const { upsertRcommenation } = require('@/wedive-frontend-graphql/recommendation-service')
const { uploadSingleImage, updateImage, getImageUrl } = require('@/wedive-frontend-graphql/image-service')
const { upsertHighlight, deleteHighlightById } = require('@/wedive-frontend-graphql/highlight-service')

const enumPopularity = ["nothing", "unrecommended", "soso", "popular"];
const enumClimate = ["nothing", "sunny", "cloudy", "rain", "heavyRain"];
const blankRecommenationData = {
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
  visitTimeDescription: '',
  waterTemperatureDescription: '',
  deepDescription: '',
  waterFlowDescription: '',
  eyeSightDescription: '',
  highlightDescription: '',
  highlights: [],
  
  
  
  
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
    draggable,
  },
  directives: {
    Ripple,
  },
  model: {
    prop: 'isAddNewRecommenationSidebarActive',
    event: 'update:is-add-new-recommenation-sidebar-active',
  },
  props: {
    isAddNewRecommenationSidebarActive: {
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
    /*recommenationData: {
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
      highlightItems: [],
      youtubeItems: [],
      referenceItems: [],
      interestSelectedTotal: [],
      interestSelected: [],
      submitText: 'Add',
    }
  },
  setup(props, { emit }) {
    const recommenationData = JSON.parse(JSON.stringify(blankRecommenationData))
    const resetRecommenationData = () => {
      //recommenationData = JSON.parse(JSON.stringify(blankRecommenationData))
    }

    const onSubmit = () => {
      /*store.dispatch('app-recommenation/addRecommenation', recommenationData)
        .then(() => {
          emit('refetch-data')
          emit('update:is-add-new-recommenation-sidebar-active', false)
        })*/
    }

    const {
      refFormObserver,
      getValidationState,
      resetForm,
    } = formValidation(resetRecommenationData)

    return {
      recommenationData,
      onSubmit,

      refFormObserver,
      getValidationState,
      resetForm,
    }
  },
  methods: {
    setRecommenationData: function(_data) {
      this.recommenationData = JSON.parse(JSON.stringify(blankRecommenationData));
      this.backgroundItems = [];
      this.highlightItems = [];
      this.youtubeItems = [];
      this.referenceItems = [];


      for (var key in this.recommenationData) {
        if (_data[key]) {
          if (key.includes('month')) {
            if (_data[key] != null) {
              _data[key].map((item, index) => {
                if (item.type == 'climate') {
                  this.recommenationData.monthlyWeather[index+1] = enumClimate.findIndex((climate) => climate === item.title);
                } else if (item.type == 'popularity') {
                  this.recommenationData.monthlyPopular[index+1] = enumPopularity.findIndex((popularity) => popularity === item.title)
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
            this.recommenationData[key] = _data[key];
          } else if (key == 'youtubeVideoIds') {
            if (_data[key]) {
              _data[key].map(youtube=>{
                this.youtubeItems.push(youtube);
              });
            }
          } else if (key == 'referenceUrls') {
            if (_data[key]) {
              _data[key].map(reference=>{
                this.referenceItems.push(reference);
              });
            }
          } else {
            this.recommenationData[key] = _data[key];
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
              this.recommenationData.monthlyPopular[i] = popularity_id_list[_id];
            }
            if (climate_id_list.hasOwnProperty(_id)) {
              this.recommenationData.monthlyWeather[i] = climate_id_list[_id];
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
    highlightRepeateAgain() {
      this.highlightItems.push({name: "", description: "", images: []});
    },
    async highlightRemoveItem(index) {
      var id = this.highlightItems[index]._id;
      if (id != null) {
        var result = await deleteHighlightById(id);
      }
      this.highlightItems.splice(index, 1);
    },


    highlightImageRepeateAgain(index) {
      this.highlightItems[index].images.push({reference: "", description: "", file: null});
    },
    async highlightImageRemoveItem(index, index2) {
      var id = this.highlightItems[index].images[index2]._id;
      if (id != null) {
        // jjangs 여기 구현 필요
        //var result = await deleteImageById(id);
        //console.log(result);
      }
      var id = this.highlightItems[index].images.splice(index2, 1);      
    },


    youtubeRepeateAgain() {
      this.youtubeItems.push('');
    },
    youtubeRemoveItem(index) {
      this.youtubeItems.splice(index, 1)
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
      var _recommenationData = JSON.parse(JSON.stringify(this.recommenationData));
      if (_recommenationData.latitude == '' || _recommenationData.longitude == '') {
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
      _recommenationData.latitude = parseFloat(_recommenationData.latitude);
      _recommenationData.longitude = parseFloat(_recommenationData.longitude);


      // 하이라이트
      {
        _recommenationData.highlights = [];
        for (var i=0; i<this.highlightItems.length; i++) {
          var highlight_id_list = [];
          for (var j=0; j<this.highlightItems[i].images.length; j++) {
            if (this.highlightItems[i].images[j].file != null) {
              var result = await uploadSingleImage(this.highlightItems[i].images[j].file);
              this.highlightItems[i].images[j]._id = result.uploadImage._id;
              this.highlightItems[i].images[j].name = this.highlightItems[i].images[j].file.name;
            }
            delete this.highlightItems[i].images[j].file;
            this.highlightItems[i].images[j].uploaderId = 'apneaofficer';
            var result2 = await updateImage(this.highlightItems[i].images[j]);
            highlight_id_list.push(result2.updateImage._id);
          }
          // delete images
          delete this.highlightItems[i].images;
          this.highlightItems[i].images = [];
          for (var j=0; j<highlight_id_list.length; j++) {
            this.highlightItems[i].images.push(highlight_id_list[j]);
          }
          // add highlight
          var result = await upsertHighlight(this.highlightItems[i]);
          _recommenationData.highlights.push(result.upsertHighlight._id);
        }
      }
      
      // 백그라운드 이미지
      {
        _recommenationData.backgroundImages = [];
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
          _recommenationData.backgroundImages.push(result2.updateImage._id);
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
          for (var j=0; j<_recommenationData["month" + i].length; j++) {
            if (typeof(_recommenationData["month" + i][j] == 'object')) {
              if (arr_popularity_climate.includes(_recommenationData["month" + i][j]._id) == false)
                _id_list.push(_recommenationData["month" + i][j]._id);
            }
          }
          delete _recommenationData["month" + i];
          _recommenationData["month" + i] = _id_list;
        }

        _recommenationData.latitude = parseFloat(_recommenationData.latitude);
        _recommenationData.longitude = parseFloat(_recommenationData.longitude);
        

        _recommenationData.monthlyPopular.map((pop, index) => {
          if (pop != 0) { // skip 0
            _recommenationData["month"+index].push(popularity_id_list[enumPopularity[pop]+'_id'])
          }
        })

        _recommenationData.monthlyWeather.map((cli, index) => {
          if (cli != 0) { // skip 0
            _recommenationData["month"+index].push(climate_id_list[enumClimate[cli]+'_id'])
          }
        })
      }
      
      // 전체 인터레스트 입력
      _recommenationData.interests = [];
      this.interestSelectedTotal.map(interest => {
        _recommenationData.interests.push(interest._id);
      })

      // youtubeVideoIds
      _recommenationData.youtubeVideoIds = [];
      for (var i=0; i<this.youtubeItems.length; i++) {
        _recommenationData.youtubeVideoIds.push(this.youtubeItems[i]);
      }

      // referenceUrls
      _recommenationData.referenceUrls = [];
      for (var i=0; i<this.referenceItems.length; i++) {
        _recommenationData.referenceUrls.push(this.referenceItems[i]);
      }
      

      if (_recommenationData._id == null) delete _recommenationData._id;
      delete _recommenationData.scubaIndex;
      delete _recommenationData.seaTemperature;

      delete _recommenationData.monthlyPopular;
      delete _recommenationData.monthlyWeather;

      
      try {
        _recommenationData.adminScore = parseInt(_recommenationData.adminScore);
        await upsertRecommenation(_recommenationData);
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
      
      this.$emit('update:is-add-new-recommenation-sidebar-active', false)
      this.recommenationData = JSON.parse(JSON.stringify(blankRecommenationData));

      location.reload();
    },
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';

#add-new-recommenation-sidebar {
  .vs__dropdown-menu {
    max-height: 200px !important;
  }
}
</style>
