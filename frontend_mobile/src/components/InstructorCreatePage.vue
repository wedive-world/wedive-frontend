<template>
  <div class="">

    <div class="header header-fixed header-logo-center">
        <a href="" class="header-title color ellipsis">강사 등록</a>
        <a v-on:click="historyBack()" data-back-button class="font-16 header-icon header-icon-1"><i class="fas fa-chevron-left"></i></a>
        <a href="#" data-menu="menu-main" class="font-16 header-icon header-icon-4"><i class="fas fa-bars"></i></a>
    </div>
    
    

    <div class="page-content pb-0" style="margin-top: 50px;"> 
        <div class="progress" style="height:6px;">
            <div class="progress-bar border-0 bg-highlight text-start ps-2" 
                    role="progressbar" :style="'width: '+progressBar+'%'" 
                    aria-valuenow="0" :aria-valuemin="progressBar" 
                    aria-valuemax="100">
            </div>
        </div>
        <swiper
            ref="contentSwiper"
            class="wedive-content-swiper"
            :options="swiperOptions"
            @slideChange="onSlideChange"
        >
        <swiper-slide
            :key="0"
            :virtualIndex="0">
                    <div id="slide0" class="card card-full pb-0 mb-0 border-bottom" style="height: calc( 100vh - 56px );">
                        <div class="content mt-0 text-center font-noto">
                            <img src="/static/images/assets/trainer.png" class="mt-5" width="176px"/>
                            <p class="font-18 font-500 mt-3 mb-0">위다이브 강사에 함께해요.</p>
                            <!--<p class="color-gray font-14 mb-0">다이빙 입문자를 만나는 가장빠른 방법입니다.</p>-->

                            <div class="bg-fade-yellow-light me-4 ms-4 mt-1 rounded-s color-black" style="">증명 사진, 라이센스, 자기소개, 교육상품 필요</div>
                        </div>
                        <div>
                            
                        </div>


                        <div class="p-2 pb-3 content mt-5 mb-2 font-noto">
                            <div class="accordion" id="accordion-2">
                                <div class="card card-style shadow-0 m-0 mb-1" style="border-radius: 8px;">
                                    <button class="btn accordion-btn color-black no-effect" style="padding: 6px 2px 6px 2px;">
                                        <div class="form-check icon-check">
                                            <input class="form-check-input" type="checkbox" value="" id="check_agree" v-model="check_agree">
                                            <label class="form-check-label font-noto font-15" for="check_agree">개인정보 취급방침 동의</label>
                                            <i class="icon-check-1 far fa-square color-gray-dark font-18" style="transform: none !important;"></i>
                                            <i class="icon-check-2 far fa-check-square font-18 color-highlight" style="transform: none !important;"></i>
                                        </div>
                                    </button>

                                    <div class="bg-theme">
                                        <div class="" style="max-height: calc(100vh - 552px);overflow-y: auto;border-radius: 10px;">
                                            <p class="agreement_content pe-3 ps-3 color-gray" style="background: #fafbfc;">
                                                &lt;개인정보 수집 동의&gt;<br><br>
                                                1. 기본수집항목: [필수] 위다이브 아이디, 이름, (휴대)전화번호, 이메일 주소, 사진, 다이빙 라이센스, 강사 경력<br>※ 추가 수집하는 필수항목<br>- 배송, 방문 등이 필요한 상품 구매 시 : 주소<br>- 해외 여행 관련 상품 구매 시 : 여권상 영문명, 여권번호 끝 4자리, 성별, 생년월일, 이메일주소, Google ID, 동행 아동정보(여권상 영문명, 생년월일, 신장)<br>- 병원을 이용하는 경우: 생년월일 (병원 재진 시 이전 진료기록 조회를 위해 예약자명, 생년월일, 전화번호가 수집될 수 있습니다.)<br><br>
                                                2. 수집 및 이용목적 : 강사회원과 강의이용자의 원활한 거래 진행, 고객상담, 불만처리 등 민원 처리, 분쟁조정 해결을 위한 기록보존, 위다이브 예약 이용 후 리뷰작성에 따른 위다이브 리워드 지급 및 관련 안내<br><br>
                                                3. 보관기간<br>
                                                - 회원탈퇴 시 지체없이 파기<br>
                                                - 단, 관련 법령에&nbsp;의하여&nbsp;일정&nbsp;기간&nbsp;보관이&nbsp;필요한&nbsp;경우에는&nbsp;해당&nbsp;기간&nbsp;동안&nbsp;보관함<br><br>
                                                4. 동의 거부권 등에 대한 고지: 정보주체는 개인정보의 수집 및 이용 동의를 거부할 권리가 있으나, 이 경우 상품 및 서비스 예약이 제한될 수 있습니다.&nbsp;그 밖의 내용은 위다이브 개인정보 처리방침을 따릅니다.<br>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div style="position: absolute;bottom: 0;width:100%;">
                            <a v-on:click="$refs.contentSwiper.$swiper.slideNext();progressBar += 16.67;" id="btn_next0" href="#" class="btn btn-full font-400 rounded-s shadow-l gradient-highlight color-white bd-w-0 ms-3 me-3 mb-3" style="height: 46px;padding-top: 10px;" disabled="disabled">다음</a>
                        </div>
                    </div>
        </swiper-slide>
        <swiper-slide
            :key="1"
            :virtualIndex="1">
                    <div id="slide1" class="card card-full pb-0 mb-0 border-bottom" style="height: calc( 100vh - 56px );">
                        <div class="content mt-0">
                            <div class="me-3 ms-3 mt-4 font-noto" style="position: relative;">
                                <span class="font-18 font-500">강사 연락처</span>
                                <p class="font-12 color-gray" style="line-height: 1.5;">강습생이 연락할 수 있도록<br/>연락처 정보를 기입해주세요.</p>
                                <img src="/static/images/assets/gif_hello.gif" height="100" style="position: absolute;top:0;right:0;"/>
                            </div>
                            <div class="me-2 ms-2 mt-5 rounded-s" style="background:#efefef;">
                                <div class="p-3 pb-1 rounded-s">
                                    <div class="input-style input-style-always-active no-borders no-icon">
                                        <input id="ins_name" v-model="ins_name" @focus="focusInput($event)" class="form-control font-noto font-18 font-500" placeholder="이름을 입력하세요." style="background: transparent;border-bottom-width: 0;">
                                        <label class="color-gray font-600 font-10" style="background: transparent;">이름</label>
                                    </div>
                                </div>
                                <div class="p-3 pb-1 rounded-s">
                                    <div class="input-style input-style-always-active no-borders no-icon">
                                        <input id="ins_phone" v-model="ins_phone" @focus="focusInput($event)" type="tel" class="form-control font-noto font-18 font-500" placeholder="핸드폰 번호를 입력하세요." style="background: transparent;border-bottom-width: 0;">
                                        <label class="color-gray font-600 font-10" style="background: transparent;">전화번호</label>
                                    </div>
                                </div>
                                <div class="p-3 pb-1 rounded-s">
                                    <div class="input-style input-style-always-active no-borders no-icon">
                                        <input v-model="ins_email" @focus="focusInput($event)" type="email" class="form-control font-noto font-18 font-500" placeholder="이메일을 입력하세요." style="background: transparent;border-bottom-width: 0;">
                                        <label class="color-gray font-600 font-10" style="background: transparent;">이메일</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style="position: absolute;bottom: 0;width:100%;">
                            <a v-on:click="$refs.contentSwiper.$swiper.slideNext();progressBar += 16.67;go_next(1);" id="btn_next1" href="#" class="btn btn-full font-400 rounded-s shadow-l gradient-highlight color-white bd-w-0 ms-3 me-3 mb-3" style="height: 46px;padding-top: 10px;" disabled="disabled">다음</a>
                        </div>
                    </div>
        </swiper-slide>
        <swiper-slide
            :key="2"
            :virtualIndex="2">
                    <div id="slide2" class="card card-full pb-0 mb-0 border-bottom" style="height: calc( 100vh - 56px );">
                        <div class="content mt-1">
                            <div class="me-3 ms-3 mt-4 font-noto" style="position: relative;">
                                <span class="font-18 font-500">강사 라이센스</span>
                                <p class="font-12 color-gray" style="line-height: 1.5;">강사님의 라이센스 정보를 입력해주세요.<br/>&nbsp;</p>
                                <img src="/static/images/assets/license.png" height="100" style="position: absolute;top:0;right:0;"/>
                            </div>

                            <div class="me-2 ms-2 mt-5 rounded-s" style="background:#efefef;">
                                <div style="margin-left: -9px !important;">
                                    <div class="custom-control ios-switch ios-switch-icon wedive-switch">
                                        <input v-on:click="toggleLicense()" type="checkbox" class="ios-input" id="toggle-license">
                                        <label class="custom-control-label" for="toggle-license"></label>
                                        <span :class="'ps-3 font-16' + (licenseFlag ? ' opacity-30' : '')" style="padding-top:12px;">스쿠바 라이센스</span>
                                        <span :class="'font-16' + (licenseFlag ? '' : ' opacity-30')" style="padding-top:12px;">프리 라이센스</span>
                                    </div>
                                </div>
                                <div class="p-3 pb-1" style="margin-top: -7px;">
                                    <div v-if="licenseFlag == false" class="input-style input-style-always-active no-borders has-icon">
                                        <i class="fas fa-address-card color-gray" style="margin-left:6px;"></i>
                                        <label for="select_license" class="color-gray font-600 font-10" style="background: transparent;">라이센스</label>
                                        <select id="select_license" @focus="focusInput($event)" required class="font-noto" v-model="scuba_license" style="background: transparent;border-bottom-width: 0;">
                                            <option value="" selected disabled>스쿠바 라이센스</option>
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
                                        </select>
                                        <span class="mt-n1 me-2"><i class="fa fa-chevron-down"></i></span>
                                        <em></em>
                                    </div>
                                    <div v-else class="input-style input-style-always-active no-borders has-icon">
                                        <i class="fas fa-address-card color-gray" style="margin-left:6px;"></i>
                                        <label for="select_license2" class="color-gray font-600 font-10" style="background: transparent;">라이센스</label>
                                        <select id="select_license2" @focus="focusInput($event)" required class="font-noto" v-model="free_license" style="background: transparent;border-bottom-width: 0;">
                                            <option value="" selected disabled>프리 라이센스</option>
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
                                        </select>
                                        <span class="mt-n1 me-2"><i class="fa fa-chevron-down"></i></span>
                                        <em></em>
                                    </div>
                                </div>
                                <div class="p-3 pb-3 pt-1">
                                    <label class="color-gray font-600 font-10 mt-n2" style="background: transparent;">라이센스 이미지</label>
                                    <div id="file-upload1-back" style="background:url(/static/images/assets/license_icon_20.png);position: relative;background-size:cover;border-radius: 8px;">
                                        <input @focus="focusInput($event)" type="file" @change="imageLicenseChange" id="file-upload1" class="upload-file text-center" accept=".jpg, .png" style="height: 160px;">
                                        <p class="upload-file-text" style="color: #abb7ba;position:absolute;left:40px;top:76px;">
                                        </p></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        
                        <div class="row me-0 ms-0 mb-0" style="position: absolute;bottom: 0;width:100%;padding-left:20px;padding-right:20px;">
                            <a v-on:click="$refs.contentSwiper.$swiper.slidePrev();progressBar -= 16.67;" class="col-6 btn btn-full font-400 rounded-s shadow-l gradient-highlight color-white bd-w-0 mb-3" style="height: 46px;padding-top: 10px;margin-left:-4px;margin-right:4px;">이전</a>
                            <a v-on:click="$refs.contentSwiper.$swiper.slideNext();progressBar += 16.67;go_next(2);" id="btn_next2" href="#" class="col-6 btn btn-full font-400 rounded-s shadow-l gradient-highlight color-white bd-w-0 mb-3 gonext" style="height: 46px;padding-top: 10px;margin-right:-4px;margin-left:4px;" disabled="disabled">다음</a>
                        </div>
                    </div>
        </swiper-slide>
        <swiper-slide
            :key="3"
            :virtualIndex="3">
                <div id="slide3" class="card card-full pb-0 mb-0 border-bottom" style="height: calc( 100vh - 56px );">
                        <div class="content mt-1">
                            <div class="me-3 ms-3 mt-4 font-noto" style="position: relative;">
                                <span class="font-18 font-500">강사 정보</span>
                                <p class="font-12 color-gray" style="line-height: 1.5;">위다이브가 사진을 변경해드려요.<br/>경력은 최대 4개 입력 가능합니다.</p>
                                <img src="/static/images/assets/instructor_img.gif" height="100" style="position: absolute;top:0;right:0;border-radius:8px;"/>
                            </div>
                            <div class="me-2 ms-2 mt-5 rounded-s" style="background:#efefef;">
                                <div class="p-3 pb-2 pt-1">
                                    <label class="color-gray font-600 font-10 mt-n2" style="background: transparent;">증명사진</label>
                                    <div id="file-upload2-back" style="background:url(/static/images/assets/photo_icon.png);position: relative;background-size: contain !important;background-repeat: no-repeat !important;border-radius: 8px;">
                                        <input @focus="focusInput($event)" type="file" @change="imagePhotoChange" id="file-upload2" class="upload-file text-center" accept=".jpg, .png" style="height: 90px;">
                                        <p class="upload-file-text" style="color: #abb7ba;position:absolute;left:40px;top:76px;">
                                        </p></input>
                                    </div>
                                </div>
                                <div class="p-3 pb-1 rounded-s">
                                    <div class="input-style input-style-always-active no-borders no-icon">
                                        <input v-model="ins_career1" @focus="focusInput($event)" class="form-control font-noto font-18 font-500" placeholder="경력1 (최신순)을 입력하세요." style="background: transparent;border-bottom-width: 0;">
                                        <label class="color-gray font-600 font-10" style="background: transparent;">경력1</label>
                                    </div>
                                </div>
                                <div class="p-3 pb-1 rounded-s">
                                    <div class="input-style input-style-always-active no-borders no-icon">
                                        <input v-model="ins_career2" @focus="focusInput($event)" class="form-control font-noto font-18 font-500" placeholder="경력2 (최신순)을 입력하세요." style="background: transparent;border-bottom-width: 0;">
                                        <label class="color-gray font-600 font-10" style="background: transparent;">경력2</label>
                                    </div>
                                </div>
                                <div class="p-3 pb-1 rounded-s">
                                    <div class="input-style input-style-always-active no-borders no-icon">
                                        <input v-model="ins_career3" @focus="focusInput($event)" class="form-control font-noto font-18 font-500" placeholder="경력3 (최신순)을 입력하세요." style="background: transparent;border-bottom-width: 0;">
                                        <label class="color-gray font-600 font-10" style="background: transparent;">경력3</label>
                                    </div>
                                </div>
                                <div class="p-3 pb-1 rounded-s">
                                    <div class="input-style input-style-always-active no-borders no-icon">
                                        <input v-model="ins_career4" @focus="focusInput($event)" class="form-control font-noto font-18 font-500" placeholder="경력4 (최신순)을 입력하세요." style="background: transparent;border-bottom-width: 0;">
                                        <label class="color-gray font-600 font-10" style="background: transparent;">경력4</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row me-0 ms-0 mb-0" style="position: absolute;bottom: 0;width:100%;padding-left:20px;padding-right:20px;">
                            <a v-on:click="$refs.contentSwiper.$swiper.slidePrev();progressBar -= 16.67;" class="col-6 btn btn-full font-400 rounded-s shadow-l gradient-highlight color-white bd-w-0 mb-3" style="height: 46px;padding-top: 10px;margin-left:-4px;margin-right:4px;">이전</a>
                            <a v-on:click="$refs.contentSwiper.$swiper.slideNext();progressBar += 16.67;go_next(3);" id="btn_next3" href="#" class="col-6 btn btn-full font-400 rounded-s shadow-l gradient-highlight color-white bd-w-0 mb-3 gonext" style="height: 46px;padding-top: 10px;margin-right:-4px;margin-left:4px;" disabled="disabled">다음</a>
                        </div>
                    </div>
        </swiper-slide>
        <swiper-slide
            :key="4"
            :virtualIndex="4">
                <div id="slide4" class="card card-full pb-0 mb-0 border-bottom" style="min-height: calc( 100vh - 56px );">
                        <div class="content mt-1">
                            <div class="me-3 ms-3 mt-4 font-noto" style="position: relative;">
                                <span class="font-18 font-500">강사 소개</span>
                                <p class="font-12 color-gray" style="line-height: 1.5;">강습생을 위해 소개를 해주세요.<br/>강습장소를 선택해주세요.</p>
                                <img src="/static/images/assets/location-pin.png" height="100" style="position: absolute;top:0;right:0;border-radius:8px;"/>
                            </div>
                            <div class="me-2 ms-2 mt-5 rounded-s" style="background:#efefef;">
                                <div class="p-3 pb-1 rounded-s">
                                    <div class="input-style input-style-always-active no-borders no-icon">
                                        <textarea id="ins_introduce" v-model="ins_introduce" @focus="focusInput($event)" class="form-control font-noto font-18 font-500" placeholder="소개 내용을 글자로 입력해주세요." style="background: transparent;border-bottom-width: 0;"></textarea>
                                        <label class="color-gray font-600 font-10" style="background: transparent;">자기소개</label>
                                    </div>
                                </div>
                                <div class="p-3 pt-1 pb-3 rounded-s">
                                    <label class="color-gray font-600 font-10" style="background: transparent;">강습장소</label>
                                    <vue-typeahead-bootstrap
                                        id="search_typeahead"
                                        class="font-18"
                                        v-model="query"
                                        :data="locations"
                                        :serializer="item => item.name"
                                        :screen-reader-text-serializer="item => `${item.name}`"
                                        highlightClass="special-highlight-class"
                                        @hit="clickLocation($event);"
                                        :minMatchingChars="1"
                                        placeholder="사이트, 센터, 수영장"
                                        inputClass="empty-typehead special-input-class"
                                        @input="lookupLocation()"
                                        >
                                        <template slot="suggestion" slot-scope="{ data, htmlText }">
                                            <div class="d-flex align-items-center" style="position:relative !important;">
                                                <div :class="'justify-content-center mb-0 text-start ' + data.__typename" style="padding-top: 2px;">
                                                    <i class="fas fa-search font-16 pe-2 color-gray"></i>
                                                    <span class="map_box_cate">{{ ((data.__typename=='DiveSite')? '사이트' : (data.__typename=='DivePoint')? '포인트' : '센터') }}</span><span class="font-18 pb-0 font-600 ellipsis"> {{data.name}} </span>
                                                    
                                                </div>
                                            </div>
                                        </template>
                                    </vue-typeahead-bootstrap>
                                    <div class="m-2 pb-4">
                                        <div v-for="location in locationSelectedList" class=" border-bottom pt-2 pb-2">
                                            <div class="d-flex align-items-center" style="position:relative !important;">
                                                <span class="ml-4" style="">
                                                    <p class="font-noto font-16 mb-0">{{ location.name }}</p>
                                                </span>
                                                <i v-on:click="removeLocationSelected(location)" class="wedive_icoset wedive_icoset_close" style="position: absolute;right:0px;margin:8px;"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row me-0 ms-0 mb-0" style="position: absolute;bottom: 0;width:100%;padding-left:20px;padding-right:20px;">
                            <a v-on:click="$refs.contentSwiper.$swiper.slidePrev();progressBar -= 16.67;" class="col-6 btn btn-full font-400 rounded-s shadow-l gradient-highlight color-white bd-w-0 mb-3" style="height: 46px;padding-top: 10px;margin-left:-4px;margin-right:4px;">이전</a>
                            <a v-on:click="$refs.contentSwiper.$swiper.slideNext();progressBar += 16.67;go_next(4);" id="btn_next4" href="#" class="col-6 btn btn-full font-400 rounded-s shadow-l gradient-highlight color-white bd-w-0 mb-3 gonext" style="height: 46px;padding-top: 10px;margin-right:-4px;margin-left:4px;" disabled="disabled">다음</a>
                        </div>
                    </div>
        </swiper-slide>
        <swiper-slide
            :key="5"
            :virtualIndex="5">
                <div id="slide5" class="card card-full pb-0 mb-0 border-bottom" style="min-height: calc( 100vh - 56px );">
                        <div class="content mt-1">
                            <div class="me-3 ms-3 mt-4 font-noto" style="position: relative;">
                                <span class="font-18 font-500">판매 교육 상품</span>
                                <p class="font-12 color-gray" style="line-height: 1.5;">진행하는 교육상품을 추가하세요.<br/>예) Advance코스, 300,000원.</p>
                                <img src="/static/images/assets/product.png" height="100" style="position: absolute;top:0;right:0;border-radius:8px;"/>
                            </div>
                            <div class="me-2 ms-2 mt-5 rounded-s" style="background:#efefef;">
                                <!--<draggable :list="education_list" group="backgroundItems" @start="drag=true" @end="drag=false">
                                    <div v-for="(item, index) in education_list" style="cursor: move" :key="index" class="p-3 pb-1 rounded-s">-->
                                    <div v-for="(item, index) in education_list" :class="'p-3 pb-1 rounded-s' + (index==0 ? '' : ' pt-1')">
                                        <div class="input-style input-style-always-active no-borders no-icon">
                                            <i v-on:click="removeEducation(index)" class="wedive_icoset wedive_icoset_close" style="position: absolute;right:0px;margin:8px;"></i>
                                            <span style="margin: 0;position: relative;font-size: 12px;opacity: 0.6;">[교육과정 {{ (index+1) }}] 과정명</span>
                                            <input :id="'product_'+index" v-model="item.product" @focus="focusInput($event)" class="form-control font-noto font-18 font-500" placeholder="교육과정" style="background: transparent;border-bottom-width: 0px;">
                                            <span style="margin: 0;position: relative;font-size: 12px;opacity: 0.6;">[교육과정 {{ (index+1) }}] 가격</span>
                                            <input :id="'price_'+index" v-model="item.price" @focus="focusInput($event)" type="number" class="form-control font-noto font-18 font-500" placeholder="가격" style="background: transparent;border: none !important;">
                                            <!--<label :for="'product_'+index" class="color-gray font-600 font-10" style="background: transparent;">교육과정 {{ (index+1) }}</label>-->
                                        </div>
                                    </div>
                                <!--</draggable>-->
                            </div>
                            <div class="text-center mt-2 opacity-50 font-noto" v-on:click="addEducation()"><i class="fas fa-plus me-2"></i> 교육과정 추가</div>
                        </div>
                        <div class="row me-0 ms-0 mb-0" style="position: absolute;bottom: 0;width:100%;padding-left:20px;padding-right:20px;">
                            <a v-on:click="$refs.contentSwiper.$swiper.slidePrev();progressBar -= 16.67;" class="col-6 btn btn-full font-400 rounded-s shadow-l gradient-highlight color-white bd-w-0 mb-3" style="height: 46px;padding-top: 10px;margin-left:-4px;margin-right:4px;">이전</a>
                            <a v-on:click="$refs.contentSwiper.$swiper.slideNext();progressBar += 16.67;completed();" id="btn_next4" href="#" class="col-6 btn btn-full font-400 rounded-s shadow-l gradient-highlight color-white bd-w-0 mb-3 gonext" style="height: 46px;padding-top: 10px;margin-right:-4px;margin-left:4px;">다음</a>
                        </div>
                    </div>
        </swiper-slide>
        <swiper-slide
            :key="6"
            :virtualIndex="6">
                <div id="slide6" class="card card-full pb-0 mb-0 border-bottom" style="min-height: calc( 100vh - 56px );">
                        <div class="content mt-1 mt-5">
                            <p><label class="wediev-label pb-1 color-highlight ms-2">나를 어필해보세요. (선택 시 추천 홍보)</label></p>
                            <div v-for="(inter,index) in interests" class="form-check interest-check">
                                <input v-on:click="inter=!inter;" class="form-check-input" type="checkbox" value="" :id="'check'+index">
                                <label class="form-check-label rounded-xl border-08" :for="'check'+index">{{ interest_desc[index] }}</label>
                                <i class="fa fa-quote-left color-white font-17"></i>
                                <i class="fa fa-quote-left font-17 color-highlight"></i>
                            </div>
                        </div>
                        <div class="row me-0 ms-0 mb-0" style="position: absolute;bottom: 0;width:100%;padding-left:20px;padding-right:20px;">
                            <a v-on:click="$refs.contentSwiper.$swiper.slidePrev();progressBar -= 16.67;" class="col-6 btn btn-full font-400 rounded-s shadow-l gradient-highlight color-white bd-w-0 mb-3" style="height: 46px;padding-top: 10px;margin-left:-4px;margin-right:4px;">이전</a>
                            <a v-on:click="$refs.contentSwiper.$swiper.slideNext();progressBar += 16.67;completed();" id="btn_next4" href="#" class="col-6 btn btn-full font-400 rounded-s shadow-l gradient-highlight color-white bd-w-0 mb-3 gonext" style="height: 46px;padding-top: 10px;margin-right:-4px;margin-left:4px;">완료</a>
                        </div>
                </div>
        </swiper-slide>
        <swiper-slide
            :key="7"
            :virtualIndex="7">
                <div id="slide7" class="card card-full pb-0 mb-0 border-bottom" style="min-height: calc( 100vh - 56px );">
                        <div class="content mt-1 text-center mt-5">
                            <img class="mt-5" src="/static/images/assets/completed.gif" width="35%" />
                            <p class="font-noto font-18 mb-1 mt-3">접수가 완료되었습니다.</p>
                            <p class="font-noto font-14 mb-0 color-gray">위다이브 메니저가 이미지 수정 후 등록이 완료됩니다.</p>
                        </div>
                        <div class="row me-0 ms-0 mb-0" style="position: absolute;bottom: 0;width:100%;padding-left:20px;padding-right:20px;">
                            <a v-on:click="finished();" id="btn_next6" href="#" class="col-12 btn btn-full font-400 rounded-s shadow-l gradient-highlight color-white bd-w-0 mb-3" style="height: 46px;padding-top: 10px;margin-right:-4px;margin-left:4px;">확인</a>
                        </div>
                </div>
        </swiper-slide>
        </swiper>






        
    </div>
    <!-- Page content ends here-->
    
    
    <div id="snackbar-inputerror" class="snackbar-toast color-white bg-red-dark" data-bs-delay="3000" data-bs-autohide="true"><i class="fa fa-times me-3"></i>모든 항목을 입력해주세요.</div>
    <div id="snackbar-locationerror" class="snackbar-toast color-white bg-red-dark" data-bs-delay="3000" data-bs-autohide="true"><i class="fa fa-times me-3"></i>최대 10개의 장소를 등록할 수 있어요.</div>


  </div>
