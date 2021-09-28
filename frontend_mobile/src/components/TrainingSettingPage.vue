<template>
  <div class="">
    <div class="mb-0 bg-white" style="position: fixed;top: 0;width: 100%;height:220px;border-bottom: 3px solid #c7e0e988;z-index:99;">
        <div class="header header-logo-center" style="position: relative;border-bottom-width: 0px;">
            <a href="" class="header-title color ellipsis">1주 1회차 트레이닝</a>
            <a href="#" data-back-button class="header-icon header-icon-1"><i class="fas fa-chevron-left"></i></a>
            <a href="#" data-menu="menu-main" class="header-icon header-icon-3 font-15"><i class="far fa-question-circle"></i></a>
            <a href="#" data-toggle-theme class="header-icon header-icon-4 font-15"><i class="far fa-trash-alt"></i></a>
        </div>
        <div class="p-3">
            <p class="mb-2 font-24 font-500 font-noto text-center">19:20</p>
            <p class="mb-0 font-11 font-200 font-noto text-center" style="line-height:16px;">총 트레이닝 시간</p>
            
            <div class="row mt-3">
                <div class="col-3 text-center">
                    <img src="/static/images/icon_repeat.svg" height="40"/>
                    <p class="mb-0 color-gray font-noto"><font class="color-highlight">반복&nbsp;&nbsp;</font>8회</p>
                </div>
                <div class="col-3 text-center bl-1">
                    <img src="/static/images/icon_breath.svg" height="40"/>
                    <p class="mb-0 color-gray font-noto"><font class="color-highlight">첫 호흡&nbsp;&nbsp;</font>02:00</p>
                </div>
                <div class="col-3 text-center bl-1">
                    <img src="/static/images/icon_breath_hold.svg" height="40"/>
                    <p class="mb-0 color-gray font-noto"><font class="color-highlight">숨참기&nbsp;&nbsp;</font>00:40</p>
                </div>
                <div class="col-3 text-center bl-1">
                    <img src="/static/images/icon_decrease.svg" height="40"/>
                    <p class="mb-0 color-gray font-noto"><font class="color-highlight">호흡감소&nbsp;&nbsp;</font>00:15</p>
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
