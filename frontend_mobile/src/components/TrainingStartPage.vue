<template>
  <div class="">
    

    <a href="#" data-vibrate="10" class="btn btn-m btn-full shadow-s rounded-s bg-highlight text-uppercase font-900">10ms - Short </a>


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
