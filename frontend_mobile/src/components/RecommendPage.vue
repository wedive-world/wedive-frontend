<template>
  <div class="">
    <div id="menu-main" class="menu menu-box-left rounded-0" data-menu-width="280" data-menu-active="nav-home" data-menu-load=""></div>    
    
       <div class="page-content pb-3"> 
        
        <!-- card in this page format must have the class card-full to avoid seeing behind it-->
        <div class="card card-full pb-0 mb-5 border-bottom">
          <div class="content mt-1">
            <h4 class="pt-3 mb-0">어서오세요! 관심 다이빙을 3개 이상 고르면<br/> 취향에 맞는 버디를 추천해드려요</h4>
            <p class="color-secondary mb-3">많이 고를수록 추천이 정확해져요</p>
            <a id="delete_schedule" v-on:click="goHome()" class="color-highlight font-12" style="margin-top: -43px;padding-bottom: 10px;float:right;">건너뛰기</a>
            
            
            
            <div class="row me-0 ms-0 p-0 mb-0">
                <div class="col-4 p-1">
                    <div style="background: url(https://www.mallawatours.com/img/places/kalpitiya/2.jpg)" class="rounded-m wedive-photo-select p-0" v-on:click="select_recommed($event, 'scuba')">
                        <div class="card-overlay bg-gradient"></div>
                        <input class="form-check-input" type="checkbox" value="">
                        <div class="exp"><span class="color-white">스쿠버다이빙</span></div>
                    </div>
                </div>
                <div class="col-4 p-1">
                    <div style="background: url(https://mblogthumb-phinf.pstatic.net/MjAyMDA0MTlfMzUg/MDAxNTg3Mjk5NzE5MzEw.L8Ax477uFwPzoLvvwzlO1CU1lVfjXSjnXNiZewRPnskg.UgPLnqOW2zVq6Xfb2Asvmu_dAUtJ96Rmzqjxv_SgE5Yg.JPEG.babelkim/output_3774124971.jpg?type=w800)" class="rounded-m wedive-photo-select p-0" v-on:click="select_recommed($event, 'free')">
                        <div class="card-overlay bg-gradient"></div>
                        <input class="form-check-input" type="checkbox" value="">
                        <div class="exp"><span class="color-white">프리다이빙</span></div>
                    </div>
                </div>
            
            </div>
            <div class="row me-0 ms-0 p-0 mb-0">

                <div class="col-4 p-1">
                    <div style="background: url(https://www.blueplanet-diving.com/media/Downlad/15003278_10154764471953060_790964399007394572_o.jpg)" class="rounded-m wedive-photo-select p-0" v-on:click="select_recommed($event, 'domestic')">
                        <div class="card-overlay bg-gradient"></div>
                        <input class="form-check-input" type="checkbox" value="">
                        <div class="exp"><span class="color-white">국내투어</span></div>
                    </div>
                </div>
                <div class="col-4 p-1">
                    <div style="background: url(https://mblogthumb-phinf.pstatic.net/20151202_91/fly_jam_14490168100302gykP_JPEG/1.jpg?type=w2)" class="rounded-m wedive-photo-select p-0" v-on:click="select_recommed($event, 'global')">
                        <div class="card-overlay bg-gradient"></div>
                        <input class="form-check-input" type="checkbox" value="">
                        <div class="exp"><span class="color-white">해외투어</span></div>
                    </div>
                </div>
                <div class="col-4 p-1">
                    <div style="background: url(https://blog.rateyourdive.com/wp-content/uploads/underwater-photography.jpg)" class="rounded-m wedive-photo-select p-0" v-on:click="select_recommed($event, 'photo')">
                        <div class="card-overlay bg-gradient"></div>
                        <input class="form-check-input" type="checkbox" value="">
                        <div class="exp"><span class="color-white">사진 촬영</span></div>
                    </div>
                </div>
                <div class="col-4 p-1">
                    <div style="background: url(https://www.guinnessworldrecords.com/Images/Astro-main_tcm25-20445.jpg)" class="rounded-m wedive-photo-select p-0" v-on:click="select_recommed($event, 'cleaning')">
                        <div class="card-overlay bg-gradient"></div>
                        <input class="form-check-input" type="checkbox" value="">
                        <div class="exp"><span class="color-white">수중 정화</span></div>
                    </div>
                </div>
                <div class="col-4 p-1">
                    <div style="background: url(https://newsimg.sedaily.com/2016/12/30/1L5G3NP6DU_1.jpg)" class="rounded-m wedive-photo-select p-0" v-on:click="select_recommed($event), 'beer'">
                        <div class="card-overlay bg-gradient"></div>
                        <input class="form-check-input" type="checkbox" value="">
                        <div class="exp"><span class="color-white">뒷풀이</span></div>
                    </div>
                </div>
                <div class="col-4 p-1">
                    <div style="background: url(https://mblogthumb-phinf.pstatic.net/MjAxODA2MTBfMzMg/MDAxNTI4NjM3MDE2ODc5.TwIRLvWxONXjXxcXivmuhb-EiB0cjogarAyGg4SqUzog.1XAhxWtPVBLc4dIaEaxdT9QnYXn945_kSIYxFPhFVp4g.JPEG.sumdive/DSC06351.JPG?type=w800)" class="rounded-m wedive-photo-select p-0" v-on:click="select_recommed($event, 'social')">
                        <div class="card-overlay bg-gradient"></div>
                        <input class="form-check-input" type="checkbox" value="">
                        <div class="exp"><span class="color-white">동호회</span></div>
                    </div>
                </div>
            </div>
            <div id="div_scuba" class="row me-0 ms-0 p-0 mb-0 hide">
                <div class="col-4 p-1">
                    <div style="background: url(https://static.wixstatic.com/media/d49a86_4d5dfbc980c0422ea70c662a3d4a1522~mv2.jpg/v1/fill/w_800,h_533,al_c,q_90/d49a86_4d5dfbc980c0422ea70c662a3d4a1522~mv2.jpg)" class="rounded-m wedive-photo-select p-0" v-on:click="select_recommed($event, 'check')">
                        <div class="card-overlay bg-gradient"></div>
                        <input class="form-check-input" type="checkbox" value="">
                        <div class="exp"><span class="color-white">체크다이빙</span></div>
                    </div>
                </div>
                <div class="col-4 p-1">
                    <div style="background: url(https://img.rezdy.com/PRODUCT_IMAGE/75158/3_lg.JPG)" class="rounded-m wedive-photo-select p-0" v-on:click="select_recommed($event, 'muck')">
                        <div class="card-overlay bg-gradient"></div>
                        <input class="form-check-input" type="checkbox" value="">
                        <div class="exp"><span class="color-white">먹다이빙</span></div>
                    </div>
                </div>
                <div class="col-4 p-1">
                    <div style="background: url(https://lh3.googleusercontent.com/proxy/X_jZOxQCAqldc6V57EUqdV6dLdgI7yboErQ7DM7c-XY9oEyNZsemJIhBsTdS1RCMBmqm8Wt_Oz3MX4ulTxNe_XC4CeRQ4aURunc)" class="rounded-m wedive-photo-select p-0" v-on:click="select_recommed($event, 'liveaboard')">
                        <div class="card-overlay bg-gradient"></div>
                        <input class="form-check-input" type="checkbox" value="">
                        <div class="exp"><span class="color-white">리브어보드</span></div>
                    </div>
                </div>
                <div class="col-4 p-1">
                    <div style="background: url(https://c.stocksy.com/a/ZVs400/z9/1162845.jpg)" class="rounded-m wedive-photo-select p-0" v-on:click="select_recommed($event, 'technical')">
                        <div class="card-overlay bg-gradient"></div>
                        <input class="form-check-input" type="checkbox" value="">
                        <div class="exp"><span class="color-white">테크니컬 다이빙</span></div>
                    </div>
                </div>
                <div class="col-4 p-1">
                    <div style="background: url(https://divingholic.com/wp-content/uploads/2020/01/PC260294.jpg)" class="rounded-m wedive-photo-select p-0" v-on:click="select_recommed($event, 'micro')">
                        <div class="card-overlay bg-gradient"></div>
                        <input class="form-check-input" type="checkbox" value="">
                        <div class="exp"><span class="color-white">마크로 포인트</span></div>
                    </div>
                </div>

                <div class="col-4 p-1">
                    <div style="background: url(https://conocelafauna.com/wp-content/uploads/2020/08/Animales-de-galapagos-2-1024x660.jpg)" class="rounded-m wedive-photo-select p-0" v-on:click="select_recommed($event, 'giant')">
                        <div class="card-overlay bg-gradient"></div>
                        <input class="form-check-input" type="checkbox" value="">
                        <div class="exp"><span class="color-white">대물 포인트</span></div>
                    </div>
                </div>
            </div>
            <div id="div_free" class="row me-0 ms-0 p-0 mb-3 hide">
                <div class="col-4 p-1">
                    <div style="background: url(https://dtmag.com/wp-content/uploads/2015/03/scuba-training-1050x700.jpg)" class="rounded-m wedive-photo-select p-0" v-on:click="select_recommed($event, 'training')">
                        <div class="card-overlay bg-gradient"></div>
                        <input class="form-check-input" type="checkbox" value="">
                        <div class="exp"><span class="color-white">트레이닝</span></div>
                    </div>
                </div>
                <div class="col-4 p-1">
                    <div style="background: url(https://t3.daumcdn.net/thumb/R720x0.fpng/?fname=http://t1.daumcdn.net/brunch/service/user/6Knj/image/506qzQo4balPWRYo1OrIGasSz9Q.png)" class="rounded-m wedive-photo-select p-0" v-on:click="select_recommed($event, 'spearfishing')">
                        <div class="card-overlay bg-gradient"></div>
                        <input class="form-check-input" type="checkbox" value="">
                        <div class="exp"><span class="color-white">스피어 피싱</span></div>
                    </div>
                </div>
                <div class="col-4 p-1">
                    <div style="background: url(https://lh3.googleusercontent.com/proxy/hDC38TMFUtov3jdxZlAnfphk4bBty6W3WUtu5C2yrNiMvOBhTNmgshkeVZ4wrsFmTerurznVKZsp-wbH2VoNV1_RX10wJ4OGyBgMshBkTuP6TBZcc9wdiAAW53L3N90UWhCh8X3EoP2hkWUhbzBv9-zmT6EiDD7zUwITWCFL2po1WQ)" class="rounded-m wedive-photo-select p-0" v-on:click="select_recommed($event, 'gathering')">
                        <div class="card-overlay bg-gradient"></div>
                        <input class="form-check-input" type="checkbox" value="">
                        <div class="exp"><span class="color-white">해루질</span></div>
                    </div>
                </div>

                
            </div>
            
            <a id="btn_complete" href="#" v-on:click="goHome()" class="btn btn-full font-400 rounded-s shadow-l gradient-highlight color-white bd-w-0 mt-2 hide">선택 완료</a>

          </div>
        </div>




        
    </div>
    
  </div>
