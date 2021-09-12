<template>
  <div class="">
    <div id="menu-main" class="menu menu-box-left rounded-0" data-menu-width="280" data-menu-active="nav-center" data-menu-load=""></div>    
    <div class="page-content pb-0">
        <div id="map" style="height: calc(100vh - 58px);"></div>

        <div class="map-filter">
            <a href="" class="btn btn-sm rounded-0 bg-secondary" style="padding: 5px 10px !important;margin-right: -2px;border-radius: 20px 0px 0px 20px !important;border: 1px solid #00827c;">스쿠버다이빙</a>
            <a href="" class="btn btn-sm rounded-0 bg-teal-light" style="padding: 5px 10px !important;margin-left: -3px;border-radius: 0px 20px 20px 0px !important;border: 1px solid #00827c;">프리다이빙</a>
        </div>
        <div class="map-box">
            <div class="bx">
                <div class="justify-content-center mb-0 text-start">
                    <div class="" style="float: right;position: relative;width: 75px; height:75px;">
                        <img src="/static/images/shop1/shop/test3.jpg" class="rounded-s mx-auto" width="75" height="75" style="object-fit: cover;">
                    </div>
                    <div class="" style="padding-right: 80px;">
                        <h4>버블탱크 스쿠버다이빙</h4>
                        <p class="pb-0 mb-0 line-height-m ellipsis color-secondary">제주 남부에 위치한 PADI 5star 다이빙센터</p>
                        <p class="pb-0 mb-0 mt-n1"><i class="fa fa-star font-13 color-yellow-dark scale-box"></i>
                            &nbsp;<span>3.8</span>
                            &nbsp;<font class="color-gray-light">|</font>&nbsp;
                            <img data-v-d37bf336="" src="/static/images/logo_padi.svg" height="14" class="ext-img mt-n1" style="filter: grayscale(100%) contrast(0.5);">
                            &nbsp;<font class="color-gray-light">|</font>&nbsp;
                            <span>￦￦</span>
                        </p>

                        <p data-v-6152c010="" class="pb-0 mb-0 mt-n1" style="color: #999;">
                            <i class="fas fa-quote-left color-gray-light me-2"></i>서비스가 훌륭함<i class="fas fa-quote-right color-gray-light ms-2"></i>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    
  </div>
</template>
<script>

export default {
  name: 'HelloWorld',
  mounted() {
    try {
        var doc = this.document;
        // If there's a hash, or addEventListener is undefined, stop here
        if( !location.hash && this.addEventListener ){
            
            //scroll to 1
            this.scrollTo( 0, 1 );
            var scrollTop = 1,
                getScrollTop = function(){
                    return this.pageYOffset || doc.compatMode === "CSS1Compat" && doc.documentElement.scrollTop || doc.body.scrollTop || 0;
                },
            
                //reset to 0 on bodyready, if needed
                bodycheck = setInterval(function(){
                    if( doc.body ){
                        clearInterval( bodycheck );
                        scrollTop = getScrollTop();
                        this.scrollTo( 0, scrollTop === 1 ? 0 : 1 );
                    }	
                }, 15 );
            
            this.addEventListener( "load", function(){
                setTimeout(function(){
                    //at load, if user hasn't scrolled more than 20 or so...
                    if( getScrollTop() < 20 ){
                        //reset to hide addr bar at onload
                        this.scrollTo( 0, scrollTop === 1 ? 0 : 1 );
                    }
                }, 0);
            }, false );
        }
    } catch(e) {
        console.log(e);
    }
    

    document.getElementById("page-back").classList.remove("hide");
    document.getElementById("footer-bar").classList.add("hide");

    let script = document.createElement('script');
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCWu8Fw-h-f1t8Sp3I7R3l_Ukr24HunXQM';
    document.body.appendChild(script);
    script.onload = () => {
        this.map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: 33.24134444312815, lng: 126.56484940647604},
            zoom: 16,
            mapTypeControl: false,
            streetViewControl: false,
            fullscreenControl: false,
            zoomControl: false
        });
        
        var center_list = [
            {title: "버블탱크 스쿠버다이빙", position: {lat: 33.24134444312815, lng: 126.56484940647604}, type: "selected"},
            {title: "다이브 투게더리조트", position: {lat: 33.241633952501715, lng: 126.56456092676112}},
            {title: "태평양 다이빙스쿨", position: {lat: 33.24030993345755, lng: 126.56472966827262}},
            {title: "쿨다이브", position: {lat: 33.241266401158086, lng: 126.56278906254684}},
            {title: "스플래시 리조트", position: {lat: 33.24245948959435, lng: 126.5633415608148}},
            {title: "제주 블루샤크다이빙", position: {lat: 33.24380026488202, lng: 126.56288927674295}},
            {title: "잠수타기 다이브클럽", position: {lat: 33.24194725508795, lng: 126.5616725869943}},
            {title: "홀리데이 다이빙 코리아", position: {lat: 33.24088391439924, lng: 126.5628795809329}},
            {title: "천지연40", position: {lat: 33.242485636047576, lng: 126.5623109526933}},
            {title: "언더더씨 스쿠버다이빙", position: {lat: 33.244246055136834, lng: 126.5671937429616}}
        ];


        for (var i=0; i<center_list.length; i++) {
            const img_path = '/static/images/' + ( (center_list[i].hasOwnProperty("type") && center_list[i].type == 'selected') ? 'ico_pin_big1.png' : 'ico_pin2.png');
            const img_size = (center_list[i].hasOwnProperty("type") && center_list[i].type == 'selected') ? new google.maps.Size(58,66) : new google.maps.Size(38,43)
            var marker_shop = new google.maps.Marker({
                map: this.map,
                position: center_list[i].position,
                icon: new google.maps.MarkerImage(img_path, null, null, null, img_size),
            });
        }
        
        
    };
    $(window).on('resize touchmove', function () {
        const actualHeight = window.innerHeight;
        const elementHeight = document.getElementById('control-height').clientHeight;
        const barHeight = elementHeight - actualHeight;

        $("#map").css("height", "calc(100vh - 58px - "+barHeight+"px)");
    });
    

  },
  created() {
    
  },
  data () {
    return {
        map: null,
    }
  }, method: {
      
  }

  
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.map-filter {position: absolute;right: 0;bottom: 160px;left: 0;}
.map-box {position: absolute;right: 0;bottom: 21px;left: 0;border: 1px solid rgba(0,0,0,.1);margin: 5px 5px 4px;}
.bx {background-color: rgba(255,255,255,.95);padding: 15px 14px;min-height: 105px;}
.ellipsis{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
</style>
