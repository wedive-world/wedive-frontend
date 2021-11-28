<template>
  <div class="">

    <div class="header header-fixed header-logo-center">
        <a href="" class="header-title color ellipsis">프로필</a>
        <a href="#" data-back-button class="header-icon header-icon-1"><i class="fas fa-chevron-left"></i></a>
        <a href="#" data-menu="menu-main" class="header-icon header-icon-4"><i class="fas fa-bars"></i></a>
    </div>
    
    <div class="card card-clear" data-card-height="80"></div>

    <div class="page-content pb-0"> 
        <div class="progress" style="height:6px;">
            <div class="progress-bar border-0 bg-highlight text-start ps-2" 
                    role="progressbar" style="width: 20%" 
                    aria-valuenow="10" aria-valuemin="0" 
                    aria-valuemax="100">
            </div>
        </div>
        <div class="splide single-slider slider-no-arrows" id="single-slider-1" data-splide='{"autoplay":false, "drag": false, "lazyLoad": "nearby", "preloadPages": 6, "pagination": false}'>
            <div class="splide__track">
                <div class="splide__list">
                    <div class="splide__slide">
                        <div id="slide1" class="card card-full pb-0 mb-0 border-bottom" style="height: calc( 100vh - 56px );">
                        <div class="content mt-1">
                            <div class="text-center mt-5 mb-3">
                                <div style="width: 150px;height:150px;display: inline-block;background: #e7e7e7;position: relative;border-radius:75px;">
                                    <input type="file" id="file-upload" class="upload-file text-center" accept="image/*" style="height: 150px;">
                                    <p class="upload-file-text" style="color: #abb7ba;position:absolute;left:20px;top:60px;"><img src="/static/images/assets/icon_user.png" width="110"></img></p></input>
                                </div>
                            </div>
                            <div class="text-center">
                                <div class="input-style no-borders mb-3" style="max-width: 200px;display: inline-block;">
                                    <input type="text" class="form-control font-noto input-big" id="form1" placeholder="닉네임" style="text-align: center;" v-model="nickname">
                                </div>

                                <div>
                                    <p class="font-noto mb-1 mt-2">다른사람이 부를 수 있는 <font class="color-primary">닉네임</font>을 입력해주세요.</p>
                                </div>
                            </div>

                        </div>
                        <div style="position: absolute;bottom: 0;width:100%;">
                            <a id="btn_next1" href="#" class="slider-next btn btn-full font-400 rounded-s shadow-l gradient-highlight color-white bd-w-0 ms-3 me-3 mb-3" style="height: 46px;padding-top: 10px;" disabled="disabled" v-on:click="next1()">다음</a>
                        </div>
                        </div>
                    </div>
                    <div class="splide__slide">
                        <div id="slide2" class="card card-full pb-0 mb-0 border-bottom" style="height: calc( 100vh - 56px );">
                        <div class="content mt-1">
                            <div class="text-center mt-2 mb-0">
                                <div style="border-bottom: 1px solid rgba(0, 0, 0, 0.08);">
                                    <p class="font-noto mb-1 mt-2"><font class="color-primary">{{nickname}}</font>님 반가워요.</p>
                                    <img src="/static/images/assets/hihi2.png" width="60%" />
                                </div>

                                <div class="text-start input-style has-icon no-borders validate-field mb-2 mt-3" style="width: 200px;display: inline-block;">
                                    <i class="fa fa-id-badge color-gray font-14"></i>
                                    <input type="number" class="form-control font-noto input-big3" id="form4" placeholder="나이" v-model="userage">
                                    <i class="fa fa-check disabled valid color-green-dark"></i>
                                    <i class="fa fa-check disabled invalid color-red-dark"></i>
                                </div>

                                <div class="input-style no-borders has-icon validate-field  mb-2" style="width: 200px;display: inline-block;">
                                    <i class="fas fa-venus-mars color-gray font-14"></i>
                                    <select id="form5" class="input-big3 font-noto" required v-model="usersex">
                                        <option value="" selected disabled>성별</option>
                                        <option value="남자">남자</option>
                                        <option value="여자">여자</option>
                                    </select>
                                    <span class="mt-n1 me-2"><i class="fa fa-chevron-down"></i></span>
                                    <i class="fa fa-check disabled valid color-green-dark"></i>
                                    <i class="fa fa-check disabled invalid color-red-dark"></i>
                                    <em></em>
                                </div>

                                <div class="input-style no-borders has-icon validate-field mb-2" style="width: 200px;display: inline-block;">
                                    <i class="fas fa-address-card color-gray font-14"></i>
                                    <select id="form6" class="input-big3 font-noto" required v-model="useraddress">
                                        <option value="" selected disabled>거주지</option>
                                        <option value="서울 강남구">서울 강남구</option>
                                        <option value="서울 강동구">서울 강동구</option>
                                        <option value="서울 강북구">서울 강북구</option>
                                        <option value="서울 강서구">서울 강서구</option>
                                        <option value="서울 관악구">서울 관악구</option>
                                        <option value="서울 광진구">서울 광진구</option>
                                        <option value="서울 구로구">서울 구로구</option>
                                        <option value="서울 금천구">서울 금천구</option>
                                        <option value="서울 노원구">서울 노원구</option>
                                        <option value="서울 도봉구">서울 도봉구</option>
                                        <option value="서울 동대문구">서울 동대문구</option>
                                        <option value="서울 동작구">서울 동작구</option>
                                        <option value="서울 마포구">서울 마포구</option>
                                        <option value="서울 서대문구">서울 서대문구</option>
                                        <option value="서울 서초구">서울 서초구</option>
                                        <option value="서울 성동구">서울 성동구</option>
                                        <option value="서울 성북구">서울 성북구</option>
                                        <option value="서울 송파구">서울 송파구</option>
                                        <option value="서울 양천구">서울 양천구</option>
                                        <option value="서울 영등포구">서울 영등포구</option>
                                        <option value="서울 용산구">서울 용산구</option>
                                        <option value="서울 은평구">서울 은평구</option>
                                        <option value="서울 종로구">서울 종로구</option>
                                        <option value="서울 중구">서울 중구</option>
                                        <option value="서울 중랑구">서울 중랑구</option>
                                        <option value="부산광역시">부산광역시</option>
                                        <option value="대구광역시">대구광역시</option>
                                        <option value="인천광역시">인천광역시</option>
                                        <option value="광주광역시">광주광역시</option>
                                        <option value="대전광역시">대전광역시</option>
                                        <option value="울산광역시">울산광역시</option>
                                        <option value="세종특별자치시">세종특별자치시</option>
                                        <option value="경기도 수원시">경기도 수원시</option>
                                        <option value="경기도 성남시">경기도 성남시</option>
                                        <option value="경기도 안양시">경기도 안양시</option>
                                        <option value="경기도 안산시">경기도 안산시</option>
                                        <option value="경기도 용인시">경기도 용인시</option>
                                        <option value="경기도 부천시">경기도 부천시</option>
                                        <option value="경기도 광명시">경기도 광명시</option>
                                        <option value="경기도 평택시">경기도 평택시</option>
                                        <option value="경기도 과천시">경기도 과천시</option>
                                        <option value="경기도 오산시">경기도 오산시</option>
                                        <option value="경기도 시흥시">경기도 시흥시</option>
                                        <option value="경기도 군포시">경기도 군포시</option>
                                        <option value="경기도 의왕시">경기도 의왕시</option>
                                        <option value="경기도 하남시">경기도 하남시</option>
                                        <option value="경기도 이천시">경기도 이천시</option>
                                        <option value="경기도 안성시">경기도 안성시</option>
                                        <option value="경기도 김포시">경기도 김포시</option>
                                        <option value="경기도 화성시">경기도 화성시</option>
                                        <option value="경기도 광주시">경기도 광주시</option>
                                        <option value="경기도 여주시">경기도 여주시</option>
                                        <option value="경기도 고양시">경기도 고양시</option>
                                        <option value="경기도 의정부시">경기도 의정부시</option>
                                        <option value="경기도 동두천시">경기도 동두천시</option>
                                        <option value="경기도 구리시">경기도 구리시</option>
                                        <option value="경기도 남양주시">경기도 남양주시</option>
                                        <option value="경기도 파주시">경기도 파주시</option>
                                        <option value="경기도 양주시">경기도 양주시</option>
                                        <option value="경기도 포천시">경기도 포천시</option>
                                        <option value="경기도 연천군">경기도 연천군</option>
                                        <option value="경기도 가평군">경기도 가평군</option>
                                        <option value="강원도 춘천시">강원도 춘천시</option>
                                        <option value="강원도 원주시">강원도 원주시</option>
                                        <option value="강원도 강릉시">강원도 강릉시</option>
                                        <option value="강원도 동해시">강원도 동해시</option>
                                        <option value="강원도 태백시">강원도 태백시</option>
                                        <option value="강원도 속초시">강원도 속초시</option>
                                        <option value="강원도 삼척시">강원도 삼척시</option>
                                        <option value="강원도 홍천군">강원도 홍천군</option>
                                        <option value="강원도 횡성군">강원도 횡성군</option>
                                        <option value="강원도 영월군">강원도 영월군</option>
                                        <option value="강원도 평창군">강원도 평창군</option>
                                        <option value="강원도 정선군">강원도 정선군</option>
                                        <option value="강원도 철원군">강원도 철원군</option>
                                        <option value="강원도 화천군">강원도 화천군</option>
                                        <option value="강원도 양구군">강원도 양구군</option>
                                        <option value="강원도 인제군">강원도 인제군</option>
                                        <option value="강원도 고성군">강원도 고성군</option>
                                        <option value="강원도 양양군">강원도 양양군</option>
                                        <option value="경상북도 포항시">경상북도 포항시</option>
                                        <option value="경상북도 경주시">경상북도 경주시</option>
                                        <option value="경상북도 김천시">경상북도 김천시</option>
                                        <option value="경상북도 안동시">경상북도 안동시</option>
                                        <option value="경상북도 구미시">경상북도 구미시</option>
                                        <option value="경상북도 영주시">경상북도 영주시</option>
                                        <option value="경상북도 영천시">경상북도 영천시</option>
                                        <option value="경상북도 상주시">경상북도 상주시</option>
                                        <option value="경상북도 문경시">경상북도 문경시</option>
                                        <option value="경상북도 경산시">경상북도 경산시</option>
                                        <option value="경상북도 군위군">경상북도 군위군</option>
                                        <option value="경상북도 의성군">경상북도 의성군</option>
                                        <option value="경상북도 청송군">경상북도 청송군</option>
                                        <option value="경상북도 영양군">경상북도 영양군</option>
                                        <option value="경상북도 영덕군">경상북도 영덕군</option>
                                        <option value="경상북도 청도군">경상북도 청도군</option>
                                        <option value="경상북도 고령군">경상북도 고령군</option>
                                        <option value="경상북도 성주군">경상북도 성주군</option>
                                        <option value="경상북도 칠곡군">경상북도 칠곡군</option>
                                        <option value="경상북도 예천군">경상북도 예천군</option>
                                        <option value="경상북도 봉화군">경상북도 봉화군</option>
                                        <option value="경상북도 울진군">경상북도 울진군</option>
                                        <option value="경상북도 울릉군">경상북도 울릉군</option>
                                        <option value="경상남도 창원시">경상남도 창원시</option>
                                        <option value="경상남도 진주시">경상남도 진주시</option>
                                        <option value="경상남도 통영시">경상남도 통영시</option>
                                        <option value="경상남도 사천시">경상남도 사천시</option>
                                        <option value="경상남도 김해시">경상남도 김해시</option>
                                        <option value="경상남도 밀양시">경상남도 밀양시</option>
                                        <option value="경상남도 거제시">경상남도 거제시</option>
                                        <option value="경상남도 양산시">경상남도 양산시</option>
                                        <option value="경상남도 의령군">경상남도 의령군</option>
                                        <option value="경상남도 함안군">경상남도 함안군</option>
                                        <option value="경상남도 창녕군">경상남도 창녕군</option>
                                        <option value="경상남도 고성군">경상남도 고성군</option>
                                        <option value="경상남도 남해군">경상남도 남해군</option>
                                        <option value="경상남도 하동군">경상남도 하동군</option>
                                        <option value="경상남도 산청군">경상남도 산청군</option>
                                        <option value="경상남도 함양군">경상남도 함양군</option>
                                        <option value="경상남도 거창군">경상남도 거창군</option>
                                        <option value="경상남도 합천군">경상남도 합천군</option>
                                        <option value="충청북도 청주시">충청북도 청주시</option>
                                        <option value="충청북도 충주시">충청북도 충주시</option>
                                        <option value="충청북도 제천시">충청북도 제천시</option>
                                        <option value="충청북도 보은군">충청북도 보은군</option>
                                        <option value="충청북도 옥천군">충청북도 옥천군</option>
                                        <option value="충청북도 영동군">충청북도 영동군</option>
                                        <option value="충청북도 증평군">충청북도 증평군</option>
                                        <option value="충청북도 진천군">충청북도 진천군</option>
                                        <option value="충청북도 괴산군">충청북도 괴산군</option>
                                        <option value="충청북도 음성군">충청북도 음성군</option>
                                        <option value="충청북도 단양군">충청북도 단양군</option>
                                        <option value="충청남도 천안시">충청남도 천안시</option>
                                        <option value="충청남도 공주시">충청남도 공주시</option>
                                        <option value="충청남도 보령시">충청남도 보령시</option>
                                        <option value="충청남도 아산시">충청남도 아산시</option>
                                        <option value="충청남도 서산시">충청남도 서산시</option>
                                        <option value="충청남도 논산시">충청남도 논산시</option>
                                        <option value="충청남도 계룡시">충청남도 계룡시</option>
                                        <option value="충청남도 당진시">충청남도 당진시</option>
                                        <option value="충청남도 금산군">충청남도 금산군</option>
                                        <option value="충청남도 부여군">충청남도 부여군</option>
                                        <option value="충청남도 서천군">충청남도 서천군</option>
                                        <option value="충청남도 청양군">충청남도 청양군</option>
                                        <option value="충청남도 홍성군">충청남도 홍성군</option>
                                        <option value="충청남도 예산군">충청남도 예산군</option>
                                        <option value="충청남도 태안군">충청남도 태안군</option>
                                        <option value="전랴북도 전주시">전랴북도 전주시</option>
                                        <option value="전랴북도 군산시">전랴북도 군산시</option>
                                        <option value="전랴북도 익산시">전랴북도 익산시</option>
                                        <option value="전랴북도 정읍시">전랴북도 정읍시</option>
                                        <option value="전랴북도 남원시">전랴북도 남원시</option>
                                        <option value="전랴북도 김제시">전랴북도 김제시</option>
                                        <option value="전랴북도 완주군">전랴북도 완주군</option>
                                        <option value="전랴북도 진안군">전랴북도 진안군</option>
                                        <option value="전랴북도 무주군">전랴북도 무주군</option>
                                        <option value="전랴북도 장수군">전랴북도 장수군</option>
                                        <option value="전랴북도 임실군">전랴북도 임실군</option>
                                        <option value="전랴북도 순창군">전랴북도 순창군</option>
                                        <option value="전랴북도 고창군">전랴북도 고창군</option>
                                        <option value="전랴북도 부안군">전랴북도 부안군</option>
                                        <option value="전라남도 목포시">전라남도 목포시</option>
                                        <option value="전라남도 여수시">전라남도 여수시</option>
                                        <option value="전라남도 순천시">전라남도 순천시</option>
                                        <option value="전라남도 나주시">전라남도 나주시</option>
                                        <option value="전라남도 광양시">전라남도 광양시</option>
                                        <option value="전라남도 담양군">전라남도 담양군</option>
                                        <option value="전라남도 곡성군">전라남도 곡성군</option>
                                        <option value="전라남도 구례군">전라남도 구례군</option>
                                        <option value="전라남도 고흥군">전라남도 고흥군</option>
                                        <option value="전라남도 보성군">전라남도 보성군</option>
                                        <option value="전라남도 화순군">전라남도 화순군</option>
                                        <option value="전라남도 장흥군">전라남도 장흥군</option>
                                        <option value="전라남도 강진군">전라남도 강진군</option>
                                        <option value="전라남도 해남군">전라남도 해남군</option>
                                        <option value="전라남도 영암군">전라남도 영암군</option>
                                        <option value="전라남도 무안군">전라남도 무안군</option>
                                        <option value="전라남도 함평군">전라남도 함평군</option>
                                        <option value="전라남도 영광군">전라남도 영광군</option>
                                        <option value="전라남도 장성군">전라남도 장성군</option>
                                        <option value="전라남도 완도군">전라남도 완도군</option>
                                        <option value="전라남도 진도군">전라남도 진도군</option>
                                        <option value="전라남도 신안군">전라남도 신안군</option>
                                        <option value="제주특별자치도 제주시">제주특별자치도 제주시</option>
                                        <option value="제주특별자치도 서귀포시">제주특별자치도 서귀포시</option>
                                    </select>
                                    <span class="mt-n1 me-2"><i class="fa fa-chevron-down"></i></span>
                                    <i class="fa fa-check disabled valid color-green-dark"></i>
                                    <i class="fa fa-check disabled invalid color-red-dark"></i>
                                    <em></em>
                                </div>
                            </div>

                            <div class="mb-0 mt-5">
                                <label class="wediev-label pb-1 color-highlight ms-2" style="margin-top:-26px;">선호사항 (선택)</label>
                                <div class="form-check interest-check">
                                <input class="form-check-input" type="checkbox" value="" id="check_general1">
                                <label class="form-check-label rounded-xl border-08" for="check_general1">국내투어</label>
                                <i class="fas fa-caravan color-white font-17"></i>
                                <i class="fas fa-caravan font-17 color-highlight"></i>
                                </div>
                                <div class="form-check interest-check">
                                <input class="form-check-input" type="checkbox" value="" id="check_general2">
                                <label class="form-check-label rounded-xl border-08" for="check_general2">해외투어</label>
                                <i class="fas fa-globe-americas color-white font-17"></i>
                                <i class="fas fa-globe-americas font-17 color-highlight"></i>
                                </div>
                                <div class="form-check interest-check">
                                <input class="form-check-input" type="checkbox" value="" id="check_general3">
                                <label class="form-check-label rounded-xl border-08" for="check_general3">수중정화</label>
                                <i class="fas fa-broom color-white font-17"></i>
                                <i class="fas fa-broom font-17 color-highlight"></i>
                                </div>
                                <div class="form-check interest-check">
                                <input class="form-check-input" type="checkbox" value="" id="check_general4">
                                <label class="form-check-label rounded-xl border-08" for="check_general4">뒷풀이</label>
                                <i class="fas fa-beer color-white font-17"></i>
                                <i class="fas fa-beer font-17 color-highlight"></i>
                                </div>
                                <div class="form-check interest-check">
                                <input class="form-check-input" type="checkbox" value="" id="check_general5">
                                <label class="form-check-label rounded-xl border-08" for="check_general5">동호회</label>
                                <i class="fas fa-users color-white font-17"></i>
                                <i class="fas fa-users font-17 color-highlight"></i>
                                </div>
                            </div>
                        </div>

                        <div class="row me-0 ms-0 mb-0" style="position: absolute;bottom: 0;width:100%;padding-left:20px;padding-right:20px;">
                            <a href="#" class="col-6 slider-prev btn btn-full font-400 rounded-s shadow-l gradient-highlight color-white bd-w-0 mb-3" style="height: 46px;padding-top: 10px;margin-left:-4px;margin-right:4px;">이전</a>
                            <a id="btn_next2" href="#" class="col-6 slider-next btn btn-full font-400 rounded-s shadow-l gradient-highlight color-white bd-w-0 mb-3" style="height: 46px;padding-top: 10px;margin-right:-4px;margin-left:4px;" disabled="disabled" v-on:click="next2()">다음</a>
                        </div>
                        </div>
                    </div>
                    <div class="splide__slide">
                        <div id="slide3" class="card card-full pb-0 mb-0 border-bottom" style="height: calc( 100vh - 56px );">
                        <div class="content mt-1">
                            <div class="text-center mt-2 mb-3">
                                <div>
                                    <p class="font-noto mb-3 mt-5">{{nickname}}님, <font class="color-primary font-20 font-600">스쿠버 다이빙</font> 해보셨나요?<br/>
                                    <font class="color-gray">정보가 없으면 다음을 클릭해주세요.</font>
                                    </p>
                                </div>

                            </div>
                            <div class="p-3" style="background: #e7e7e7;border-radius:8px;">
                                <div class="input-style no-borders has-icon validate-field mb-3 mt-2">
                                    <i class="fas fa-address-card color-gray" style="margin-left:6px;"></i>
                                    <label for="form11" class="color-highlight bg-e7e7e7">라이센스</label>
                                    <select id="form11" required class="font-noto" v-model="scuba_license">
                                        <option value="" selected disabled>라이센스</option>
                                        <option value="PADI">PADI</option>
                                        <option value="NAUI">NAUI</option>
                                        <option value="BSAC">BSAC</option>
                                        <option value="CMAS">CMAS</option>
                                        <option value="SSI">SSI</option>
                                        <option value="NDL">NDL</option>
                                        <option value="SDI/TDI">SDI/TDI</option>
                                        <option value="IANTD">IANTD</option>
                                        <option value="KUDA">KUDA</option>
                                        <option value="NASE">NASE</option>
                                        <option value="YMCA">YMCA</option>
                                        <option value="AIDA">AIDA</option>
                                        <option value="AA">AA</option>
                                        <option value="Molchanovs">Molchanovs</option>
                                        <option value="RAID">RAID</option>
                                        <option value="UTA">UTA</option>
                                        <option value="SNSI">SNSI</option>
                                        <option value="AFIA">AFIA</option>
                                        <option value="KF">KF</option>
                                        <option value="UTR">UTR</option>
                                        <option value="PSAI">PSAI</option>
                                        <option value="PSS">PSS</option>
                                        <option value="NASDS">NASDS</option>
                                        <option value="IDEA – WDA">IDEA – WDA</option>
                                        <option value="IDA">IDA</option>
                                        <option value="IDDA ">IDDA</option>
                                        <option value="IAC ">IAC</option>
                                        <option value="ACUC">ACUC</option>
                                        <option value="VIT">VIT</option>
                                        <option value="PDIC International">PDIC International</option>
                                        <option value="RSTC">RSTC</option>
                                        <option value="DDI">DDI</option>
                                        <option value="IAHD">IAHD</option>
                                        <option value="MDEA">MDEA</option>
                                        <option value="ANDI">ANDI</option>
                                        <option value="GUE">GUE</option>
                                        <option value="PSAI">PSAI</option>
                                        <option value="SEI">SEI</option>
                                        <option value="없음">없음</option>
                                    </select>
                                    <span class="mt-n1 me-2"><i class="fa fa-chevron-down"></i></span>
                                    <i class="fa fa-check disabled valid color-green-dark"></i>
                                    <i class="fa fa-check disabled invalid color-red-dark"></i>
                                    <em></em>
                                </div>

                                <div class="input-style no-borders has-icon validate-field mb-3">
                                    <i class="fas fa-layer-group color-gray" style="margin-left:6px;"></i>
                                    <label for="form22" class="color-highlight bg-e7e7e7">레벨</label>
                                    <select id="form22" required class="font-noto" v-model="scuba_level">
                                        <option value="" selected disabled>레벨</option>
                                        <option value="오픈워터">오픈워터</option>
                                        <option value="어드밴스드">어드밴스드</option>
                                        <option value="레스큐">레스큐</option>
                                        <option value="마스터">마스터</option>
                                        <option value="강사">강사</option>
                                        <option value="없음">없음</option>
                                    </select>
                                    <span class="mt-n1 me-2"><i class="fa fa-chevron-down"></i></span>
                                    <i class="fa fa-check disabled valid color-green-dark"></i>
                                    <i class="fa fa-check disabled invalid color-red-dark"></i>
                                    <em></em>
                                </div>

                                <div class="input-style no-borders has-icon validate-field mb-3">
                                    <i class="fas fa-clipboard-check color-gray" style="margin-left:6px;"></i>
                                    <label for="form23" class="color-highlight bg-e7e7e7">다이빙 로그</label>
                                    <select id="form23" required class="font-noto" v-model="scuba_log">
                                        <option value="" selected disabled>다이빙 로그</option>
                                        <option value="10">~10</option>
                                        <option value="30">~30</option>
                                        <option value="50">~50</option>
                                        <option value="100">~100</option>
                                        <option value="200">~200</option>
                                        <option value="300">~300</option>
                                        <option value="301">300~</option>
                                        <option value="없음">없음</option>
                                    </select>
                                    <span class="mt-n1 me-2"><i class="fa fa-chevron-down"></i></span>
                                    <i class="fa fa-check disabled valid color-green-dark"></i>
                                    <i class="fa fa-check disabled invalid color-red-dark"></i>
                                    <em></em>
                                </div>

                                <div class="mb-0 mt-5">
                                    <label class="wediev-label pb-1 color-highlight ms-3" style="margin-top:-26px;">선호사항</label>
                                    <div class="form-check interest-check">
                                    <input class="form-check-input" type="checkbox" value="" id="check_scuba1">
                                    <label class="form-check-label rounded-xl border-08" for="check_scuba1">대물포인트</label>
                                    <i class="fas fa-fish color-white font-17"></i>
                                    <i class="fas fa-fish font-17 color-highlight"></i>
                                    </div>
                                    <div class="form-check interest-check">
                                    <input class="form-check-input" type="checkbox" value="" id="check_scuba2">
                                    <label class="form-check-label rounded-xl border-08" for="check_scuba2">이색포인트</label>
                                    <i class="fas fa-grin-stars color-white font-17"></i>
                                    <i class="fas fa-grin-stars font-17 color-highlight"></i>
                                    </div>
                                    <div class="form-check interest-check">
                                    <input class="form-check-input" type="checkbox" value="" id="check_scuba3">
                                    <label class="form-check-label rounded-xl border-08" for="check_scuba3">수중촬영</label>
                                    <i class="fas fa-camera-retro color-white font-17"></i>
                                    <i class="fas fa-camera-retro font-17 color-highlight"></i>
                                    </div>
                                    <div class="form-check interest-check">
                                    <input class="form-check-input" type="checkbox" value="" id="check_scuba4">
                                    <label class="form-check-label rounded-xl border-08" for="check_scuba4">리브어보드</label>
                                    <i class="fas fa-ship color-white font-17"></i>
                                    <i class="fas fa-ship font-17 color-highlight"></i>
                                    </div>
                                    <div class="form-check interest-check">
                                    <input class="form-check-input" type="checkbox" value="" id="check_scuba5">
                                    <label class="form-check-label rounded-xl border-08" for="check_scuba5">체크다이빙</label>
                                    <i class="fas fa-check-square color-white font-17"></i>
                                    <i class="fas fa-check-square font-17 color-highlight"></i>
                                    </div>
                                    
                                    
                                    <div class="form-check interest-check">
                                    <input class="form-check-input" type="checkbox" value="" id="check_scuba6">
                                    <label class="form-check-label rounded-xl border-08" for="check_scuba6">먹다이빙</label>
                                    <i class="fab fa-get-pocket color-white font-17"></i>
                                    <i class="fab fa-get-pocket font-17 color-highlight"></i>
                                    </div>
                                    <div class="form-check interest-check">
                                    <input class="form-check-input" type="checkbox" value="" id="check_scuba7">
                                    <label class="form-check-label rounded-xl border-08" for="check_scuba7">테크니컬다이빙</label>
                                    <i class="fas fa-drafting-compass color-white font-17"></i>
                                    <i class="fas fa-drafting-compass font-17 color-highlight"></i>
                                    </div>
                                    <div class="form-check interest-check">
                                    <input class="form-check-input" type="checkbox" value="" id="check_scuba8">
                                    <label class="form-check-label rounded-xl border-08" for="check_scuba8">마크로포인트</label>
                                    <i class="fas fa-fish color-white font-17"></i>
                                    <i class="fas fa-fish font-17 color-highlight"></i>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="row me-0 ms-0 mb-0" style="position: absolute;bottom: 0;width:100%;padding-left:20px;padding-right:20px;">
                            <a href="#" class="col-6 slider-prev btn btn-full font-400 rounded-s shadow-l gradient-highlight color-white bd-w-0 mb-3" style="height: 46px;padding-top: 10px;margin-left:-4px;margin-right:4px;">이전</a>
                            <a id="btn_next3" href="#" class="col-6 slider-next btn btn-full font-400 rounded-s shadow-l gradient-highlight color-white bd-w-0 mb-3" style="height: 46px;padding-top: 10px;margin-right:-4px;margin-left:4px;" v-on:click="next3()">넘어가기</a>
                        </div>
                        </div>
                    </div>
                    <div class="splide__slide">
                        <div id="slide4" class="card card-full pb-0 mb-0 border-bottom" style="height: calc( 100vh - 56px );">
                        <div class="content mt-1">
                            <div class="text-center mt-2 mb-3">
                                <div>
                                    <p class="font-noto mb-3 mt-5">{{nickname}}님, <font class="color-primary font-20 font-600">프리 다이빙</font> 해보셨나요?<br/>
                                    <font class="color-gray">정보가 없으면 다음을 클릭해주세요.</font>
                                    </p>
                                </div>
                            </div>
                            <div class="p-3" style="background: #e7e7e7;border-radius:8px;">
                                <div class="input-style no-borders has-icon validate-field mb-3">
                                    <i class="fas fa-address-card color-gray" style="margin-left:6px;"></i>
                                    <label for="form21" class="color-highlight bg-e7e7e7">라이센스</label>
                                    <select id="form21" required v-model="free_license">
                                        <option value="" selected disabled>라이센스</option>
                                        <option value="PADI">PADI</option>
                                        <option value="NAUI">NAUI</option>
                                        <option value="BSAC">BSAC</option>
                                        <option value="CMAS">CMAS</option>
                                        <option value="SSI">SSI</option>
                                        <option value="NDL">NDL</option>
                                        <option value="SDI/TDI">SDI/TDI</option>
                                        <option value="IANTD">IANTD</option>
                                        <option value="KUDA">KUDA</option>
                                        <option value="NASE">NASE</option>
                                        <option value="YMCA">YMCA</option>
                                        <option value="AIDA">AIDA</option>
                                        <option value="AA">AA</option>
                                        <option value="Molchanovs">Molchanovs</option>
                                        <option value="RAID">RAID</option>
                                        <option value="UTA">UTA</option>
                                        <option value="SNSI">SNSI</option>
                                        <option value="AFIA">AFIA</option>
                                        <option value="KF">KF</option>
                                        <option value="UTR">UTR</option>
                                        <option value="PSAI">PSAI</option>
                                        <option value="PSS">PSS</option>
                                        <option value="NASDS">NASDS</option>
                                        <option value="IDEA – WDA">IDEA – WDA</option>
                                        <option value="IDA">IDA</option>
                                        <option value="IDDA ">IDDA</option>
                                        <option value="IAC ">IAC</option>
                                        <option value="ACUC">ACUC</option>
                                        <option value="VIT">VIT</option>
                                        <option value="PDIC International">PDIC International</option>
                                        <option value="RSTC">RSTC</option>
                                        <option value="DDI">DDI</option>
                                        <option value="IAHD">IAHD</option>
                                        <option value="MDEA">MDEA</option>
                                        <option value="ANDI">ANDI</option>
                                        <option value="GUE">GUE</option>
                                        <option value="PSAI">PSAI</option>
                                        <option value="SEI">SEI</option>
                                        <option value="없음">없음</option>
                                    </select>
                                    <span class="mt-n1 me-2"><i class="fa fa-chevron-down"></i></span>
                                    <i class="fa fa-check disabled valid color-green-dark"></i>
                                    <i class="fa fa-check disabled invalid color-red-dark"></i>
                                    <em></em>
                                </div>

                                <div class="input-style no-borders has-icon validate-field mb-3">
                                    <i class="fas fa-layer-group color-gray" style="margin-left:6px;"></i>
                                    <label for="form12" class="color-highlight bg-e7e7e7">레벨</label>
                                    <select id="form12" required v-model="free_level">
                                        <option value="" selected disabled>레벨</option>
                                        <option value="레벨1">레벨1</option>
                                        <option value="레벨2">레벨2</option>
                                        <option value="레벨3">레벨3</option>
                                        <option value="레벨4">레벨4</option>
                                        <option value="강사">강사</option>
                                        <option value="없음">없음</option>
                                    </select>
                                    <span class="mt-n1 me-2"><i class="fa fa-chevron-down"></i></span>
                                    <i class="fa fa-check disabled valid color-green-dark"></i>
                                    <i class="fa fa-check disabled invalid color-red-dark"></i>
                                    <em></em>
                                </div>

                                <div class="mb-2 mt-5">
                                    <label class="wediev-label pb-1 color-highlight ms-3" style="margin-top:-26px;">Personal Best</label>
                                    
                                    <div id="div_personal_best" style="display: inline-block;">
                                    </div>

                                    <a href="#" data-menu="menu-personal-best" class="btn btn-xs mb-0 rounded-xl text-uppercase font-900 shadow-s bg-dark-dark"><i class="fas fa-plus"></i></a>
                                </div>

                                <div class="mb-0" style="margin-top:30px;">
                                    <label class="wediev-label pb-1 color-highlight ms-3" style="margin-top:-24px;">선호사항</label>
                                    <div class="form-check interest-check">
                                    <input class="form-check-input" type="checkbox" value="" id="check_free1">
                                    <label class="form-check-label rounded-xl border-08" for="check_free1">트레이닝</label>
                                    <i class="fas fa-graduation-cap color-white font-17"></i>
                                    <i class="fas fa-graduation-cap font-17 color-highlight"></i>
                                    </div>
                                    <div class="form-check interest-check">
                                    <input class="form-check-input" type="checkbox" value="" id="check_free2">
                                    <label class="form-check-label rounded-xl border-08" for="check_free2">수중화보</label>
                                    <i class="fas fa-camera-retro color-white font-17"></i>
                                    <i class="fas fa-camera-retro font-17 color-highlight"></i>
                                    </div>
                                    <div class="form-check interest-check">
                                    <input class="form-check-input" type="checkbox" value="" id="check_free3">
                                    <label class="form-check-label rounded-xl border-08" for="check_free3">해루질</label>
                                    <i class="fab fa-get-pocket color-white font-17"></i>
                                    <i class="fab fa-get-pocket font-17 color-highlight"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row me-0 ms-0 mb-0" style="position: absolute;bottom: 0;width:100%;padding-left:20px;padding-right:20px;">
                            <a href="#" class="col-6 slider-prev btn btn-full font-400 rounded-s shadow-l gradient-highlight color-white bd-w-0 mb-3" style="height: 46px;padding-top: 10px;margin-left:-4px;margin-right:4px;">이전</a>
                            <a id="btn_next4" href="#" class="col-6 slider-next btn btn-full font-400 rounded-s shadow-l gradient-highlight color-white bd-w-0 mb-3" style="height: 46px;padding-top: 10px;margin-right:-4px;margin-left:4px;" v-on:click="next4()">넘어가기</a>
                        </div>
                        </div>
                    </div>

                    <div class="splide__slide">
                        <div id="slide5" class="card card-full pb-0 mb-0 border-bottom" style="height: calc( 100vh - 56px );">
                        <div class="content mt-1">
                            <div class="text-center mt-2 mb-3">
                                <div>
                                    <p class="font-noto mb-3 mt-5">{{nickname}}님, <font class="color-primary font-20 font-600">강사</font> 로 등록하시겠어요?<br/>
                                    <font class="color-gray">위다이브에서 무료로 강습생을 추천해드려요.</font>
                                    </p>
                                </div>
                            </div>
                            <div class="input-style no-borders has-icon validate-field mb-3 mt-3">
                                <i class="fas fa-phone-alt color-gray"></i>
                                <input type="tel" class="form-control validate-text" id="form31" placeholder="전화번호">
                                <label for="form31" class="color-highlight">전화번호</label>
                                <i class="fa fa-times disabled invalid color-red-dark"></i>
                                <i class="fa fa-check disabled valid color-green-dark"></i>
                                <em>(필수입력)</em>
                            </div>
                            <div class="input-style no-borders has-icon validate-field mb-3">
                                <i class="fa fa-at color-gray"></i>
                                <input type="email" class="form-control validate-text" id="form32" placeholder="이메일">
                                <label for="form32" class="color-highlight">이메일</label>
                                <i class="fa fa-times disabled invalid color-red-dark"></i>
                                <i class="fa fa-check disabled valid color-green-dark"></i>
                                <em>(필수입력)</em>
                            </div>
                            
                            <div style="border: 1px solid #abb7ba;width: 150px;height:150px;display: inline-block;background: white;position: relative;">
                                <input type="file" id="file-upload2" class="upload-file text-center" accept="image/*" style="height: 150px;">
                                <p class="upload-file-text" style="color: #abb7ba;position:absolute;left:40px;top:80px;"><i class="fas fa-plus"></i><br/>자격증 업로드</p></input>
                            </div>
                        </div>
                        <div class="row me-0 ms-0 mb-0" style="position: absolute;bottom: 0;width:100%;padding-left:20px;padding-right:20px;">
                            <a href="#" class="col-6 slider-prev btn btn-full font-400 rounded-s shadow-l gradient-highlight color-white bd-w-0 mb-3" style="height: 46px;padding-top: 10px;margin-left:-4px;margin-right:4px;">이전</a>
                            <a id="btn_next4" href="#" class="col-6 slider-next btn btn-full font-400 rounded-s shadow-l gradient-highlight color-white bd-w-0 mb-3" style="height: 46px;padding-top: 10px;margin-right:-4px;margin-left:4px;" v-on:click="next5()">완료</a>
                        </div>
                        </div>
                    </div>

                    <div class="splide__slide">
                        <div id="slide6" class="card card-full pb-0 mb-0 border-bottom" style="height: calc( 100vh - 56px );">
                        <div class="content mt-1" style="padding-top: 80px;">
                            <div class="text-center mt-2 mb-3">
                                <img src="/static/images/assets/confetti.gif" width="50%"/>
                                <p class="font-noto mb-1 mt-2 font-16">{{ nickname }}님, weDive에 오신것을 환영합니다.</p>
                                <p class="font-noto color-gray"><span class="span_timer">3</span>초 후 메인페이지로 이동할께요.</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>




        
    </div>
    <!-- Page content ends here-->
    
    <!-- Menu : Personal Best -->
    <div id="menu-personal-best" 
         class="menu menu-box-modal rounded-m bg-theme" 
         data-menu-width="350"
         data-menu-height="380">
        <div class="menu-title p-2">
            <h1 class="font-600 font-18">Personal Best 추가</h1>
            <a href="#" class="close-menu"><i class="wedive_icoset wedive_icoset_close"></i></a>
        </div>
        
        <div class="content">
            <div class="row">
                <div class="col-6">
                    <div class="text-start input-style has-icon no-borders mb-1">
                        <i class="fa fa-record-vinyl color-gray font-14"></i>
                        <label for="form_pb_sta" class="color-highlight bg-e7e7e7">STA (숨참기)</label>
                        <input type="number" class="form-control font-noto" id="form_pb_sta" placeholder="STA (숨참기)" v-model="pb_sta">
                        <i class="fa fa-check disabled valid color-green-dark"></i>
                        <i class="fa fa-check disabled invalid color-red-dark"></i>
                    </div>
                </div>
                <div class="col-6">
                    <div class="text-start input-style has-icon no-borders mb-1">
                        <i class="fa fa-record-vinyl color-gray font-14"></i>
                        <label for="form_pb_dyn" class="color-highlight bg-e7e7e7">DYN (핀잠영)</label>
                        <input type="number" class="form-control font-noto" id="form_pb_dyn" placeholder="DYN (핀잠영)" v-model="pb_dyn">
                        <i class="fa fa-check disabled valid color-green-dark"></i>
                        <i class="fa fa-check disabled invalid color-red-dark"></i>
                    </div>
                </div>
                <div class="col-6">
                    <div class="text-start input-style has-icon no-borders mb-1">
                        <i class="fa fa-record-vinyl color-gray font-14"></i>
                        <label for="form_pb_dnf" class="color-highlight bg-e7e7e7">DNF (맨발 잠영)</label>
                        <input type="number" class="form-control font-noto" id="form_pb_dnf" placeholder="DNF (맨발 잠영)" v-model="pb_dnf">
                        <i class="fa fa-check disabled valid color-green-dark"></i>
                        <i class="fa fa-check disabled invalid color-red-dark"></i>
                    </div>
                </div>
                <div class="col-6">
                    <div class="text-start input-style has-icon no-borders mb-1">
                        <i class="fa fa-record-vinyl color-gray font-14"></i>
                        <label for="form_pb_cwt" class="color-highlight bg-e7e7e7">CWT (고정 웨이트)</label>
                        <input type="number" class="form-control font-noto" id="form_pb_cwt" placeholder="CWT (고정 웨이트)" v-model="pb_cwt">
                        <i class="fa fa-check disabled valid color-green-dark"></i>
                        <i class="fa fa-check disabled invalid color-red-dark"></i>
                    </div>
                </div>
                <div class="col-6">
                    <div class="text-start input-style has-icon no-borders mb-1">
                        <i class="fa fa-record-vinyl color-gray font-14"></i>
                        <label for="form_pb_vwt" class="color-highlight bg-e7e7e7">VWT (가변 웨이트)</label>
                        <input type="number" class="form-control font-noto" id="form_pb_vwt" placeholder="VWT (가변 웨이트)" v-model="pb_vwt">
                        <i class="fa fa-check disabled valid color-green-dark"></i>
                        <i class="fa fa-check disabled invalid color-red-dark"></i>
                    </div>
                </div>
                <div class="col-6">
                    <div class="text-start input-style has-icon no-borders mb-1">
                        <i class="fa fa-record-vinyl color-gray font-14"></i>
                        <label for="form_pb_fim" class="color-highlight bg-e7e7e7">FIM (프리 이머전)</label>
                        <input type="number" class="form-control font-noto" id="form_pb_fim" placeholder="FIM (프리 이머전)" v-model="pb_fim">
                        <i class="fa fa-check disabled valid color-green-dark"></i>
                        <i class="fa fa-check disabled invalid color-red-dark"></i>
                    </div>
                </div>
                <div class="col-6">
                    <div class="text-start input-style has-icon no-borders mb-1">
                        <i class="fa fa-record-vinyl color-gray font-14"></i>
                        <label for="form_pb_cnf" class="color-highlight bg-e7e7e7">CNF (맨발 잠수)</label>
                        <input type="number" class="form-control font-noto" id="form_pb_cnf" placeholder="CNF (맨발 잠수)" v-model="pb_cnf">
                        <i class="fa fa-check disabled valid color-green-dark"></i>
                        <i class="fa fa-check disabled invalid color-red-dark"></i>
                    </div>
                </div>
                <div class="col-6">
                    <div class="text-start input-style has-icon no-borders mb-1">
                        <i class="fa fa-record-vinyl color-gray font-14"></i>
                        <label for="form_pb_nlt" class="color-highlight bg-e7e7e7">NLT (무제한 잠수)</label>
                        <input type="number" class="form-control font-noto" id="form_pb_nlt" placeholder="NLT (무제한 잠수)" v-model="pb_nlt">
                        <i class="fa fa-check disabled valid color-green-dark"></i>
                        <i class="fa fa-check disabled invalid color-red-dark"></i>
                    </div>
                </div>
            </div>
            
            
            <a href="#" v-on:click="addPersonalBest()" class="btn btn-full font-400 rounded-s shadow-l gradient-highlight color-white bd-w-0">추가하기</a>
        </div>
    </div>


    <div id="snackbar-inputerror" class="snackbar-toast color-white bg-red-dark" data-bs-delay="3000" data-bs-autohide="true"><i class="fa fa-times me-3"></i>모든 항목을 입력해주세요.</div>


  </div>