</template>
<script>
var select_cnt = 0;

export default {
  name: 'HelloWorld',
  mounted() {
    
    $(".page-title").hide();
    $(".page-title-clear").hide();

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
  data () {
    return {
        query: '',
        selecteduser: null,
        users: []
    }
  }, methods: {
      select_recommed: function(event, itm_nm) {
        if (itm_nm == 'scuba') {
            $("#div_scuba").toggleClass("hide");
        } else if (itm_nm == 'free') {
            $("#div_free").toggleClass("hide");
        }

        if (event.currentTarget.getElementsByTagName("input")[0].getAttribute("checked")) {
            event.currentTarget.getElementsByTagName("input")[0].removeAttribute("checked");
            event.currentTarget.style.border = 'none';
            select_cnt -= 1;
            if (select_cnt < 3) {
                $("#btn_complete").addClass("hide");
            }
        } else {
            event.currentTarget.getElementsByTagName("input")[0].setAttribute("checked", true);
            event.currentTarget.style.border = '2px solid #1d397c';
            select_cnt += 1;
            if (select_cnt > 2) {
                $("#btn_complete").removeClass("hide");
            }
        }
      }
  }
  
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wedive-photo-select {height: 170px;background-repeat: no-repeat !important;background-size: cover !important;position: relative;background-position: center !important;}
.wedive-photo-select input {float: right;margin-top: 10px;border-radius: 8px;width: 16px;height: 16px;margin-right:10px;}
.wedive-photo-select input:checked {background-color: #1d397c;}
.wedive-photo-select .exp {position: absolute; bottom: 2px;z-index:99;text-align: center;width:100%;}
.wedive-photo-select .card-overlay {margin-top: 80px;opacity: .7;bottom: 0;border-radius: 0px 0px 20px 20px;z-index:90;}
</style>
