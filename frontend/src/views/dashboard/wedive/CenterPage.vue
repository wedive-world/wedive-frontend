<template>
  <div>
  <b-card
    :title="center_data.name"
  >
    <h5>배경 이미지</h5>
    <vue-dropzone ref="myVueDropzone" id="dropzone" v-on:vdropzone-removed-file="removeEventImage1" v-on:vdropzone-sending="sendingEventBackground" :options="dropzoneOptions"></vue-dropzone>
    
    <br/><br/>
    <h5 style="margin-bottom:0;">이미지 (센터)</h5>
    <p>(입력 시, "XXX 출처" 로 표기필요) (띄어쓰기 앞 값은 무시 함)</p>
    <vue-dropzone ref="myVueDropzone2" id="dropzone2" v-on:vdropzone-removed-file="removeEventImage2" v-on:vdropzone-sending="sendingEventImage1" :options="dropzoneOptions"></vue-dropzone>
    
    <br/><br/>
    <h5 style="margin-bottom:0;">이미지 (다이빙)</h5>
    <p>(입력 시, "XXX 출처" 로 표기필요) (띄어쓰기 앞 값은 무시 함)</p>
    <vue-dropzone ref="myVueDropzone3" id="dropzone3" v-on:vdropzone-removed-file="removeEventImage2" v-on:vdropzone-sending="sendingEventImage2" :options="dropzoneOptions"></vue-dropzone>
    
    <br/><br/>
    <h5 style="margin-bottom:0;">이미지 (교육)</h5>
    <p>(입력 시, "XXX 출처" 로 표기필요) (띄어쓰기 앞 값은 무시 함)</p>
    <vue-dropzone ref="myVueDropzone4" id="dropzone4" v-on:vdropzone-removed-file="removeEventImage2" v-on:vdropzone-sending="sendingEventImage3" :options="dropzoneOptions"></vue-dropzone>
    
  </b-card>

  <b-card>
    <div v-for="(reference, index) in highlightImageReference">
      <b-row>
      <b-col md="4">
        <img :src="reference.thumbnailUrl" />
      </b-col>
      <b-col md="6">
        <b-form-input
          type="text"
          v-model="reference.reference"
          placeholder="출처 기입"
        />
      </b-col>
      <b-col md="2">
        <b-button
        variant="flat-primary"
        class="mt-0 mt-md-2 pl-0 pr-0"
        @click="submitReference(reference)"
        >
        ok
        </b-button>
      </b-col>
      </b-row>
    </div>
  </b-card>
  </div>
</template>

<script>
import { BTable, BCard, BButton, BModal, BFormInput, BRow, BCol, BFormGroup, BFormSelect, BLink, BToast } from 'bootstrap-vue'
import VueContext from 'vue-context'
import vSelect from 'vue-select'
import Ripple from 'vue-ripple-directive'
import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'

//const { getAllInterests, getInterestTypes, upsertInterest, deleteInterestById } = require ('@/wedive-frontend-graphql/interest-service')
const { upsertDiveCenter, getAllDiveCenters, getDiveCenterByUniqueName } = require('@/wedive-frontend-graphql/dive-center-service')
//const { getAllDivePoints } = require('@/wedive-frontend-graphql/dive-point-service')
const { upsertProduct, deleteProductById } = require('@/wedive-frontend-graphql/product-service')
const { uploadSingleImage, updateImage, getImageUrl } = require('@/wedive-frontend-graphql/image-service')

function sleep(ms) {
  const wakeUpTime = Date.now() + ms;
  while (Date.now() < wakeUpTime) {}
}

