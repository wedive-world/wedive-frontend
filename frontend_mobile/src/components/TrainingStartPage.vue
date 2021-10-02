<template>
  <div class="">
    
    <div class="card card-style p-3 mb-2 mt-2">
      <div class="progress1 text-center" style="height:170px;"></div>
      <div style="position: absolute;right: 20px;bottom: 14px;"><span class="font-noto font-14 mb-0 color-secondary" style="display: block;">소요시간</span><span class="font-exo2 font-20 mt-n1" style="display: block;">02:53</span></div>
    </div>

    <div class="card card-style p-3 mb-2">
      <table class="table table-borderless text-center rounded-sm shadow-l bg-white font-noto font-15" style="overflow: hidden;">
        <thead>
            <tr class="bg-highlight">
                <th scope="col" class="color-white font-500" style="width: 80px;">회차</th>
                <th scope="col" class="color-white font-500">호흡</th>
                <th scope="col" class="color-white font-500">참기</th>
            </tr>
        </thead>
        <tbody>
            <tr class="border-bottom">
                <th class="" scope="row" style="width: 80px;">1</th>
                <td><div>2:00</div></td>
                <td><div>0:40</div><div class="td-abs">0:32</div></td>
            </tr>
            <tr class="border-bottom">
                <th class="" scope="row" style="width: 80px;">2</th>
                <td><div class="td-active">1:45</div></td>
                <td><div>0:40</div></td>
            </tr>
            <tr class="border-bottom">
                <th class="" scope="row" style="width: 80px;">3</th>
                <td><div>1:30</div></td>
                <td><div>0:40</div></td>
            </tr>
            <tr class="border-bottom">
                <th class="" scope="row" style="width: 80px;">4</th>
                <td><div>1:15</div></td>
                <td><div>0:40</div></td>
            </tr>
            <tr class="border-bottom">
                <th class="" scope="row" style="width: 80px;">5</th>
                <td><div>1:00</div></td>
                <td><div>0:40</div></td>
            </tr>
            <tr class="border-bottom">
                <th class="" scope="row" style="width: 80px;">6</th>
                <td><div>0:45</div></td>
                <td><div>0:40</div></td>
            </tr>
            <tr class="border-bottom">
                <th class="" scope="row" style="width: 80px;">7</th>
                <td><div>0:30</div></td>
                <td><div>0:40</div></td>
            </tr>
            <tr>
                <th class="" scope="row" style="width: 80px;">8</th>
                <td><div>0:15</div></td>
                <td><div>0:40</div></td>
            </tr>
        </tbody>
    </table>
    </div>

    <div class="card card-style pb-3">
      <div class="d-flex">
        <div class="flex-grow-1 text-center mt-3"><img src="/static/images/icon_giveup.svg" width="40"/><p class="mb-0 mt-2">참기 실패</p></div>
        <div class="flex-grow-1 text-center mt-3 border-left"><img src="/static/images/icon_timer.svg" width="40"/><p class="mb-0 mt-2">참기 +5초</p></div>
        <div class="flex-grow-1 text-center mt-3 border-left"><img src="/static/images/icon_pause.svg" width="40"/><p class="mb-0 mt-2">일시중지</p></div>
        <div class="flex-grow-1 text-center mt-3 border-left"><img src="/static/images/icon_stop.svg" width="35" style="margin-top:2.5px;"/><p class="mb-0 mt-2">종료</p></div>
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
        
        window.scrollTo(0, 1);
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
@import url('https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@1,700&display=swap');


.font-exo2 {font-family: 'Exo 2', sans-serif;}
.font-noto {font-family: 'Noto Sans Korean';}
.bl-1 {border-left: 1px solid rgba(0, 0, 0, 0.08) !important;}
.border-bottom {border-bottom: 1px solid rgba(0, 0, 0, 0.08) !important;}
.border-left {border-left: 1px solid rgba(0, 0, 0, 0.08);}
td {position: relative;}
.td-active {background: #25beb2;border-radius: 12px;}
.td-abs {position: absolute;right:8px;;bottom:8px;color:#ff5160;}






</style>
