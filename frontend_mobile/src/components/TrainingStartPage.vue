<template>
  <div class="">
    
    <div class="card card-style p-3 mb-2 mt-2">
      <div class="progress1 text-center" style="height:160px;"></div>
      <div style="position: absolute;right: 20px;bottom: 14px;"><span class="font-noto font-14 mb-0 color-secondary" style="display: block;">소요시간</span><span class="font-exo2 font-20 mt-n1" style="display: block;">02:53</span></div>
    </div>

    <div class="card card-style p-3 mb-2 pb-0">
      <table class="table table-borderless text-center rounded-sm shadow-l bg-white font-noto font-15" style="overflow: hidden;">
        <thead>
            <tr class="bg-highlight">
                <th scope="col" class="color-white font-500" style="width: 60px;">회차</th>
                <th scope="col" class="color-white font-500">호흡</th>
                <th scope="col" class="color-white font-500">참기</th>
            </tr>
        </thead>
        <tbody>
            <tr class="border-bottom">
                <th class="" scope="row" style="width: 60px;">1</th>
                <td><div>2:00</div></td>
                <td><div>0:40</div><div class="td-abs">0:32</div></td>
            </tr>
            <tr class="border-bottom">
                <th class="" scope="row" style="width: 60px;">2</th>
                <td><div class="td-active">1:45</div></td>
                <td><div>0:40</div></td>
            </tr>
            <tr class="border-bottom">
                <th class="" scope="row" style="width: 60px;">3</th>
                <td><div>1:30</div></td>
                <td><div>0:40</div></td>
            </tr>
            <tr class="border-bottom">
                <th class="" scope="row" style="width: 60px;">4</th>
                <td><div>1:15</div></td>
                <td><div>0:40</div></td>
            </tr>
            <tr class="border-bottom">
                <th class="" scope="row" style="width: 60px;">5</th>
                <td><div>1:00</div></td>
                <td><div>0:40</div></td>
            </tr>
            <tr class="border-bottom">
                <th class="" scope="row" style="width: 60px;">6</th>
                <td><div>0:45</div></td>
                <td><div>0:40</div></td>
            </tr>
            <tr class="border-bottom">
                <th class="" scope="row" style="width: 60px;">7</th>
                <td><div>0:30</div></td>
                <td><div>0:40</div></td>
            </tr>
            <tr>
                <th class="" scope="row" style="width: 60px;">8</th>
                <td><div>0:15</div></td>
                <td><div>0:40</div></td>
            </tr>
        </tbody>
    </table>
    </div>

    <div class="card card-style">
      <div class="row ms-1 me-1">
        <div class="col-3 text-center mt-3"><img src="/static/images/icon_giveup.svg" width="40"/><p class="mb-0 mt-2">참기 실패</p></div>
        <div class="col-3 text-center mt-3 border-left"><img src="/static/images/icon_timer.svg" width="40"/><p class="mb-0 mt-2">참기 +5초</p></div>
        <div class="col-3 text-center mt-3 border-left"><img src="/static/images/icon_pause.svg" width="40"/><p class="mb-0 mt-2">일시중지</p></div>
        <div class="col-3 text-center mt-3 border-left"><img src="/static/images/icon_stop.svg" width="34" style="margin-top:3px;margin-bottom:3px;"/><p class="mb-0 mt-2">종료</p></div>
      </div>
    </div>



    <!-- Menu : starter -->
    <div id="menu-starter" 
         class="menu menu-box-modal" style="background: transparent;backdrop-filter:none;"
         data-menu-width="350"
         data-menu-height="60">
        <div class="font-exo2 color-white text-center" style="font-size: 60px;line-height: 60px;">
          <p id="starter_noti" class="color-white font-noto font-24 mb-0" style="line-height: 30px;">잠시 후 트레이닝을 시작합니다.<br/>소리를 켜주세요.</p>
          <div id="starter_timer" class="hide"><span id="starter_min">00</span>:<span id="starter_sec">10</span></div>
        </div>
        
    </div>
    

  </div>
