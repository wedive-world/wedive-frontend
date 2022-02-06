<template>
  <div>
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

  <b-card>
    <div v-for="(highlight, index) in site_data.highlights">
      <h5>하이라이트 {{ (index+1) }} ({{ highlight.description }})</h5>
      <vue-dropzone ref="highlightRef" :id="'dropzone_highlight'+index" v-on:vdropzone-mounted="highlightmounted(index)" v-on:vdropzone-removed-file="(file, error, xhr) => removeHighlightImage(file, error, xhr, index, highlight.name)" v-on:vdropzone-sending="(file, xhr, formData) => sendingEventHightlight(file, xhr, formData, index)" :options="dropzoneOptions"></vue-dropzone>
    </div>
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
const { upsertDiveSite, getAllDiveSites, getDiveSiteByUniqueName } = require('@/wedive-frontend-graphql/dive-site-service')
//const { getAllDivePoints } = require('@/wedive-frontend-graphql/dive-point-service')
const { upsertProduct, deleteProductById } = require('@/wedive-frontend-graphql/product-service')
const { uploadSingleImage, updateImage, getImageUrl } = require('@/wedive-frontend-graphql/image-service')
const { upsertHighlight, deleteHighlightById } = require('@/wedive-frontend-graphql/highlight-service')

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
      initHighlightImages: [],
      highlightImageReference: [],
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
    highlightmounted(index) {
      var j=index;
      for (var i=0; i<this.initHighlightImages[j].length; i++) {
        if (this.initHighlightImages[j][i].thumbnailUrl != null) {
          var file = { size: 123, name: this.initHighlightImages[j][i].name, type: "image/png", _id: this.initHighlightImages[j][i]._id };
          this.$refs.highlightRef[j].manuallyAddFile(file, this.initHighlightImages[j][i].thumbnailUrl);
        }
      }
    },
    setInterests: function(site_data) {
      
      this.site_data = site_data.getDiveSiteByUniqueName;
      if (this.site_data.backgroundImages && this.site_data.backgroundImages.length > 0)  {
        for (var i=0; i<this.site_data.backgroundImages.length; i++) {
          var file = { size: 123, name: this.site_data.backgroundImages[i].name, type: "image/png", _id: this.site_data.backgroundImages[i]._id };
          var url = this.site_data.backgroundImages[i].thumbnailUrl;
          this.initBackgroundImages.push({file: file, url: url});
        }
      }

      for (var j=0; j<this.site_data.highlights.length; j++) {
        this.initHighlightImages.push([]);
        for (var i=0; i<this.site_data.highlights[j].images.length; i++) {
          this.initHighlightImages[j].push(this.site_data.highlights[j].images[i]);
        }
      }
      
    },
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
    async removeHighlightImage (file, error, xhr, index, name) {
      var images_id_list = new Array();
      for (var i=0; i<this.site_data.highlights[index].images.length; i++) {
        if (file._id != this.site_data.highlights[index].images[i]._id) {
          images_id_list.push(this.site_data.highlights[index].images[i]._id);
        } else {
          this.site_data.highlights[index].images.splice(i, 1);
        }
      }
      const _images_id_list = images_id_list;
      const file_name = file.name;
      const bvToast = this.$bvToast;
      this.$swal({
        title: '삭제하시겠습니까?',
        text: "",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Yes",
        cancelButtonText: "No",
      }).then(async function(res) {
        if (res.isConfirmed) {
          var ipt2 = {"images": _images_id_list, "name": name};
          var result3 = await upsertHighlight(ipt2);
          bvToast.toast('파일삭제', {
            title: `삭제 완료`,
            variant: 'success',
            solid: false,
          });
        }
      });
      
    },
    async removeEventImage1 (file, error, xhr) {
      const name = file.name;
      var images_id_list = new Array();
      for (var i=0; i<this.site_data.backgroundImages.length; i++) {
        if (file._id != this.site_data.backgroundImages[i]._id) {
          images_id_list.push(this.site_data.backgroundImages[i]._id);
        } else {
          this.site_data.backgroundImages.splice(i, 1);
        }
      }
      const _images_id_list = images_id_list;
      const _id = this.site_data._id;
      const uniqueName = this.site_data.uniqueName;
      const latitude = this.site_data.latitude;
      const longitude = this.site_data.longitude;
      this.$swal({
        title: '삭제하시겠습니까?',
        text: e,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Yes",
        cancelButtonText: "No",
      }).then(async function(res) {
        if (res.isConfirmed) {
            var ipt2 = {"backgroundImages": _images_id_list, "_id": _id, "uniqueName": uniqueName, "latitude": latitude, "longitude": longitude};
            var result3 = await upsertDiveSite(ipt2);
            this.$bvToast.toast('파일명 = ' + name, {
              title: `삭제 완료`,
              variant: 'success',
              solid: false,
            });
        }
      })
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
    async sendingEventHightlight (file, xhr, formData, index) {
        var file_name = file.name;
        var split_name = file_name.split(" ");
        var reference = "";
        if (split_name.length < 2) {
          this.$bvToast.toast('파일명 = ' + file_name, {
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
        var ipt = {"name": file_name,"reference": reference}
        
        var result = await uploadSingleImage(file);
        ipt._id = result.uploadImage._id;
        var result2 = await updateImage(ipt);

        // reference 추가를 위해 생성
        this.highlightImageReference.push({thumbnailUrl: result2.updateImage.thumbnailUrl, _id: result2.updateImage._id, reference: "", name: file_name});

        var images_id_list = this.site_data.highlights[index].images.map((image)=>{return image._id});
        images_id_list.push(result.uploadImage._id);

        // 하이라이트 info
        var ipt2 = {"name": this.site_data.highlights[index].name, images: images_id_list};
        var result3 = await upsertHighlight(ipt2);
        this.$bvToast.toast('파일명 = ' + file_name, {
          title: `업로드 완료`,
          variant: 'success',
          solid: false,
        });
          

        //formData.append('paramName', 'some value or other');
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


        // reference 추가를 위해 생성
        this.highlightImageReference.push({thumbnailUrl: result2.updateImage.thumbnailUrl, _id: result2.updateImage._id, reference: "", name: name});


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