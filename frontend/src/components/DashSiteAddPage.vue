<template>
  <div class="">
    <div class="dashboard-title fl-wrap">
        <h3>사이트 추가</h3>
    </div>
    <!-- profile-edit-container--> 
    <div class="profile-edit-container fl-wrap block_box">
        <div class="custom-form">
            <label>url주소 (영문으로, 띄어쓰기 금지, 이 내용으로 URL이 표시됩니다.) <i class="fal fa-briefcase"></i></label>
            <input type="text" placeholder="yangyang 혹은 dalian-liaoning-east-dalian-island" value=""/>

            <div class="row">
                <div class="col-md-6">
                    <label>사이트 이름 (한글) <i class="fal fa-briefcase"></i></label>
                    <input type="text" placeholder="양양" value=""/>
                </div>
                <div class="col-md-6">
                    <label>사이트 이름 (영문) <i class="fal fa-briefcase"></i></label>
                    <input type="text" placeholder="Yangyang" value=""/>
                </div>
            </div>

            <div class="row">
                <label>Interest <i class="fal fa-key"></i></label>
                추가할 예정
            </div>

            <div class="row hide">
                <div class="col-md-4">
                    <label>국가명 <i class="fal fa-briefcase"></i></label>
                    <input type="text" placeholder="대한민국" value="대한민국"/>
                </div>
                <div class="col-md-4">
                    <label>Region명 <i class="fal fa-briefcase"></i></label>
                    <input type="text" placeholder="강원도" value=""/>
                </div>
                <div class="col-md-4">
                    <label>키워드 (검색 시 포함됨, 콤마 구분, 띄어쓰기X) <i class="fal fa-key"></i></label>
                    <input type="text" placeholder="양양공항,남애" value=""/>
                </div>
            </div>
            <div class="text-start">점수는 100점 만점 입니다.</div>
            <div>
                <div class="review-range-item">
                    <div class="range-slider-title">총점</div>
                    <div class="range-slider-wrap">
                        <input type="text" class="rate-range" data-min="0" data-max="100"  name="scorel"  data-step="1" value="70">
                    </div>
                </div>
                <!--<div class="review-range-item">
                    <div class="range-slider-title">환경</div>
                    <div class="range-slider-wrap">
                        <input type="text" class="rate-range" data-min="0" data-max="100"  name="score2"  data-step="1" value="70">
                    </div>
                </div>
                <div class="review-range-item">
                    <div class="range-slider-title">유속</div>
                    <div class="range-slider-wrap">
                        <input type="text" class="rate-range" data-min="0" data-max="100"  name="score3"  data-step="1" value="70">
                    </div>
                </div>
                <div class="review-range-item">
                    <div class="range-slider-title">시야</div>
                    <div class="range-slider-wrap">
                        <input type="text" class="rate-range" data-min="0" data-max="100"  name="score4"  data-step="1" value="70">
                    </div>
                </div>-->
            </div>
            <div class="custom-form">
                <label>내용 (한글 기준 140자 이하)</label>
                <textarea cols="40" rows="3" placeholder="Datails"></textarea> 
            </div>
            

            <div class="row hide">
                <div class="col-md-6">
                    <label>Type / Category</label>
                    <div class="listsearch-input-item">
                        <select data-placeholder="Apartments" class="chosen-select no-search-select" >
                            <option>All Categories</option>
                            <option>Shops</option>
                            <option>Hotels</option>
                            <option>Restaurants</option>
                            <option>Fitness</option>
                            <option>Events</option>
                        </select>
                    </div>
                </div>
                <div class="col-md-6">
                    <label>Keywords <i class="fal fa-key"></i></label>
                    <input type="text" placeholder="Maximum 15 , should be separated by commas" value=""/>
                </div>
            </div>
        </div>
    </div>
    <!-- profile-edit-container end-->

    <div class="dashboard-title  dt-inbox fl-wrap">
        <h3>이곳은 어떤 곳인가요?</h3>
    </div>
    <!-- profile-edit-container--> 
    <div class="profile-edit-container fl-wrap block_box">
        <div class="custom-form">
            <label>방문시기 (모두 60자 내외)<i class="fal fa-briefcase"></i></label>
            <input type="text" placeholder="" value=""/>
        </div>
        <div class="custom-form">
            <label>수온 <i class="fal fa-briefcase"></i></label>
            <input type="text" placeholder="" value=""/>
        </div>
        <div class="custom-form">
            <label>수심 <i class="fal fa-briefcase"></i></label>
            <input type="text" placeholder="" value=""/>
        </div>
        <div class="custom-form">
            <label>해류 <i class="fal fa-briefcase"></i></label>
            <input type="text" placeholder="" value=""/>
        </div>
        <div class="custom-form">
            <label>시야 <i class="fal fa-briefcase"></i></label>
            <input type="text" placeholder="" value=""/>
        </div>
        <div class="custom-form">
            <label>다이빙 하이라이트 <i class="fal fa-briefcase"></i></label>
            <input type="text" placeholder="" value=""/>
        </div>
    </div>
    <!-- profile-edit-container end-->


    <div class="dashboard-title dt-inbox fl-wrap">
        <h3>위치정보</h3>
    </div>
    <!-- profile-edit-container--> 
    <div class="profile-edit-container fl-wrap block_box">
        <div class="custom-form">
            <div class="row">
                <div class="col-md-6">
                    <label>Latitude<i class="fal fa-long-arrow-alt-down"></i> </label>
                    <input type="text" placeholder="위도 (구글맵 찍었을 때 콤마 좌측)"  id="lat" value=""/>
                </div>
                <div class="col-md-6">
                    <label>Longitude<i class="fal fa-long-arrow-alt-right"></i>  </label>
                    <input type="text" placeholder="경도"  id="long" value=""/>
                </div>
                
            </div>
        </div>
    </div>
    <div class="dashboard-title  dt-inbox fl-wrap">
        <h3>상단 이미지 (지금은 Background만 선택)</h3>
    </div>
    <!-- profile-edit-container--> 
    <div class="profile-edit-container fl-wrap block_box">
        <div class="custom-form">
            <div class="row">
                <!--col --> 
                <div class="col-md-4">
                    <div class="add-list-media-header" style="margin-bottom:20px">
                        <label class="radio inline"> 
                        <input type="radio" name="gender"  checked>
                        <span>Background image</span> 
                        </label>
                    </div>
                    <div class="add-list-media-wrap">
                        <div class="add-list-media-wrap">
                            <div class="listsearch-input-item fl-wrap">
                                <div class="fuzone">
                                    <form>
                                        <div class="fu-text">
                                            <span><i class="fal fa-images"></i> Click here or drop files to upload</span>
                                            <div class="photoUpload-files fl-wrap"></div>
                                        </div>
                                        <input type="file" class="upload" multiple>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--col end--> 
                <!--col --> 
                <div class="col-md-4">
                    <div class="add-list-media-header" style="margin-bottom:20px">
                        <label class="radio inline"> 
                        <input type="radio" name="gender">
                        <span>Carousel</span> 
                        </label>
                    </div>
                    <div class="add-list-media-wrap">
                        <div class="listsearch-input-item fl-wrap">
                            <div class="fuzone">
                                <form>
                                    <div class="fu-text">
                                        <span><i class="fal fa-images"></i> Click here or drop files to upload</span>
                                        <div class="photoUpload-files fl-wrap"></div>
                                    </div>
                                    <input type="file" class="upload" multiple>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <!--col end--> 
                <!--col --> 
                <div class="col-md-4">
                    <div class="add-list-media-header" style="margin-bottom:20px">
                        <label class="radio inline"> 
                        <input type="radio" name="gender">
                        <span>Video</span> 
                        </label>
                    </div>
                    <div class="add-list-media-wrap">
                        <label>Youtube  <i class="fab fa-youtube"></i></label>
                        <input type="text" placeholder="https://www.youtube.com/" value=""/>
                        <label>Vimeo <i class="fab fa-vimeo-v"></i></label>
                        <input type="text" placeholder="https://vimeo.com/" value=""/> 
                    </div>
                </div>
                <!--col end-->
            </div>
        </div>
    </div>
    <!-- profile-edit-container end-->

    <div class="dashboard-title  dt-inbox fl-wrap">
        <h3>유튜브 영상</h3>
    </div>
    <!-- profile-edit-container--> 
    <div class="profile-edit-container fl-wrap block_box">
        <div class="custom-form">
            <div class="row">
                <div class="col-md-6">
                    <label>한국어 비디오  (뒤에 코드만 입력하면 됨 watch?v= 이후)</label>
                    <div class="add-list-media-wrap">
                        <label>비디오 1  <i class="fab fa-youtube"></i></label>
                        <input type="text" placeholder="dZgNzERWD9M (11자리)" value=""/>
                    </div>
                    <div class="add-list-media-wrap">
                        <label>비디오 2  <i class="fab fa-youtube"></i></label>
                        <input type="text" placeholder="11자리" value=""/>
                    </div>
                    <div class="add-list-media-wrap">
                        <label>비디오 3  <i class="fab fa-youtube"></i></label>
                        <input type="text" placeholder="11자리" value=""/>
                    </div>
                    <div class="add-list-media-wrap">
                        <label>비디오 4  <i class="fab fa-youtube"></i></label>
                        <input type="text" placeholder="11자리" value=""/>
                    </div>
                    <div class="add-list-media-wrap">
                        <label>비디오 5  <i class="fab fa-youtube"></i></label>
                        <input type="text" placeholder="11자리" value=""/>
                    </div>
                    <div class="add-list-media-wrap">
                        <label>비디오 6  <i class="fab fa-youtube"></i></label>
                        <input type="text" placeholder="11자리" value=""/>
                    </div>
                </div>
                <div class="col-md-6">
                    <label>영어 비디오  (뒤에 코드만 입력하면 됨 watch?v= 이후)</label>
                    <div class="add-list-media-wrap">
                        <label>비디오 1  <i class="fab fa-youtube"></i></label>
                        <input type="text" placeholder="dZgNzERWD9M (11자리)" value=""/>
                    </div>
                    <div class="add-list-media-wrap">
                        <label>비디오 2  <i class="fab fa-youtube"></i></label>
                        <input type="text" placeholder="11자리" value=""/>
                    </div>
                    <div class="add-list-media-wrap">
                        <label>비디오 3  <i class="fab fa-youtube"></i></label>
                        <input type="text" placeholder="11자리" value=""/>
                    </div>
                    <div class="add-list-media-wrap">
                        <label>비디오 4  <i class="fab fa-youtube"></i></label>
                        <input type="text" placeholder="11자리" value=""/>
                    </div>
                    <div class="add-list-media-wrap">
                        <label>비디오 5  <i class="fab fa-youtube"></i></label>
                        <input type="text" placeholder="11자리" value=""/>
                    </div>
                    <div class="add-list-media-wrap">
                        <label>비디오 6  <i class="fab fa-youtube"></i></label>
                        <input type="text" placeholder="11자리" value=""/>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div class="dashboard-title  dt-inbox fl-wrap">
        <h3>스쿠버 지수</h3>
    </div>
    <!-- profile-edit-container--> 
    <div class="profile-edit-container fl-wrap block_box">
        <div class="custom-form">
            <div class="row">
                <div class="col-md-6">
                    <label>실시간 지수용 (해수부)</label>
                    <label>https://www.khoa.go.kr/khoa/lifeforecast/sub2.do</label>
                    <div class="listsearch-input-item">
                        <select data-placeholder="위치 선택" class="chosen-select no-search-select" >
                            <option>동명항</option>
                            <option>남애항</option>
                            <option>강문해변</option>
                            <option>오산항</option>
                            <option>울릉도</option>
                            <option>월포해수욕장</option>
                            <option>구조리해수욕장</option>
                            <option>미조도</option>
                            <option>거문도</option>
                            <option>홍도</option>
                            <option>제주-성산일출봉</option>
                            <option>제주-어영(북부)</option>
                            <option>제주-문섬</option>
                        </select>
                    </div>
                </div>
                <div class="col-md-6">
                    <label>월별수온 (seatemperature)</label>
                    <label>https://www.seatemperature.org/asia/south-korea</label>
                    <div class="listsearch-input-item">
                        <select data-placeholder="위치 선택" class="chosen-select no-search-select" >
                            <option>강릉 (강원도)/kang-neung</option>
                            <option>속초 (강원도)/sogcho</option>
                            <option>동해 (강원도)/tonghae</option>
                            <option>인천/incheon</option>
                            <option>고양 (왜있지)/goyang</option>
                            <option>안산 (경기도)/ansan</option>
                            <option>화성 (경기도)/hwaseong</option>
                            <option>포항/hoko</option>
                            <option>울산/ulsan</option>
                            <option>부산/busan</option>
                            <option>진해 (창원)/chinhae</option>
                            <option>마산/masan</option>
                            <option>거제/kyosai</option>
                            <option>여수/reisui</option>
                            <option>순천/sunchun</option>
                            <option>군산 (전라북도)/kunsan</option>
                            <option>목포 (전라남도)/moppo</option>
                            <option>신안 (전라남도)/sinan</option>
                            <option>태안 (충청남도)/taesal-li</option>
                            <option>제주-어영(북서부)/gaigeturi</option>
                            <option>제주-제주시(북부)/jeju</option>
                        </select>
                    </div>
                </div>
            </div>

            <div><label>월별 인기도 (1=덜붐빔, 2=보통, 3=엄청붐빔)</label></div>
            <br/><br/><br/>
            <div class="row">
                <div class="col-md-2">
                    <div class="review-range-item">
                        <div class="range-slider-title">1월</div>
                        <div class="range-slider-wrap">
                            <input type="text" class="rate-range" data-min="1" data-max="3"  name="popularl"  data-step="1" value="1">
                        </div>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="review-range-item">
                        <div class="range-slider-title">2월</div>
                        <div class="range-slider-wrap">
                            <input type="text" class="rate-range" data-min="1" data-max="3"  name="popular2"  data-step="1" value="1">
                        </div>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="review-range-item">
                        <div class="range-slider-title">3월</div>
                        <div class="range-slider-wrap">
                            <input type="text" class="rate-range" data-min="1" data-max="3"  name="popular3"  data-step="1" value="1">
                        </div>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="review-range-item">
                        <div class="range-slider-title">4월</div>
                        <div class="range-slider-wrap">
                            <input type="text" class="rate-range" data-min="1" data-max="3"  name="popular4"  data-step="1" value="1">
                        </div>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="review-range-item">
                        <div class="range-slider-title">5월</div>
                        <div class="range-slider-wrap">
                            <input type="text" class="rate-range" data-min="1" data-max="3"  name="popular5"  data-step="1" value="1">
                        </div>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="review-range-item">
                        <div class="range-slider-title">6월</div>
                        <div class="range-slider-wrap">
                            <input type="text" class="rate-range" data-min="1" data-max="3"  name="popular6"  data-step="1" value="1">
                        </div>
                    </div>
                </div>


                <div class="col-md-2">
                    <div class="review-range-item">
                        <div class="range-slider-title">7월</div>
                        <div class="range-slider-wrap">
                            <input type="text" class="rate-range" data-min="1" data-max="3"  name="popular7"  data-step="1" value="1">
                        </div>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="review-range-item">
                        <div class="range-slider-title">8월</div>
                        <div class="range-slider-wrap">
                            <input type="text" class="rate-range" data-min="1" data-max="3"  name="popular8"  data-step="1" value="1">
                        </div>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="review-range-item">
                        <div class="range-slider-title">9월</div>
                        <div class="range-slider-wrap">
                            <input type="text" class="rate-range" data-min="1" data-max="3"  name="popular9"  data-step="1" value="1">
                        </div>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="review-range-item">
                        <div class="range-slider-title">10월</div>
                        <div class="range-slider-wrap">
                            <input type="text" class="rate-range" data-min="1" data-max="3"  name="popular10"  data-step="1" value="1">
                        </div>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="review-range-item">
                        <div class="range-slider-title">11월</div>
                        <div class="range-slider-wrap">
                            <input type="text" class="rate-range" data-min="1" data-max="3"  name="popular11"  data-step="1" value="1">
                        </div>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="review-range-item">
                        <div class="range-slider-title">12월</div>
                        <div class="range-slider-wrap">
                            <input type="text" class="rate-range" data-min="1" data-max="3"  name="popular12"  data-step="1" value="1">
                        </div>
                    </div>
                </div>
            </div>



            <div><label>월별 날씨 (햇살쨍쨍, 보통, 비옴, 비엄청옴)</label></div>
            <br/><br/><br/>
            <div class="row">
                <div class="col-md-3">
                    <div class="review-range-item">
                        <div class="range-slider-title">1월</div>
                        <div class="range-slider-wrap">
                            <select data-placeholder="날씨 선택" class="chosen-select no-search-select" >
                                <option>sunny</option>
                                <option>cloudy</option>
                                <option>rainy</option>
                                <option>heavy rainy</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="review-range-item">
                        <div class="range-slider-title">2월</div>
                        <div class="range-slider-wrap">
                            <select data-placeholder="날씨 선택" class="chosen-select no-search-select" >
                                <option>sunny</option>
                                <option>cloudy</option>
                                <option>rainy</option>
                                <option>heavy rainy</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="review-range-item">
                        <div class="range-slider-title">3월</div>
                        <div class="range-slider-wrap">
                            <select data-placeholder="날씨 선택" class="chosen-select no-search-select" >
                                <option>sunny</option>
                                <option>cloudy</option>
                                <option>rainy</option>
                                <option>heavy rainy</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="review-range-item">
                        <div class="range-slider-title">4월</div>
                        <div class="range-slider-wrap">
                            <select data-placeholder="날씨 선택" class="chosen-select no-search-select" >
                                <option>sunny</option>
                                <option>cloudy</option>
                                <option>rainy</option>
                                <option>heavy rainy</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="review-range-item">
                        <div class="range-slider-title">5월</div>
                        <div class="range-slider-wrap">
                            <select data-placeholder="날씨 선택" class="chosen-select no-search-select" >
                                <option>sunny</option>
                                <option>cloudy</option>
                                <option>rainy</option>
                                <option>heavy rainy</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="review-range-item">
                        <div class="range-slider-title">6월</div>
                        <div class="range-slider-wrap">
                            <select data-placeholder="날씨 선택" class="chosen-select no-search-select" >
                                <option>sunny</option>
                                <option>cloudy</option>
                                <option>rainy</option>
                                <option>heavy rainy</option>
                            </select>
                        </div>
                    </div>
                </div>


                <div class="col-md-3">
                    <div class="review-range-item">
                        <div class="range-slider-title">7월</div>
                        <div class="range-slider-wrap">
                            <select data-placeholder="날씨 선택" class="chosen-select no-search-select" >
                                <option>sunny</option>
                                <option>cloudy</option>
                                <option>rainy</option>
                                <option>heavy rainy</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="review-range-item">
                        <div class="range-slider-title">8월</div>
                        <div class="range-slider-wrap">
                            <select data-placeholder="날씨 선택" class="chosen-select no-search-select" >
                                <option>sunny</option>
                                <option>cloudy</option>
                                <option>rainy</option>
                                <option>heavy rainy</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="review-range-item">
                        <div class="range-slider-title">9월</div>
                        <div class="range-slider-wrap">
                            <select data-placeholder="날씨 선택" class="chosen-select no-search-select" >
                                <option>sunny</option>
                                <option>cloudy</option>
                                <option>rainy</option>
                                <option>heavy rainy</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="review-range-item">
                        <div class="range-slider-title">10월</div>
                        <div class="range-slider-wrap">
                            <select data-placeholder="날씨 선택" class="chosen-select no-search-select" >
                                <option>sunny</option>
                                <option>cloudy</option>
                                <option>rainy</option>
                                <option>heavy rainy</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="review-range-item">
                        <div class="range-slider-title">11월</div>
                        <div class="range-slider-wrap">
                            <select data-placeholder="날씨 선택" class="chosen-select no-search-select" >
                                <option>sunny</option>
                                <option>cloudy</option>
                                <option>rainy</option>
                                <option>heavy rainy</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="review-range-item">
                        <div class="range-slider-title">12월</div>
                        <div class="range-slider-wrap">
                            <select data-placeholder="날씨 선택" class="chosen-select no-search-select" >
                                <option>sunny</option>
                                <option>cloudy</option>
                                <option>rainy</option>
                                <option>heavy rainy</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>



    <div class="dashboard-title  dt-inbox fl-wrap">
        <h3>참고용 URL (사이트에 보이지 않음)</h3>
    </div>
    <div class="profile-edit-container fl-wrap block_box">
        <div class="custom-form">
            <label> Website <i class="far fa-globe"></i>  </label>
            <input type="text" placeholder="사이트 1" value=""/>

            <label> Website <i class="far fa-globe"></i>  </label>
            <input type="text" placeholder="사이트 2" value=""/>

            <label> Website <i class="far fa-globe"></i>  </label>
            <input type="text" placeholder="사이트 3" value=""/>

            <label> Website <i class="far fa-globe"></i>  </label>
            <input type="text" placeholder="사이트 4" value=""/>

            <label> Website <i class="far fa-globe"></i>  </label>
            <input type="text" placeholder="사이트 5" value=""/>

            <label> Website <i class="far fa-globe"></i>  </label>
            <input type="text" placeholder="사이트 6" value=""/>

            <label> Website <i class="far fa-globe"></i>  </label>
            <input type="text" placeholder="사이트 7" value=""/>
        </div>
        <div class="custom-form">
            <label>참고사항 (관리자용, 사이트에 보이지 않음)</label>
            <textarea cols="40" rows="3" placeholder="Datails"></textarea> 
        </div>
    </div>
    <!-- profile-edit-container end-->
  </div>
</template>

<script>
export default {
  name: 'DashboardPage',
  data () {
    return {
      
    }
  },
  mounted() {
    $("#dash_site_manage").addClass("user-profile-act");
  }
}
</script>


<style scoped>
@import '../../static/css/dashboard-style.css';
.text-start {text-align: left;}
</style>
