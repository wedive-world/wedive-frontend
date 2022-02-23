<template>
  <div class="">
    <div class="mb-0 bg-white" style="position: fixed;top: 0;width: 100%;height:220px;border-bottom: 3px solid #c7e0e988;z-index:99;">
        <div class="header header-logo-center" style="position: relative;border-bottom-width: 0px;">
            <a href="" class="header-title color ellipsis"></a>
            <a href="#" data-back-button class="header-icon header-icon-1"><i class="fas fa-chevron-left"></i></a>
            <a href="#" data-menu="menu-main" class="header-icon header-icon-3 font-15"><i class="far fa-question-circle"></i></a>
            <a href="#" data-toggle-theme class="header-icon header-icon-4 font-15"><i class="far fa-trash-alt"></i></a>
        </div>
        <div class="p-3">
            <p class="mb-3 font-20 font-500 font-noto">CO<sub>2</sub>트레이닝 도전</p>
            <p class="mb-0 font-11 font-200 font-noto" style="line-height:16px;">우리가 숨을 참고 있으면 숨을 쉬고 싶은 호흡 충동이 생기게 됩니다.<br/>이것은 체내에 쌓인 이산화탄소 (CO<sub>2</sub>)에 의해 발생합니다.<br/>더 긴 시간 숨을 참기 위해 이산화탄소에 대한 내성을 길러보세요.</p>
            <p class="mb-0 mt-4 text-end color-secondary font-12"><i class="fas fa-cube"></i> 총 트레이닝 횟수 : 1회</p>
        </div>
    </div>

    
    <div style="position: relative;margin-top:220px;">
        <div class="timeline-deco"></div>
        <div style="background-color: #edf7fa88;">
            <div style="position: relative;">
                <i class="border-highlight shadow-l timeline-icon font-900 timeline-deco-bullet"></i>
                <span class="font-15 font-noto color-highlight timeline-deco-desc">1주</span>
            </div>
            <ul class="progressbar" style="margin-left:80px;height: 100px;">
                <li class="active" key="1" v-on:click="goTrainingSetting()"> </li>
                <li class="" key="2" v-on:click="goTrainingSetting()"> </li>
                <li class="" key="3" v-on:click="goTrainingSetting()"> </li>
            </ul>
        </div>


        <div style="background-color: #c7e0e988;">
            <div style="position: relative;">
                <i class="border-highlight shadow-l timeline-icon font-900 timeline-deco-bullet"></i>
                <span class="font-15 font-noto color-highlight timeline-deco-desc">2주</span>
            </div>
            <ul class="progressbar" style="margin-left:80px;height: 100px;">
                <li class="" key="1" v-on:click="goTrainingSetting()"> </li>
                <li class="" key="2" v-on:click="goTrainingSetting()"> </li>
                <li class="" key="3" v-on:click="goTrainingSetting()"> </li>
            </ul>
        </div>

        <div style="background-color: #edf7fa88;">
            <div style="position: relative;">
                <i class="border-highlight shadow-l timeline-icon font-900 timeline-deco-bullet"></i>
                <span class="font-15 font-noto color-highlight timeline-deco-desc">3주</span>
            </div>
            <ul class="progressbar" style="margin-left:80px;height: 100px;">
                <li class="" key="1" v-on:click="goTrainingSetting()"> </li>
                <li class="" key="2" v-on:click="goTrainingSetting()"> </li>
                <li class="" key="3" v-on:click="goTrainingSetting()"> </li>
            </ul>
        </div>

        <div style="background-color: #c7e0e988;">
            <div style="position: relative;">
                <i class="border-highlight shadow-l timeline-icon font-900 timeline-deco-bullet"></i>
                <span class="font-15 font-noto color-highlight timeline-deco-desc">4주</span>
            </div>
            <ul class="progressbar" style="margin-left:80px;height: 100px;">
                <li class="" key="1" v-on:click="goTrainingSetting()"> </li>
                <li class="" key="2" v-on:click="goTrainingSetting()"> </li>
                <li class="" key="3" v-on:click="goTrainingSetting()"> </li>
            </ul>
        </div>

        <div style="background-color: #edf7fa88;">
            <div style="position: relative;">
                <i class="border-highlight shadow-l timeline-icon font-900 timeline-deco-bullet"></i>
                <span class="font-15 font-noto color-highlight timeline-deco-desc">5주</span>
            </div>
            <ul class="progressbar" style="margin-left:80px;height: 100px;">
                <li class="" key="1" v-on:click="goTrainingSetting()"> </li>
                <li class="" key="2" v-on:click="goTrainingSetting()"> </li>
                <li class="" key="3" v-on:click="goTrainingSetting()"> </li>
            </ul>
        </div>

        <div style="background-color: #c7e0e988;">
            <div style="position: relative;">
                <i class="border-highlight shadow-l timeline-icon font-900 timeline-deco-bullet"></i>
                <span class="font-15 font-noto color-highlight timeline-deco-desc">6주</span>
            </div>
            <ul class="progressbar" style="margin-left:80px;height: 100px;">
                <li class="" key="1" v-on:click="goTrainingSetting()"> </li>
                <li class="" key="2" v-on:click="goTrainingSetting()"> </li>
                <li class="" key="3" v-on:click="goTrainingSetting()"> </li>
            </ul>
        </div>

        <div style="background-color: #edf7fa88;">
            <div style="position: relative;">
                <i class="border-highlight shadow-l timeline-icon font-900 timeline-deco-bullet"></i>
                <span class="font-15 font-noto color-highlight timeline-deco-desc">7주</span>
            </div>
            <ul class="progressbar" style="margin-left:80px;height: 100px;">
                <li class="" key="1" v-on:click="goTrainingSetting()"> </li>
                <li class="" key="2" v-on:click="goTrainingSetting()"> </li>
                <li class="" key="3" v-on:click="goTrainingSetting()"> </li>
            </ul>
        </div>

        <div style="background-color: #c7e0e988;">
            <div style="position: relative;">
                <i class="border-highlight shadow-l timeline-icon font-900 timeline-deco-bullet"></i>
                <span class="font-15 font-noto color-highlight timeline-deco-desc">8주</span>
            </div>
            <ul class="progressbar" style="margin-left:80px;height: 100px;">
                <li class="" key="1" v-on:click="goTrainingSetting()"> </li>
                <li class="" key="2" v-on:click="goTrainingSetting()"> </li>
                <li class="" key="3" v-on:click="goTrainingSetting()"> </li>
            </ul>
        </div>

        
    </div>
    
    
    
  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  mounted() {
    
    
    $(".page-title").hide();
    $(".page-title-clear").hide();
    $(".header-auto-show").hide();

    if (this.$route.query.header && this.$route.query.header == 'hide') {
      $(".page-title").hide();
      $(".page-title-clear").hide();
      $(".header-fixed").hide();
    }
  },
  components: {
    
  },
  created() {
    setTimeout(function() {
        init_template();
        var preloader = document.getElementById('preloader')
        if(preloader){preloader.classList.add('preloader-hide');}
    }, 500);
  },
  destroyed () {
    
  },
  data () {
    return {
      
    }
  }, methods: {
    goTrainingSetting: function() {
        location.href = 'training_setting';
    }
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .progressbar{
  counter-reset: step;
  margin-bottom: 0;
  padding-top: 20px;
}
.progressbar li{
  float: left;
  width: 33.3%;
  position: relative;
  text-align: center;
}
.progressbar li:before{
  content:counter(step);
  counter-increment: step;
  width: 60px;
  height: 60px;
  border: 2px solid #bebebe;
  display: block;
  margin: 0 auto 10px auto;
  border-radius: 50%;
  line-height: 27px;
  background: white;
  color: #bebebe;
  text-align: center;
  font-weight: 200;
  font-size: 28px;
  padding-top:12px;
}
.progressbar .active:before {
    content: "" !important;
    background-image: url(/static/images/ico_wedive_stamp.png) !important;
    background-size: 60px 60px !important;
    width: 60px !important;
    height: 60px !important;
    display: inline-block;
}
.progressbar li:after{
  content: '';
  position: absolute;
  width:100%;
  height: 2px;
  background: #bebebe;
  top: 27px;
  left: -50%;
  z-index: -1;
}
.progressbar li.active:before{
 border-color: #1d397c ;
 
 color: white
}
.progressbar li.active:after{
 background: #3aac5d;
}
.progressbar li.active - li:after{
 background: #3aac5d;
}
.progressbar li.active - li:before{
border-color: #3aac5d;
background: #3aac5d;
color: white
}
.progressbar li:first-child:after{
 content: none;
}
ul{
   list-style:none;
   padding-left:0px;
   }
.timeline-deco {left: 24px !important;width:2px;background-color: #b6c5ea66;}
.timeline-deco-bullet {
    border: 3px solid gray;
    position: absolute;
    line-height: 45px;
    text-align: center;
    border-radius: 45px;
    width: 20px;
    height: 20px;
    left: 15px;
    top: 40px;
    background: white;
}
.timeline-deco-desc {
    position: absolute;left: 58px;top:37px;
}
</style>