</template>
<script>
import VueTypeaheadBootstrap from 'vue-typeahead-bootstrap';
import {debounce} from 'lodash';
var schedule_status = [0, 0, 0, 0, 0];

export default {
  name: 'HelloWorld',
  mounted() {
    document.getElementById("footer-bar").classList.add("hide");
    
    $(".page-title").hide();
    $(".page-title-clear").hide();
    
    setTimeout(function() {
        $("#toggle-id-1").click();
        $("#toggle-id-2").click();
        $(".wedive-search2 > .input-group").prepend('<i class="fas fa-swimming-pool wedive-search2-icon color-gray" style="margin-left:6px;"></i>');

        $('#form_pb').on('change', function() {
            var val = $('#form_pb').val();
            if (val == 'STA') {
                $("#em_pb_record").text("(단위, 분)");
            } else {
                $("#em_pb_record").text("(단위, 미터)")
            }
        });
    }, 500);

    var body = document.body, html = document.documentElement;
    var height = Math.min(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight) - 56;
    document.getElementById('slide1').style.height = height + 'px';
    document.getElementById('slide2').style.height = height + 'px';
    document.getElementById('slide3').style.height = height + 'px';
    document.getElementById('slide4').style.height = height + 'px';
    document.getElementById('slide5').style.height = height + 'px';
    document.getElementById('slide6').style.height = height + 'px';

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
    VueTypeaheadBootstrap
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
        users: [],
        nickname: '',
        username: '',
        userage: '',
        usersex: '',
        useraddress: '',
        scuba_license: '',
        scuba_level: '',
        scuba_log: '',
        free_license: '',
        free_level: '',
        pb_sta: '',
        pb_dyn: '',
        pb_dnf: '',
        pb_cwt: '',
        pb_vwt: '',
        pb_fim: '',
        pb_cnf: '',
        pb_nlt: '',
    }
  }, 
  watch: {
      nickname: function(newVal, oldVal) {
          if (newVal === '') {
              $("#btn_next1").attr("disabled", true);
          } else {
              $("#btn_next1").attr("disabled", false);
          }
      },
      username: function(newVal, oldVal) {
          if (this.userage === '' || this.usersex === '' || this.useraddress === '') {
              $("#btn_next2").attr("disabled", true);
          } else {
              $("#btn_next2").attr("disabled", false);
          }
      },
      userage: function(newVal, oldVal) {
          if (this.userage === '' || this.usersex === '' || this.useraddress === '') {
              $("#btn_next2").attr("disabled", true);
          } else {
              $("#btn_next2").attr("disabled", false);
          }
      },
      usersex: function(newVal, oldVal) {
          if (this.userage === '' || this.usersex === '' || this.useraddress === '') {
              $("#btn_next2").attr("disabled", true);
          } else {
              $("#btn_next2").attr("disabled", false);
          }
      },
      useraddress: function(newVal, oldVal) {
          if (this.userage === '' || this.usersex === '' || this.useraddress === '') {
              $("#btn_next2").attr("disabled", true);
          } else {
              $("#btn_next2").attr("disabled", false);
          }
      },
      scuba_license: function(newVal, oldVal) {
          if (this.scuba_license === '' || this.scuba_level === '' || this.scuba_log === '') {
              $("#btn_next3").text("다음");
          } else {
              $("#btn_next3").text("넘어가기");
          }
      },
      scuba_level: function(newVal, oldVal) {
          if (this.scuba_license === '' || this.scuba_level === '' || this.scuba_log === '') {
              $("#btn_next3").text("다음");
          } else {
              $("#btn_next3").text("넘어가기");
          }
      },
      scuba_log: function(newVal, oldVal) {
          if (this.scuba_license === '' || this.scuba_level === '' || this.scuba_log === '') {
              $("#btn_next3").text("다음");
          } else {
              $("#btn_next3").text("넘어가기");
          }
      },
      free_license: function(newVal, oldVal) {
          if (this.free_license === '' || this.free_level === '') {
              $("#btn_next4").text("다음");
          } else {
              $("#btn_next4").text("넘어가기");
          }
      },
      free_level: function(newVal, oldVal) {
          if (this.free_license === '' || this.free_level === '') {
              $("#btn_next4").text("다음");
          } else {
              $("#btn_next4").text("넘어가기");
          }
      },
  },
  methods: {
      next1() {
          $(".progress-bar").css("width", "40%");
      },
      next2() {
          $(".progress-bar").css("width", "60%");
      },
      next3() {
          $(".progress-bar").css("width", "80%");
      },
      next4() {
          $(".progress-bar").css("width", "100%");
      },
      next5() {
          setTimeout(function() {
              $(".span_timer").text("2");
          },1000)
          setTimeout(function() {
              $(".span_timer").text("1");
          },2000)
          setTimeout(function() {
              $(".span_timer").text("0");
              window.location.href="/";
          },3000)
      },
      
      show_scuba_label: function() {
          document.getElementById('scuba_label').classList.remove('hide')
      },
      lookupUser: debounce(function(){
        // in practice this action should be debounced
        fetch(`https://api.github.com/search/users?q=${this.query}`)
          .then(response => {
            return response.json();
          })
          .then(data => {
            this.users = data.items;
          })
      }, 500),
      lookupUser2: debounce(function(){
        this.users = [
            {"id": "region_ko_jeju", "type": "region", "name_ko": "제주도", name_en: "Jeju island", "img_url": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/bf/d2/56/photo1jpg.jpg?w=100&h=100&s=1"},
            {"id": "region_ko_wooljin", "type": "region", "name_ko": "울진", name_en: "Wooljin", "img_url": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/01/5a/31/a0/sunrise-peak-seongsan.jpg?w=100&h=100&s=1"},
            {"id": "center_ko_jeju_bubbletank", "type": "center", "name_ko": "제주 버블탱크 스쿠버다이빙", name_en: "Bubble tank", "img_url": "/static/bubble2.jpg"},
            {"id": "point_ko_jeju_munisland", "type": "point", "name_ko": "제주도 문섬", name_en: "Mun island", "img_url": "https://api.cdn.visitjeju.net/photomng/imgpath/201907/31/07c1996d-4374-4e77-b353-300d01783718.jpg"},
        ];
      }, 500),
      addPersonalBest: function() {
            if (this.pb_sta != "") {
                var record_type = "STA"
                var record_val = this.pb_sta;
                $("#div_personal_best").append('<div class="form-check interest-check"><label class="form-check-label rounded-xl border-08 wedive-label bg-white">'+ record_type + ', '+ record_val + ((record_type=='STA') ? '분' : '미터') +'</label><i class="fas fa-clipboard font-17 color-highlight"></i></div>');
            }
            if (this.pb_dyn != "") {
                var record_type = "STA"
                var record_val = this.pb_sta;
                $("#div_personal_best").append('<div class="form-check interest-check"><label class="form-check-label rounded-xl border-08 wedive-label bg-white">'+ record_type + ', '+ record_val + ((record_type=='STA') ? '분' : '미터') +'</label><i class="fas fa-clipboard font-17 color-highlight"></i></div>');
            }
            if (this.pb_dnf != "") {
                var record_type = "DNF"
                var record_val = this.pb_dnf;
                $("#div_personal_best").append('<div class="form-check interest-check"><label class="form-check-label rounded-xl border-08 wedive-label bg-white">'+ record_type + ', '+ record_val + ((record_type=='STA') ? '분' : '미터') +'</label><i class="fas fa-clipboard font-17 color-highlight"></i></div>');
            }
            if (this.pb_cwt != "") {
                var record_type = "CWT"
                var record_val = this.pb_cwt;
                $("#div_personal_best").append('<div class="form-check interest-check"><label class="form-check-label rounded-xl border-08 wedive-label bg-white">'+ record_type + ', '+ record_val + ((record_type=='STA') ? '분' : '미터') +'</label><i class="fas fa-clipboard font-17 color-highlight"></i></div>');
            }
            if (this.pb_vwt != "") {
                var record_type = "VWT"
                var record_val = this.pb_vwt;
                $("#div_personal_best").append('<div class="form-check interest-check"><label class="form-check-label rounded-xl border-08 wedive-label bg-white">'+ record_type + ', '+ record_val + ((record_type=='STA') ? '분' : '미터') +'</label><i class="fas fa-clipboard font-17 color-highlight"></i></div>');
            }
            if (this.pb_fim != "") {
                var record_type = "FIM"
                var record_val = this.pb_fim;
                $("#div_personal_best").append('<div class="form-check interest-check"><label class="form-check-label rounded-xl border-08 wedive-label bg-white">'+ record_type + ', '+ record_val + ((record_type=='STA') ? '분' : '미터') +'</label><i class="fas fa-clipboard font-17 color-highlight"></i></div>');
            }
            if (this.pb_cnf != "") {
                var record_type = "CNF"
                var record_val = this.pb_cnf;
                $("#div_personal_best").append('<div class="form-check interest-check"><label class="form-check-label rounded-xl border-08 wedive-label bg-white">'+ record_type + ', '+ record_val + ((record_type=='STA') ? '분' : '미터') +'</label><i class="fas fa-clipboard font-17 color-highlight"></i></div>');
            }
            if (this.pb_nlt != "") {
                var record_type = "NLT"
                var record_val = this.pb_nlt;
                $("#div_personal_best").append('<div class="form-check interest-check"><label class="form-check-label rounded-xl border-08 wedive-label bg-white">'+ record_type + ', '+ record_val + ((record_type=='STA') ? '분' : '미터') +'</label><i class="fas fa-clipboard font-17 color-highlight"></i></div>');
            }

            
            const activeMenu = document.querySelectorAll('.menu-active');
            for(let i=0; i < activeMenu.length; i++){activeMenu[i].classList.remove('menu-active');}
            //for(let i=0; i < wrappers.length; i++){wrappers[i].style.transform = "translateX(-"+0+"px)"}
            
            

            /*var record_type = $('#form_pb').val();
            var record_val = $("#form_record").val();

            if (record_type == null || record_val == '') {
                var toastData = 'snackbar-inputerror';
                var notificationToast = document.getElementById(toastData);
                var notificationToast = new bootstrap.Toast(notificationToast);
                notificationToast.show();
            } else {
                $('#form_pb').val('');
                $("#form_record").val('');
                
                $("#div_personal_best").append('<div class="form-check interest-check"><label class="form-check-label rounded-xl border-08 wedive-label bg-white">'+ record_type + ', '+ record_val + ((record_type=='STA') ? '분' : '미터') +'</label><i class="fas fa-clipboard font-17 color-highlight"></i></div>');
                const activeMenu = document.querySelectorAll('.menu-active');
                for(let i=0; i < activeMenu.length; i++){activeMenu[i].classList.remove('menu-active');}
                for(let i=0; i < wrappers.length; i++){wrappers[i].style.transform = "translateX(-"+0+"px)"}
            }*/
      }
  }

  
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.border-08 {border: 1px solid rgba(0, 0, 0, 0.08) !important;}
.border-bottom {border-bottom: 1px solid rgba(0, 0, 0, 0.08) !important;}
.input-style.has-borders.input-style-always-active label {background-color: transparent !important;}
select:invalid {color: #6c757d;}
select {background: white; background-color: white;}
.wediev-label {font-size: 12px;transition: all 250ms ease;position:absolute;left:14px;z-index:99;margin-top: -16px;}
.wedive-deep:before {content: '▼ 첫 수심 18m';position: absolute;margin-top: -20px;margin-left: 16%;color:#b4bcc8;}
.font-exo2 {font-family: 'Exo 2', sans-serif;}
.font-noto {font-family: 'Noto Sans Korean';}
.input-big {font-size:22px !important;}
.input-big::placeholder {font-size:22px !important;}
.input-big2 {font-size:18px !important;}
.input-big2::placeholder {font-size:18px !important;}
.input-big3 {font-size:14px !important;}
.input-big3::placeholder {font-size:14px !important;}
.btn[disabled] {pointer-events: none !important;background-image: linear-gradient(to bottom, #ccc, #ccc) !important;}
.bg-e7e7e7 {background-color: transparent !important;}
</style>