</template>
<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import gql from 'graphql-tag'
//import { GraphQLClient, request, gql } from "graphql-request";
import draggable from 'vuedraggable'

const axios = require("axios")
export default {
  name: 'HelloWorld',
  mounted() {
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
        $("#form1").focus();
    }, 1000);
    
    if (this.$route.query.header && this.$route.query.header == 'hide') {
      $(".header-fixed").hide();
    }
    
  },
  components: {
    Swiper,
    SwiperSlide,
    draggable,
  },
  created() {
    const insname = this.ins_name;
    setTimeout(function() {
        init_template();
        var preloader = document.getElementById('preloader')
        if(preloader){preloader.classList.add('preloader-hide');}
        if (insname == '') {
            document.getElementById("ins_name").parentNode.parentNode.classList.add("focusBorder");
        } else {
            document.getElementById("ins_phone").parentNode.parentNode.classList.add("focusBorder");
        }
    }, 500);
  },
  data () {
    return {
        check_agree: false,
        ins_id: '',
        ins_name: (localStorage.userName ? localStorage.userName : ''),
        ins_phone: '',
        ins_email: (localStorage.userEmail ? localStorage.userEmail : ''),
        ins_career1: '',
        ins_career2: '',
        ins_career3: '',
        ins_career4: '',
        ins_introduce: '',
        licenseFlag: false,
        locations: [],
        query: '',

        scuba_license: '',
        scuba_level: '',
        scuba_log: '',
        free_license: '',
        free_level: '',
        file_license: null,
        file_photo: null,
        
        
        swiperOptions: {
            allowTouchMove: false,
        },
        suggestions : (localStorage.suggestion ? JSON.parse(localStorage.suggestion) : []),
        locationSelectedList: [],
        progressBar: 0,
        education_list: [{product: null, price: null}],
        interests: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
        interest_desc: ['사진 무료촬영 (전문장비)', '사진 무료촬영 (핸드폰)', '전업강사', '대회우승', '강사 트레이너', '마스터강사', '재수강 무료 (1회)', '재수강 무료 (2회)', '재수강 무료 (3회)', 'PADI 5star', '응급처치강사', '응급구조강사', '수상구조사', '대학교 출강', 'TV출연', '자체풀(수영장)보유', '정기 해외투어 운영', '요가강습 할인', '스키강습 할인'],
        interest_ids: ['62677aeafaacac65f8bde640','62677af4faacac65f8bde643','62677afdfaacac65f8bde646','62677b04faacac65f8bde649','62677b0bfaacac65f8bde64c','62677b16faacac65f8bde64f','62677b20faacac65f8bde652','62677b24faacac65f8bde655','62677b28faacac65f8bde658','62677b35faacac65f8bde65b','62677b44faacac65f8bde65e','62677b49faacac65f8bde661','62677b51faacac65f8bde664','62677b59faacac65f8bde667','62677b65faacac65f8bde66c','62677b6ffaacac65f8bde66f','62677b7cfaacac65f8bde672','62677b85faacac65f8bde675','62677b89faacac65f8bde678'],
    }
  }, 
  watch: {
      check_agree: function(newVal, oldVal) {
          if (this.check_agree != false) {
              $("#btn_next0").attr("disabled", false);
          } else {
              $("#btn_next0").attr("disabled", true);
          }
      },
      ins_name: function(newVal, oldVal) {
          if (this.ins_name != '' && this.ins_phone != '' && this.ins_email != '') {
              $("#btn_next1").attr("disabled", false);
          } else {
              $("#btn_next1").attr("disabled", true);
          }
      },
      ins_phone: function(newVal, oldVal) {
          if (this.ins_name != '' && this.ins_phone != '' && this.ins_email != '') {
              $("#btn_next1").attr("disabled", false);
          } else {
              $("#btn_next1").attr("disabled", true);
          }
      },
      ins_email: function(newVal, oldVal) {
          if (this.ins_name != '' && this.ins_phone != '' && this.ins_email != '') {
              $("#btn_next1").attr("disabled", false);
          } else {
              $("#btn_next1").attr("disabled", true);
          }
      },
      scuba_license: function(newVal, oldVal) {
          if ((this.scuba_license != '' || this.free_license != '') && this.file_license != null) {
              $("#btn_next2").attr("disabled", false);
          } else {
              $("#btn_next2").attr("disabled", true);
          }
      },
      free_license: function(newVal, oldVal) {
          if ((this.scuba_license != '' || this.free_license != '') && this.file_license != null) {
              $("#btn_next2").attr("disabled", false);
          } else {
              $("#btn_next2").attr("disabled", true);
          }
      },
      file_license: function(newVal, oldVal) {
          if ((this.scuba_license != '' || this.free_license != '') && this.file_license != null) {
              $("#btn_next2").attr("disabled", false);
          } else {
              $("#btn_next2").attr("disabled", true);
          }
      },
      file_photo: function(newVal, oldVal) {
          if (this.file_photo != null) {
              $("#btn_next3").attr("disabled", false);
          } else {
              $("#btn_next3").attr("disabled", true);
          }
      },
      ins_introduce: function(newVal, oldVal) {
          if (this.ins_introduce != '' && this.locationSelectedList.length > 0) {
              $("#btn_next4").attr("disabled", false);
          } else {
              $("#btn_next4").attr("disabled", true);
          }
      },
      locationSelectedList: function(newVal, oldVal) {
          if (this.ins_introduce != '' && this.locationSelectedList.length > 0) {
              $("#btn_next4").attr("disabled", false);
          } else {
              $("#btn_next4").attr("disabled", true);
          }
      },
      


      nickname: function(newVal, oldVal) {
          if (newVal === '') {
              $("#btn_next1").attr("disabled", true);
          } else {
              $("#btn_next1").attr("disabled", false);
          }
      },
  },
  methods: {
      async completed() {
          
          //this.scuba_license
          // careers
          var careers = [];
          if (this.ins_career1 != '') careers.push(this.ins_career1);
          if (this.ins_career2 != '') careers.push(this.ins_career2);
          if (this.ins_career3 != '') careers.push(this.ins_career3);
          if (this.ins_career4 != '') careers.push(this.ins_career4);

          // center
          var diveCetner = null;
          var centers = this.locationSelectedList.filter(x=>x.type == 'center');
          if (centers.length > 0) {
              diveCetner = new Array();
              centers.forEach(x=>diveCetner.push(x._id));
          }

          // site
          var diveSite = null;
          var sites = this.locationSelectedList.filter(x=>x.type == 'site');
          if (sites.length > 0) {
              diveSite = new Array();
              sites.forEach(x=>diveSite.push(x._id));
          }

          // point
          var divePoint = null;
          var points = this.locationSelectedList.filter(x=>x.type == 'point');
          if (points.length > 0) {
              divePoint = new Array();
              points.forEach(x=>divePoint.push(x._id));
          }


          // profileImages
          var profile_img = await this.$apollo.mutate({
                // Query
                mutation: gql`
                    mutation UploadImageMutation($file: Upload!) {
                        uploadImage(file: $file) {
                            _id
                            name
                            mimeType
                            encoding
                            thumbnailUrl
                            createdAt
                            updatedAt
                        }
                    }
                `,
                // Parameters
                variables: {
                    file: this.file_photo
                },
            });


            var profile_upload = await this.$apollo.mutate({
                // Query
                mutation: gql`
                    mutation Mutation($input: UpdateImageInput!) {
                        updateImage(input: $input) {
                            _id
                            name
                            description
                            reference
                            uploaderId
                            mimeType
                            encoding
                            fileSize
                            thumbnailUrl
                        }
                    }
                `,
                // Parameters
                variables: {
                    input: {
                        _id: profile_img.uploadImage._id,
                        name: profile_img.name,
                        description: "instructorProfileImage",
                        reference: null
                    }
                },
          });



          // licenseImage
          var license_img = await this.$apollo.mutate({
                // Query
                mutation: gql`
                    mutation UploadImageMutation($file: Upload!) {
                        uploadImage(file: $file) {
                            _id
                            name
                            mimeType
                            encoding
                            thumbnailUrl
                            createdAt
                            updatedAt
                        }
                    }
                `,
                // Parameters
                variables: {
                    file: this.file_license
                },
            });


            var license_upload = await this.$apollo.mutate({
                // Query
                mutation: gql`
                    mutation Mutation($input: UpdateImageInput!) {
                        updateImage(input: $input) {
                            _id
                            name
                            description
                            reference
                            uploaderId
                            mimeType
                            encoding
                            fileSize
                            thumbnailUrl
                        }
                    }
                `,
                // Parameters
                variables: {
                    input: {
                        _id: license_img.uploadImage._id,
                        name: license_img.name,
                        description: "instructorProfileImage",
                        reference: null
                    }
                },
          });

          var education_id_list = new Array();
          for (var i=0; i<education_list.length; i++) {
              var item = education_list[i];

              var education = await this.$apollo.mutate({
                // Query
                mutation: gql`
                    mutation UpsertProduct($input: ProductInput) {
                        upsertProduct(input: $input) {
                            _id
                        }
                    }
                `,
                // Parameters
                variables: {
                    input : {
                        name: item.name,
                        uniqueName: 'edu_' + this.ins_phone + '_' + (i+1),
                        price: item.price,
                    }
                },
            });
            education_id_list.push(education.data.upsertProduct._id);
          }
          console.log(education_list);
          console.log(education_id_list);
          
          var inter_ids = new Array();
          for (var i=0; i<this.interests.length; i++) {
              if (this.interests[i] == true) {
                  inter_ids.push(this.interest_ids[i]);
              }
          }
          //var _input = {instructorType: (this.licenseFlag == false ? "scubaDiving" : "freeDiving"), name: this.ins_name, phoneNumber: this.ins_phone, email: this.ins_email, introduction: ins_introduce._value, careers: careers, diveSite: diveSite, divePoint: divePoint, diveCetner: diveCetner, profileImages: profile_img.uploadImage._id, licenseImages: license_img.uploadImage._id, educations: education_id_list, interests: inter_ids};
          var _input = {instructorType: (this.licenseFlag == false ? "scubaDiving" : "freeDiving"), name: this.ins_name, phoneNumber: this.ins_phone, email: this.ins_email, introduction: ins_introduce._value, careers: careers, diveSite: diveSite, divePoint: divePoint, diveCetner: diveCetner, profileImages: "a1", licenseImages: "a2", interests: inter_ids};
          
          const ipt = _input;
          console.log(_input)

            /*var result = await this.$apollo.mutate({
                // Query
                mutation: gql`
                    mutation UpsertInstructor($input: InstructorInput) {
                        upsertInstructor(input: $input) {
                            _id
                        }
                    }
                `,
                // Parameters
                variables: {
                    input: ipt
                },
            });*/
            

            //console.log(result.data.upsertInstructor)
            //this.ins_id = result.data.upsertInstructor._id;
      },
      finished() {
          location.href='/instructor/' + this.ins_id;
      },
      removeEducation(index) {
          this.education_list.splice(index,1);
      },
      addEducation() {
          this.education_list.push({product: '', price: ''});
      },
      clickLocation(ev) {
          //console.log(ev);
          if (this.locationSelectedList.length >= 10) {
            var toastData = 'snackbar-locationerror';
            var notificationToast = document.getElementById(toastData);
            var notificationToast = new bootstrap.Toast(notificationToast);
            notificationToast.show();
          }
          else {
            if (this.locationSelectedList.filter(li => li._id == ev._id).length == 0)
                this.locationSelectedList.push(ev);
            if(window.location.href.split('/').pop() == 'modal'){
                window.history.back(); 
            }
          }
          //console.log(this.locationSelectedList);
      },
      go_next(id) {
          if (id == 1) {
            $(".focusBorder").each(function(index, item){item.classList.remove("focusBorder");});
            document.getElementById('toggle-license').parentNode.classList.add("toggleBorder");
          } else if (id == 2) {
              $(".focusBorder").each(function(index, item){item.classList.remove("focusBorder");});
              document.getElementById('file-upload2').parentNode.parentNode.classList.add("focusBorder");
          } else if (id == 3) {
              $(".focusBorder").each(function(index, item){item.classList.remove("focusBorder");});
              document.getElementById('ins_introduce').parentNode.parentNode.classList.add("focusBorder");
          }
      },
      removeLocationSelected(location) {
        for (var i=0; i<this.locationSelectedList.length; i++) {
            var x = this.locationSelectedList[i];
            if (x._id == location._id) {
                this.locationSelectedList.splice(i, 1);
                break;
            }
        }
      },
      async lookupLocation() {
        $(".focusBorder").each(function(index, item){item.classList.remove("focusBorder");});
        $(".toggleBorder").each(function(index, item){item.classList.remove("toggleBorder");});
        $("#search_typeahead")[0].parentNode.classList.add("focusBorder");

        if (this.places == null) {
            this.places = [];
        }
        if (this.query == '') {
            this.places = [];
        } else {
            //if (this.suggestions.length > 0) {
            if (false) {
                this.locations = this.suggestions.filter(x => (x && x.includes(this.query)));
            } 
            //if (this.suggestions.length == 0 || this.places.length == 0) {
            {
                var query = this.query;
                var searchParams = {query: query};
                
                var result = await axios({
                    url: 'https://api.wedives.com/graphql',
                    method: 'post',
                    headers: {
                        countrycode: 'ko',
                        idtoken: (localStorage.idToken) ? localStorage.idToken : "",
                    },
                    data: {
                    query: `
                        query SearchPlaces($searchParams: SearchParams, $limit: Int) {
                            searchPlaces(searchParams: $searchParams, limit: $limit) {
                                __typename
                                ... on DiveSite {
                                    _id
                                    uniqueName
                                    name
                                    description
                                    adminScore
                                    latitude
                                    longitude
                                    backgroundImages {
                                        thumbnailUrl
                                    }
                                    interests {
                                        title
                                        type
                                    }
                                }
                                ... on DivePoint {
                                    _id
                                    uniqueName
                                    name
                                    description
                                    adminScore
                                    latitude
                                    longitude
                                    backgroundImages {
                                        thumbnailUrl
                                    }
                                    interests {
                                        title
                                        type
                                    }
                                }
                                ... on DiveCenter {
                                    _id
                                    uniqueName
                                    name
                                    description
                                    divingType
                                    adminScore
                                    latitude
                                    longitude
                                    institutionTypes
                                    backgroundImages {
                                        thumbnailUrl
                                    }
                                    interests {
                                        title
                                        type
                                    }
                                }
                                address
                                latitude
                                longitude
                                countryCode
                            }
                        }
                        `,
                        variables: {
                            "limit": 10,
                            "searchParams": searchParams
                        }
                    }
                });
                //result.data.data.searchDiveCentersByName.forEach(x=>result.data.data.searchDiveCentersByName)
                var result_list = new Array();
                if (result.data.data.searchPlaces) {
                    result.data.data.searchPlaces.filter(place => place.__typename == 'DiveSite').forEach(item => {item.type='site';result_list.push(item)});
                    result.data.data.searchPlaces.filter(place => place.__typename == 'DivePoint').forEach(item => {item.type='point';result_list.push(item)});
                    result.data.data.searchPlaces.filter(place => place.__typename == 'DiveCenter').forEach(item => {item.type='center';result_list.push(item)});
                }
                this.locations = result.data.data.searchPlaces;
                
                /*var headers = (localStorage.idToken) ? {countrycode: 'ko', idtoken: localStorage.idToken} : {countrycode: 'ko'};
                var result = await axios({
                    url: 'https://api.wedives.com/graphql',
                    method: 'post',
                    headers: headers,
                    data: {
                    query: `
                        query Query($query: String!) {
                           findSearchSuggestions(query: $query)
                        }
                        `,
                        variables: {
                            "query": this.query
                        }
                    }
                });
                if (result.data.data.findSearchSuggestions) {
                    this.locations = result.data.data.findSearchSuggestions;
                }*/
            }
        }
        //console.log(this.locations);
      },
      toggleLicense() {
          this.licenseFlag = !this.licenseFlag;
          $(".focusBorder").each(function(index, item){item.classList.remove("focusBorder");});
          event.currentTarget.parentNode.classList.add("toggleBorder");
      },
      focusInput(event) {
          $(".focusBorder").each(function(index, item){item.classList.remove("focusBorder");});
          $(".toggleBorder").each(function(index, item){item.classList.remove("toggleBorder");});
          event.currentTarget.parentNode.parentNode.classList.add("focusBorder");
      },
      focusInput2(event) {
          consoel.log(event);
      },
      focusInput3(event) {
          console.log(event);
          $(".focusBorder").each(function(index, item){item.classList.remove("focusBorder");});
          $(".toggleBorder").each(function(index, item){item.classList.remove("toggleBorder");});
          event.currentTarget.parentNode.parentNode.parentNode.classList.add("focusBorder");
      },
      onSlideChange() {
          //console.log("onSlideChange")
      },
      historyBack() {
          try {
              Android.onHistoryBack();
          } catch (e) {

          }
      },
      imageLicenseChange({ target: { files = [] } }) {
        if (!files.length) {
          return
        }
        this.file_license = files[0];
        $("#file-upload1-back").css("background", "url(" + URL.createObjectURL(this.file_license) + ")");
        $("#file-upload1-back").css("background-size", "contain");
        $("#file-upload1-back").css("background-repeat", "no-repeat");
      },
      imagePhotoChange({ target: { files = [] } }) {
        if (!files.length) {
          return
        }
        this.file_photo = files[0];
        $("#file-upload2-back").css("background", "url(" + URL.createObjectURL(this.file_photo) + ")");
        $("#file-upload2-back").css("background-size", "contain");
        $("#file-upload2-back").css("background-repeat", "no-repeat");
      },
      
  }

  
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.border-bottom {border-bottom: 1px solid rgba(0, 0, 0, 0.08) !important;}
.input-style.has-borders.input-style-always-active label {background-color: transparent !important;}
select:invalid {color: #6c757d;}
select {background: white; background-color: white;}
.wediev-label {font-size: 12px;transition: all 250ms ease;position:absolute;left:14px;z-index:99;margin-top: -16px;}
.wedive-deep:before {content: '▼ 첫 수심 18m';position: absolute;margin-top: -20px;margin-left: 16%;color:#b4bcc8;}
.input-big {font-size:22px !important;}
.input-big::placeholder {font-size:22px !important;}
.input-big2 {font-size:18px !important;}
.input-big2::placeholder {font-size:18px !important;}
.input-big3 {font-size:14px !important;}
.input-big3::placeholder {font-size:14px !important;}
.btn[disabled] {pointer-events: none !important;background-image: linear-gradient(to bottom, #ccc, #ccc) !important;}
.bg-e7e7e7 {background-color: transparent !important;}
.focusBorder {border: 2px solid #2c9ac3;background: #fff;border-radius: 8px !important;}
.form-control::placeholder {font-family: 'Noto Sans Korean' !important;font-size: 18px !important;font-weight: 500 !important;opacity: 50%;}

.wedive-switch label::before {height: 62px !important;width: calc(100vw - 46px) !important;border-radius: 8px !important;border-width: 0 !important;}
.toggleBorder label::before {border: 2px solid #2c9ac3 !important;border-radius: 8px !important;}
.wedive-switch label::after {height: 62px !important;width: calc(50vw - 23px) !important;margin-top:-62px !important;border-radius: 8px !important;margin-left:-1px !important;}
.ios-input:checked ~ .custom-control-label::after {-webkit-transform: translateX(calc(50vw - 23px)) !important;}
.ios-switch-icon span {font-family: 'Noto Sans Korean' !important;font-weight: 500 !important;color: black !important;}
.ios-input:checked ~ .custom-control-label::before {background-color: #efefef !important;}
.ios-switch-icon label::before {background-color: #efefef !important;}
.ios-switch-icon span:last-child {margin-left: 50%;}

.map_box_cate {padding: 2px 6px;margin-bottom:2px;margin-right:6px;border-radius:4px;}
.DiveSite .map_box_cate {border: 1px solid #3f474c;color:#3f474c}
.DivePoint .map_box_cate {border: 1px solid #3cb5a0;color:#3cb5a0}
.DiveCenter .map_box_cate {border: 1px solid #4687c1;color:#4687c1}
</style>
