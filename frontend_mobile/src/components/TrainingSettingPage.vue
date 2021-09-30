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
    
    
    <a href="#" class="btn btn-full font-400 shadow-l gradient-highlight color-white bd-w-0 mt-2 font-14" style="border-radius:0;position:fixed;width:100%;bottom:0;height:46px;padding-top:11px;">트레이닝 시작</a>

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

  </div>
</template>
<script>
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
    }
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
