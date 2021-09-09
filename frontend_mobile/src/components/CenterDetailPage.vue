<template>
  <div class="">
    <div class="splide single-slider cover-slider slider-no-arrows slider-has-dots" id="cover-slider-1" data-card-height="250">
        <div class="splide__track">
            <div class="splide__list">
                <div class="splide__slide">
                    <div data-card-height="250" class="card rounded-0 mb-0" style="background-image:url(/static/images/pictures/bubble1.jpg)">
                        
                    </div>         
                </div>
                <div class="splide__slide">
                    <div data-card-height="250" class="card rounded-0 mb-0" style="background-image:url(/static/images/pictures/bubble2.jpg)">
                        
                    </div>
                </div>
                <div class="splide__slide">
                    <div data-card-height="250" class="card rounded-0 mb-0" style="background-image:url(/static/images/pictures/bubble3.jpg)">
                        
                    </div>   
                </div>
            </div>
        </div>
    </div>
    
    
    
    <div class="card card-style" style="margin-top:-60px; z-index:1">
        <div class="text-center" style="padding:30px 10px;">
            <p class="font-20 font-600" style="color:black;width:100%;margin:0;">버블탱크 스쿠버다이빙</p>
            <p style="margin:0;">제주 남부에 위치한 PADI 5star 다이빙센터</p>
            <div class="star-area" style="margin-top: 16px;">
                <i class="fa fa-star font-20 color-yellow-dark scale-box"></i>
                <i class="fa fa-star font-20 color-yellow-dark scale-box"></i>
                <i class="fa fa-star font-20 color-yellow-dark scale-box"></i>
                <i class="fa fa-star-half-alt font-20 color-yellow-dark scale-box"></i>
                <i class="far fa-star font-20 color-yellow-dark scale-box"></i>
                <span class="font-20" style="margin-left: 10px;color:black;vertical-align:bottom;">3.8</span>
            </div>
            <div class="evaluation d-flex">
                <span class="training font-12"">교육 3.9</span>
                <span class="service font-12">서비스 4.2</span>
                <span class="equiptment font-12">장비 3.4</span>
                <span class="info" style="margin-bottom:3px;margin-top:3px;"><i class="icon_question font-12">별점 안내</i></span>
            </div>
            <div style="margin-top:8px;">최근리뷰 32&nbsp;&nbsp;<font style="color:lightgray">|</font>&nbsp;&nbsp;<img src="/static/images/logo_padi.svg" width="48" />&nbsp;&nbsp;<font style="color:lightgray">|</font>&nbsp;&nbsp;￦￦
            <!--<span class="badge font-10 bg-fade-gray-dark">PADI 공식</span>-->
            </div>
            <div style="margin-top:26px;" class="row mb-0 text-center">
                <div class="col-4 pd-0" style="border-right: 1px solid lightgray;">
                    <img src="/static/images/ico_call.png" width="26" />
                    <span class="font-14 bold">전화</span>
                </div>
                <div class="col-4 pd-0" style="border-right: 1px solid lightgray;">
                    <img src="/static/images/ico_heart.png" width="26" />
                    <span class="font-14 bold">찜 25</span>
                </div>
                <div class="col-4 pd-0">
                    <img src="/static/images/ico_share.png" width="26" />
                    <span class="font-14 bold">공유</span>
                </div>
            </div>
        </div>
    </div>
    
    
    <div class="card card-style">
        <div class="content mb-0 mt-3" id="tab-group-1">
            <div class="tab-controls tabs-small tabs-rounded" data-highlight="bg-highlight">
                <a href="#" data-active data-bs-toggle="collapse" data-bs-target="#tab-1ab">스쿠버 교육</a>
                <a href="#" data-bs-toggle="collapse" data-bs-target="#tab-2ab">펀 다이빙</a>
                <a href="#" data-bs-toggle="collapse" data-bs-target="#tab-3ab">체험 다이빙</a>
            </div>

            <div class="clearfix mb-4"></div>
            <div data-bs-parent="#tab-group-1" class="collapse show" id="tab-1ab">
                <div class="d-flex mb-3">
                    <div class="align-self-center">
                        <img src="/static/images/diving_openwater.jpg" class="rounded-sm me-3" width="40">
                    </div>
                    <div class="text-start align-self-center">
                        <h2 class="font-15 line-height-s mt-1 mb-n1">오픈워터 코스</h2>
                        <p class="color-highlight font-11">자격증/렌탈/숙박/중식</p>
                    </div>
                    <div class="ms-auto ps-3 align-self-center text-end">
                        <h2 class="font-15 mb-n1">￦550,000</h2>
                        <p class="color-highlight font-10">3일 전일</p>
                    </div>
                </div>
                <div class="d-flex mb-3">
                    <div class="align-self-center">
                        <img src="/static/images/diving_advanced.jpg" class="rounded-sm me-3" width="40">
                    </div>
                    <div class="text-start align-self-center">
                        <h2 class="font-15 line-height-s mt-1 mb-n1">어드벤스드 코스</h2>
                        <p class="color-highlight font-11">자격증/렌탈/숙박/중식</p>
                    </div>
                    <div class="ms-auto ps-3 align-self-center text-end">
                        <h2 class="font-15 mb-n1">￦500,000</h2>
                        <p class="color-highlight font-10">2일 전일</p>
                    </div>
                </div>
                <div class="d-flex mb-3">
                    <div class="align-self-center">
                        <img src="/static/images/diving_advanced.jpg" class="rounded-sm me-3" width="40">
                    </div>
                    <div class="text-start align-self-center">
                        <h2 class="font-15 line-height-s mt-1 mb-n1">오픈워터+어드벤스드</h2>
                        <p class="color-highlight font-11">자격증/렌탈/숙박/중식</p>
                    </div>
                    <div class="ms-auto ps-3 align-self-center text-end">
                        <h2 class="font-15 mb-n1">￦950,000</h2>
                        <p class="color-highlight font-10">5일 전일</p>
                    </div>
                </div>
                <div class="d-flex mb-3">
                    <div class="align-self-center">
                        <img src="/static/images/diving_specialtea.jpg" class="rounded-sm me-3" width="40">
                    </div>
                    <div class="text-start align-self-center">
                        <h2 class="font-15 line-height-s mt-1 mb-n1">스페셜티 코스</h2>
                        <p class="color-highlight font-11">자격증/렌탈/숙박/중식</p>
                    </div>
                    <div class="ms-auto ps-3 align-self-center text-end">
                        <h2 class="font-15 mb-n1">￦300,000</h2>
                        <p class="color-highlight font-10">2일 전일</p>
                    </div>
                </div>
                <div class="d-flex mb-3">
                    <div class="align-self-center">
                        <img src="/static/images/diving_rescue.jpg" class="rounded-sm me-3" width="40">
                    </div>
                    <div class="text-start align-self-center">
                        <h2 class="font-15 line-height-s mt-1 mb-n1">레스큐+응급처치</h2>
                        <p class="color-highlight font-11">자격증/렌탈/숙박/중식</p>
                    </div>
                    <div class="ms-auto ps-3 align-self-center text-end">
                        <h2 class="font-15 mb-n1">￦650,000</h2>
                        <p class="color-highlight font-10">3일 전일</p>
                    </div>
                </div>
                <div class="d-flex mb-3">
                    <div class="align-self-center">
                        <img src="/static/images/diving_master.jpg" class="rounded-sm me-3" width="40">
                    </div>
                    <div class="text-start align-self-center">
                        <h2 class="font-15 line-height-s mt-1 mb-n1">다이브마스터</h2>
                        <p class="color-highlight font-11">자격증/렌탈/숙박/중식</p>
                    </div>
                    <div class="ms-auto ps-3 align-self-center text-end">
                        <h2 class="font-15 mb-n1">￦1,350,000</h2>
                        <p class="color-highlight font-10">5일 전일</p>
                    </div>
                </div>
            </div>
            <div data-bs-parent="#tab-group-1" class="collapse" id="tab-2ab">
                <div class="d-flex mb-3">
                    <div class="align-self-center">
                        <img src="/static/images/diving_island.jpg" class="rounded-sm me-3" width="70">
                    </div>
                    <div class="text-start align-self-center">
                        <h2 class="font-15 line-height-s mt-1 mb-n1">섬 다이빙</h2>
                        <p class="color-highlight font-11">가이드/탱크/간식</p>
                    </div>
                    <div class="ms-auto ps-3 align-self-center text-end">
                        <h2 class="font-15 mb-n1">￦50,000</h2>
                        <p class="color-highlight font-10">1세션</p>
                    </div>
                </div>
                <div class="d-flex mb-3">
                    <div class="align-self-center">
                        <img src="/static/images/diving_boat.jpg" class="rounded-sm me-3" width="70">
                    </div>
                    <div class="text-start align-self-center">
                        <h2 class="font-15 line-height-s mt-1 mb-n1">보트 다이빙</h2>
                        <p class="color-highlight font-11">가이드/탱크/간식</p>
                    </div>
                    <div class="ms-auto ps-3 align-self-center text-end">
                        <h2 class="font-15 mb-n1">￦70,000</h2>
                        <p class="color-highlight font-10">1세션</p>
                    </div>
                </div>
                <div class="d-flex mb-3">
                    <div class="align-self-center">
                        <img src="/static/images/diving_beach1.jpg" class="rounded-sm me-3" width="70">
                    </div>
                    <div class="text-start align-self-center">
                        <h2 class="font-15 line-height-s mt-1 mb-n1">비치 다이빙</h2>
                        <p class="color-highlight font-11">가이드/탱크/간식</p>
                    </div>
                    <div class="ms-auto ps-3 align-self-center text-end">
                        <h2 class="font-15 mb-n1">￦40,000</h2>
                        <p class="color-highlight font-10">1세션</p>
                    </div>
                </div>
                <div class="d-flex mb-3">
                    <div class="align-self-center">
                        <img src="/static/images/diving_yacht.jpg" class="rounded-sm me-3" width="70">
                    </div>
                    <div class="text-start align-self-center">
                        <h2 class="font-15 line-height-s mt-1 mb-n1">요트 다이빙</h2>
                        <p class="color-highlight font-11">가이드/탱크/간식</p>
                    </div>
                    <div class="ms-auto ps-3 align-self-center text-end">
                        <h2 class="font-15 mb-n1">￦80,000</h2>
                        <p class="color-highlight font-10">1세션</p>
                    </div>
                </div>
                <div class="d-flex mb-3">
                    <div class="align-self-center">
                        <img src="/static/images/diving_night.jpg" class="rounded-sm me-3" width="70">
                    </div>
                    <div class="text-start align-self-center">
                        <h2 class="font-15 line-height-s mt-1 mb-n1">나이트 다이빙</h2>
                        <p class="color-highlight font-11">가이드/탱크/간식</p>
                    </div>
                    <div class="ms-auto ps-3 align-self-center text-end">
                        <h2 class="font-15 mb-n1">￦60,000</h2>
                        <p class="color-highlight font-10">1세션</p>
                    </div>
                </div>
            </div>
            <div data-bs-parent="#tab-group-1" class="collapse" id="tab-3ab">
                <div class="d-flex mb-3">
                    <div class="align-self-center">
                        <img src="/static/images/diving_beach.jpg" class="rounded-sm me-3" width="70">
                    </div>
                    <div class="text-start align-self-center">
                        <h2 class="font-15 line-height-s mt-1 mb-n1">비치 체험 다이빙</h2>
                        <p class="color-highlight font-11">렌탈/입장/사진</p>
                    </div>
                    <div class="ms-auto ps-3 align-self-center text-end">
                        <h2 class="font-15 mb-n1">￦100,000</h2>
                        <p class="color-highlight font-10">반일 오전</p>
                    </div>
                </div>
                <div class="d-flex mb-3">
                    <div class="align-self-center">
                        <img src="/static/images/diving_boat.jpg" class="rounded-sm me-3" width="70">
                    </div>
                    <div class="text-start align-self-center">
                        <h2 class="font-15 line-height-s mt-1 mb-n1">보트 체험 다이빙</h2>
                        <p class="color-highlight font-11">렌탈/보트/사진</p>
                    </div>
                    <div class="ms-auto ps-3 align-self-center text-end">
                        <h2 class="font-15 mb-n1">￦130,000</h2>
                        <p class="color-highlight font-10">반일 오전</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div class="card card-style">
        <div class="content">
            <p class="mb-n1 color-highlight font-600">Awesome Article</p>
            <h1>
                Read with Style
            </h1>
            <p>
                It's difficult to design an article card that looks great on Mobile, not anymore. Appkit comes ready with designs that make your 
                page look absolutely gorgeous. From here we'll keep writing with Lorem Ipsums o we can express the design even better. We know you'll
                have your own awesome content to add here.
            </p>
            
            <div class="row text-center row-cols-3 mb-0">
                <a class="col mb-4" data-gallery="gallery-1" href="/static/images/pictures/27t.jpg" title="Vynil and Typerwritter">
                    <img src="/static/images/empty.png" data-src="/static/images/pictures/32s.jpg" class="preload-img img-fluid rounded-xs" alt="img">
                </a>
                <a class="col mb-4" data-gallery="gallery-1" href="/static/images/pictures/22t.jpg" title="Cream Cookie">
                    <img src="/static/images/empty.png" data-src="/static/images/pictures/18s.jpg" class="preload-img img-fluid rounded-xs" alt="img">
                </a>
                <a class="col mb-4" data-gallery="gallery-1" href="/static/images/pictures/23t.jpg" title="Cookies and Flowers">
                    <img src="/static/images/empty.png" data-src="/static/images/pictures/16s.jpg" class="preload-img img-fluid rounded-xs" alt="img">
                </a>
            </div>

            
            <h4>Appkit is Awesome</h4>
            <p>
                Donec consectetur dictum nisi, et sodales lectus rutrum at. Donec lacinia metus quis metus rutrum, sed aliquet neque faucibus.
                Donec consectetur dictum nisi, et sodales lectus rutrum at. Donec lacinia metus quis metus rutrum, sed aliquet neque faucibus.
                Donec consectetur dictum nisi, et sodales lectus rutrum at. Donec lacinia metus quis metus rutrum, sed aliquet neque faucibus.
                Donec consectetur dictum nisi, et sodales lectus rutrum at. Donec lacinia metus quis metus rutrum, sed aliquet neque faucibus.
            </p>
        </div>
    </div>
    
    
    <div class="card card-style">
        <div class="content mb-0 mt-10">
            <h4 class="text-start pt-2 mb-0">주소</h4>
            <p class="text-start mb-3 mb-0">
                제주 서귀포시 부두로 41 버블탱크
            </p>
        </div>
        <div id="map" style="height: 300px;"></div>
        
        
        <!--<div id="map" class="responsive-iframe add-iframe">
        <div class="responsive-iframe add-iframe">
            <iframe class="location-map" src='https://www.google.com/maps/embed/v1/view?key=AIzaSyAM3nxDVrkjyKwdIZp8QOplmBKLRVI5S_Y&callback=initMap&center=33.241479140498704,126.56481848122681&zoom=16&maptype=roadmap'></iframe>
        
        </div>-->
        
    </div>
    
    
    
    <div class="card card-style">
        <div class="content">
            <div class="d-flex">
                <div class="flex-grow-1">
                    <h1 class="float-start font-40 font-900 mt-1 me-3">5.00</h1>
                    <h5 class="font-11 font-500 mb-n1">average rating</h5>
                    <span>
                        <i class="fa fa-star color-yellow-dark"></i>
                        <i class="fa fa-star color-yellow-dark"></i>
                        <i class="fa fa-star color-yellow-dark"></i>
                        <i class="fa fa-star color-yellow-dark"></i>
                        <i class="fa fa-star color-yellow-dark"></i>
                    </span>
                </div>
                <div>
                    <h6 class="mb-0 mt-1 text-end">John Doe</h6>
                    <p class="font-10 mb-0 mt-n2 opacity-40 text-end">21th March 2025</p>
                </div>
            </div>
            <p class="mt-3">
                It's a very complete HTML template and it's really fast as well. I like the way it's setup, did had to do some research before I got to know how it works though. I hope they will keep the support they deliver, because for me that's the most important part of buying a template.
            </p>
        </div>
    </div>
    
    <div class="card card-style">
        <div class="content">
            <p class="mb-n1 color-highlight font-600">Left or Right</p>
            <h1>
                Card Styles
            </h1>
            <p>
                Donec consectetur dictum nisi, et sodales lectus rutrum at. Donec lacinia metus quis metus rutrum, sed aliquet neque faucibus.
                Donec consectetur dictum nisi, et sodales lectus rutrum at. Donec lacinia metus quis metus rutrum, sed aliquet neque faucibus.
            </p>

            <div class="list-group list-custom-large mb-4">
                <a data-trigger-switch="switch-1" data-menu="menu-heart"  class="border-0" href="#">
                    <i class="fa font-14 fa-bookmark shadow-s bg-red-dark color-white"></i>
                    <span>Read this Later</span>
                    <strong>Save it now, read it later.</strong>
                    <div class="custom-control scale-switch ios-switch">
                        <input type="checkbox" class="ios-input" id="switch-1">
                        <label class="custom-control-label" for="switch-1"></label>
                    </div>
                    <i class="fa fa-angle-right"></i>
                </a>             
            </div>
            
            <p>
                Donec consectetur dictum nisi, et sodales lectus rutrum at. Donec lacinia metus quis metus rutrum, sed aliquet neque faucibus.
                Donec consectetur dictum nisi, et sodales lectus rutrum at. Donec lacinia metus quis metus rutrum, sed aliquet neque faucibus.
                Donec consectetur dictum nisi, et sodales lectus rutrum at. Donec lacinia metus quis metus rutrum, sed aliquet neque faucibus.
                Donec consectetur dictum nisi, et sodales lectus rutrum at. Donec lacinia metus quis metus rutrum, sed aliquet neque faucibus.
            </p>
            
            <div class="divider"></div>
            
            <div class="d-flex">
                <div class="me-2">
                    <img src="/static/images/pictures/6s.jpg" width="40" class="rounded-s">
                </div>
                <div>
                    <h5>Jane Louder</h5>
                    <p class="mb-0 mt-n2">Content Writer at Enabled</p>
                </div>
                <div class="ms-auto">
                    <a href="#" data-menu="menu-share" class="icon icon-s bg-theme shadow-xl rounded-xl float-end"><i class="fa color-theme fa-share-alt"></i></a>
                    <a href="#" data-menu="menu-heart" class="icon icon-s bg-theme shadow-xl rounded-xl float-end me-2"><i class="fa color-red-dark fa-bookmark"></i></a>
                </div>
            </div>
            
            
        </div>
    </div>

    
    <div data-menu-load="/static/menu-footer.html"></div>
  </div>
