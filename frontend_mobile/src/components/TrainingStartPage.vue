<template>
  <div class="">
    
    
    <div class="progress1" style="height:200px;">
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

    let circleProgress = document.createElement('script')
    circleProgress.setAttribute('src', '/static/scripts/circle-progress.js')
    document.head.appendChild(circleProgress)

    setTimeout(function() {
        new CircleProgress('.progress1', {
            max: 100,
            value: 60,
        });
        $(".circle-progress-value").css("stroke-width", "6px");
        $(".circle-progress-value").css("stroke", "#1d397c ");
        $(".circle-progress-value").css("stroke-linecap", "round");

        $(".circle-progress-circle").css("stroke-width", "2px");
        $(".circle-progress-text-value").text("02:20")
        $(".circle-progress-text-separator").text("")
        $(".circle-progress-text-max").text("")
        
    },500)
    
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
