<template>
  <div class="">
    <div class="mb-0 bg-white" style="position: fixed;top: 0;width: 100%;height:220px;border-bottom: 3px solid #c7e0e988;z-index:99;">
        <div class="header header-logo-center" style="position: relative;border-bottom-width: 0px;">
            <a href="" class="header-title color ellipsis">1주 1회차 트레이닝</a>
            <a href="#" data-back-button class="header-icon header-icon-1"><i class="fas fa-chevron-left"></i></a>
            <a href="#" data-menu="menu-main" class="header-icon header-icon-3 font-15"><i class="far fa-question-circle"></i></a>
            <a href="#" data-toggle-theme class="header-icon header-icon-4 font-15"><i class="far fa-trash-alt"></i></a>
        </div>
        <div class="p-2">
            <p class="mb-1 font-24 font-500 font-noto text-center">19:20</p>
            <p class="mb-0 font-11 font-200 font-noto text-center" style="line-height:16px;">총 트레이닝 시간</p>
            
            <p class="mb-0 mt-n1 ms-1 font-11 font-200 font-noto text-start color-gray-light-mid"><i class="wedive_icoset wedive_icoset_info me-1"></i>항목을 클릭해 수정</p>
            <div class="row mt-1">
                <div class="col-3 text-center" data-menu="menu-repeat">
                    <img src="/static/images/icon_repeat.svg" height="40"/>
                    <p class="mb-0 color-highlight font-noto">반복</p>
                    <p class="mb-0 mt-n1 color-gray font-noto"><span id="span_repeat">8</span>회</p>
                </div>
                <div class="col-3 text-center bl-1" data-menu="menu-first">
                    <img src="/static/images/icon_breath.png" height="40"/>
                    <p class="mb-0 color-highlight font-noto">첫 호흡</p>
                    <p class="mb-0 mt-n1 color-gray font-noto"><span id="span_first1">02</span>:<span id="span_first2">00</span></p>
                </div>
                <div class="col-3 text-center bl-1" data-menu="menu-hold">
                    <img src="/static/images/icon_breath_hold.png" height="40"/>
                    <p class="mb-0 color-highlight font-noto">숨참기</p>
                    <p class="mb-0 mt-n1 color-gray font-noto"><span id="span_hold1">00</span>:<span id="span_hold2">40</span></p>
                </div>
                <div class="col-3 text-center bl-1" data-menu="menu-decrease">
                    <img src="/static/images/icon_decrease.svg" height="40"/>
                    <p class="mb-0 color-highlight font-noto">호흡감소</p>
                    <p class="mb-0 mt-n1 color-gray font-noto">00:<span id="span_decrease">15</span></p>
                </div>
            </div>
        </div>
    </div>

    <div class="content" style="position: relative;margin-top:220px;">
        <div class="pt-3">
            <table class="table table-borderless text-center rounded-sm shadow-l bg-white font-noto font-15" style="overflow: hidden;">
                <thead>
                    <tr class="bg-secondary">
                        <th scope="col" class="color-white font-500">회차</th>
                        <th scope="col" class="color-white font-500">호흡</th>
                        <th scope="col" class="color-white font-500">참기</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="border-bottom">
                        <th class="bg-secondary-light" scope="row">1</th>
                        <td>2:00</td>
                        <td>0:40</td>
                    </tr>
                    <tr class="border-bottom">
                        <th class="bg-secondary-light" scope="row">2</th>
                        <td>1:45</td>
                        <td>0:40</td>
                    </tr>
                    <tr class="border-bottom">
                        <th class="bg-secondary-light" scope="row">3</th>
                        <td>1:30</td>
                        <td>0:40</td>
                    </tr>
                    <tr class="border-bottom">
                        <th class="bg-secondary-light" scope="row">4</th>
                        <td>1:15</td>
                        <td>0:40</td>
                    </tr>
                    <tr class="border-bottom">
                        <th class="bg-secondary-light" scope="row">5</th>
                        <td>1:00</td>
                        <td>0:40</td>
                    </tr>
                    <tr class="border-bottom">
                        <th class="bg-secondary-light" scope="row">6</th>
                        <td>0:45</td>
                        <td>0:40</td>
                    </tr>
                    <tr class="border-bottom">
                        <th class="bg-secondary-light" scope="row">7</th>
                        <td>0:30</td>
                        <td>0:40</td>
                    </tr>
                    <tr>
                        <th class="bg-secondary-light" scope="row">8</th>
                        <td>0:15</td>
                        <td>0:40</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    
    
    <a href="#" data-menu="menu-starter" class="btn btn-full font-400 shadow-l gradient-highlight color-white bd-w-0 mt-2 font-14" style="border-radius:0;position:fixed;width:100%;bottom:0;height:46px;padding-top:11px;" v-on:click="start_training()">트레이닝 시작</a>

    <!-- Menu select repeat -->
    <div id="menu-repeat" class="menu menu-box-bottom rounded-half">
        <div class="menu-title mt-n1">
            <h2 class="pt-3 pb-3 font-16 text-center">반복 횟수</h2>
            <a href="#" class="close-menu float-end font-12 font-400 color-highlight" v-on:click="close_repeat()">완료</a>
        </div>
        <div class="content ms-5 me-5" style="margin-bottom:20px !important;">
            <scroll-picker :options="[2, 3, 4, 5, 6, 7, 8]" v-model="repeat_val"></scroll-picker>
        </div>
    </div>

    <!-- Menu select first -->
    <div id="menu-first" class="menu menu-box-bottom rounded-half">
        <div class="menu-title mt-n1">
            <h2 class="pt-3 pb-3 font-16 text-center">첫 호흡</h2>
            <a href="#" class="close-menu float-end font-12 font-400 color-highlight" v-on:click="close_first()">완료</a>
        </div>
        <div class="content ms-5 me-5" style="margin-bottom:20px !important;">
            <scroll-picker-group class="flex">
                <scroll-picker :options="['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10']" v-model="first1_val"></scroll-picker>
                <scroll-picker :options="['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19','20', '21', '22', '23', '24', '25', '26', '27', '28', '29','30', '31', '32', '33', '34', '35', '36', '37', '38', '39','40', '41', '42', '43', '44', '45', '46', '47', '48', '49','50', '51', '52', '53', '54', '55', '56', '57', '58', '59']" v-model="first2_val"></scroll-picker>
            </scroll-picker-group>
        </div>
    </div>

    <!-- Menu select hold -->
    <div id="menu-hold" class="menu menu-box-bottom rounded-half">
        <div class="menu-title mt-n1">
            <h2 class="pt-3 pb-3 font-16 text-center">숨참기</h2>
            <a href="#" class="close-menu float-end font-12 font-400 color-highlight" v-on:click="close_hold()">완료</a>
        </div>
        <div class="content ms-5 me-5" style="margin-bottom:20px !important;">
            <scroll-picker-group class="flex">
                <scroll-picker :options="['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10']" v-model="hold1_val"></scroll-picker>
                <scroll-picker :options="['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19','20', '21', '22', '23', '24', '25', '26', '27', '28', '29','30', '31', '32', '33', '34', '35', '36', '37', '38', '39','40', '41', '42', '43', '44', '45', '46', '47', '48', '49','50', '51', '52', '53', '54', '55', '56', '57', '58', '59']" v-model="hold2_val"></scroll-picker>
            </scroll-picker-group>
        </div>
    </div>

    <!-- Menu select decrease -->
    <div id="menu-decrease" class="menu menu-box-bottom rounded-half">
        <div class="menu-title mt-n1">
            <h2 class="pt-3 pb-3 font-16 text-center">호흡감소</h2>
            <a href="#" class="close-menu float-end font-12 font-400 color-highlight" v-on:click="close_decrease()">완료</a>
        </div>
        <div class="content ms-5 me-5" style="margin-bottom:20px !important;">
            <scroll-picker :options="['10', '11', '12', '13', '14', '15', '16', '17', '18', '19','20', '21', '22', '23', '24', '25', '26', '27', '28', '29','30', '31', '32', '33', '34', '35', '36', '37', '38', '39','40', '41', '42', '43', '44', '45', '46', '47', '48', '49','50', '51', '52', '53', '54', '55', '56', '57', '58', '59']" v-model="decrease_val"></scroll-picker>
        </div>
    </div>





















    <div id="menu-training" 
         class="menu menu-box-bottom menu-box-bottom-full rounded-0" 
         data-menu-width="cover"
         data-menu-height="cover"
         style="margin-bottom: 0 !important;">

         <a href="#" class="close-menu icon icon-s rounded-l bg-theme color-theme" style="position: absolute;z-index: 99;top: 20px;left: 24px;"><i class="fa fa-arrow-down"></i></a>
        
        <div class="card card-style p-3 mb-2 mt-2">
      <div class="progress1 text-center" style="height:160px;"></div>
      <div style="position: absolute;right: 20px;bottom: 14px;"><span class="font-noto font-14 mb-0 color-secondary" style="display: block;">소요시간</span><span class="font-exo2 font-20 mt-n1" style="display: block;"><span id="training_timer_min">00</span>:<span id="training_timer_sec">00</span></span></div>
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
                <td><div id="td1">2:00</div></td>
                <td><div id="td2">0:40</div><div class="td-abs">0:32</div></td>
            </tr>
            <tr class="border-bottom">
                <th class="" scope="row" style="width: 60px;">2</th>
                <td><div id="td3">1:45</div></td>
                <td><div id="td4">0:40</div></td>
            </tr>
            <tr class="border-bottom">
                <th class="" scope="row" style="width: 60px;">3</th>
                <td><div id="td5">1:30</div></td>
                <td><div id="td6">0:40</div></td>
            </tr>
            <tr class="border-bottom">
                <th class="" scope="row" style="width: 60px;">4</th>
                <td><div id="td7">1:15</div></td>
                <td><div id="td8">0:40</div></td>
            </tr>
            <tr class="border-bottom">
                <th class="" scope="row" style="width: 60px;">5</th>
                <td><div id="td9">1:00</div></td>
                <td><div id="td10">0:40</div></td>
            </tr>
            <tr class="border-bottom">
                <th class="" scope="row" style="width: 60px;">6</th>
                <td><div id="td11">0:45</div></td>
                <td><div id="td12">0:40</div></td>
            </tr>
            <tr class="border-bottom">
                <th class="" scope="row" style="width: 60px;">7</th>
                <td><div id="td13">0:30</div></td>
                <td><div id="td14">0:40</div></td>
            </tr>
            <tr>
                <th class="" scope="row" style="width: 60px;">8</th>
                <td><div id="td15">0:15</div></td>
                <td><div id="td16">0:40</div></td>
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
var circle = null;
var phase = 0;
var entires = -1;
function wediveTimer(duration, position, audio) {
    
  var timer = duration;
  var minutes, seconds;
  
  var entire_minutes, entire_seconds;
  
  var interval = setInterval(function(){
    minutes = parseInt(timer / 60 % 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    if (position.includes("phase")) {
        circle.value = parseInt(timer / duration * 100);;

        entires++;
        entire_minutes = parseInt(entires / 60 % 60, 10);
        entire_seconds = parseInt(entires % 60, 10);

        entire_minutes = entire_minutes < 10 ? "0" + entire_minutes : entire_minutes;
        entire_seconds = entire_seconds < 10 ? "0" + entire_seconds : entire_seconds;

        $("#training_timer_min").text(entire_minutes);
        $("#training_timer_sec").text(entire_seconds);


        $(".circle-progress-text-value").text(minutes + ":" + seconds);
        if (position.includes("_1")) {
            $(".circle-progress-text-max").text("호흡");
        } else {
            $(".circle-progress-text-max").text("참기");
        }
        

        if (timer < 4) {
            var beep_fin = document.createElement('audio');
            beep_fin.setAttribute('src', '/static/mp3/beep_fin.mp3');
            beep_fin.play();
        }
        if (timer == 0) {
            audio.pause();
            audio.currentTime = 0;
            phase++;
            var co2_first = document.createElement('audio');
            co2_first.setAttribute('src', '/static/mp3/co2_first_'+phase+'.mp3');
            co2_first.play();


            window.navigator.vibrate(500);
            $("td div").removeClass("td-active");
            $("#td" + phase).addClass("td-active");


            if (position.includes("_1")) {
                wediveTimer(40, position.replace("_1", "_2"), co2_first);
            } else {
                var split_posi = position.replace("phase", "").split("_");
                var step_to = parseInt(split_posi[0]) + 1;
                wediveTimer(120, position.replace(("phase"+split_posi[0]), ("phase"+step_to)).replace("_2","_1"), co2_first);
            }
        }
    }

    

    if (position == 'starter') {

      if (timer <= 5 && timer > 0) {
        $("#starter_noti").addClass("hide");
        $("#starter_timer").removeClass("hide");
        $('#starter_min').text(minutes);
        $('#starter_sec').text(seconds);

        audio.play();
        //audioElement.pause();
        //audioElement.currentTime = 0;
      }

      if (timer == 1) {
            clearInterval(interval);

            // close all menu first
            try {
                const activeMenu = document.querySelectorAll('.menu-active');
                for(let i=0; i < activeMenu.length; i++){activeMenu[i].classList.remove('menu-active');}
                for(let i=0; i < wrappers.length; i++){wrappers[i].style.transform = "translateX(-"+0+"px)"}
            } catch (e) {
            }
            // start training //
            var menuData = 'menu-training';
            document.getElementById(menuData).classList.add('menu-active');
            document.getElementsByClassName('menu-hider')[0].classList.add('menu-active');
            

            circle = new CircleProgress('.progress1', {
                textFormat: 'vertical',
                max: 100,
                value: 100,
            });

            
            $(".progress1 svg").attr("width", "170");
            $(".progress1 svg").attr("height", "170");
            $(".circle-progress-value").css("stroke-width", "6px");
            $(".circle-progress-value").css("stroke", "#1d397c ");
            $(".circle-progress-value").css("stroke-linecap", "round");

            $(".circle-progress-circle").css("stroke-width", "2px");
            $(".circle-progress-text-value").text("00:00");
            $(".circle-progress-text-value").css("font-family", "'Exo 2', sans-serif");
            $(".circle-progress-text-value").css("font-size", "23px");
            $(".circle-progress-text-value").css("fill", "black");
            $(".circle-progress-text-value").attr("x", "48");
            $(".circle-progress-text-value").attr("y", "55");
            $(".circle-progress-text-value").css("font-style", "italic");
            $(".circle-progress-text-separator").text("_________");
            $(".circle-progress-text-separator").attr("dy", "0.5em");
            $(".circle-progress-text-max").text("-");
            $(".circle-progress-text-max").attr("dy", "1.5em");
            $(".circle-progress-text-max").css("font-family", "Noto Sans Korean");
            $(".circle-progress-text-max").css("font-weight", "600");

            window.navigator.vibrate(500);

            phase = 1;
            var co2_first = document.createElement('audio');
            co2_first.setAttribute('src', '/static/mp3/co2_first_'+phase+'.mp3');
            co2_first.play();
            
            $("#td" + phase).addClass("td-active");
            wediveTimer(120, 'phase1_1', co2_first);
      }
    }
    else if (position == 'phase1_1') {
        
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
    var preloader = document.getElementById('preloader')
    if(preloader){preloader.classList.add('preloader-hide');}
    
    
    $(".page-title").hide();
    $(".page-title-clear").hide();
    $(".header-auto-show").hide();

    document.getElementById("footer-bar").classList.add("hide");


    let circleProgress = document.createElement('script')
    circleProgress.setAttribute('src', '/static/scripts/circle-progress.js')
    document.head.appendChild(circleProgress)

  },
  components: {
    
  },
  created() {
    
  },
  destroyed () {
    
  },
  data () {
    return {
      repeat_val: 8,
      first1_val: "02",
      first2_val: "00",
      hold1_val: "00",
      hold2_val: "40",
      decrease_val: "15",
      faster: 2,
    }
  }, methods: {
    close_repeat: function() {
        $("#span_repeat").text(this.repeat_val);
    },
    close_first: function() {
        $("#span_first1").text(this.first1_val);
        $("#span_first2").text(this.first2_val);
    },
    close_hold: function() {
        $("#span_hold1").text(this.hold1_val);
        $("#span_hold2").text(this.hold2_val);
    },
    close_decrease: function() {
        $("#span_decrease").text(this.decrease_val);
    },
    start_training: function() {
        $(".menu-hider").css("background-color", "rgba(0, 0, 0, 0.65)");

        var start_training = document.createElement('audio');
        start_training.setAttribute('src', '/static/mp3/start_training.mp3');
        start_training.play();

        var audioBeep = document.createElement('audio');
        audioBeep.setAttribute('src', '/static/mp3/count_beep.mp3');

        wediveTimer(10, 'starter', audioBeep);


    }
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@1,700&display=swap');

.font-exo2 {font-family: 'Exo 2', sans-serif;}
.font-noto {font-family: 'Noto Sans Korean'}
.bl-1 {border-left: 1px solid rgba(0, 0, 0, 0.08) !important}
.border-bottom {border-bottom: 1px solid rgba(0, 0, 0, 0.08) !important}
.border-left {border-left: 1px solid rgba(0, 0, 0, 0.08);}
.bg-secondary-light {background: #e0eeed;}
td {position: relative;}
.td-active {background: #25beb2;border-radius: 12px;}
.td-abs {position: absolute;right:8px;;bottom:8px;color:#ff5160;font-size:14px;}

</style>