</template>
<script>

export default {
  name: 'HelloWorld',
  mounted() {
  },
  created() {
    console.log("ccc");
    let script = document.createElement('script');
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCWu8Fw-h-f1t8Sp3I7R3l_Ukr24HunXQM';
    document.body.appendChild(script);
    script.onload = () => {
        this.map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: 33.24134444312815, lng: 126.56484940647604},
            zoom: 13,
            mapTypeControl: false,
            streetViewControl: false,
            zoomControl: false
        });
        var marker_shop = new google.maps.Marker({
            map: this.map,
            position: {lat: 33.24134444312815, lng: 126.56484940647604},
            label: {text: '버블탱크 스쿠버다이빙', color: 'white', className: 'marker-position'},
            icon: new google.maps.MarkerImage('/static/images/pin_marker.svg',null, null, null, new google.maps.Size(50,50)),
        });
        var marker_point = new google.maps.Marker({
            map: this.map,
            position: {lat: 33.22900114645303, lng: 126.56260977136935},
            icon: new google.maps.MarkerImage('/static/images/pin_marker2.svg',null, null, null, new google.maps.Size(40,40)),
        });
        
        
    };
  },
  data () {
    return {
        map: null,
        center: {
            lat: 37.500131499999995,
            lng: 127.032425799999998
        },
        markers: [
            { position: { lat: 37, lng: 126.98 } },
            { position: { lat: 37, lng: 126.99 } },
            { position: { lat: 37, lng: 127.00 } },
            { position: { lat: 37, lng: 127.01 } },
            { position: { lat: 37, lng: 127.02 } }
        ]

    }
  }, method: {
      
  }

  
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}


.evaluation {
    margin: 6px 6px 0px 6px; 
    background-color: rgba(196,187,171,.2);
    justify-content: space-around;
    border-radius: 5px;
    padding: 8px 8px 8px 0;
}

.evaluation>span.info {
    padding-left: 11px;
    border-left: 1px solid #c4bbab;
}
.evaluation>span .icon_question {
    display: inline-block;
    position: relative;
    top: 1px;
    display: block;
    width: 18px;
    height: 18px;
    background-size: 18px 18px;
    background-repeat: no-repeat;
    background-image: url(/static/images/question.png);
    text-indent: -9999px;
}



</style>