export default {
  components: {
    BCard,
    BTable,
    BButton,
    BModal,
    BFormInput,
    BFormGroup,
    BRow,
    BCol,
    BFormSelect,
    vSelect,
    BLink,
    VueContext,
    BToast,
    vueDropzone: vue2Dropzone
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      center_data: {},
      dropzoneOptions: {
          url: 'localhost/post',
          thumbnailWidth: 150,
          addRemoveLinks: true,
          headers: { "My-Awesome-Header": "header value" }
      },
      initBackgroundImages: [],
      initImages1: [],
      initImages2: [],
      initImages3: [],
      highlightImageReference: [],
    }
  },
  async beforeRouteEnter(to, from, next) {
    var center_data = await getDiveCenterByUniqueName(to.params.id);
    next(vm => {vm.setInterests(center_data)});
  },
  mounted() {
    for (var i=0; i<this.initBackgroundImages.length; i++) {
      if (this.initBackgroundImages[i].url != null)
        this.$refs.myVueDropzone.manuallyAddFile(this.initBackgroundImages[i].file, this.initBackgroundImages[i].url);
    }
    for (var i=0; i<this.initImages1.length; i++) {
      if (this.initImages1[i].url != null)
        this.$refs.myVueDropzone2.manuallyAddFile(this.initImages1[i].file, this.initImages1[i].url);
    }
    for (var i=0; i<this.initImages2.length; i++) {
      if (this.initImages2[i].url != null)
        this.$refs.myVueDropzone3.manuallyAddFile(this.initImages2[i].file, this.initImages2[i].url);
    }
    for (var i=0; i<this.initImages3.length; i++) {
      if (this.initImages3[i].url != null)
        this.$refs.myVueDropzone4.manuallyAddFile(this.initImages3[i].file, this.initImages3[i].url);
    }
  },
  methods: {
    async submitReference(reference) {
      console.log(reference);
      var ipt2 = {"_id": reference._id, "reference": reference.reference, "name": reference.name};
      var result2 = await updateImage(ipt2);
      console.log(result2);
      this.$bvToast.toast('이미지 출처 = ' + reference.name, {
        title: `업로드 완료`,
        variant: 'success',
        solid: false,
      });
    },
    setInterests: function(center_data) {
      
      this.center_data = center_data.getDiveCenterByUniqueName;
      if (this.center_data.backgroundImages && this.center_data.backgroundImages.length > 0)  {
        for (var i=0; i<this.center_data.backgroundImages.length; i++) {
          var file = { size: 123, name: this.center_data.backgroundImages[i].name, type: "image/png", _id: this.center_data.backgroundImages[i]._id };
          var url = this.center_data.backgroundImages[i].thumbnailUrl;
          this.initBackgroundImages.push({file: file, url: url});
        }
      }
      if (this.center_data.images && this.center_data.images.length > 0)  {
        for (var i=0; i<this.center_data.images.length; i++) {
          var file = { size: 123, name: this.center_data.images[i].name, type: "image/png", _id:this.center_data.images[i]._id };
          var url = this.center_data.images[i].thumbnailUrl;

          if (this.center_data.images[i].description == '센터') {
            this.initImages1.push({file: file, url: url});
          } else if (this.center_data.images[i].description == '다이빙') {
            this.initImages2.push({file: file, url: url});
          } else if (this.center_data.images[i].description == '교육') {
            this.initImages3.push({file: file, url: url});
          }
        }
      }
      
      
      //this.centers.forEach(center => {center.divePointsName = center.divePoints.map(point => {return point.uniqueName})})
      //this.centers.forEach(center => {center.interestsTitle = center.interests.map(interest => {return interest.title})})
      //this.centers.forEach(center => {center.rentalsName = center.rentals.map(rental => {return [rental.name,((rental.unitName==null)?'':rental.unitName),((rental.price==null)?'':rental.price)]})})
      //this.centers.forEach(center => {center.ticketsName = center.tickets.map(ticket => {return [ticket.unitName,((ticket.price==null)?'':ticket.price)]})})
    },
    async removeEventImage1 (file, error, xhr) {
      var name = file.name;
      var images_id_list = new Array();
      for (var i=0; i<this.center_data.backgroundImages.length; i++) {
        if (file._id != this.center_data.backgroundImages[i]._id) {
          images_id_list.push(this.center_data.backgroundImages[i]._id);
        } else {
          this.center_data.backgroundImages.splice(i, 1);
        }
      }
      var ipt2 = {"backgroundImages": images_id_list, "_id": this.center_data._id, "uniqueName": this.center_data.uniqueName, "latitude": this.center_data.latitude, "longitude": this.center_data.longitude};
      var result3 = await upsertDiveCenter(ipt2);
      this.$bvToast.toast('파일명 = ' + name, {
        title: `삭제 완료`,
        variant: 'success',
        solid: false,
      });
    },
    async removeEventImage2 (file, error, xhr) {
      var name = file.name;
      var images_id_list = new Array();
      for (var i=0; i<this.center_data.images.length; i++) {
        if (file._id != this.center_data.images[i]._id) {
          images_id_list.push(this.center_data.images[i]._id);
        }
        else {
          this.center_data.images.splice(i, 1);
        }
      }
      var ipt2 = {"images": images_id_list, "_id": this.center_data._id, "uniqueName": this.center_data.uniqueName, "latitude": this.center_data.latitude, "longitude": this.center_data.longitude};
      var result3 = await upsertDiveCenter(ipt2);
      this.$bvToast.toast('파일명 = ' + name, {
        title: `삭제 완료`,
        variant: 'success',
        solid: false,
      });
    },
    async sendingEventImage1 (file, xhr, formData) {
      this.sendingEventImage(file, xhr, formData, "센터");
    },
    async sendingEventImage2 (file, xhr, formData) {
      this.sendingEventImage(file, xhr, formData, "다이빙");
    },
    async sendingEventImage3 (file, xhr, formData) {
      this.sendingEventImage(file, xhr, formData, "교육");
    },
    async sendingEventImage (file, xhr, formData, m_type) {
        var name = file.name;
        var split_name = name.split(" ");
        if (split_name.length < 2) {
          this.$bvToast.toast('파일명 = ' + name, {
            title: `파일명이 잘못되었습니다.`,
            variant: 'danger',
            solid: false,
          });
        } else {
          var description = m_type;
          var reference = split_name[1];
          if (reference.indexOf(".") > 0) {
            reference = reference.substring(0, reference.lastIndexOf("."))
          }
          reference = "https://www.instagram.com/p/" + reference;
          var ipt = {"name": name,"reference": reference, "description": description}
          
          var result = await uploadSingleImage(file);
          ipt._id = result.uploadImage._id;
          var result2 = await updateImage(ipt);

          var images_id_list = this.center_data.images.map((image)=>{return image._id});
          images_id_list.push(result.uploadImage._id);
          this.center_data.images.push({_id: result.uploadImage._id})
          var ipt2 = {"images": images_id_list, "_id": this.center_data._id, "uniqueName": this.center_data.uniqueName, "latitude": this.center_data.latitude, "longitude": this.center_data.longitude};
          var result3 = await upsertDiveCenter(ipt2);
          this.$bvToast.toast('파일명 = ' + name, {
            title: `업로드 완료`,
            variant: 'success',
            solid: false,
          });
          
        }
    },
    async sendingEventBackground (file, xhr, formData) {
      var name = file.name;
        var split_name = name.split(" ");
        var reference = "";
        if (split_name.length < 2) {
          this.$bvToast.toast('파일명 = ' + name, {
            title: `파일명에 띄어쓰기가 없어 출처가 공란으로 표기됩니다.`,
            variant: 'danger',
            solid: false,
          });
        } else {
          reference = split_name[1];
          if (reference.indexOf(".") > 0) {
            reference = reference.substring(0, reference.lastIndexOf("."))
          }
          reference = "https://www.instagram.com/p/" + reference;
        }
        var ipt = {"name": name,"reference": reference}
        
        var result = await uploadSingleImage(file);
        //console.log(result);
        ipt._id = result.uploadImage._id;
        //console.log(ipt);
        var result2 = await updateImage(ipt);

        await sleep(1000);


        // reference 추가를 위해 생성
        this.highlightImageReference.push({thumbnailUrl: result2.updateImage.thumbnailUrl, _id: result2.updateImage._id, reference: "", name: name});

        if (this.center_data.backgroundImages == null) {
          this.center_data.backgroundImages = [];
        }

        var images_id_list = this.center_data.backgroundImages.map((image)=>{return image._id});
        images_id_list.push(result.uploadImage._id);
        this.center_data.backgroundImages.push({_id: result.uploadImage._id})
        var ipt2 = {"backgroundImages": images_id_list, "_id": this.center_data._id, "uniqueName": this.center_data.uniqueName, "latitude": this.center_data.latitude, "longitude": this.center_data.longitude};
        var result3 = await upsertDiveCenter(ipt2);
        this.$bvToast.toast('파일명 = ' + name, {
          title: `업로드 완료`,
          variant: 'success',
          solid: false,
        });
        //formData.append('paramName', 'some value or other');
    },
    makeToast(variant = null) {
      this.$bvToast.toast('Toast body content', {
        title: `Variant ${variant || 'default'}`,
        variant,
        solid: false,
      })
    },
  },
}
</script>

<style scoped lang="scss">
@import '@core/scss/vue/libs/vue-context.scss';

</style>