<template>
  <b-card
    :title="center_data.name"
  >
    <p>배경 이미지</p>
    <vue-dropzone ref="myVueDropzone" id="dropzone" v-on:vdropzone-sending="sendingEvent"></vue-dropzone>
    
    
  </b-card>

</template>

<script>
import { BTable, BCard, BButton, BModal, BFormInput, BRow, BCol, BFormGroup, BFormSelect, BLink } from 'bootstrap-vue'
import VueContext from 'vue-context'
import vSelect from 'vue-select'
import Ripple from 'vue-ripple-directive'
import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'

//const { getAllInterests, getInterestTypes, upsertInterest, deleteInterestById } = require ('@/wedive-frontend-graphql/interest-service')
const { upsertDiveCenter, getAllDiveCenters, getDiveCenterByUniqueName } = require('@/wedive-frontend-graphql/dive-center-service')
//const { getAllDivePoints } = require('@/wedive-frontend-graphql/dive-point-service')
const { upsertProduct, deleteProductById } = require('@/wedive-frontend-graphql/product-service')

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
    vueDropzone: vue2Dropzone
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      center_data: {},
      dropzoneOptions: {
          url: 'https://httpbin.org/post',
          thumbnailWidth: 150,
          headers: { "My-Awesome-Header": "header value" }
      },
    }
  },
  async beforeRouteEnter(to, from, next) {
    var center_data = await getDiveCenterByUniqueName(to.params.id);
    next(vm => {vm.setInterests(center_data)});
  },
  methods: {
    setInterests: function(center_data) {
      
      this.center_data = center_data.getDiveCenterByUniqueName;
      //this.centers.forEach(center => {center.divePointsName = center.divePoints.map(point => {return point.uniqueName})})
      //this.centers.forEach(center => {center.interestsTitle = center.interests.map(interest => {return interest.title})})
      //this.centers.forEach(center => {center.rentalsName = center.rentals.map(rental => {return [rental.name,((rental.unitName==null)?'':rental.unitName),((rental.price==null)?'':rental.price)]})})
      //this.centers.forEach(center => {center.ticketsName = center.tickets.map(ticket => {return [ticket.unitName,((ticket.price==null)?'':ticket.price)]})})
    },
    sendingEvent (file, xhr, formData) {
        console.log(file)
        console.log(formData);
        //formData.append('paramName', 'some value or other');
    },

  },
}
</script>

<style scoped lang="scss">
@import '@core/scss/vue/libs/vue-context.scss';

</style>