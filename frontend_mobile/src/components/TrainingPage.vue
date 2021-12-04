<template>
  <div class="">
    <div class="content mb-0">
        <h4 class="text-start pt-2 mb-2">숨참기 트레이닝</h4>
        <div class="row mb-0">
            <div class="col-6 pe-2 mb-5">
                <div class="card card-style mx-0 mb-0 rounded-sm no-shadow" v-on:click="goTrainingList()">
                    <div class="square-rect">
                        <img src="/static/images/training1.jpg" class="img-fluid">
                    </div>
                    <div class="card-overlay bg-gradient opacity-30"></div>
                    <div class="card-bottom px-3 py-3">
                        <h4 class="color-white font-11 font-400 mb-0"><i class="fas fa-cube me-2"></i>24 Course</h4>
                    </div>
                </div>
                <div class="px-2">
                    <h2 class="font-17 font-noto font-800 mb-0 mt-2 letter-short">CO<sub>2</sub>트레이닝</h2>
                    <p class="font-11 line-height-s mb-0 color-gray">높은 이산화탄소 내성</p>
                </div>
                
            </div>
            <div class="col-6 pe-2 mb-5">
                <div class="card card-style mx-0 mb-0 rounded-sm no-shadow" v-on:click="goTrainingList()">
                    <div class="square-rect">
                        <img src="/static/images/training2.jpg" class="img-fluid">
                    </div>
                    <div class="card-overlay bg-gradient opacity-30"></div>
                    <div class="card-bottom px-3 py-3">
                        <h4 class="color-white font-11 font-400 mb-0"><i class="fas fa-cube me-2"></i>24 Course</h4>
                    </div>
                </div>
                <div class="px-2">
                    <h2 class="font-17 font-noto font-800 mb-0 mt-2 letter-short">O<sub>2</sub>트레이닝</h2>
                    <p class="font-11 line-height-s mb-0 color-gray">낮은 산소 내성</p>
                </div>
            </div>
        </div>
        
        <a href="#" id="play"class="btn btn-full mb-1 pt-3 pb-3 font-14 font-500 color-highlight"><i class="fas fa-plus"></i> 일정 추가하기</a>
    </div>
    
    
    
    
  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  mounted() {
      var preloader = document.getElementById('preloader')
      if(preloader){preloader.classList.add('preloader-hide');}
    
      var audioElement = document.createElement('audio');
        audioElement.setAttribute('src', '/static/mp3/Loop.mp3');
        
        audioElement.addEventListener('ended', function() {
            this.play();
        }, false);
        
        audioElement.addEventListener("canplay",function(){
            $("#length").text("Duration:" + audioElement.duration + " seconds");
            $("#source").text("Source:" + audioElement.src);
            $("#status").text("Status: Ready to play").css("color","green");
        });
        
        audioElement.addEventListener("timeupdate",function(){
            $("#currentTime").text("Current second:" + audioElement.currentTime);
        });
        
        $('#play').click(function() {
            window.navigator.vibrate(200);

            audioElement.play();
            $("#status").text("Status: Playing");
        });
        
        $('#pause').click(function() {
            audioElement.pause();
            $("#status").text("Status: Paused");
        });
        
        $('#restart').click(function() {
            audioElement.currentTime = 0;
        });


    if (this.$route.query.header && this.$route.query.header == 'hide') {
      $(".page-title").hide();
      $(".page-title-clear").hide();
      $(".header-fixed").hide();
    }
    if (this.$route.query.footer && this.$route.query.footer == 'hide') {
      $("#footer-bar").hide();
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
    goTrainingList: function() {
        location.href = '/training_list';
    }
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.square-rect {position: relative;padding:0;}
.square-rect:after {content: "";display: block;padding-bottom: 100%;}
.square-rect > img {position: absolute;width: 100%;height: 100%;left: 0;object-fit: cover;}

</style>