</template>
<script>
import { VueScrollPicker } from 'vue-scroll-picker'
import "vue-scroll-picker/dist/style.css"

function wediveTimer(duration, position, audio) {
    
  var timer = duration;
  var minutes, seconds;
  
  var interval = setInterval(function(){
    minutes = parseInt(timer / 60 % 60, 10);
    seconds = parseInt(timer % 60, 10);

    var minutes_show = minutes < 10 ? "0" + minutes : minutes;
    var seconds_show = seconds < 10 ? "0" + seconds : seconds;

    console.log(seconds);

    if (position == 'starter') {

      if (seconds <= 5) {
        $("#starter_noti").addClass("hide");
        $("#starter_timer").removeClass("hide");
        $('#starter_min').text(minutes_show);
        $('#starter_sec').text(seconds_show);

        audio.play();
        //audioElement.pause();
        //audioElement.currentTime = 0;
      }
    }
    //$('#time-min').text(minutes);
    //$('#time-sec').text(seconds);

    if (--timer < 0) {
        timer = 0;
        clearInterval(interval);
    }
  }, 1000);
}

export default {
  name: 'HelloWorld',
  mounted() {
    
    
    $(".page-title").hide();
    $(".page-title-clear").hide();
    $(".header-auto-show").hide();

    document.getElementById("footer-bar").classList.add("hide");

    let circleProgress = document.createElement('script')
    circleProgress.setAttribute('src', '/static/scripts/circle-progress.js')
    document.head.appendChild(circleProgress)
    
    setTimeout(function() {
        new CircleProgress('.progress1', {
            textFormat: 'vertical',
            max: 100,
            value: 60,
        });

        $(".progress1 svg").attr("width", "170");
        $(".progress1 svg").attr("height", "170");
        $(".circle-progress-value").css("stroke-width", "6px");
        $(".circle-progress-value").css("stroke", "#1d397c ");
        $(".circle-progress-value").css("stroke-linecap", "round");

        $(".circle-progress-circle").css("stroke-width", "2px");
        $(".circle-progress-text-value").text("01:32");
        $(".circle-progress-text-value").css("font-family", "'Exo 2', sans-serif");
        $(".circle-progress-text-value").css("font-size", "23px");
        $(".circle-progress-text-value").css("fill", "black");
        $(".circle-progress-text-value").attr("x", "48");
        $(".circle-progress-text-value").attr("y", "55");
        $(".circle-progress-text-value").css("font-style", "italic");
        $(".circle-progress-text-separator").text("_________");
        $(".circle-progress-text-separator").attr("dy", "0.5em");
        $(".circle-progress-text-max").text("호흡");
        $(".circle-progress-text-max").attr("dy", "1.5em");
        $(".circle-progress-text-max").css("font-family", "Noto Sans Korean");
        $(".circle-progress-text-max").css("font-weight", "600");
        

        // start order menu //
        var menuData = 'menu-starter';
        document.getElementById(menuData).classList.add('menu-active');
        document.getElementsByClassName('menu-hider')[0].classList.add('menu-active');
        $(".menu-hider").css("background-color", "rgba(0, 0, 0, 0.65)");

        var audioBeep = document.createElement('audio');
        audioBeep.setAttribute('src', '/static/mp3/b1.mp3');
        audioBeep.play();
        

        wediveTimer(10, 'starter', audioBeep);
    },700);


    

    
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
    VueScrollPicker,
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
      fontSize: 20,
    }
  }, methods: {
    
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@1,700&display=swap');


.font-exo2 {font-family: 'Exo 2', sans-serif;}
.font-noto {font-family: 'Noto Sans Korean';}
.bl-1 {border-left: 1px solid rgba(0, 0, 0, 0.08) !important;}
.border-bottom {border-bottom: 1px solid rgba(0, 0, 0, 0.08) !important;}
.border-left {border-left: 1px solid rgba(0, 0, 0, 0.08);}
td {position: relative;}
.td-active {background: #25beb2;border-radius: 12px;}
.td-abs {position: absolute;right:8px;;bottom:8px;color:#ff5160;font-size:14px;}





</style>
