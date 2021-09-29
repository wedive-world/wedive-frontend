<template>
  <div class="">
    

    <a href="#" data-menu="menu-direction" class="btn btn-full font-400 shadow-l gradient-highlight color-white bd-w-0 mt-2 font-14" style="border-radius:0;position:fixed;width:100%;bottom:0;height:46px;padding-top:11px;">트레이닝 시작</a>
    
    


    <!-- Menu select -->
    <div id="menu-direction" class="menu menu-box-bottom rounded-half">
        <div class="menu-title mt-n1">
            <h2 class="pt-3 pb-3 text-center">1~5선택</h2>
            <a href="#" class="close-menu"><i class="wedive_icoset wedive_icoset_close"></i></a>
        </div>
        <div class="content mb-0 text-start">
            <scroll-picker :options="[1, 2, 3, 4, 5]" v-model="fontSize"></scroll-picker>
        </div>
    </div>
  </div>
</template>
<script>
import { VueScrollPicker } from 'vue-scroll-picker'
import "vue-scroll-picker/dist/style.css"

export default {
  name: 'HelloWorld',
  mounted() {
    var preloader = document.getElementById('preloader')
    if(preloader){preloader.classList.add('preloader-hide');}
    
    
    $(".page-title").hide();
    $(".page-title-clear").hide();
    $(".header-auto-show").hide();

    document.getElementById("footer-bar").classList.add("hide");

    
    
  },
  components: {
    VueScrollPicker,
  },
  created() {
    
  },
  destroyed () {
    
  },
  data () {
    return {
      fontSize: 20,
    }
  }, methods: {
    
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>


.font-noto {font-family: 'Noto Sans Korean'}
.bl-1 {border-left: 1px solid rgba(0, 0, 0, 0.08) !important}
.border-bottom {border-bottom: 1px solid rgba(0, 0, 0, 0.08) !important}
.bg-secondary-light {background: #e0eeed;}










</style>
