<template>
  <b-card
    :title="site_data.name"
  >
    <h5>배경 이미지</h5>
    <vue-dropzone ref="myVueDropzone" id="dropzone" v-on:vdropzone-removed-file="removeEventImage1" v-on:vdropzone-sending="sendingEventBackground" :options="dropzoneOptions"></vue-dropzone>
    
    <!--<br/><br/>
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
    -->
  </b-card>

</template>

<script>
import { BTable, BCard, BButton, BModal, BFormInput, BRow, BCol, BFormGroup, BFormSelect, BLink, BToast } from 'bootstrap-vue'
import VueContext from 'vue-context'
import vSelect from 'vue-select'
import Ripple from 'vue-ripple-directive'
import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'

//const { getAllInterests, getInterestTypes, upsertInterest, deleteInterestById } = require ('@/wedive-frontend-graphql/interest-service')
const { upsertDiveSite, getAllDiveSites, getDiveSiteByUniqueName } = require('@/wedive-frontend-graphql/dive-site-service')
//const { getAllDivePoints } = require('@/wedive-frontend-graphql/dive-point-service')
const { upsertProduct, deleteProductById } = require('@/wedive-frontend-graphql/product-service')
const { uploadSingleImage, updateImage, getImageUrl } = require('@/wedive-frontend-graphql/image-service')


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
      site_data: {},
      dropzoneOptions: {
          url: 'localhost/post',
          thumbnailWidth: 150,
          addRemoveLinks: true,
          headers: { "My-Awesome-Header": "header value" }
      },
      initBackgroundImages: [],

    }
  },
  async beforeRouteEnter(to, from, next) {
    var site_data = await getDiveSiteByUniqueName(to.params.id);
    next(vm => {vm.setInterests(site_data)});
  },
  mounted() {
    for (var i=0; i<this.initBackgroundImages.length; i++) {
      if (this.initBackgroundImages[i].url != null)
        this.$refs.myVueDropzone.manuallyAddFile(this.initBackgroundImages[i].file, this.initBackgroundImages[i].url);
    }

  },
  methods: {
    setInterests: function(site_data) {
      
      this.site_data = site_data.getDiveSiteByUniqueName;
      if (this.site_data.backgroundImages && this.site_data.backgroundImages.length > 0)  {
        for (var i=0; i<this.site_data.backgroundImages.length; i++) {
          var file = { size: 123, name: this.site_data.backgroundImages[i].name, type: "image/png", _id: this.site_data.backgroundImages[i]._id };
          var url = this.site_data.backgroundImages[i].thumbnailUrl;
          this.initBackgroundImages.push({file: file, url: url});
        }
      }
      
    },
    async removeEventImage1 (file, error, xhr) {
      var name = file.name;
      var images_id_list = new Array();
      for (var i=0; i<this.site_data.backgroundImages.length; i++) {
        if (file._id != this.site_data.backgroundImages[i]._id) {
          images_id_list.push(this.site_data.backgroundImages[i]._id);
        } else {
          this.site_data.backgroundImages.splice(i, 1);
        }
      }
      var ipt2 = {"backgroundImages": images_id_list, "_id": this.site_data._id, "uniqueName": this.site_data.uniqueName, "latitude": this.site_data.latitude, "longitude": this.site_data.longitude};
      var result3 = await upsertDiveSite(ipt2);
      this.$bvToast.toast('파일명 = ' + name, {
        title: `삭제 완료`,
        variant: 'success',
        solid: false,
      });
    },
    
    async sendingEventImage1 (file, xhr, formData) {
      this.sendingEventImage(file, xhr, formData, "센터");
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

          var images_id_list = this.site_data.images.map((image)=>{return image._id});
          images_id_list.push(result.uploadImage._id);
          this.site_data.images.push({_id: result.uploadImage._id})
          var ipt2 = {"images": images_id_list, "_id": this.site_data._id, "uniqueName": this.site_data.uniqueName, "latitude": this.site_data.latitude, "longitude": this.site_data.longitude};
          var result3 = await upsertDiveSite(ipt2);
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
        if (split_name.length < 2) {
          this.$bvToast.toast('파일명 = ' + name, {
            title: `파일명이 잘못되었습니다.`,
            variant: 'danger',
            solid: false,
          });
        } else {
          var reference = split_name[1];
          if (reference.indexOf(".") > 0) {
            reference = reference.substring(0, reference.lastIndexOf("."))
          }
          reference = "https://www.instagram.com/p/" + reference;
          var ipt = {"name": name,"reference": reference}
          
          var result = await uploadSingleImage(file);
          //console.log(result);
          ipt._id = result.uploadImage._id;
          //console.log(ipt);
          var result2 = await updateImage(ipt);

          var images_id_list = this.site_data.backgroundImages.map((image)=>{return image._id});
          images_id_list.push(result.uploadImage._id);
          this.site_data.backgroundImages.push({_id: result.uploadImage._id})
          var ipt2 = {"backgroundImages": images_id_list, "_id": this.site_data._id, "uniqueName": this.site_data.uniqueName, "latitude": this.site_data.latitude, "longitude": this.site_data.longitude};
          var result3 = await upsertDiveSite(ipt2);
          this.$bvToast.toast('파일명 = ' + name, {
            title: `업로드 완료`,
            variant: 'success',
            solid: false,
          });
          
        }
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