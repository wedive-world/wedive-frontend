<template>
  <div class="">
    <div class="splide single-slider cover-slider slider-no-arrows slider-has-dots" id="cover-slider-1" data-card-height="350">
        <div class="splide__track">
            <div class="splide__list">
                <div class="splide__slide">
                    <div data-card-height="350" class="card rounded-0 mb-0" style="background-image:url(/static/images/pictures/bubble1.jpg)">
                        
                    </div>         
                </div>
                <div class="splide__slide">
                    <div data-card-height="350" class="card rounded-0 mb-0" style="background-image:url(/static/images/pictures/bubble2.jpg)">
                        
                    </div>
                </div>
                <div class="splide__slide">
                    <div data-card-height="350" class="card rounded-0 mb-0" style="background-image:url(/static/images/pictures/bubble3.jpg)">
                        
                    </div>   
                </div>
            </div>
        </div>
    </div>
    
    
    
    <div class="card card-style" style="margin-top:-60px; z-index:1">
        <div class="text-center" style="text-align:center;padding:30px 10px;">
            <p class="font-20" style="color:black;width:100%;font-weight: bold;margin:0;">버블탱크 스쿠버다이빙</p>
            <div class="star-area" style="margin-top: 16px;">
                <img src="/static/images/star_full.png" width="24"/>
                <img src="/static/images/star_full.png" width="24"/>
                <img src="/static/images/star_full.png" width="24"/>
                <img src="/static/images/star_half.png" width="24"/>
                <img src="/static/images/star_none.png" width="24"/>
                <span class="font-20" style="margin-left: 10px;color:black;vertical-align:bottom;">3.8</span>
            </div>
            <div style="margin-top:20px;">최근리뷰 32 | <a href="#" class="chip chip-s bg-gray-light">
                <strong class="color-black font-400">PADI공식</strong></a>
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
            <div>한국어</div>
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
                    <div class="align-self-center">
                        <p class="color-highlight font-11 mb-n2">PADI</p>
                        <h2 class="font-15 line-height-s mt-1 mb-1">오픈워터 코스</h2>
                    </div>
                    <div class="ms-auto ps-3 align-self-center text-end">
                        <p class="color-highlight font-10 mb-n2">3일</p>
                        <h2 class="font-15 mb-0">￦550,000</h2>
                    </div>
                </div>
                <div class="d-flex mb-3">
                    <div class="align-self-center">
                        <img src="/static/images/diving_advanced.jpg" class="rounded-sm me-3" width="40">
                    </div>
                    <div class="align-self-center">
                        <p class="color-highlight font-11 mb-n2">PADI</p>
                        <h2 class="font-15 line-height-s mt-1 mb-1">어드벤스드 코스</h2>
                    </div>
                    <div class="ms-auto ps-3 align-self-center text-end">
                        <p class="color-highlight font-10 mb-n2">2일</p>
                        <h2 class="font-15 mb-0">￦500,000</h2>
                    </div>
                </div>
                <div class="d-flex mb-3">
                    <div class="align-self-center">
                        <img src="/static/images/diving_advanced.jpg" class="rounded-sm me-3" width="40">
                    </div>
                    <div class="align-self-center">
                        <p class="color-highlight font-11 mb-n2">PADI</p>
                        <h2 class="font-15 line-height-s mt-1 mb-1">오픈워터+어드벤스드</h2>
                    </div>
                    <div class="ms-auto ps-3 align-self-center text-end">
                        <p class="color-highlight font-10 mb-n2">5일</p>
                        <h2 class="font-15 mb-0">￦950,000</h2>
                    </div>
                </div>
                <div class="d-flex mb-3">
                    <div class="align-self-center">
                        <img src="/static/images/diving_specialtea.jpg" class="rounded-sm me-3" width="40">
                    </div>
                    <div class="align-self-center">
                        <p class="color-highlight font-11 mb-n2">PADI</p>
                        <h2 class="font-15 line-height-s mt-1 mb-1">스페셜티 코스</h2>
                    </div>
                    <div class="ms-auto ps-3 align-self-center text-end">
                        <p class="color-highlight font-10 mb-n2">2일</p>
                        <h2 class="font-15 mb-0">￦300,000</h2>
                    </div>
                </div>
                <div class="d-flex mb-3">
                    <div class="align-self-center">
                        <img src="/static/images/diving_rescue.jpg" class="rounded-sm me-3" width="40">
                    </div>
                    <div class="align-self-center">
                        <p class="color-highlight font-11 mb-n2">PADI</p>
                        <h2 class="font-15 line-height-s mt-1 mb-1">레스큐+응급처치</h2>
                    </div>
                    <div class="ms-auto ps-3 align-self-center text-end">
                        <p class="color-highlight font-10 mb-n2">3일</p>
                        <h2 class="font-15 mb-0">￦650,000</h2>
                    </div>
                </div>
                <div class="d-flex mb-3">
                    <div class="align-self-center">
                        <img src="/static/images/diving_master.jpg" class="rounded-sm me-3" width="40">
                    </div>
                    <div class="align-self-center">
                        <p class="color-highlight font-11 mb-n2">PADI</p>
                        <h2 class="font-15 line-height-s mt-1 mb-1">다이브마스터</h2>
                    </div>
                    <div class="ms-auto ps-3 align-self-center text-end">
                        <p class="color-highlight font-10 mb-n2">5일</p>
                        <h2 class="font-15 mb-0">￦1,350,000</h2>
                    </div>
                </div>
            </div>
            <div data-bs-parent="#tab-group-1" class="collapse" id="tab-2ab">
                <div class="d-flex mb-3">
                    <div class="align-self-center">
                        <img src="/static/images/diving_island.jpg" class="rounded-sm me-3" width="70">
                    </div>
                    <div class="align-self-center">
                        <p class="color-highlight font-11 mb-n2">Steaks</p>
                        <h2 class="font-15 line-height-s mt-1 mb-1">섬 다이빙</h2>
                    </div>
                    <div class="ms-auto ps-3 align-self-center text-end">
                        <p class="color-highlight font-10 mb-n2">per serving</p>
                        <h2 class="font-15 mb-0">￦50,000</h2>
                    </div>
                </div>
                <div class="d-flex mb-3">
                    <div class="align-self-center">
                        <img src="/static/images/diving_boat.jpg" class="rounded-sm me-3" width="70">
                    </div>
                    <div class="align-self-center">
                        <p class="color-highlight font-11 mb-n2">Chicken</p>
                        <h2 class="font-15 line-height-s mt-1 mb-1">보트 다이빙</h2>
                    </div>
                    <div class="ms-auto ps-3 align-self-center text-end">
                        <p class="color-highlight font-10 mb-n2">per serving</p>
                        <h2 class="font-15 mb-0">￦70,000</h2>
                    </div>
                </div>
                <div class="d-flex mb-3">
                    <div class="align-self-center">
                        <img src="/static/images/diving_beach1.jpg" class="rounded-sm me-3" width="70">
                    </div>
                    <div class="align-self-center">
                        <p class="color-highlight font-11 mb-n2">Vegan</p>
                        <h2 class="font-15 line-height-s mt-1 mb-1">비치 다이빙</h2>
                    </div>
                    <div class="ms-auto ps-3 align-self-center text-end">
                        <p class="color-highlight font-10 mb-n2">per serving</p>
                        <h2 class="font-15 mb-0">￦40,000</h2>
                    </div>
                </div>
                <div class="d-flex mb-3">
                    <div class="align-self-center">
                        <img src="/static/images/diving_yacht.jpg" class="rounded-sm me-3" width="70">
                    </div>
                    <div class="align-self-center">
                        <p class="color-highlight font-11 mb-n2">Steaks</p>
                        <h2 class="font-15 line-height-s mt-1 mb-1">요트 다이빙</h2>
                    </div>
                    <div class="ms-auto ps-3 align-self-center text-end">
                        <p class="color-highlight font-10 mb-n2">per serving</p>
                        <h2 class="font-15 mb-0">￦80,000</h2>
                    </div>
                </div>
                <div class="d-flex mb-3">
                    <div class="align-self-center">
                        <img src="/static/images/diving_night.jpg" class="rounded-sm me-3" width="70">
                    </div>
                    <div class="align-self-center">
                        <p class="color-highlight font-11 mb-n2">Chicken</p>
                        <h2 class="font-15 line-height-s mt-1 mb-1">나이트 다이빙</h2>
                    </div>
                    <div class="ms-auto ps-3 align-self-center text-end">
                        <p class="color-highlight font-10 mb-n2">per serving</p>
                        <h2 class="font-15 mb-0">￦60,000</h2>
                    </div>
                </div>
            </div>
            <div data-bs-parent="#tab-group-1" class="collapse" id="tab-3ab">
                <div class="d-flex mb-3">
                    <div class="align-self-center">
                        <img src="/static/images/diving_beach.jpg" class="rounded-sm me-3" width="70">
                    </div>
                    <div class="align-self-center">
                        <p class="color-highlight font-11 mb-n2">Fruit</p>
                        <h2 class="font-15 line-height-s mt-1 mb-1">비치 체험 다이빙</h2>
                    </div>
                    <div class="ms-auto ps-3 align-self-center text-end">
                        <p class="color-highlight font-10 mb-n2">per serving</p>
                        <h2 class="font-15 mb-0">￦100,000</h2>
                    </div>
                </div>
                <div class="d-flex mb-3">
                    <div class="align-self-center">
                        <img src="/static/images/diving_boat.jpg" class="rounded-sm me-3" width="70">
                    </div>
                    <div class="align-self-center">
                        <p class="color-highlight font-11 mb-n2">교육,렌탈,보트,입장료,사진촬영</p>
                        <h2 class="font-15 line-height-s mt-1 mb-1">보트 체험 다이빙</h2>
                    </div>
                    <div class="ms-auto ps-3 align-self-center text-end">
                        <p class="color-highlight font-10 mb-n2"></p>
                        <h2 class="font-15 mb-0">￦130,000</h2>
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
        <div class="content">
            <h4 class="pt-2">주소</h4>
            <p class="mb-3">
                제주 서귀포시 부두로 41 버블탱크
            </p>
        </div>
        <div id="map" class="responsive-iframe add-iframe">
        <!--<div class="responsive-iframe add-iframe">
            <iframe class="location-map" src='https://www.google.com/maps/embed/v1/view?key=AIzaSyAM3nxDVrkjyKwdIZp8QOplmBKLRVI5S_Y&callback=initMap&center=33.241479140498704,126.56481848122681&zoom=16&maptype=roadmap'></iframe>
        -->
        </div>
        <a href="https://maps.google.com" class="location-button btn btn-full btn-m bg-red-dark rounded-0 text-uppercase shadow-l font-900 disabled">View on Google Maps</a>
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
    let recaptchaScript = document.createElement('script')
    recaptchaScript.setAttribute('src', 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDpoSnMQnPjYItyVPg6rIM_yr8pytLQD6s&callback=initMap&libraries=&v=weekly')
    document.head.appendChild(recaptchaScript);

    this.map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 33.241479140498704, lng: 126.56481848122681},
        zoom: this.zoom
    });

  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
  methods: {
    var marker = new google.maps.Marker({
        position: { lat: 33.241479140498704, lng: 126.56481848122681 },
        map: this.map
    });
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
</style>
