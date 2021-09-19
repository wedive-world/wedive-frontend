<template>
  <div class="">
    <div id="menu-main" class="menu menu-box-left rounded-0" data-menu-width="280" data-menu-active="nav-home" data-menu-load=""></div>    
    
       <div class="page-content pb-3"> 
        
        <!-- card in this page format must have the class card-full to avoid seeing behind it-->
        <div class="card card-full pb-0 mb-3 border-bottom">
          <div class="content mt-1">
            <h4 class="pt-3 mb-0">어서오세요! 관심 다이빙을 3개 이상 고르면<br/> 취향에 맞는 버디를 추천해드려요</h4>
            <a id="delete_schedule" v-on:click="goHome()" class="color-highlight font-12" style="margin-top: -26px;padding-bottom: 10px;float:right;">건너뛰기</a>
            <p class="color-secondary mb-3">많이 고를수록 추천이 정확해져요</p>
            
            
            
            <div class="row me-0 ms-0 p-0 mb-3">
                <div class="col-4 p-1">
                    <div style="background: url(https://mblogthumb-phinf.pstatic.net/MjAyMDA0MTlfMzUg/MDAxNTg3Mjk5NzE5MzEw.L8Ax477uFwPzoLvvwzlO1CU1lVfjXSjnXNiZewRPnskg.UgPLnqOW2zVq6Xfb2Asvmu_dAUtJ96Rmzqjxv_SgE5Yg.JPEG.babelkim/output_3774124971.jpg?type=w800)" class="rounded-m wedive-photo-select p-0" v-on:click="select_recommed($event)">
                        <div class="card-overlay bg-gradient"></div>
                        <input class="form-check-input" type="checkbox" value="">
                        <div class="exp"><span class="color-white">프리다이빙</span></div>
                    </div>
                </div>

                <div class="col-4 p-1">
                    <div style="background: url(https://www.mallawatours.com/img/places/kalpitiya/2.jpg)" class="rounded-m wedive-photo-select p-0" v-on:click="select_recommed($event)">
                        <div class="card-overlay bg-gradient"></div>
                        <input class="form-check-input" type="checkbox" value="">
                        <div class="exp"><span class="color-white">스쿠버다이빙</span></div>
                    </div>
                </div>

                <div class="col-4 p-1">
                    <div style="background: url(https://static.wixstatic.com/media/d49a86_4d5dfbc980c0422ea70c662a3d4a1522~mv2.jpg/v1/fill/w_800,h_533,al_c,q_90/d49a86_4d5dfbc980c0422ea70c662a3d4a1522~mv2.jpg)" class="rounded-m wedive-photo-select p-0" v-on:click="select_recommed($event)">
                        <div class="card-overlay bg-gradient"></div>
                        <input class="form-check-input" type="checkbox" value="">
                        <div class="exp"><span class="color-white">수영장 다이빙</span></div>
                    </div>
                </div>

                <div class="col-4 p-1">
                    <div style="background: url(https://www.dailysecu.com/news/photo/201810/40220_32738_3604.jpg)" class="rounded-m wedive-photo-select p-0" v-on:click="select_recommed($event)">
                        <div class="card-overlay bg-gradient"></div>
                        <input class="form-check-input" type="checkbox" value="">
                        <div class="exp"><span class="color-white">바다 다이빙</span></div>
                    </div>
                </div>

                <div class="col-4 p-1">
                    <div style="background: url(https://lh3.googleusercontent.com/proxy/hl3RvPZxx2EvczKdBJcyoJ5lpt9fl8yP6irjPfF4Ja2qewuhJu9F0Uus9DXSfUD8ByE1ZYDcfPHTbgmmNI2v8y3z-J7XgjDOs3taq7H_pCPCdhuheGxF08d1g-yx-0gJloxzF-c5ckTD9JM4IQgDHBxukWf92clGFngFcL1RtUFY_iuZNVSnu9d4nDLHSvGj)" class="rounded-m wedive-photo-select p-0" v-on:click="select_recommed($event)">
                        <div class="card-overlay bg-gradient"></div>
                        <input class="form-check-input" type="checkbox" value="">
                        <div class="exp"><span class="color-white">국내투어</span></div>
                    </div>
                </div>

                <div class="col-4 p-1">
                    <div style="background: url(https://mblogthumb-phinf.pstatic.net/20151202_91/fly_jam_14490168100302gykP_JPEG/1.jpg?type=w2)" class="rounded-m wedive-photo-select p-0" v-on:click="select_recommed($event)">
                        <div class="card-overlay bg-gradient"></div>
                        <input class="form-check-input" type="checkbox" value="">
                        <div class="exp"><span class="color-white">해외투어</span></div>
                    </div>
                </div>

                <div class="col-4 p-1">
                    <div style="background: url(https://blog.rateyourdive.com/wp-content/uploads/underwater-photography.jpg)" class="rounded-m wedive-photo-select p-0" v-on:click="select_recommed($event)">
                        <div class="card-overlay bg-gradient"></div>
                        <input class="form-check-input" type="checkbox" value="">
                        <div class="exp"><span class="color-white">사진 촬영</span></div>
                    </div>
                </div>

                <div class="col-4 p-1">
                    <div style="background: url(https://lh3.googleusercontent.com/proxy/vnbrYNpK85Gi6Xnm932LxVURORRD9Q1Q_gVIDe1Ny4y5TaKmxP_qvi5UqPxjkfyj4V36vDKNpGmm_O4uDxyGB2OJY4YQoQpUhn0D31BGxSb1DJxrkrVvuMrGdJehP1cOvL796x__mHTwKrWIEHutUA6qRPA)" class="rounded-m wedive-photo-select p-0" v-on:click="select_recommed($event)">
                        <div class="card-overlay bg-gradient"></div>
                        <input class="form-check-input" type="checkbox" value="">
                        <div class="exp"><span class="color-white">펀 다이빙</span></div>
                    </div>
                </div>

                <div class="col-4 p-1">
                    <div style="background: url(https://lh3.googleusercontent.com/proxy/C89zyNI6sXrwbW0u1U3dxWbUFT1td9q3oXpGK904-uWPIVI8SpbG_1Lzwv1-3usbmwuDtuu4rYJQ7-UcDh0lQufM3OIbkfS8rUxubjZ_S2WPukTg9FMBT9B7Vgb6mw)" class="rounded-m wedive-photo-select p-0" v-on:click="select_recommed($event)">
                        <div class="card-overlay bg-gradient"></div>
                        <input class="form-check-input" type="checkbox" value="">
                        <div class="exp"><span class="color-white">트레이닝</span></div>
                    </div>
                </div>

                <div class="col-4 p-1">
                    <div style="background: url(https://dtmag.com/wp-content/uploads/2015/03/scuba-training-1050x700.jpg)" class="rounded-m wedive-photo-select p-0" v-on:click="select_recommed($event)">
                        <div class="card-overlay bg-gradient"></div>
                        <input class="form-check-input" type="checkbox" value="">
                        <div class="exp"><span class="color-white">하드 트레이닝</span></div>
                    </div>
                </div>

                <div class="col-4 p-1">
                    <div style="background: url(https://newsimg.sedaily.com/2016/12/30/1L5G3NP6DU_1.jpg)" class="rounded-m wedive-photo-select p-0" v-on:click="select_recommed($event)">
                        <div class="card-overlay bg-gradient"></div>
                        <input class="form-check-input" type="checkbox" value="">
                        <div class="exp"><span class="color-white">뒷풀이</span></div>
                    </div>
                </div>

                <div class="col-4 p-1">
                    <div style="background: url(https://mblogthumb-phinf.pstatic.net/MjAxODA2MTBfMzMg/MDAxNTI4NjM3MDE2ODc5.TwIRLvWxONXjXxcXivmuhb-EiB0cjogarAyGg4SqUzog.1XAhxWtPVBLc4dIaEaxdT9QnYXn945_kSIYxFPhFVp4g.JPEG.sumdive/DSC06351.JPG?type=w800)" class="rounded-m wedive-photo-select p-0" v-on:click="select_recommed($event)">
                        <div class="card-overlay bg-gradient"></div>
                        <input class="form-check-input" type="checkbox" value="">
                        <div class="exp"><span class="color-white">동호회</span></div>
                    </div>
                </div>

                <div class="col-4 p-1">
                    <div style="background: url(https://t1.daumcdn.net/cfile/tistory/274F093759421DC710)" class="rounded-m wedive-photo-select p-0" v-on:click="select_recommed($event)">
                        <div class="card-overlay bg-gradient"></div>
                        <input class="form-check-input" type="checkbox" value="">
                        <div class="exp"><span class="color-white">케이브 다이빙</span></div>
                    </div>
                </div>

                <div class="col-4 p-1">
                    <div style="background: url(https://scubadiverlife.com/wp-content/uploads/2012/03/divelight.jpg)" class="rounded-m wedive-photo-select p-0" v-on:click="select_recommed($event)">
                        <div class="card-overlay bg-gradient"></div>
                        <input class="form-check-input" type="checkbox" value="">
                        <div class="exp"><span class="color-white">난파선 다이빙</span></div>
                    </div>
                </div>

                <div class="col-4 p-1">
                    <div style="background: url(https://divingholic.com/wp-content/uploads/2020/01/PC260294.jpg)" class="rounded-m wedive-photo-select p-0" v-on:click="select_recommed($event)">
                        <div class="card-overlay bg-gradient"></div>
                        <input class="form-check-input" type="checkbox" value="">
                        <div class="exp"><span class="color-white">마크로 다이빙</span></div>
                    </div>
                </div>

                <div class="col-4 p-1">
                    <div style="background: url(https://conocelafauna.com/wp-content/uploads/2020/08/Animales-de-galapagos-2-1024x660.jpg)" class="rounded-m wedive-photo-select p-0" v-on:click="select_recommed($event)">
                        <div class="card-overlay bg-gradient"></div>
                        <input class="form-check-input" type="checkbox" value="">
                        <div class="exp"><span class="color-white">대물 다이빙</span></div>
                    </div>
                </div>

                <div class="col-4 p-1">
                    <div style="background: url(https://c.stocksy.com/a/ZVs400/z9/1162845.jpg)" class="rounded-m wedive-photo-select p-0" v-on:click="select_recommed($event)">
                        <div class="card-overlay bg-gradient"></div>
                        <input class="form-check-input" type="checkbox" value="">
                        <div class="exp"><span class="color-white">월 다이빙</span></div>
                    </div>
                </div>

                <div class="col-4 p-1">
                    <div style="background: url(https://www.greenpeace.org/static/planet4-international-stateless/2019/09/2741f71e-gp0sttwc2_medium_res.jpg)" class="rounded-m wedive-photo-select p-0" v-on:click="select_recommed($event)">
                        <div class="card-overlay bg-gradient"></div>
                        <input class="form-check-input" type="checkbox" value="">
                        <div class="exp"><span class="color-white">딥 다이빙</span></div>
                    </div>
                </div>
            </div>
            
            <a id="btn_complete" href="#" v-on:click="goHome()" class="btn btn-full font-400 rounded-s shadow-l gradient-highlight color-white bd-w-0 mb-4 hide">선택 완료</a>

          </div>
        </div>




        
    </div>
    
  </div>
</template>
<script>
import VueTypeaheadBootstrap from 'vue-typeahead-bootstrap';
import {debounce} from 'lodash';
var select_cnt = 0;

export default {
  name: 'HelloWorld',
  mounted() {
    $(".page-title").hide();
    $(".page-title-clear").hide();

    
  },
  components: {
    VueTypeaheadBootstrap
  },
  created() {
    
  },
  data () {
    return {
        query: '',
        selecteduser: null,
        users: []
    }
  }, methods: {
      select_recommed: function(event) {
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
      }, 
      goHome() {
          window.location.href = "/";
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
