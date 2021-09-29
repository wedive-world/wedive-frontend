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
                <div class="col-3 text-center" v-on:click="click_repeat()">
                    <img src="/static/images/icon_repeat.svg" height="40"/>
                    <p class="mb-0 color-highlight font-noto">반복</p>
                    <p class="mb-0 mt-n1 color-gray font-noto"><span id="span_repeat">8</span>회</p>
                    <select class="opacity-20" id="select_repeat" required>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8" selected>8</option>
                    </select>
                </div>
                <div class="col-3 text-center bl-1">
                    <img src="/static/images/icon_breath.svg" height="40"/>
                    <p class="mb-0 color-highlight font-noto">첫 호흡</p>
                    <p class="mb-0 mt-n1 color-gray font-noto">02:00</p>
                </div>
                <div class="col-3 text-center bl-1">
                    <img src="/static/images/icon_breath_hold.svg" height="40"/>
                    <p class="mb-0 color-highlight font-noto">숨참기</p>
                    <p class="mb-0 mt-n1 color-gray font-noto">00:40</p>
                </div>
                <div class="col-3 text-center bl-1">
                    <img src="/static/images/icon_decrease.svg" height="40"/>
                    <p class="mb-0 color-highlight font-noto">호흡감소</p>
                    <p class="mb-0 mt-n1 color-gray font-noto">00:15</p>
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


    setTimeout(function() {
        $('select_repeat').on('change', function() {
            var val = this.value;
            $("#span_repeat").text(val);
        });
    },1000);
  },
  components: {
    
  },
  created() {
    
  },
  destroyed () {
    
  },
  data () {
    return {
      
    }
  }, methods: {
    click_repeat: function() {
        //var myDropDown=document.getElementById("select_repeat");
        //var length = myDropDown.options.length;
        //myDropDown.size = length;


        var select1 = document.getElementById("select_repeat");
        var evt = document.createEvent('UIEvents');
        evt.initUIEvent("click", true, true, window, 1);
        select1.dispatchEvent(evt);
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
