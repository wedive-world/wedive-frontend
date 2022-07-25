<template>
  <div class="">
    <div data-menu-active="nav-site"></div>
    <ContentLoader :width="windowWidth" :height="windowHeight-58" id="div_content_loader" primaryColor="#e3e7ef" secondaryColor="#f4f7ff">
        <rect x="0" y="0" rx="0" ry="0" :width="windowWidth" height="250" />
        <rect x="40" y="270" rx="10" ry="10" :width="windowWidth-80" height="20" />
        <rect :x="windowWidth/2-50" y="315" rx="10" ry="10" width="100" height="20" />
        <rect x="20" y="340" rx="10" ry="10" :width="windowWidth-40" height="40" />
        <rect x="20" y="390" rx="10" ry="10" :width="windowWidth-40" height="60" />
        <rect x="40" y="460" rx="10" ry="10" :width="(windowWidth-110)/3" height="40" />
        <rect :x="(windowWidth-110)/3+50" y="460" rx="10" ry="10" :width="(windowWidth-110)/3" height="40" />
        <rect :x="(windowWidth-110)/3*2+60" y="460" rx="10" ry="10" :width="(windowWidth-110)/3" height="40" />
        <rect x="10" y="510" rx="20" ry="20" :width="windowWidth-20" height="190" />
    </ContentLoader>
    <div class="page-content" style="padding-bottom: 50px;">
        <div v-if="getDiveShopByUniqueName.backgroundImages == null || getDiveShopByUniqueName.backgroundImages.length == 0" style="background:url(/static/empty.jpg);background-size: contain;height:250px;">
        </div>
        <div v-else style="min-height:250px;height:250px;max-height:250px;">
                <div class="splide single-slider cover-slider slider-no-arrows slider-no-dots" id="cover-slider-1" data-card-height="250" style="position:relative;">
                <div class="splide__track">
                    <div class="splide__list">
                        <div class="splide__slide" v-if="getDiveShopByUniqueName.backgroundImages == null || getDiveShopByUniqueName.backgroundImages.length == 0">
                            <div id="background_img_null" data-card-height="250" class="card rounded-0 mb-0" style="background: url(/static/empty.jpg);background-size: cover !important;background-position: center !important;">
                            </div>
                        </div>
                        <div v-else class="splide__slide" v-for="(image, index) in getDiveShopByUniqueName.backgroundImages">
                            <div data-card-height="250" :class="'card rounded-0 mb-0 background-center background_img_' + index" v-bind:style="'background: url('+image.thumbnailUrl+');background-size: cover !important;'">
                                <div class="wedive-source" style="bottom:50px;">{{ image.reference | makeReference }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="cover-slider-temp" class="background-center" :style="'background:url('+getDiveShopByUniqueName.backgroundImages[0].thumbnailUrl+');height:250px;position:absolute;width:100%;top:58px;'">
            </div>
        </div>
        
        

    
        
        
        <div class="card card-style" style="margin-top:-40px; z-index:1">
            <div class="content text-center mt-4">
                <h2 class="font-20 font-700 mb-1 mt-1">{{ getDiveShopByUniqueName.name }}</h2>
                <p class="text-start color-gray m-0" style="line-height: 1.5;">{{ getDiveShopByUniqueName.description }}</p>
                <div class="wedive-star-back">
                  <div class="wedive-star-front" v-bind:style="'width:'+(getDiveShopByUniqueName.adminScore > 3 ? getDiveShopByUniqueName.adminScore-3 : 0)+'%'">
                  </div>
                  <span class="wedive-star-number">{{ (getDiveShopByUniqueName.adminScore/20).toFixed(1) }}</span>
                </div>
                
                <div class="evaluation d-flex">
                    <span class="view font-12">경치 {{ (getDiveShopByUniqueName.viewScore/20).toFixed(1) }}</span>
                    <span class="training font-12">교육 {{ (getDiveShopByUniqueName.educationScore/20).toFixed(1) }}</span>
                    <span class="equiptment font-12">시설 {{ (getDiveShopByUniqueName.facilityScore/20).toFixed(1) }}</span>
                    <span class="service font-12">서비스 {{ (getDiveShopByUniqueName.serviceScore/20).toFixed(1) }}</span>
                    <!--<span class="info" style="margin-bottom:3px;margin-top:3px;"><i class="icon_question font-12">별점 안내</i></span>-->
                </div>

                <div v-if="getDiveShopByUniqueName.waterTemperature" class="evaluation d-flex mt-2">
                    <img :src="'https://d34l91104zg4p3.cloudfront.net/assets/weather/'+(weatherIcon[getDiveShopByUniqueName.waterTemperature.weatherDescription])+'.png'" width="50"/>
                    <div>
                        <p class="mb-0"><span class="color-gray">기온</span> <span style="display:inline-block;min-width:46px;text-align:right;">{{ getDiveShopByUniqueName.waterTemperature && getDiveShopByUniqueName.waterTemperature.temperatureC ? getDiveShopByUniqueName.waterTemperature.temperatureC + '°C' : '' }}</span></p>
                        <p class="mb-0" v-if="getDiveShopByUniqueName.interests.filter(x=>x._id=='62142d77618c82ad78803e4e').length > 0"><span class="color-gray">수온</span> <span style="display:inline-block;min-width:46px;text-align:right;">-</span></p>
                        <p class="mb-0" v-else><span class="color-gray">수온</span> <span style="display:inline-block;min-width:46px;text-align:right;">{{ getDiveShopByUniqueName.waterTemperature && getDiveShopByUniqueName.waterTemperature.currentSeaTemperature ? getDiveShopByUniqueName.waterTemperature.currentSeaTemperature.split("/")[0].replace(/ /gi,'') : '' }}</span></p>

                        <!--<i class="fas fa-tint"></i>-->
                    </div>
                    <div>
                        <p class="mb-0"><span class="color-gray">습도</span> <span style="display:inline-block;min-width:46px;text-align:right;">{{ getDiveShopByUniqueName.waterTemperature && getDiveShopByUniqueName.waterTemperature.humidity ? getDiveShopByUniqueName.waterTemperature.humidity : '' }}</span></p>
                        <p class="mb-0"><span class="color-gray">바람</span> <span style="display:inline-block;min-width:46px;text-align:right;">{{ getDiveShopByUniqueName.waterTemperature && getDiveShopByUniqueName.waterTemperature.windSpeed ? getDiveShopByUniqueName.waterTemperature.windSpeed : '' }}</span></p>
                    </div>
                </div>

                <div style="margin-top:8px;"><span class="font-600"><img class="ext-img" src="https://d34l91104zg4p3.cloudfront.net/assets/ico_chat.png" width="18"/> {{ (getDiveShopByUniqueName.reviewCount)?getDiveShopByUniqueName.reviewCount:'0' }}</span>&nbsp;<font class="color-gray-light">|</font>&nbsp;
                <span v-if="getDiveShopByUniqueName.institutionTypes && getDiveShopByUniqueName.institutionTypes.length > 0"><span v-for="(insti,index) in getDiveShopByUniqueName.institutionTypes" v-if="index < 6" v-on:click="openInstitutionBottomSheet(insti)"><img class="ext-img" :src="'https://d34l91104zg4p3.cloudfront.net/agency/logo_'+insti.toLowerCase()+'.svg'" height="17" style="padding-bottom: 1px;" /><span v-if="index != (getDiveShopByUniqueName.institutionTypes.length-1)">&nbsp;&nbsp;</span></span>&nbsp;<font class="color-gray-light">|</font>&nbsp;</span>
                <span v-if="interest.type=='priceIndex'" v-for="interest in getDiveShopByUniqueName.interests" class="color-gray">{{interest.title.replace(/\$/gi, '₩')}}</span>
                <!--<span class="badge font-10 bg-fade-gray-dark">PADI 공식</span>-->
                </div>

                <div class="divider mt-3 mb-3"></div>
                <div class="d-flex mt-3 mb-0 text-center">
                    <div class="flex-grow-1 pd-0" style="border-right: 1px solid lightgray;">
                    <a :class="(getDiveShopByUniqueName && getDiveShopByUniqueName.phoneNumber && getDiveShopByUniqueName.phoneNumber != '') ? '' : 'opacity-30'" :href="'tel:'+getDiveShopByUniqueName.phoneNumber"" style="color:black;">
                        <img class="ext-img" src="https://d34l91104zg4p3.cloudfront.net/assets/ico_call.png" width="24" style="margin-top:-4px;"/>
                        <span class="font-16 font-500 font-noto"></span>
                    </a>
                    </div>
                    <div v-on:click="clickLike()" :class="'flex-grow-1 pd-0'+((idToken == null || nickName == null || nickName == 'null') ? ' opacity-40' : '')" style="border-right: 1px solid lightgray;">
                        <img class="ext-img" :src="'https://d34l91104zg4p3.cloudfront.net/assets/' + like_img + '.png'" width="24" style="margin-top:-4px;"/>
                        <span class="font-16 font-500 font-noto">{{ getDiveShopByUniqueName.likes }}</span>
                    </div>
                    
                    <div v-on:click="clickSubscribe()" :class="'flex-grow-1 pd-0'+((idToken == null || nickName == null || nickName == 'null') ? ' opacity-40' : '')">
                        <img class="ext-img" :src="'https://d34l91104zg4p3.cloudfront.net/assets/'+subscribe_img+'.png'" width="24" style="margin-top:-4px;"/>
                        <span class="font-16 font-500 font-noto"></span>
                    </div>
                </div>
            </div>
        </div>

        <div class="card card-style p-2" v-if="getDiveShopByUniqueName.wediveComments && getDiveShopByUniqueName.wediveComments.length > 0 && getDiveShopByUniqueName.wediveComments[0] != ''">
            <div class="content mb-2">
                <div class="text-center">
                    <i class="ico ico-wedive-w color-primary scale-box fa-4x"></i>
                </div>
                <h4 class="text-center pt-2 mb-0">wedive's comment</h4>
                <div class="justify-content-center mb-2 mt-3 text-start font-noto">
                    <div v-for="(comment, index) in getDiveShopByUniqueName.wediveComments">
                        <div class="color-gray-light-mid font-700 wedive-comment-number">0{{(index+1)}}</div>
                        <div class="mb-2 font-200 wedive-comment-desc">
                            {{comment}}
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        
        
        <div v-if="getDiveShopByUniqueName.educations && getDiveShopByUniqueName.educations.length > 0" class="card card-style">
            <div class="content mb-0 mt-3" id="tab-group-1">
                <div class="tab-controls tabs-small tabs-rounded" data-highlight="bg-secondary">
                    <a v-if="getDiveShopByUniqueName.educations && getDiveShopByUniqueName.educations.filter(x=>x.type.includes('education')).length > 0" href="#" data-active data-bs-toggle="collapse" data-bs-target="#tab-1ab">교육</a>
                    <a v-else-if="getDiveShopByUniqueName.educations && getDiveShopByUniqueName.educations.filter(x=>x.type.includes('fun')).length > 0" href="#" data-bs-toggle="collapse" data-bs-target="#tab-2ab">펀 다이빙</a>
                    <a v-else-if="getDiveShopByUniqueName.educations && getDiveShopByUniqueName.educations.filter(x=>x.type.includes('experience')).length > 0" href="#" data-bs-toggle="collapse" data-bs-target="#tab-3ab">체험 다이빙</a>
                </div>

                <div class="clearfix mb-4"></div>
                <div v-if="getDiveShopByUniqueName.educations && getDiveShopByUniqueName.educations.filter(x=>x.type.includes('education')).length > 0" data-bs-parent="#tab-group-1" class="collapse show" id="tab-1ab">
                    <div v-for="education in getDiveShopByUniqueName.educations.filter(x=>x.type.includes('education'))" class="d-flex mb-3">
                        <div class="align-self-center">
                            <img :src="education.images[0].thumbnailUrl" class="rounded-sm" width="40" height="40" style="object-fit: cover;margin-right:10px;">
                        </div>
                        <div class="text-start align-self-center">
                            <h2 class="font-15 line-height-s mt-1 mb-n1">{{ education.name }}</h2>
                            <p class="color-highlight font-11" v-if="education.interest && education.interest.length > 0">{{ education.interest.map(x=>x.title).join()}}</p>
                            <p class="color-highlight font-11" v-else>&nbsp;</p>
                        </div>
                        <div class="ms-auto ps-3 align-self-center text-end">
                            <h2 class="font-15 mb-n1">₩{{ education.price | makeComma}}</h2>
                            <p class="color-highlight font-10">{{ education.unitName }}</p>
                        </div>
                    </div>
                </div>
                <div v-else-if="getDiveShopByUniqueName.educations && getDiveShopByUniqueName.educations.filter(x=>x.type.includes('fun')).length > 0" data-bs-parent="#tab-group-1" class="collapse" id="tab-2ab">
                    <div class="d-flex mb-3">
                        <div class="align-self-center">
                            <img src="/static/empty.jpg" class="rounded-sm me-3" width="70">
                        </div>
                        <div class="text-start align-self-center">
                            <h2 class="font-15 line-height-s mt-1 mb-n1">섬 다이빙</h2>
                            <p class="color-highlight font-11">가이드/탱크/간식</p>
                        </div>
                        <div class="ms-auto ps-3 align-self-center text-end">
                            <h2 class="font-15 mb-n1">₩50,000</h2>
                            <p class="color-highlight font-10">1세션</p>
                        </div>
                    </div>
                    <div class="d-flex mb-3">
                        <div class="align-self-center">
                            <img src="/static/empty.jpg" class="rounded-sm me-3" width="70">
                        </div>
                        <div class="text-start align-self-center">
                            <h2 class="font-15 line-height-s mt-1 mb-n1">보트 다이빙</h2>
                            <p class="color-highlight font-11">가이드/탱크/간식</p>
                        </div>
                        <div class="ms-auto ps-3 align-self-center text-end">
                            <h2 class="font-15 mb-n1">₩70,000</h2>
                            <p class="color-highlight font-10">1세션</p>
                        </div>
                    </div>
                    <div class="d-flex mb-3">
                        <div class="align-self-center">
                            <img src="/static/empty.jpg" class="rounded-sm me-3" width="70">
                        </div>
                        <div class="text-start align-self-center">
                            <h2 class="font-15 line-height-s mt-1 mb-n1">비치 다이빙</h2>
                            <p class="color-highlight font-11">가이드/탱크/간식</p>
                        </div>
                        <div class="ms-auto ps-3 align-self-center text-end">
                            <h2 class="font-15 mb-n1">₩40,000</h2>
                            <p class="color-highlight font-10">1세션</p>
                        </div>
                    </div>
                    <div class="d-flex mb-3">
                        <div class="align-self-center">
                            <img src="/static/empty.jpg" class="rounded-sm me-3" width="70">
                        </div>
                        <div class="text-start align-self-center">
                            <h2 class="font-15 line-height-s mt-1 mb-n1">요트 다이빙</h2>
                            <p class="color-highlight font-11">가이드/탱크/간식</p>
                        </div>
                        <div class="ms-auto ps-3 align-self-center text-end">
                            <h2 class="font-15 mb-n1">₩80,000</h2>
                            <p class="color-highlight font-10">1세션</p>
                        </div>
                    </div>
                    <div class="d-flex mb-3">
                        <div class="align-self-center">
                            <img src="/static/empty.jpg" class="rounded-sm me-3" width="70">
                        </div>
                        <div class="text-start align-self-center">
                            <h2 class="font-15 line-height-s mt-1 mb-n1">나이트 다이빙</h2>
                            <p class="color-highlight font-11">가이드/탱크/간식</p>
                        </div>
                        <div class="ms-auto ps-3 align-self-center text-end">
                            <h2 class="font-15 mb-n1">₩60,000</h2>
                            <p class="color-highlight font-10">1세션</p>
                        </div>
                    </div>
                </div>
                <div v-else-if="getDiveShopByUniqueName.educations && getDiveShopByUniqueName.educations.filter(x=>x.type.includes('experience')).length > 0" data-bs-parent="#tab-group-1" class="collapse" id="tab-3ab">
                    <div class="d-flex mb-3">
                        <div class="align-self-center">
                            <img src="/static/empty.jpg" class="rounded-sm me-3" width="70">
                        </div>
                        <div class="text-start align-self-center">
                            <h2 class="font-15 line-height-s mt-1 mb-n1">비치 체험 다이빙</h2>
                            <p class="color-highlight font-11">렌탈/입장/사진</p>
                        </div>
                        <div class="ms-auto ps-3 align-self-center text-end">
                            <h2 class="font-15 mb-n1">₩100,000</h2>
                            <p class="color-highlight font-10">오전 반일</p>
                        </div>
                    </div>
                    <div class="d-flex mb-3 cursor-pointer" v-on:click="goCourse()">
                        <div class="align-self-center">
                            <img src="/static/empty.jpg" class="rounded-sm me-3" width="70">
                        </div>
                        <div class="text-start align-self-center">
                            <h2 class="font-15 line-height-s mt-1 mb-n1">보트 체험 다이빙</h2>
                            <p class="color-highlight font-11">렌탈/보트/사진</p>
                        </div>
                        <div class="ms-auto ps-3 align-self-center text-end">
                            <h2 class="font-15 mb-n1">₩130,000</h2>
                            <p class="color-highlight font-10">오전 반일</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
        
        <div class="card card-style bg-theme pb-0">
            <div class="content" id="tab-group-2">
                <div class="tab-controls tabs-small tabs-rounded" data-highlight="bg-blue-dark">
                    <a href="#" data-active data-bs-toggle="collapse" data-bs-target="#tab-info">기본 정보</a>
                    <a href="#" data-bs-toggle="collapse" data-bs-target="#tab-time">영업 시간</a>
                    <a href="#" data-bs-toggle="collapse" data-bs-target="#tab-eqpt">대여 장비</a>
                </div>
                
                <div data-bs-parent="#tab-group-2" class="collapse text-start px-2 show" id="tab-info">
                    <div class="line-height-l pb-3 mt-2 light-border-bottom" v-if="getDiveShopByUniqueName.tickets && getDiveShopByUniqueName.tickets.length > 0" style="position: relative;">
                        <strong class="small-title"><i class="fas fa-money-bill-alt color-blue2-dark me-1"></i> 입장료 / 입장정보</strong>
                        <div>
                            <table class="table table-borderless text-center rounded-3 shadow-sm mt-1 font-noto" style="border-collapse: collapse;outline: 1px solid rgba(0, 0, 0, 0.08);overflow: hidden;">
                                <tr v-for="ticket in getDiveShopByUniqueName.tickets" class="border-bottom">
                                    <th class="pt-2 pb-2 font-400" style="background: rgba(196,187,171,.2);" width="96">{{ ticket.unitName }}</th>
                                    <td class="text-start p-2">{{ ticket.price | makeComma }}</td>
                                </tr>
                            </table>
                        </div>
                        <div>
                            <table class="table table-borderless text-center rounded-3 shadow-sm mt-1 font-noto" style="border-collapse: collapse;outline: 1px solid rgba(0, 0, 0, 0.08);overflow: hidden;">
                                <tr class="border-bottom">
                                    <th class="pt-2 pb-2 font-400" style="background: rgba(196,187,171,.2);" width="96">스쿠바 다이빙</th>
                                    <td v-if="getDiveShopByUniqueName.divingType.includes('scubaDiving')" class="text-start p-2">{{ enteranceScuba[getDiveShopByUniqueName.enteranceLevelScuba] }}</td>
                                    <td v-else class="text-start p-2" style="color:#cd5b3c;">불가</td>
                                </tr>
                                <tr>
                                    <th class="pt-2 pb-2 font-400" style="background: rgba(196,187,171,.2);" width="96">프리 다이빙</th>
                                    <td v-if="getDiveShopByUniqueName.divingType.includes('freeDiving')" class="text-start p-2">{{ enteranceFree[getDiveShopByUniqueName.enteranceLevelFree] }}</td>
                                    <td v-else class="text-start p-2" style="color:#cd5b3c;">불가</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div class="line-height-l pb-3 mt-2 light-border-bottom" style="position: relative;">
                        <strong class="small-title"><i class="fas fa-highlighter color-blue2-dark me-1"></i> 시설 정보</strong>
                        <div class="row text-start">
                            <div class="ico_feature col-3" v-if="interest.type=='facility'" v-for="interest in getDiveShopByUniqueName.interests">
                                <i v-if="item == interest.title" v-for="(item, index) in feature_list" :class="'ico_feature'+(index+1)+' icon-service'"></i>
                                <p class="span_feature text-center" style="line-height: 1.05;">{{ interest.title }}</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="line-height-l pb-3 mt-2 light-border-bottom" style="position: relative;">
                        <strong class="small-title"><i class="fas fa-credit-card color-blue2-dark me-1"></i> 결제 방법</strong>
                        <ul class="wedive-ul ps-0">
                            <li v-if="interest.type=='payment'" v-for="interest in getDiveShopByUniqueName.interests" class="col-md-6">{{interest.title}}</li>
                        </ul>
                    </div>

                    <div class="line-height-l pb-3 mt-2 light-border-bottom hide" style="position: relative;">
                        <strong class="small-title">사이트 까지 거리</strong>
                        20km 이상 소요
                        <i class="fa fa-map-marker color-blue2-dark me-1"></i>
                    </div>

                    <div class="line-height-l pb-3 mt-2 light-border-bottom hide" style="position: relative;">
                        <strong class="small-title">직원수</strong>
                        <div class="row mb-0">
                            <div class="col-6 text-start font-13">다이브 마스터</div>
                            <p class="col-6 mb-0 text-end">2</p>
                            <div class="col-6 text-start font-13">오픈워터 강사</div>
                            <p class="col-6 mb-0 text-end">6</p>
                        </div>
                        <i class="fas fa-user-tie color-blue2-dark me-1"></i>
                    </div>

                    <div class="line-height-l pb-3 mt-2 light-border-bottom" style="position: relative;">
                        <strong class="small-title"><i class="fas fa-language color-blue2-dark me-1"></i> 지원 언어</strong>
                        <ul class="wedive-ul ps-0">
                            <li v-if="interest.type=='language'" v-for="interest in getDiveShopByUniqueName.interests" class="col-md-6">{{interest.title}}</li>
                        </ul>
                    </div>
                </div>
                <div data-bs-parent="#tab-group-2" class="collapse px-2" id="tab-time">
                    <div class="mt-3" v-if="getDiveShopByUniqueName.placeOpeningHours && getDiveShopByUniqueName.placeOpeningHours.length > 0">
                        <div v-for="(opening,index) in getDiveShopByUniqueName.placeOpeningHours" class="row mb-0" style="position: relative;">
                            <div v-if="opening.split(': ')[0].includes('>')" :class="'timeline-deco'+((getDiveShopByUniqueName.placeOpeningHours[(index+1)]==null || (getDiveShopByUniqueName.placeOpeningHours[(index+1)] && getDiveShopByUniqueName.placeOpeningHours[(index+1)][0].includes('>')==false)) ? ' deco-end': '')" style="padding: 0;left: 16px;background-color: rgba(0, 0, 0, 1);"></div>
                            <hr v-if="opening.split(': ')[0].includes('>')" class="hori-line">
                            <h5 v-if="opening.split(': ')[0].includes('>')" class="col-6 text-start font-13 font-400 mb-0" style="width: calc(50% - 26px);">{{ opening.split(': ')[0].replace('>','') }}</h5>
                            <h5 v-else class="col-6 text-start font-13 font-400 mb-0">{{ opening.split(': ')[0] }}</h5>
                            <p class="col-6 mb-1 text-end">{{ opening.split(': ')[1] }}</p>
                        </div>
                    </div>
                    <div class="mt-3" v-else>
                        <div class="text-center"><img src="https://d34l91104zg4p3.cloudfront.net/assets/empty_time.jpg" width="60%"/></div>
                        <div class="font-noto text-center mb-3" style="color: #717a92;">영업시간 데이터가 아직 없어요.</div>
                    </div>
                </div>
                <div data-bs-parent="#tab-group-2" class="collapse px-2" id="tab-eqpt">
                    <div class="mt-3 text-start row" v-if="getDiveShopByUniqueName.rentals && getDiveShopByUniqueName.rentals.length > 0">
                        <div class="ico_equipt col-3" v-for="rental in getDiveShopByUniqueName.rentals">
                            <i :class="'ico_equipt' + (rentalOptions.findIndex(x=>x==rental.name)+1) + ' icon-equiptment'"></i>
                            <p class="span_feature text-center mb-0" style="line-height: 1.05;margin-bottom:8px !important;">{{ rental.name }}</p>
                            <p v-if="rental.price==0" class="span_feature text-center mb-0 color-gray mt-n1" style="line-height: 1.05;">무료</p>
                            <p v-else-if="rental.unitName==''" class="span_feature text-center mb-0 color-gray mt-n1" style="line-height: 1.05;">{{ rental.price | makeComma }}</p>
                            <p v-else class="span_feature text-center mb-0 color-gray mt-n1" style="line-height: 1.05;">{{ rental.price | makeComma }}/{{ rental.unitName}}</p>
                        </div>

                    </div>
                    <div class="mt-3 text-start row" v-else>
                        <div class="text-center"><img src="https://d34l91104zg4p3.cloudfront.net/assets/empty_equiptment.jpg" width="60%"/></div>
                        <div class="font-noto text-center mb-3" style="color: #717a92;">장비 대여가 불가능한 센터입니다.</div>
                    </div>
                </div>
            </div>    
        </div>

        <div v-if="getDiveShopByUniqueName.divePoints && getDiveShopByUniqueName.divePoints.length > 0" class="card card-style">
            <div class="content">
                <h4 class="text-start pt-2 mb-2">다이빙 가능 포인트</h4>
                <a class="color-highlight font-12 wedive-txt-all">모두보기</a>
                <div v-for="(point,index) in getDiveShopByUniqueName.divePoints">
                    <div class="">
                        <div class="">
                            <div class="justify-content-center mb-0 text-start">
                                <a :href="'/point/'+point.uniqueName">
                                    <div style="position: relative;">
                                        <h4 class="font-15 font-600 color-highlight"> {{ point.name }} </h4>
                                        <span class="color-gray-light-mid font-12 mb-0 text-more me-1">상세보기<i class="fas fa-chevron-right ms-2"></i></span>
                                    </div>
                                </a>
                                <p class="pb-0 mb-0 mt-n1"><i class="fa fa-star font-13 color-yellow-dark scale-box"></i>
                                    <span> {{ (point.adminScore/20).toFixed(1) }} </span>
                                </p>

                                <div v-if="point.backgroundImages" class="row text-center row-cols-3 mb-1" style="padding-left:10px;padding-right:10px;">
                                    <a v-if="point.backgroundImages &&point.backgroundImages.length>0" class="col square-rect" v-bind:data-gallery="'gallery-'+index" v-bind:href="point.backgroundImages[0].thumbnailUrl" title="">
                                        <img :src="point.backgroundImages[0].thumbnailUrl" v-bind:data-src="point.backgroundImages[0].thumbnailUrl" class="preload-img img-fluid rounded-s" alt="Point image">
                                        <div class="wedive-source mx-80">{{ point.backgroundImages[0].reference | makeReference }}</div>
                                    </a>
                                    <a v-if="point.backgroundImages&&point.backgroundImages.length>1" class="col square-rect" v-bind:data-gallery="'gallery-'+index" v-bind:href="point.backgroundImages[1].thumbnailUrl" title="">
                                        <img :src="point.backgroundImages[1].thumbnailUrl" v-bind:data-src="point.backgroundImages[1].thumbnailUrl" class="preload-img img-fluid rounded-s" alt="Point image">
                                        <div class="wedive-source mx-80">{{ point.backgroundImages[1].reference | makeReference }}</div>
                                    </a>
                                    <a v-if="point.backgroundImages&&point.backgroundImages.length>2" class="col square-rect" v-bind:data-gallery="'gallery-'+index" v-bind:href="point.backgroundImages[2].thumbnailUrl" title="">
                                        <img :src="point.backgroundImages[2].thumbnailUrl" v-bind:data-src="point.backgroundImages[2].thumbnailUrl" class="preload-img img-fluid rounded-s" alt="Point image">
                                        <div class="wedive-source mx-80">{{ point.backgroundImages[2].reference | makeReference }}</div>
                                    </a>
                                </div>
                                <p class="pb-0 mb-0 line-height-m point_desc"> {{point.highlightDescription}} </p>
                            </div>
                        </div>
                    </div>
                    <div class="divider mt-3 mb-3"></div>
                </div>
            </div>
        </div>


        <div class="card card-style">
            <div class="content mb-0">
                <h4 class="text-start pt-2 mb-2">주소</h4>
                <p class="text-start mb-3 mb-0">
                    <span data-menu="menu-copy"><i class="far fa-copy me-2"></i>{{ getDiveShopByUniqueName && getDiveShopByUniqueName.address ? getDiveShopByUniqueName.address.replace(' KR', '') : '' }}</span><br/>
                    <a href="#" class="color-highlight hide" data-menu="menu-direction"><i class="fas fa-route me-2"></i> 공항-샵 이동방법 안내</a>
                </p>
            </div>
            <div id="map" style="height: 300px;"></div>
            <div class="map-box hide">
                <a href="/center">
                    <div class="bx">
                        <div class="justify-content-center mb-0 text-start">
                            <div class="" style="width: 95px; height:95px;">
                                <img id="map_box_shop_img" src="" class="rounded-s mx-auto" width="95" height="95" style="object-fit: cover;">
                            </div>
                            
                            <div class="" style="">
                                <h4 class="font-14 ellipsis mb-0" id="map_box_shop_name"></h4>
                                <p class="pb-0 mb-0 mt-n1"><i class="fa fa-star font-13 color-yellow-dark"></i>
                                    &nbsp;<span id="map_box_shop_star"></span>
                                </p>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>

        <div class="card card-style">
            <div class="content"> 
                <h4 class="text-start pt-2 mb-3">사진</h4>
                <ul v-if="getDiveShopByUniqueName.images != null && getDiveShopByUniqueName.images.length > 0" class="gallery-filter-controls">
                    <li class="color-highlight gallery-filter-all" data-filter="all">전체보기</li>
                    <li v-for="(option, index) in imageCategory" :data-filter="(index+1)">{{ option }}</li>
                </ul>
            </div>
            <div v-if="getDiveShopByUniqueName.images == null || getDiveShopByUniqueName.images.length == 0" class="content mb-3 mt-n3">
                <div class="text-center"><img src="https://d34l91104zg4p3.cloudfront.net/assets/empty_image.jpg" width="60%" style="margin-top:-40px;"/></div>
                <div class="font-noto text-center mb-3" style="color: #717a92;">등록된 사진이 아직 없어요.</div>
            </div>
            <div class="content mb-3 mt-n3">
                <div class="gallery gallery-filter">
                    <a v-for="(image, index) in getDiveShopByUniqueName.images" :href="image.thumbnailUrl" data-gallery="gallery-image" class="center_image filtr-item" :title="image.reference" :data-category="(imageCategory.findIndex(x=>x==image.description)+1)">
                        <img :src="image.thumbnailUrl" :data-src="image.thumbnailUrl" :data-index="index" class="preload-img rounded-s shadow-m">
                    </a>
                </div>
            </div>
        </div>

        <div class="card card-style hide">
            <div class="content mb-2" id="tab-group-index">
                <h4 class="text-start pt-2 mb-2">월별 수온</h4>
                <div>
                    <table class="table table-borderless text-center rounded-sm shadow-l mt-3" style="overflow: hidden;">
                        <thead>
                            <tr class="bg-secondary th-02">
                                <th scope="col" class="color-white font-12">월</th>
                                <th scope="col" class="color-white font-12">최저/최고 수온</th>
                                <th scope="col" class="color-white font-12">평균</th>
                                <th scope="col" class="color-white font-12">인기도</th>
                            </tr>
                        </thead>
                        <tbody v-if="getDiveShopByUniqueName.waterTemperature && getDiveShopByUniqueName.waterTemperature.temperatureDetail && getDiveShopByUniqueName.waterTemperature.temperatureDetail.MinC">
                            <tr class="border-bottom" v-for="(minC, index) in getDiveShopByUniqueName.waterTemperature.temperatureDetail.MinC">
                                <th class="font-12" scope="row">{{ index+1 }}월</th>
                                <td class="font-12 color-gray">{{ minC }}ºC / {{ getDiveShopByUniqueName.waterTemperature.temperatureDetail.MaxC[index] }}ºC</td>
                                <td class="font-12"><img class="me-2" src="https://d34l91104zg4p3.cloudfront.net/assets/weather_partly_cloudy.svg" width="20" height="20"/>8.8ºC</td>
                                <td class=""><img class="img_pop" src="https://d34l91104zg4p3.cloudfront.net/assets/icon_popularity_01.svg" width="32" height="32"/></td>
                            </tr>
                            <!--<tr class="border-bottom">
                                <th class="font-12" scope="row">2월</th>
                                <td class="font-12 color-gray">3.4ºC / 9.8ºC</td>
                                <td class="font-12"><img class="me-2" src="https://d34l91104zg4p3.cloudfront.net/assets/weather_partly_cloudy.svg" width="20" height="20"/>6.6ºC</td>
                                <td class=""><img class="img_pop" src="https://d34l91104zg4p3.cloudfront.net/assets/icon_popularity_01.svg" width="32" height="32"/></td>
                            </tr>
                            <tr class="border-bottom">
                                <th class="font-12" scope="row">3월</th>
                                <td class="font-12 color-gray">3.2ºC / 9.4ºC</td>
                                <td class="font-12"><img class="me-2" src="https://d34l91104zg4p3.cloudfront.net/assets/weather_partly_cloudy.svg" width="20" height="20"/>6.3ºC</td>
                                <td class=""><img class="img_pop" src="https://d34l91104zg4p3.cloudfront.net/assets/icon_popularity_01.svg" width="32" height="32"/></td>
                            </tr>
                            <tr class="border-bottom">
                                <th class="font-12" scope="row">4월</th>
                                <td class="font-12 color-gray">7.0ºC / 13.3ºC</td>
                                <td class="font-12"><img class="me-2" src="https://d34l91104zg4p3.cloudfront.net/assets/weather_partly_cloudy.svg" width="20" height="20"/>10.2ºC</td>
                                <td class=""><img class="img_pop" src="https://d34l91104zg4p3.cloudfront.net/assets/icon_popularity_01.svg" width="32" height="32"/></td>
                            </tr>
                            <tr class="border-bottom">
                                <th class="font-12" scope="row">5월</th>
                                <td class="font-12 color-gray">10.5ºC / 17.8ºC</td>
                                <td class="font-12"><img class="me-2" src="https://d34l91104zg4p3.cloudfront.net/assets/weather_partly_cloudy.svg" width="20" height="20"/>14.6ºC</td>
                                <td class=""><img class="img_pop" src="https://d34l91104zg4p3.cloudfront.net/assets/icon_popularity_01.svg" width="32" height="32"/></td>
                            </tr>
                            <tr class="border-bottom">
                                <th class="font-12" scope="row">6월</th>
                                <td class="font-12 color-gray">15.1ºC / 23.4ºC</td>
                                <td class="font-12"><img class="me-2" src="https://d34l91104zg4p3.cloudfront.net/assets/weather_partly_cloudy.svg" width="20" height="20"/>19.2ºC</td>
                                <td class=""><img class="img_pop" src="https://d34l91104zg4p3.cloudfront.net/assets/icon_popularity_02.svg" width="32" height="32"/></td>
                            </tr>
                            <tr class="border-bottom">
                                <th class="font-12" scope="row">7월</th>
                                <td class="font-12 color-gray">19.9ºC / 24.4ºC</td>
                                <td class="font-12"><img class="me-2" src="https://d34l91104zg4p3.cloudfront.net/assets/weather_heavy_rain.svg" width="20" height="20"/>22.2ºC</td>
                                <td class=""><img class="img_pop" src="https://d34l91104zg4p3.cloudfront.net/assets/icon_popularity_02.svg" width="32" height="32"/></td>
                            </tr>
                            <tr class="border-bottom">
                                <th class="font-12" scope="row">8월</th>
                                <td class="font-12 color-gray">21.3ºC / 26.0ºC</td>
                                <td class="font-12"><img class="me-2" src="https://d34l91104zg4p3.cloudfront.net/assets/weather_showers.svg" width="20" height="20"/>23.7ºC</td>
                                <td class=""><img class="img_pop" src="https://d34l91104zg4p3.cloudfront.net/assets/icon_popularity_02.svg" width="32" height="32"/></td>
                            </tr>
                            <tr class="border-bottom">
                                <th class="font-12" scope="row">9월</th>
                                <td class="font-12 color-gray">18.6ºC / 24.1ºC</td>
                                <td class="font-12"><img class="me-2" src="https://d34l91104zg4p3.cloudfront.net/assets/weather_sunny.svg" width="20" height="20"/>21.4ºC</td>
                                <td class=""><img class="img_pop" src="https://d34l91104zg4p3.cloudfront.net/assets/icon_popularity_02.svg" width="32" height="32"/></td>
                            </tr>
                            <tr class="border-bottom">
                                <th class="font-12" scope="row">10월</th>
                                <td class="font-12 color-gray">14.9ºC / 21.6ºC</td>
                                <td class="font-12"><img class="me-2" src="https://d34l91104zg4p3.cloudfront.net/assets/weather_partly_cloudy.svg" width="20" height="20"/>18.2ºC</td>
                                <td class=""><img class="img_pop" src="https://d34l91104zg4p3.cloudfront.net/assets/icon_popularity_02.svg" width="32" height="32"/></td>
                            </tr>
                            <tr class="border-bottom">
                                <th class="font-12" scope="row">11월</th>
                                <td class="font-12 color-gray">10.8ºC / 17.6ºC</td>
                                <td class="font-12"><img class="me-2" src="https://d34l91104zg4p3.cloudfront.net/assets/weather_partly_cloudy.svg" width="20" height="20"/>14.2ºC</td>
                                <td class=""><img class="img_pop" src="https://d34l91104zg4p3.cloudfront.net/assets/icon_popularity_01.svg" width="32" height="32"/></td>
                            </tr>
                            <tr>
                                <th class="font-12" scope="row">12월</th>
                                <td class="font-12 color-gray">6.4ºC / 13.8ºC</td>
                                <td class="font-12"><img class="me-2" src="https://d34l91104zg4p3.cloudfront.net/assets/weather_partly_cloudy.svg" width="20" height="20"/>10.1ºC</td>
                                <td class=""><img class="img_pop" src="https://d34l91104zg4p3.cloudfront.net/assets/icon_popularity_01.svg" width="32" height="32"/></td>
                            </tr>-->
                        </tbody>
                    </table>
                    <div class="text-end">
                        <img class="me-1 mb-3" height="20" src="https://d34l91104zg4p3.cloudfront.net/assets/logo-kma.svg" />
                    </div>
                </div>
            </div>
        </div>

        <div class="card card-style">
            <div class="content">
            <h4 class="text-start">이 지역의 활동강사 (2)</h4>
            <a class="color-highlight font-12 wedive-txt-all">모두보기</a>
            <div class="divider mt-3 mb-2"></div>
                <div class="splide instructor-slider slider-no-arrows slider-no-dots" id="single-slider-instructor">
                    <div class="splide__track">
                        <div class="splide__list">
                            <div class="splide__slide" style="width:220px !important;">
                                <div class="card card-style card-nearby mb-0" style="background: url(https://d34l91104zg4p3.cloudfront.net/assets/song.jpg);background-size:contain;" data-card-height="250" data-card-width="200">
                                    <svg style="width:60px;margin-top:-6px;filter:opacity(.3)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M128 80v380c0 3.3 3.8 5.2 6.4 3.2l116.8-92c2.9-2.1 6.8-2.1 9.6 0l116.8 92c2.6 2 6.4.1 6.4-3.2V80c0-17.7-14.3-32-32-32H160c-17.7 0-32 14.3-32 32z"/></svg>
                                    <span class="font-noto color-white" style="position:absolute;left:17px;top:8px;">추천</span>
                                    <div class="card-top px-3 py-3">
                                        <a href="#" data-menu="menu-heart" class="bg-white rounded-sm icon icon-xs float-end"><i class="fa fa-heart color-gray-light"></i></a>
                                    </div>
                                </div>
                                <div class="mt-0 px-3 py-3">
                                    <h4 class="color-black font-18 font-600">송현일 프리 강사</h4>
                                    <div class="d-flex">
                                        <div class="align-self-center" style="max-width: 100%;">
                                            <p class="font-12 opacity-70 font-600 color-black nearby_desc mb-0" style="max-width: 100%;">SSI 프리다이빙 강사<br/>생활스포츠지도사 1급 (다이빙)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="splide__slide" style="width:220px !important;">
                                <div class="card card-style card-nearby mb-0" style="background: url(https://d34l91104zg4p3.cloudfront.net/assets/lee.jpg);background-size:contain;" data-card-height="250" data-card-width="200">
                                    <div class="card-top px-3 py-3">
                                        <a href="#" data-menu="menu-heart" class="bg-white rounded-sm icon icon-xs float-end"><i class="fa fa-heart color-gray-light"></i></a>
                                    </div>
                                </div>
                                <div class="mt-0 px-3 py-3">
                                    <h4 class="color-black font-18 font-600">이진주 스쿠바 강사</h4>
                                    <div class="d-flex">
                                        <div class="align-self-center" style="max-width: 100%;">
                                            <p class="font-12 opacity-70 font-600 color-black nearby_desc mb-0" style="max-width: 100%;">PADI 스쿠바다이빙 강사<br/>2018 대한민국 아마추어 스쿠바 대상</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="card card-style">
            <div class="content">
            <h4 class="text-start">리뷰</h4>
            <a :href="'/review2/'+getDiveShopByUniqueName._id" class="color-highlight font-12 wedive-txt-all">모두보기</a>
            <div class="divider mt-3 mb-2"></div>
                <div v-if="getDiveShopByUniqueName.reviews && getDiveShopByUniqueName.reviews.length>0" class="splide single-slider slider-no-arrows slider-has-dots pb-2 mb-0 me-n2 ms-n2" id="single-slider-review">
                    <div class="splide__track">
                        <div class="splide__list">
                            <div v-for="review in getDiveShopByUniqueName.reviews" class="splide__slide pt-2">
                                <div class="min-h-230 p-2">
                                        <div class="d-flex">
                                            <div class="flex-grow-1">
                                                <div class="float-start">
                                                    <h1 class="fa-2x font-900 me-2 mb-0">{{review.rating}}.00</h1>
                                                    <p class="font-10 mb-0 mt-n2 opacity-40 text-end hide">보트 체험 다이빙</p>
                                                </div>
                                                <span>
                                                    <i v-for="index in review.rating" class="fa fa-star color-yellow-dark"></i>
                                                </span>
                                                
                                            </div>
                                            <div>
                                                <h6 class="text-end">{{ review.author.nickName }}</h6>
                                                <p class="font-10 mb-0 mt-n2 opacity-40 text-end">{{ review.createdAt ? timeForToday(review.createdAt) : '' }}</p>
                                            </div>
                                        </div>
                                        <p class="review-text mt-2 mb-1">
                                            <div v-if="review.images && review.images.length>0">
                                            <a v-for="(image,index) in review.images" v-if="index<3" :href="image.thumbnailUrl" data-gallery="gallery-99" class="filtr-item" title="" data-category="99">
                                                <img src="https://d34l91104zg4p3.cloudfront.net/assets/empty.png" :data-src="image.thumbnailUrl" class="preload-img rounded-s shadow-m review_img" alt="방문자리뷰">
                                            </a>
                                            </div>
                                            {{ review.content }}
                                        </p>
                                        <a data-menu="menu-report" v-on:click="selectedReview = review;"><span class="font-10 mb-0 mt-n2 opacity-40 p-2" style="position:absolute;right:0;bottom:10px;"><img src="/static/images/assets/icon_alarm.png" width="16" style="margin-bottom: 5px;margin-right:3px;"/>신고하기</span></a>
                                </div>     
                            </div>
                            <div class="splide__slide">
                                <a :href="'/review2/'+getDiveShopByUniqueName._id">
                                <div class="min-h-230 p-2">
                                        <h1 class="text-center"><i class="fas fa-pen-square fa-2x color-highlight mt-4"></i></h1>
                                        <h1 class="text-center pt-3 font-20 mb-n1">{{ getDiveShopByUniqueName.reviews.length }}개 리뷰</h1>
                                        <p class="text-center color-highlight font-600">더보기 <i class="fas fa-chevron-right"></i></p>
                                </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else class="text-center">
                    <img src="https://d34l91104zg4p3.cloudfront.net/assets/empty_list.jpg" width="50%" />
                    <p class="color-gray">아직 작성된 리뷰가 없어요.</p>
                </div>
            </div>
            <div class="divider mt-2 mb-2 ms-3 me-3"></div>
            <div v-on:click="login()" :data-menu="((idToken == null || nickName == null || nickName == 'null') ? '' : 'menu-review')" :class="((idToken == null || nickName == null || nickName == 'null') ? 'opacity-40' : '')">
                <div class="star-area mt-4 text-center" style="letter-spacing: -2px;">
                    <i class="fa fa-star font-20 color-gray-light"></i>
                    <i class="fa fa-star font-20 color-gray-light"></i>
                    <i class="fa fa-star font-20 color-gray-light"></i>
                    <i class="fa fa-star font-20 color-gray-light"></i>
                    <i class="fa fa-star font-20 color-gray-light"></i>
                </div>
                <div class="me-4 ms-4 mt-1" style="margin-bottom: 34px;background: rgba(58, 58, 58, 0.03);padding: 10px 20px;border-radius: 4px;">
                    <p class="mb-0" style="color: rgba(58, 58, 58, 0.6)">다른 다이버들에게 도움이 되어보세요.</p>
                    <p class="mb-0 color-highlight">지금 리뷰남기기 <i class="fas fa-chevron-right ms-1"></i></p>
                </div>
            </div>
        </div>


        <div data-menu-load="/static/menu-footer.html"></div>
        <div id="footer-bar-shop" class="d-flex" style="min-height: 52px !important;height: 52px !important;">
            <div class="flex-fill speach-input pt-2 pb-2 ps-4 pe-4">
                <div class="row">
                    <a data-menu="menu-reservation" :class="(getDiveShopByUniqueName.isBookable == null || getDiveShopByUniqueName.isBookable == true ? 'col-6' : 'col-12') + ' btn btn-full font-400 rounded-s shadow-l gradient-highlight color-white bd-w-0 font-noto font-500'" style="width: calc(50% - 6px);margin-right:6px;"><i class="fas fa-calendar-check me-2"></i>예약</a>
                    <a v-on:click="findBuddyClick()" :class="(getDiveShopByUniqueName.isBookable == null || getDiveShopByUniqueName.isBookable == true ? '' : 'hide ') + 'col-6 btn btn-full font-400 rounded-s shadow-l gradient-highlight color-white bd-w-0 font-noto font-500'" style="width: calc(50% - 6px);margin-left:6px;"><i class="fas fa-user-friends me-2"></i>버디모집</a>
                </div>
            </div>
        </div>
    </div>


    <!-- End of Page Content--> 
    <!-- All Menus, Action Sheets, Modals, Notifications, Toasts, Snackbars get Placed outside the <div class="page-content"> -->
    <!-- Menu reservation -->
    <div id="menu-reservation-confirmed" 
        class="menu menu-box-modal rounded-0"
        data-menu-width="cover"
        data-menu-height="cover"
        style="margin-bottom: 0;">
        <div class="text-center">
            <i class="fas fa-check-circle color-secondary" style="font-size:50px;margin-top:40%;"></i>
            <div class="font-noto font-500 font-20 mt-2">예약 접수완료</div>
            <div class="font-noto color-gray mt-3" style="line-height:1.5;">담당자가 확인중입니다.<br/>{{ getDiveShopByUniqueName.name }}는 평균 10분내 예약이 완료됩니다.</div>
        </div>
        <div class="font-noto font-16 me-4 ms-4" style="margin-top:30%;">
            <p class="color-gray pb-1 mb-1" style="border-bottom: 2px dotted #e1e2e3;">센터명
                <span class="color-black" style="float:right;">{{ getDiveShopByUniqueName.name }}</span>
            </p>
            <p class="color-gray mb-1">예약일
                <span class="color-black" style="float:right;">{{ day_show }}</span>
            </p>
            <p class="color-gray mb-1">인원
                <span class="color-black" style="float:right;">{{ people_show + '명' }}</span>
            </p>
        </div>
        <div style="min-height: 62px !important;height: 62px !important;position: fixed;bottom: 0;width: 100%;">
            <div class="flex-fill speach-input p-2">
            <a class="close-menu btn btn-full font-400 rounded-s shadow-l gradient-highlight color-white bd-w-0 font-noto font-600">확인</a>
            </div>
        </div>
    </div>
    <!-- Menu reservation -->
    <div id="menu-reservation" 
        class="menu menu-box-modal rounded-0"
        data-menu-width="cover"
        data-menu-height="cover"
        style="margin-bottom: 0;">
        <div class="header header-fixed header-logo-center">
            <a href="" class="header-title color ellipsis">{{ getDiveShopByUniqueName.name + ' 예약' }}</a>
            <a data-back-button class="close-menu font-16 header-icon header-icon-1"><i class="fas fa-chevron-left"></i></a>
        </div>
        <div class="p-2 pb-4" style="margin-top:50px;">
            <div style="position: relative;">
                <div class="d-flex no-effect" 
                    data-bs-toggle="collapse" 
                    href="#collapse1"
                    role="button" 
                    aria-expanded="false" 
                    aria-controls="collapse1"
                    id="collapse1_area"
                    v-on:click="collapse1()"
                    >
                    <div class="">
                        <h4 class="pt-3 mb-2 content mt-0 mb-2 font-17 font-500 font-noto"><!--<i class="fas fa-calendar me-2"></i>-->예약일자</h4>
                        <h4 class="pt-3 mb-2 content mt-0 mb-2 font-300 color-secondary" style="position: absolute;right: 0px;top: 4px;">{{ day_show }}</h4>
                    </div>
                    
                </div>
                <div class="collapse show" id="collapse1">
                    <v-calendar
                        is-expanded
                        v-model="selectedDate"
                        @dayclick="onDayClick"
                        :min-date="new Date()"
                        :attributes="attributes"
                        :select-attribute="selectAttribute"
                        :theme="theme"></v-calendar>
                </div>
            </div>




            <div style="position: relative;">
                <div class="d-flex no-effect" 
                    data-bs-toggle="collapse" 
                    href="#collapse2"
                    role="button" 
                    aria-expanded="false" 
                    aria-controls="collapse2"
                    id="collapse2_area"
                    v-on:click="collapse2()"
                    >
                    <div class="">
                        <h4 class="pt-3 mb-2 content mt-0 mb-2 font-17 font-500 font-noto"><!--<i class="fas fa-clock me-2"></i>-->예약정보</h4>
                        <h4 class="pt-3 mb-2 content mt-0 mb-2 font-300 color-secondary" style="position: absolute;right: 0px;top: 4px;">{{showTicket}}</h4>
                    </div>
                    
                </div>
                <div class="collapse" id="collapse2">
                    <div class="p-2 row" style="padding-left:35px !important;padding-right:25px !important;">
                        <div class="color-highlight font-12">※ 위다이브 컨시어지가 예약을 도와드립니다.</div>
                        <textarea class="wedive-textarea2 wedive-input" style="min-height: 180px;" placeholder="요청사항을 입력하세요." v-model="reservation_requirement"></textarea>
                    </div>
                </div>
            </div>




            <div style="position: relative;">
                <div class="d-flex no-effect" 
                    data-bs-toggle="collapse" 
                    href="#collapse3"
                    role="button" 
                    aria-expanded="false" 
                    aria-controls="collapse3"
                    id="collapse3_area"
                    v-on:click="collapse3()"
                    >
                    <div class="">
                        <h4 class="pt-3 mb-2 content mt-0 mb-2 font-17 font-500 font-noto"><!--<i class="fas fa-user me-2"></i>-->예약인원</h4>
                        <h4 class="pt-3 mb-2 content mt-0 mb-2 font-300 color-secondary" style="position: absolute;right: 0px;top: 4px;">{{people_show+'명'}}</h4>
                    </div>
                    
                </div>
                <div class="collapse" id="collapse3">
                    <div class="p-2 text-end">
                        <div class="color-highlight font-12">예약인원을 선택하세요.</div>
                        <div class="mx-auto" style="display: inline-block;">
                            <div class="stepper">
                            <a v-on:click="people_show-=1" class="stepper-sub"><i class="fa fa-minus color-theme opacity-40"></i></a>
                            <input type="number" min="1" max="99" value="1" id="people_count">
                            <a v-on:click="people_show+=1" class="stepper-add"><i class="fa fa-plus color-theme opacity-40"></i></a>
                            </div>
                            <div class="clearfix"></div>
                        </div>
                    </div>
                    <div class="m-2 p-2 pe-3 ps-3" style="background: #fff4f4;color: #fc4c42;border-radius:4px;">
                        당일 예약취소는 업체에 유선상 연락주세요.
                    </div>
                </div>
            </div>
        </div>
        <div class="divider mb-0" style="height: 12px; border-top: 1px solid rgba(136, 136, 136, 0.25);"></div>

        <div class="p-2 content mt-2 mb-2 pb-3 font-noto">
            <h4 class="row m-0 mb-3 font-17 font-500">예약자 정보</h4>
            <div class="col-3 font-16" style="display: inline-block;vertical-align: top;padding-top: 7px;width: calc(33.33333333% - 4px);">예약자</div>
            <textarea rows="1" class="wedive-textarea2 wedive-input col-8" placeholder="이름을 입력하세요." v-model="reservation_name"></textarea>

            <div class="col-3 font-16" style="display: inline-block;vertical-align: top;padding-top: 7px;width: calc(33.33333333% - 4px);">전화번호</div>
            <input type="number" class="wedive-input2 wedive-input col-8 font-16 font-noto" style="margin-bottom: 7px;" placeholder="핸드폰 번호를 입력하세요." v-model="reservation_phone" id="textarea_reservation_phone"></input>

            <div class="col-3 font-16" style="display: inline-block;vertical-align: top;padding-top: 7px;width: calc(33.33333333% - 4px);">이메일</div>
            <input type="email" class="wedive-input2 wedive-input col-8 font-16 font-noto" style="margin-bottom: 7px;"placeholder="이메일 주소를 입력하세요." v-model="reservation_email"></input>
        </div>

        <div class="divider mb-0" style="height: 12px; border-top: 1px solid rgba(136, 136, 136, 0.25);"></div>
        
        <div class="p-2 pb-3 content mt-2 mb-2 font-noto">
            <h4 class="row m-0 mb-3 font-17 font-500">개인정보 수집, 제공</h4>
            <div class="accordion mt-3" id="accordion-2">
                <div class="card card-style shadow-0 m-0 mb-1" style="border-radius: 8px;">
                    <button class="btn accordion-btn color-black no-effect" data-bs-toggle="collapse" data-bs-target="#accordion1" style="padding: 6px 12px 10px 2px;">
                        <i class="far fa-check-circle me-2 color-secondary font-16"></i>개인정보 수집 동의
                        <i class="fa fa-chevron-down font-10 accordion-icon"></i>
                    </button>

                    <div id="accordion1" class="collapse bg-theme" data-bs-parent="#accordion-2">
                        <div class="" style="max-height: 160px;overflow-y: auto;">
                            <p class="agreement_content pe-3 ps-3 color-gray" style="background: #fafbfc;">
                                &lt;개인정보 수집 동의&gt;<br><br>
                                1. 기본수집항목: [필수] 위다이브 아이디, 이름, (휴대)전화번호, [선택] 이메일 주소<br>※ 추가 수집하는 필수항목<br>- 배송, 방문 등이 필요한 상품 구매 시 : 주소<br>- 해외 여행 관련 상품 구매 시 : 여권상 영문명, 여권번호 끝 4자리, 성별, 생년월일, 이메일주소, 카카오톡ID, 동행 아동정보(여권상 영문명, 생년월일, 신장)<br>- 병원을 이용하는 경우: 생년월일 (병원 재진 시 이전 진료기록 조회를 위해 예약자명, 생년월일, 전화번호가 수집될 수 있습니다.)<br><br>
                                2. 수집 및 이용목적 : 사업자회원과 예약이용자의 원활한 거래 진행, 고객상담, 불만처리 등 민원 처리, 분쟁조정 해결을 위한 기록보존, 위다이브 예약 이용 후 리뷰작성에 따른 위다이브 리워드 지급 및 관련 안내<br><br>
                                3. 보관기간<br>
                                - 회원탈퇴 시 지체없이 파기<br>
                                - 단, 관련 법령에&nbsp;의하여&nbsp;일정&nbsp;기간&nbsp;보관이&nbsp;필요한&nbsp;경우에는&nbsp;해당&nbsp;기간&nbsp;동안&nbsp;보관함<br><br>
                                4. 동의 거부권 등에 대한 고지: 정보주체는 개인정보의 수집 및 이용 동의를 거부할 권리가 있으나, 이 경우 상품 및 서비스 예약이 제한될 수 있습니다.&nbsp;그 밖의 내용은 위다이브 개인정보 처리방침을 따릅니다.<br>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="card card-style shadow-0 m-0 mb-1" style="border-radius: 8px;">
                    <button class="btn accordion-btn color-black no-effect" data-bs-toggle="collapse" data-bs-target="#accordion2" style="padding: 6px 12px 10px 2px;">
                        <i class="far fa-check-circle me-2 color-secondary font-16"></i>개인정보 제공 동의
                        <i class="fa fa-chevron-down font-10 accordion-icon"></i>
                    </button>
                    <div id="accordion2" class="collapse bg-theme" data-bs-parent="#accordion-2">
                        <div class="" style="max-height: 160px;overflow-y: auto;">
                            <p class="agreement_content pe-3 ps-3 color-gray" style="background: #fafbfc;">
                                &lt;개인정보 제공 동의&gt;<br><br>
                                <span class="font-600">1. 개인정보를 제공받는 자 : {{ getDiveShopByUniqueName.name }}</span><br><br>
                                2. 제공하는 기본 개인정보 항목:
                                &nbsp;[필수] 위다이브 아이디, 이름, (휴대)전화번호, 성별, 연령대, [선택] 이메일 주소<br>※ 추가 제공하는 필수항목<br>- 배송, 방문 등이 필요한 상품 구매 시 : 주소<br>- 해외 여행 관련 상품 구매 시 : 여권상 영문명, 여권번호 끝 4자리, 생년월일, 이메일주소, 카카오톡ID, 동행 아동정보(여권상 영문명, 생년월일, 신장)<br>- 병원을 이용하는 경우: 생년월일 (병원 재진 시 이전 진료기록 조회를 위해 예약자명, 생년월일, 전화번호가 수집될 수 있습니다.)<br><br>
                                <span class="font-600">3. 개인정보를 제공받는 자의 이용목적 : 사업자회원과 예약이용자의 원활한 거래 진행, 서비스 분석과 통계에 따른 혜택 및 맞춤 서비스 제공, 민원처리 등 고객상담, 고객관리, 서비스 이용에 따른 설문조사 및 혜택 제공, 분쟁조정을 위한 기록보존</span><br><br>
                                <span class="font-600">4. 개인정보를 제공받는 자의 개인정보 보유 및 이용기간 : 위다이브 회원탈퇴 시 또는 위 개인정보 이용목적 달성 시 까지 이용합니다.</span><br><br>
                                5. 동의 거부권 등에 대한 고지 : 정보주체는 개인정보 제공 동의를 거부할 권리가 있으나, 이 경우 상품 및 서비스 예약이 제한될 수 있습니다.<br>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="p-2 color-gray" style="line-height: 1.4;">
                예약 서비스 이용을 위한 개인정보 수집 및 제3자 제공 규정을 확인하였으며 이에 동의합니다.
            </div>
        </div>

        <div style="min-height: 62px !important;height: 62px !important;">
            <div class="flex-fill speach-input p-2">
            <a v-on:click="makeReservation()" class="btn btn-full font-400 rounded-s shadow-l gradient-highlight color-white bd-w-0 font-noto font-500"><i class="fas fa-calendar-check me-2"></i>예약 신청하기</a>
            </div>
        </div>
    </div>
    <!-- Menu Share -->
    <div id="menu-share" class="menu menu-box-bottom rounded-half">
        <div class="menu-title mt-n1">
            <h2 class="pt-3 pb-3 text-center">공유</h2>
            <a href="#" class="close-menu"><i class="wedive_icoset wedive_icoset_close"></i></a>
        </div>
        <div class="content mb-0 text-start">
            <div class="divider mb-0"></div>
            <div class="list-group list-custom-small list-icon-0">
                <a href="auto_generated" class="shareToFacebook external-link">
                    <i class="font-18 fab fa-facebook-square color-facebook"></i>
                    <span class="font-13">Facebook</span>
                    <i class="fa fa-angle-right"></i>
                </a>
                <a href="auto_generated" class="shareToTwitter external-link">
                    <i class="font-18 fab fa-twitter-square color-twitter"></i>
                    <span class="font-13">Twitter</span>
                    <i class="fa fa-angle-right"></i>
                </a>
                <a href="auto_generated" class="shareToLinkedIn external-link">
                    <i class="font-18 fab fa-linkedin color-linkedin"></i>
                    <span class="font-13">LinkedIn</span>
                    <i class="fa fa-angle-right"></i>
                </a>        
                <a href="auto_generated" class="shareToWhatsApp external-link">
                    <i class="font-18 fab fa-whatsapp-square color-whatsapp"></i>
                    <span class="font-13">WhatsApp</span>
                    <i class="fa fa-angle-right"></i>
                </a>   
                <a href="auto_generated" class="shareToMail external-link border-0">
                    <i class="font-18 fa fa-envelope-square color-mail"></i>
                    <span class="font-13">Email</span>
                    <i class="fa fa-angle-right"></i>
                </a>
            </div>
        </div>
    </div>

    <!-- Added to Bookmarks Menu-->
    <div id="menu-copy" class="menu menu-box-modal rounded-m" data-menu-hide="800" data-menu-width="250" data-menu-height="170">
        <h1 class="text-center mt-3 pt-2">
            <i class="fa fa-check-circle color-green-dark fa-3x"></i>
        </h1>
        <h3 class="text-center pt-2">Copied to clipboard</h3>
    </div> 
        
    <!-- Direction Share -->
    <div id="menu-direction" class="menu menu-box-bottom rounded-half">
        <div class="menu-title mt-n1">
            <h2 class="pt-3 pb-3 text-center">오시는 길</h2>
            <a href="#" class="close-menu"><i class="wedive_icoset wedive_icoset_close"></i></a>
        </div>
        <div class="content mb-0 text-start">
            <p class="color-highlight font-600 mb-1">1 ~ 2인 이동 방법</p>
            <p class="mb-0 px-2">
            <i class="fas fa-shuttle-van mr-2"></i> 공항리무진 (600번) 이용<br/>
            <i class="fas fa-won-sign mr-2"></i> 5,500원<br/>
            <i class="fas fa-car mr-2"></i> 제주공항 5번 게이트 <i class="fas fa-arrow-right"></i> 서귀포항구 하차<br/>
            <i class="far fa-clock mr-2"></i> 1시간 30분 소요<br/>
            <i class="fas fa-walking mr-2"></i> 버블탱크까지 도보 3분
            </p>

            <div class="divider mt-2 mb-2"></div>

            <p class="color-highlight font-600 mb-1">3 ~ 4인 이동 방법</p>
            <p class="mb-0 px-2">
            <i class="fas fa-shuttle-van mr-2"></i> 서귀포 콜택시 이용<br/>
            <i class="fas fa-won-sign mr-2"></i> 25,000원<br/>
            <i class="fas fa-car mr-2"></i> 제주공항 <i class="fas fa-arrow-right"></i> 버블탱크 하차<br/>
            <i class="far fa-clock mr-2"></i> 1시간 소요<br/>
            </p>
        </div>
    </div>

    <!-- 구독 팝업 -->
    <div id="menu-subscribe" 
         class="menu menu-box-modal" 
         data-menu-height="470" 
         data-menu-width="370">
        <div class="menu-title">
            <h4 class="text-center mt-4 pt-1 mb-2 font-noto font-19">{{ getDiveShopByUniqueName.name }} 알림</h4>
            <a href="#" class="close-menu hide"><i class="fa fa-times-circle"></i></a>
            <div class="text-center color-gray-light-mid mb-1">
                <i class="wedive_icoset wedive_icoset_info me-1"></i> 원하는 일정에 알림을 추가할 수 있어요.
            </div>
        </div>
        <div class="me-4 ms-4" style="border-bottom: 2px solid black;"></div>
        <div class="content mt-3">
            <div class="wedive-select" style="min-height:250px;max-height: 250px;overflow-y: auto;">
                <div class="text-center">
                    <img src="https://d34l91104zg4p3.cloudfront.net/assets/empty_schedule2.jpg" width="85%" class="mt-2"/>
                    <p class="color-gray-light-mid">등록된 알림 일정이 없어요.</p>
                </div>
                <!--<div v-on:click="clickSelect" class="wedive-select-border">
                    <div class="form-check icon-check">
                        <label class="form-check-label font-noto font-14 font-500"><i class="far fa-circle font-20" style="display: block;"></i>
                            나만의 월화수 알림</label>
                    </div>
                    <div class="row mb-0 font-noto" style="margin:0 8px;">
                        <div class="col-6 mt-2 color-gray p-0">
                            <span>일</span>
                            <span class="emphasis">월</span>
                            <span class="emphasis">화</span>
                            <span class="emphasis">수</span>
                            <span>목</span>
                            <span>금</span>
                            <span>토</span>
                        </div>
                        <div class="col-6 p-0 text-end" style="margin-top: 10px;">
                            <span class="chip-normal">오전</span>
                            <span class="chip-emphasis">오후</span>
                            <span class="chip-normal">저녁</span>
                        </div>
                    </div>
                </div>

                <div v-on:click="clickSelect" class="wedive-select-border">
                    <div class="form-check icon-check">
                        <label class="form-check-label font-noto font-14 font-500"><i class="far fa-circle font-20" style="display: block;"></i>
                            블라블라 다른이름</label>
                    </div>
                    <div class="row mb-0 font-noto" style="margin:0 8px;">
                        <div class="col-6 mt-2 color-gray p-0">
                            <span>일</span>
                            <span class="emphasis">월</span>
                            <span class="emphasis">화</span>
                            <span class="emphasis">수</span>
                            <span>목</span>
                            <span>금</span>
                            <span>토</span>
                        </div>
                        <div class="col-6 p-0 text-end" style="margin-top: 10px;">
                            <span class="chip-emphasis">오전</span>
                            <span class="chip-emphasis">오후</span>
                            <span class="chip-emphasis">저녁</span>
                        </div>
                    </div>
                </div>

                <div v-on:click="clickSelect" class="wedive-select-border">
                    <div class="form-check icon-check">
                        <label class="form-check-label font-noto font-14 font-500"><i class="far fa-circle font-20" style="display: block;"></i> 
                            서울지역 알림</label>
                    </div>
                    <div class="row mb-0 font-noto" style="margin:0 8px;">
                        <div class="col-6 mt-2 color-highlight font-500 p-0">
                            <span>1/21(월) ~ 1/23(수)</span>
                        </div>
                        <div class="col-6 p-0 text-end" style="margin-top: 10px;">
                            <span class="chip-normal">오전</span>
                            <span class="chip-emphasis">오후</span>
                            <span class="chip-normal">저녁</span>
                        </div>
                    </div>
                </div>

                <div v-on:click="clickSelect" class="wedive-select-border">
                    <div class="form-check icon-check">
                        <label class="form-check-label font-noto font-14 font-500"><i class="far fa-circle font-20" style="display: block;"></i> 
                            동남아 여행 알림</label>
                    </div>
                    <div class="row mb-0 font-noto" style="margin:0 8px;">
                        <div class="col-6 mt-2 color-highlight font-500 p-0">
                            <span>1/21(월) ~ 1/23(수)</span>
                        </div>
                        <div class="col-6 p-0 text-end" style="margin-top: 10px;">
                            <span class="chip-normal">오전</span>
                            <span class="chip-emphasis">오후</span>
                            <span class="chip-normal">저녁</span>
                        </div>
                    </div>
                </div>-->
            </div>
        </div>

        <div class="text-center font-noto font-500 font-15 mt-3">
            <i class="wedive_plus me-1" style="filter:brightness(0);"></i> 알림 일정 추가
        </div>

        <div class="row m-0 mt-3">
            <div class="col-6 pe-1">
                <a href="#" class="close-menu btn btn-m btn-full rounded-0 text-uppercase font-900 shadow-s bg-gray-dark">취소</a>
            </div>
            <div class="col-6 ps-1">
                <a v-on:click="review_send()" class="btn btn-m btn-full rounded-0 text-uppercase font-900 shadow-s bg-black">알림 설정</a>
            </div>
        </div>
    </div>


    <!-- 리뷰 팝업 -->
    <div id="menu-review" 
         class="menu menu-box-modal" 
         data-menu-height="470" 
         data-menu-width="370">
        <div class="menu-title">
            <h4 class="text-center mt-4 pt-1 mb-2 font-noto font-19">{{ getDiveShopByUniqueName.name }} 리뷰</h4>
            <a href="#" class="close-menu hide"><i class="fa fa-times-circle"></i></a>
        </div>
        <div class="me-4 ms-4" style="border-bottom: 2px solid black;"></div>
        <div class="content mt-3">
            <div class="text-center mt-3">
                <star-rating @rating-selected="setRating" text-class="hide" :rating="rating" v-bind:star-size="30" :padding="5" :rounded-corners="true" :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]" style="display: inline-block;"></star-rating>
            </div>
            <div class="text-center color-gray mt-1 mb-2" v-html="rateDescription"></div>
        </div>
        <div class="content mt-0">
            <div class="input-style validate-field mt-3">
                <textarea class="wedive-textarea wedive-input" placeholder="의견을 자유롭게 적어주세요." v-model="review_detail"></textarea>
            </div>
            <div id="div_upload_photo" class="row m-0 mb-3">
            </div>
            <div class="mb-3 text-center p-2 wedive-button">
                <input type="file" @change="addImage" id="" accept=".jpg, .png" style="text-indent: -999px;outline: none;width: 100%;height: 45px;color: rgba(0, 0, 0, 0) !important;">
                <div class="upload-file-text" style="color: black;margin-top:-44px !important;margin-bottom:12px;"><img class="me-1" src="https://d34l91104zg4p3.cloudfront.net/assets/icon_camera.png" height="18"/>첨부하기</div>
            </div>
        </div>

        <div class="row m-0">
            <div class="col-6 pe-1">
                <a href="#" class="close-menu btn btn-m btn-full rounded-s text-uppercase font-900 shadow-s bg-gray-dark">취소</a>
            </div>
            <div class="col-6 ps-1">
                <a v-on:click="review_send()" class="btn btn-m btn-full rounded-s text-uppercase font-900 shadow-s bg-black">리뷰등록</a>
            </div>
        </div>
    </div>

    <!-- 신고하기 -->
    <div id="menu-report" 
          class="menu menu-box-modal rounded-0" 
          data-menu-width="cover"
          data-menu-height="cover"
          style="margin-bottom: 0;">
          
          <div class="card rounded-0 bg-2" data-card-height="50" style="margin-bottom: 24px;">
              <div class="card-top p-2">
                  <a href="#" class="close-menu icon icon-s rounded-l bg-theme color-theme "><i class="fa fa-arrow-left"></i></a>
                  <a href="" class="header-title color font-noto font-16">신고사유를 선택하세요.</a>
              </div>
          </div>
          
          <div class="card rounded-0 content">
              <div v-for="report in $root.$children[0].report_items" class="form-check icon-check mb-3">
                  <input class="form-check-input" type="radio" :value="report[0]" :id="'radio_report'+report[0]" name="radioReport" v-on:click="clickReportRadio('radio_report' + report[0])">
                  <label class="form-check-label font-noto font-18 font-500 opacity-30" :for="'radio_report'+report[0]">{{ report[1] }}</label>
                  <i class="icon-check-1 far fa-circle color-gray-dark font-16"></i>
                  <i class="icon-check-2 far fa-check-circle font-16 color-highlight" style="font-size: 20px !important;"></i>
              </div>
          </div>
          <div style="position: absolute;bottom: 0;width:100%;">
              <a v-on:click="makeReport()" id="btn_report" disabled="disabled" href="#" class="btn btn-full font-400 rounded-s shadow-l gradient-highlight color-white bd-w-0 ms-3 me-3 mb-3" style="height: 46px;padding-top: 10px;">신고하기</a>
          </div>
    </div>

    <!-- Bottom institution -->
    <vue-bottom-sheet ref="institutionBottomSheet">
        <div class="m-3 text-center">
            <div class="color-primary font-noto font-20 font-600">{{ this.open_insti }}</div>
        </div>
        <div class="content row mt-0 mb-0" style="display:inline-block;">
            <div id="institutionBottomSheetContent" style="min-height:250px;"></div>
        </div>
    </vue-bottom-sheet>

    <div id="snackbar-review-success" class="snackbar-toast color-white bg-green-dark" data-bs-delay="1500" data-bs-autohide="true" style="z-index:999;"><i class="fa fa-times me-3"></i>리뷰 등록이 완료되었습니다.</div>
    <div id="snackbar-day-error" class="snackbar-toast color-white bg-red-dark" data-bs-delay="2000" data-bs-autohide="true" style="z-index:999;"><i class="fa fa-times me-3"></i>선택할 수 없는 날짜 입니다.</div>
    <div id="snackbar-phone-error" class="snackbar-toast color-white bg-red-dark" data-bs-delay="2000" data-bs-autohide="true" style="z-index:999;"><i class="fa fa-times me-3"></i>전화번호를 입력하세요.</div>
  </div>
</template>
<script>
import VueBottomSheet from "@webzlodimir/vue-bottom-sheet";
import StarRating from 'vue-star-rating'
import gql from 'graphql-tag'
import { ContentLoader } from 'vue-content-loader'

//import { GraphQLClient, request, gql } from "graphql-request";
const axios = require("axios")
var weekday_ko = ["", "일", "월", "화", "수", "목", "금", "토"];

export default {
  name: 'HelloWorld',
  async mounted() {
    var preloader = document.getElementById('preloader')
    if(preloader){preloader.classList.add('preloader-hide');}

    if (this.$route.query.header && this.$route.query.header == 'hide') {
        $(".page-title").hide();
        $(".page-title-clear").hide();
        $(".header-fixed").hide();
    }
  },
  created() {
  },
  beforeDestroy () {
    
  },
  components: {
    StarRating,
    VueBottomSheet,
    ContentLoader,
  },
  data () {
    return {
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
        uniqueName: this.$route.params.id,
        map: null,
        marker_list: [],
        getDiveShopByUniqueName: {},
        feature_list: ["외국어가능", "샤워가능", "룸서비스", "늦은 퇴실", "컨시어지", "주차", "주방", "남녀화장실", "24시업무", "비지니스", "장애인편의", "세탁서비스", "금연실", "아이돌봄", "반려동물", "WIFI", "공항셔틀", "피트니스", "도미토리", "감압챔버", "픽업", "일부장비", "전용보트", "아쿠아리움", "나이트록스", "DPV", "무료렌탈", "강의실", "수건제공", "유료샤워", "딥수영장", "장비렌탈불가", "스튜디오", "국제규격", "다이빙풀"],
        pay_list: ["현금", "VISA", "MasterCard", "UnionPay", "JCB", "American Express", "Discover card", "PAYCO", "Kakao Pay", "Naver Pay"],
        equipt_list: ["마스크", "레귤레이터", "다이버 PC", "다이버 워치", "나침반", "수중 스쿠터", "산소탱크", "핀", "구명조끼", "나이프", "스노클링", "부츠", "잠수복 상의", "잠수복 하의", "라이트", "스쿠버 세트", "카메라", "수심계", , "게이지", "잠수복", , "풀세트", "유아장비"],
        rentalOptions: ["스킨스쿠바 풀세트", "스킨 풀세트", "마스크", "스노클", "잠수복", "오리발", "부츠", "장갑", "부츠&장갑", "웨이트&벨트", "웨이트", "스쿠버 세트", "BCD", "호흡기", "보조호흡기", "SMB", "공기통", "나이트록스", "라이트", "컴퓨터", "카메라", "DPV", "조류걸이", "프리 풀세트", "프리 핀", "프리 마스크", "프리 스노클", "프리 잠수복", "프리벨트", "프리웨이트", "바텀웨이트", "랜야드", "부이", "로프", "부이&로프", "고정부이", "사이드마운트", "더블탱크", "아르곤탱크", "재호흡기", "공기충전", "옥토퍼스", "마스크&스노클", "후드", "나이프", "랜턴", "텍렌턴", "잠수복(숏)", "잠수복(원피스)", "프리 마스크&스노클", "모노핀", "탐침봉", "나침반", "다이빙풀", "머메이드"],
        imageCategory: ["다이빙", "교육", "센터"],
        enteranceScuba: {"5": "강사 동반 입장 (그 외 불가)", "4": "마스터 이상 버디입장 가능", "3": "레스큐 이상 버디입장 가능", "2": "어드밴스 이상 버디입장 가능", "1": "오픈워터 이상 버디입장 가능", "0": "누구나 버디입장 가능"},
        enteranceFree: {"5": "강사 동반 입장 (그 외 불가)", "4": "레벨4 이상 버디입장 가능", "3": "레벨3 이상 버디입장 가능", "2": "레벨2 이상 버디입장 가능", "1": "레벨1 이상 버디입장 가능", "0": "누구나 버디입장 가능"},
        rating: 5,
        rateDescription: '매우 만족해요!',
        review_detail: '',
        file_photo: [],
        like_img: 'ico_heart',
        subscribe_img: 'ico_subscribe',
        idToken: localStorage.idToken,
        nickName: localStorage.nickName,
        open_insti: null,
        enumPopularity: {"nothing":"icon_popularity_01", "unrecommended": "icon_popularity_01", "soso": "icon_popularity_02", "popular": "icon_popularity_03"},
        enumClimate: {"nothing": "weather_sunny", "sunny": "weather_sunny", "cloudy": "weather_partly_cloudy", "rain": "weather_showers", "heavyRain": "weather_heavy_rain"},
        weatherIcon: {"clear sky":"sunny_light","few clouds":"mostly_sunny","broken clouds":"partly_cloudy","scattered clouds":"mostly_cloudy_day","overcast clouds":"cloudy","light rain":"scattered_showers_day","light intensity shower rain":"scattered_showers_day","shower rain":"showers_rain","moderate rain":"heavy_rain","light snow":"flurries","light shower snow":"wintry_mix_rain_snow","snow":"snow_showers_snow","mist":"mist","fog":"fog","haze":"haze_fog_dust_smoke","smoke":"haze_fog_dust_smoke","thunderstorm":"strong_tstorms"},

        day_show: "",
        hour_show: "",
        showTicket: "",
        people_show: 1,
        selectedDate: null,
        now: new Date(),
        hour_array: ["7:00", "7:30", "8:00", "8:30", "9:00", "9:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30"],
        theme: {
            container: {
            light: 'light-container-class',  // Classes to apply for light mode
            dark: 'dark-container-class',  // Classes to apply for dark mode
            }
        },
        selectAttribute: {
            highlight: {
                backgroundColor: '#08A14A', // green
                borderColor: '#067B39',
                borderWidth: '2px',
                borderStyle: 'solid'
            },
            contentStyle: {
                color: 'white'
            },
            // Don't need the date here
        },
        reservation_name: localStorage.userName,
        reservation_phone: '',
        reservation_email: localStorage.userEmail,
        reservation_requirement: '다이빙 횟수 : \n숙박 포함여부 (방개수) : \n식사 여부 : \n\n기타 : 체험다이빙, 강습 등 요청사항',
        selectedReview: null,
    }
  }, 
  computed: {
    attributes() {
        // Insert today's attribute
        // Insert weekend attribute
    },
  },
  apollo: {
      getDiveShopByUniqueName: {
          query:gql `
            query getDiveShopByUniqueName($uniqueName: String!) {
                getDiveShopByUniqueName(uniqueName: $uniqueName) {
                    _id
                    managers {
                    _id
                    name
                    email
                    gender
                    birthAge
                    }
                    clerks {
                    _id
                    name
                    email
                    gender
                    birthAge
                    }
                    divingType
                    phoneNumber
                    email
                    enteranceFee
                    enteranceLevelFree
                    enteranceLevelScuba
                    placeOpeningHours
                    institutionTypes
                    webPageUrl
                    address
                    adminScore
                    viewScore
                    educationScore
                    facilityScore
                    serviceScore
                    wediveComments
                    images {
                        _id
                        reference
                        description
                        thumbnailUrl
                    }
                    backgroundImages {
                        _id
                        reference
                        thumbnailUrl
                    }
                    interests {
                        _id
                        title
                        type
                    }
                    tickets {
                        _id
                        price
                        unitName
                        name
                        uniqueName
                        days
                        hours
                        amount
                    }
                    educations {
                        _id
                        price
                        type
                        unitName
                        name
                        uniqueName
                        days
                        hours
                        amount
                        images {
                            _id
                            reference
                            thumbnailUrl
                        }
                        interests {
                            _id
                            title
                            type
                        }
                    }
                    courses {
                        _id
                        price
                        unitName
                        name
                        uniqueName
                        days
                        hours
                        amount
                    }
                    rentals {
                        _id
                        price
                        unitName
                        name
                        uniqueName
                        days
                        hours
                        amount
                    }
                    name
                    uniqueName
                    description
                    youtubeVideoIds
                    referenceUrls
                    memo
                    address
                    latitude
                    longitude
                    countryCode
                    publishStatus
                    reviews {
                        _id
                        targetId
                        targetType
                        author {
                            nickName
                            email
                            _id
                            profileImages {
                                thumbnailUrl
                            }
                        }
                        title
                        content
                        images {
                            _id
                            thumbnailUrl
                        }
                        rating
                        reviewCount
                        views
                        likes
                        createdAt
                    }
                    likes
                    views
                    reviewCount
                    isUserSubscribe
                    isUserLike
                    isBookable
                    diveSites {
                        waterTemperature {
                            name
                            currentSeaTemperature
                            weatherText
                            temperatureC
                            temperatureF
                            weatherDescription
                            weatherIcon
                            humidity
                            windSpeed
                            temperatureDetail {
                                MinC
                                MaxC
                                MinF
                                MaxF
                            }
                            weekTideForecast {
                                daysOfWeek
                                tideForecasts
                            }
                            latitude
                            longitude
                        }
                        name
                        uniqueName
                        _id
                    }
                }
            }
          `,
          skip() {
              return (this.getDiveShopByUniqueName && this.getDiveShopByUniqueName._id ? true : false)
          },
          variables() {
              return {
                uniqueName: this.uniqueName
              }
          },
          result() {
              console.log(this.getDiveShopByUniqueName._id)
            if (this.getDiveShopByUniqueName.isUserLike) this.like_img = 'ico_heart2';
            if (this.getDiveShopByUniqueName.isUserSubscribe) this.subscribe_img = 'ico_subscribe2';
            {
                if (this.getDiveShopByUniqueName.diveSites && this.getDiveShopByUniqueName.diveSites.length > 0 && this.getDiveShopByUniqueName.diveSites[0].waterTemperature) {
                    this.getDiveShopByUniqueName.waterTemperature = this.getDiveShopByUniqueName.diveSites[0].waterTemperature;
                }
            }
            {
                var id_arr = new Array();
                var width_arr = new Array();
                if (this.getDiveShopByUniqueName.backgroundImages) {
                    this.getDiveShopByUniqueName.backgroundImages.forEach(x => {
                        id_arr.push(x._id);
                        width_arr.push(720);
                    });
                }
                
                if (id_arr.length > 0) {
                    axios({
                        url: 'https://api.wedives.com/graphql',
                        method: 'post',
                        headers: {
                            countrycode: 'ko',
                            idtoken: (localStorage.idToken) ? localStorage.idToken : "",
                        },
                        data: {
                            query: `
                                query Query($ids: [ID], $widths: [Int]) {
                                    getImageUrlsByIds(_ids: $ids, widths: $widths)
                                }
                            `,
                            variables: {
                                ids: id_arr,
                                widths: width_arr
                            }

                        }
                    }).then(result_image => {
                        if (result_image.data.data.getImageUrlsByIds) {
                            var i=0;
                            if (this.getDiveShopByUniqueName.backgroundImages) {
                                this.getDiveShopByUniqueName.backgroundImages.forEach(x => {
                                    x.thumbnailUrl = result_image.data.data.getImageUrlsByIds[i];
                                    i++;
                                });
                            }
                        }
                        setTimeout(function() {
                            $("#cover-slider-temp").animate({opacity: "0"}, 1200);
                            $('[data-toggle="tooltip"]').tooltip();
                        },500);
                        setTimeout(function() {
                            $("#cover-slider-temp").css("display", "none");
                        },2000);
                    });
                }
            }
            {
                var id_arr = new Array();
                var width_arr = new Array();
                if (this.getDiveShopByUniqueName.images) {
                        this.getDiveShopByUniqueName.images.forEach(x => {
                        id_arr.push(x._id);
                        width_arr.push(720);
                    });
                }
                
                if (id_arr.length > 0) {
                    axios({
                        url: 'https://api.wedives.com/graphql',
                        method: 'post',
                        headers: {
                            countrycode: 'ko',
                            idtoken: (localStorage.idToken) ? localStorage.idToken : "",
                        },
                        data: {
                            query: `
                                query Query($ids: [ID], $widths: [Int]) {
                                    getImageUrlsByIds(_ids: $ids, widths: $widths)
                                }
                            `,
                            variables: {
                                ids: id_arr,
                                widths: width_arr
                            }

                        }
                    }).then(result_image => {
                        if (result_image.data.data.getImageUrlsByIds) {
                            var i=0;
                            if (this.getDiveShopByUniqueName.images) {
                                this.getDiveShopByUniqueName.images.forEach(x => {
                                    x.thumbnailUrl = result_image.data.data.getImageUrlsByIds[i];
                                    i++;
                                });
                            }
                        }
                    });
                }
            }

            
            
            ////////////////////////////////////////////////////////////////////////////////

            let script = document.createElement('script');
            script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCWu8Fw-h-f1t8Sp3I7R3l_Ukr24HunXQM';
            document.body.appendChild(script);
            script.onload = () => {
                const night_style = [
                    { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
                    { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
                    { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
                    {
                        featureType: "administrative.locality",
                        elementType: "labels.text.fill",
                        stylers: [{ color: "#d59563" }],
                    },
                    {
                        featureType: "poi",
                        elementType: "labels.text.fill",
                        stylers: [{ color: "#d59563" }],
                    },
                    {
                        featureType: "poi.park",
                        elementType: "geometry",
                        stylers: [{ color: "#263c3f" }],
                    },
                    {
                        featureType: "poi.park",
                        elementType: "labels.text.fill",
                        stylers: [{ color: "#6b9a76" }],
                    },
                    {
                        featureType: "road",
                        elementType: "geometry",
                        stylers: [{ color: "#38414e" }],
                    },
                    {
                        featureType: "road",
                        elementType: "geometry.stroke",
                        stylers: [{ color: "#212a37" }],
                    },
                    {
                        featureType: "road",
                        elementType: "labels.text.fill",
                        stylers: [{ color: "#9ca5b3" }],
                    },
                    {
                        featureType: "road.highway",
                        elementType: "geometry",
                        stylers: [{ color: "#746855" }],
                    },
                    {
                        featureType: "road.highway",
                        elementType: "geometry.stroke",
                        stylers: [{ color: "#1f2835" }],
                    },
                    {
                        featureType: "road.highway",
                        elementType: "labels.text.fill",
                        stylers: [{ color: "#f3d19c" }],
                    },
                    {
                        featureType: "transit",
                        elementType: "geometry",
                        stylers: [{ color: "#2f3948" }],
                    },
                    {
                        featureType: "transit.station",
                        elementType: "labels.text.fill",
                        stylers: [{ color: "#d59563" }],
                    },
                    {
                        featureType: "water",
                        elementType: "geometry",
                        stylers: [{ color: "#17263c" }],
                    },
                    {
                        featureType: "water",
                        elementType: "labels.text.fill",
                        stylers: [{ color: "#515c6d" }],
                    },
                    {
                        featureType: "water",
                        elementType: "labels.text.stroke",
                        stylers: [{ color: "#17263c" }],
                    },
                    ];

                const map_style = (localStorage['wedive-Theme'] == 'light-mode') ? [] : night_style;

                this.map = new google.maps.Map(document.getElementById('map'), {
                    center: {lat: this.getDiveShopByUniqueName.latitude, lng: this.getDiveShopByUniqueName.longitude},
                    zoom: 11,
                    mapTypeControl: false,
                    streetViewControl: false,
                    zoomControl: false,
                    styles: map_style
                });
                var marker_shop = new google.maps.Marker({
                    map: this.map,
                    position: {lat: this.getDiveShopByUniqueName.latitude, lng: this.getDiveShopByUniqueName.longitude},
                    label: {text: this.getDiveShopByUniqueName.name, color: 'white', className: 'marker-position'},
                    icon: new google.maps.MarkerImage('https://d34l91104zg4p3.cloudfront.net/assets/ico_pin2.png',null, null, null, new google.maps.Size(38,43)),
                });

                /*for (var i=0; i<this.getDiveShopByUniqueName.divePoints.length; i++) {
                    var position = {lat: this.getDiveShopByUniqueName.divePoints[i].latitude, lng: this.getDiveShopByUniqueName.divePoints[i].longitude};
                    const title = this.getDiveShopByUniqueName.divePoints[i].name;
                    const star = (this.getDiveShopByUniqueName.divePoints[i].adminScore/20).toFixed(1);
                    const img = (this.getDiveShopByUniqueName.divePoints[i].backgroundImages && this.getDiveShopByUniqueName.divePoints[i].backgroundImages.length>0) ? this.getDiveShopByUniqueName.divePoints[i].backgroundImages[0].thumbnailUrl : '/static/empty.jpg';
                    

                    var marker_point = new google.maps.Marker({
                        map: this.map,
                        position: position,
                        label: {text: title, color: 'white', className: 'marker-position2'},
                        icon: new google.maps.MarkerImage('https://d34l91104zg4p3.cloudfront.net/assets/ico_pin1.png',null, null, null, new google.maps.Size(38,43)),
                    });
                    marker_point.addListener("click", () => {
                        $(".map-box").removeClass("hide");
                        for (var j=0; j<this.marker_list.length; j++) {
                            var _icon = this.marker_list[j].getIcon();
                            if (_icon.size.width != 38) {
                                this.marker_list[j].setIcon(new google.maps.MarkerImage('https://d34l91104zg4p3.cloudfront.net/assets/ico_pin2.png', null, null, null, new google.maps.Size(38,43)));
                                try {
                                    this.marker_list[j].setLabel({text: title, color: 'white', className: 'marker-position2'});
                                } catch (e) {
                                }
                            }
                        }

                        $("#map_box_shop_name").text(title);
                        $("#map_box_shop_star").text(star);
                        $("#map_box_shop_img").attr("src", img);
                        
                        
                        marker_point.setIcon(new google.maps.MarkerImage('https://d34l91104zg4p3.cloudfront.net/assets/ico_pin_big2.png', null, null, null, new google.maps.Size(58,66)));
                        marker_point.setLabel({text: title, color: 'white', className: 'marker-position2 mt-86'});
                        this.map.panTo(marker_point.getPosition());
                        //if (this.map.getZoom() == 17) {
                        //} else {
                        //    this.map.setZoom(17);
                        //    this.map.setCenter(marker_point.getPosition());
                        //}
                    });
                    this.marker_list.push(marker_point);
                }*/
                this.map.addListener("click", (e) => {
                    $(".map-box").addClass("hide");
                    for (var j=0; j<this.marker_list.length; j++) {
                        var _icon = this.marker_list[j].getIcon();
                        if (_icon.size.width != 38) {
                            this.marker_list[j].setIcon(new google.maps.MarkerImage('https://d34l91104zg4p3.cloudfront.net/assets/ico_pin2.png', null, null, null, new google.maps.Size(38,43)));
                            var _title = this.marker_list[j].getLabel().text;
                            this.marker_list[j].setLabel({text: _title, color: 'white', className: 'marker-position2'});
                        }
                    }
                });
            };
            
            setTimeout(function() {
                init_template();
            },100);
            setTimeout(function() {
                $("#div_content_loader").hide();
            },200);
          }
      },
  },
  methods: {
      clickReportRadio(id) {
        $("#btn_report").attr("disabled", false);
        for (var i=0; i<this.$root.$children[0].report_items.length; i++) {
            if ($("#radio_report" + i).parent().children()[1].classList.contains('opacity-30') == false)
                $("#radio_report" + i).parent().children()[1].classList.add('opacity-30');
        }
        $('#' + id).parent().children()[1].classList.remove('opacity-30');
      },
      makeReport() {
        const sel_reason = $(':radio[name="radioReport"]:checked').val();
        

        this.$apollo.mutate({
            // Query
            mutation: gql`mutation Mutation($targetId: ID!, $reason: String!) {
                report(targetId: $targetId, reason: $reason) {
                    success
                }
            }`,
            // Parameters
            variables: {
                targetId: this.selectedReview._id,
                reason: sel_reason
            },
        }).then((data) => {
            // Result
            console.log(data)
            document.getElementById("menu-report").classList.remove('menu-active');
            document.getElementsByClassName('menu-hider')[0].classList.remove('menu-active');
            location.reload();
            //}
        }).catch((error) => {
            // Error)
            console.error(error)
            // We restore the initial user input
        })
      },
      findBuddyClick() {
          this.$router.push({name: "BuddyCreateAllPage", target: this.getDiveShopByUniqueName})
      },
      selectTicket(event, ticketItem) {
        if (event.currentTarget.classList.contains("ticket-select")) {
            $(".ticket-select").each(function(index, item){item.classList.remove("ticket-select");});
        } else {
            $(".ticket-select").each(function(index, item){item.classList.remove("ticket-select");});
            event.currentTarget.classList.add("ticket-select")
        }
        this.selectedTicket = ticketItem;
        this.showTicket = ticketItem.unitName;
        $("#collapse2_area").click();
        $("#collapse3_area").click();
      },
      async makeReservation() {
        if (this.selectedDate == null || this.selectedDate.id == null) {
            $("#snackbar-custom-error-span").text("예약일자를 선택해주세요.")
            var notificationToast = document.getElementById('snackbar-custom-error');
            var notificationToast2 = new bootstrap.Toast(notificationToast);
            notificationToast2.show();
        } /*else if (this.selectedTicket == null) {
            $("#snackbar-custom-error-span").text("티켓을 선택해주세요.")
            var notificationToast = document.getElementById('snackbar-custom-error');
            var notificationToast2 = new bootstrap.Toast(notificationToast);
            notificationToast2.show();
        } */else if (this.reservation_name == null) {
            $("#snackbar-custom-error-span").text("예약자 이름을 입력해주세요.")
            var notificationToast = document.getElementById('snackbar-custom-error');
            var notificationToast2 = new bootstrap.Toast(notificationToast);
            notificationToast2.show();
        } else if (this.reservation_phone == '') {
            $("#snackbar-custom-error-span").text("예약자 전화번호를 입력해주세요.")
            var notificationToast = document.getElementById('snackbar-custom-error');
            var notificationToast2 = new bootstrap.Toast(notificationToast);
            notificationToast2.show();
        } else if (this.reservation_email == null) {
            $("#snackbar-custom-error-span").text("예약자 이메일을 입력해주세요.")
            var notificationToast = document.getElementById('snackbar-custom-error');
            var notificationToast2 = new bootstrap.Toast(notificationToast);
            notificationToast2.show();
        } else {
            var startedAt = (new Date(this.selectedDate.id+" 00:00:00"));
            var finishedAt = (new Date(this.selectedDate.id+" 23:59:59"));
            var result = await axios({
                url: 'https://api.wedives.com/graphql',
                method: 'post',
                headers: {
                    countrycode: 'ko',
                    idtoken: (localStorage.idToken) ? localStorage.idToken : "",
                },
                data: {
                    query: `
                        mutation Mutation($input: ReservationInput!) {
                            upsertReservation(input: $input) {
                                _id
                            }
                        }
                    `,
                    variables: {
                        "input": {
                            diveCenter: null,
                            diveShop: this.getDiveShopByUniqueName._id,
                            peopleNumber: this.people_show,
                            startedAt: startedAt,
                            finishedAt: finishedAt,
                            name: this.reservation_name,
                            phoneNumber: this.reservation_phone,
                            email: this.reservation_email,
                            receipts: null,
                            requirementText: this.reservation_requirement
                        },
                    }
                }
            });
            if (result.data && result.data.data && result.data.data.upsertReservation && result.data.data.upsertReservation._id) {
                //Close Existing Opened Menus
                const activeMenu = document.querySelectorAll('.menu-active');
                for(let i=0; i < activeMenu.length; i++){activeMenu[i].classList.remove('menu-active');}
                // jjangs : open menu
                if(window.location.href.split('/').pop() != 'modal'){
                    window.history.pushState({}, 'modal', window.location.pathname + '/modal');
                }
                // open menu
                var menuData = "menu-reservation-confirmed";
                document.getElementById(menuData).classList.add('menu-active');
                document.getElementsByClassName('menu-hider')[0].classList.add('menu-active');
                //Check and Apply Effects
                var menu = document.getElementById(menuData);
                var menuEffect = menu.getAttribute('data-menu-effect');
                var menuLeft = menu.classList.contains('menu-box-left');
                var menuRight = menu.classList.contains('menu-box-right');
                var menuTop = menu.classList.contains('menu-box-top');
                var menuBottom = menu.classList.contains('menu-box-bottom');
                var menuWidth = menu.offsetWidth;
                var menuHeight = menu.offsetHeight;
                var menuTimeout = menu.getAttribute('data-menu-hide');

                if(menuTimeout){
                    setTimeout(function(){
                        document.getElementById(menuData).classList.remove('menu-active');
                        document.getElementsByClassName('menu-hider')[0].classList.remove('menu-active');
                        if(window.location.href.split('/').pop() == 'modal'){
                            window.history.back(); 
                        }
                    },menuTimeout)
                }

                if(menuEffect === "menu-push"){
                    var menuWidth = document.getElementById(menuData).getAttribute('data-menu-width');
                    if(menuLeft){for(let i=0; i < wrappers.length; i++){wrappers[i].style.transform = "translateX("+menuWidth+"px)"}}
                    if(menuRight){for(let i=0; i < wrappers.length; i++){wrappers[i].style.transform = "translateX(-"+menuWidth+"px)"}}
                    if(menuBottom){for(let i=0; i < wrappers.length; i++){wrappers[i].style.transform = "translateY(-"+menuHeight+"px)"}}
                    if(menuTop){for(let i=0; i < wrappers.length; i++){wrappers[i].style.transform = "translateY("+menuHeight+"px)"}}
                }
                if(menuEffect === "menu-parallax"){
                    var menuWidth = document.getElementById(menuData).getAttribute('data-menu-width');
                    if(menuLeft){for(let i=0; i < wrappers.length; i++){wrappers[i].style.transform = "translateX("+menuWidth/10+"px)"}}
                    if(menuRight){for(let i=0; i < wrappers.length; i++){wrappers[i].style.transform = "translateX(-"+menuWidth/10+"px)"}}
                    if(menuBottom){for(let i=0; i < wrappers.length; i++){wrappers[i].style.transform = "translateY(-"+menuHeight/5+"px)"}}
                    if(menuTop){for(let i=0; i < wrappers.length; i++){wrappers[i].style.transform = "translateY("+menuHeight/5+"px)"}}
                }
            } else {
                $("#snackbar-custom-error-span").text("예약도중 에러가 발생하였습니다.")
                var notificationToast = document.getElementById('snackbar-custom-error');
                var notificationToast2 = new bootstrap.Toast(notificationToast);
                notificationToast2.show();
            }
        }

      },
      onDayClick(day) {
        var yesterday = new Date();
        yesterday.setDate(yesterday.getDate()-1);
        if (new Date(day.id) < yesterday) {
            var toastData = 'snackbar-day-error';
            var notificationToast = document.getElementById(toastData);
            var notificationToast = new bootstrap.Toast(notificationToast);
            notificationToast.show();
        } else {
            this.selectedDate = day;
            this.now = new Date();
            this.day_show = day.month + "." + day.day + " (" + weekday_ko[day.weekdayPosition] + ")";
            $("#collapse1_area").click();
            $("#collapse2_area").click();
        }
        
        if (this.day_show != "" && this.hour_show != "") {
            
        }
      },
      setHour(index, selectedDate, now, hour) {
        if (selectedDate.isToday) {
            var now_time = ((now.getHours() < 10 ? '0' + now.getHours() : now.getHours()) + ':' + (now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes()));
            if (hour.length == 4) {
                hour = "0" + hour;
            }
            if (hour < now_time)
                return;
        }
        this.hour_show = this.hour_array[index];
        $("#collapse2_area").click();
        $("#collapse3_area").click();
        if (this.day_show != "" && this.hour_show != "") {
            
        }
      },
      collapse1() {
        //$("#collapse2_area").click();
      },
      collapse2() {
        //$("#collapse3_area").click();
      },
      collapse3() {
        //$("#collapse4_area").click();
      },
      openInstitutionBottomSheet(insti) {
            this.open_insti = insti;

            var menuLoad = 'https://d34l91104zg4p3.cloudfront.net/agency/'+(this.open_insti ? this.open_insti.toLowerCase().replace('/','_'): 'empty')+'.html';
            console.log(menuLoad);
            var institutionBottomSheetContent = document.getElementById('institutionBottomSheetContent');
            console.log(menuLoad);
            fetch(menuLoad)
            .then(data => data.text())
            .then(html => institutionBottomSheetContent.innerHTML = html)
            .then(data => {
                if (data.indexOf("<a") == 0) {
                    this.$refs.institutionBottomSheet.open();
                    $('[data-toggle="tooltip"]').tooltip()
                } else {
                    var menuLoad = 'https://d34l91104zg4p3.cloudfront.net/agency/empty.html';
                    var institutionBottomSheetContent = document.getElementById('institutionBottomSheetContent');
                    fetch(menuLoad)
                    .then(data => data.text())
                    .then(html => institutionBottomSheetContent.innerHTML = html)
                    .then(data => {
                        this.$refs.institutionBottomSheet.open();
                        $('[data-toggle="tooltip"]').tooltip()
                    })
                }
                
            })

            
      },
      closeInstitutionBottomSheet() {
            this.$refs.institutionBottomSheet.close();
      },
      async clickLike() {
          if (localStorage.idToken && localStorage.nickName != null && localStorage.nickName != 'null') {
            const targetId = this.getDiveShopByUniqueName._id;
            var result = await axios({
                url: 'https://api.wedives.com/graphql',
                method: 'post',
                headers: {
                    countrycode: 'ko',
                    idtoken: (localStorage.idToken) ? localStorage.idToken : "",
                },
                data: {
                    query: `
                        mutation Like($targetId: ID!, $targetType: UserReactionTargetType!) {
                            like(targetId: $targetId, targetType: $targetType)
                        }
                    `,
                    variables: {
                        "targetId": targetId,
                        "targetType": "diveShop"
                    }
                }
            });
            console.log(result.data.data.like);
            if (result && result.data && result.data.data && result.data.data.like == true) {
                this.like_img = 'ico_heart2';
                this.getDiveShopByUniqueName.likes = ((this.getDiveShopByUniqueName.likes==null)?0:this.getDiveShopByUniqueName.likes)+1;
            } else if (result && result.data && result.data.data && result.data.data.like == false) {
                this.like_img = 'ico_heart';
                this.getDiveShopByUniqueName.likes = this.getDiveShopByUniqueName.likes-1;
            }
          } else {
              this.login();
          }
      },
      async clickSubscribe() {
          if (localStorage.idToken && localStorage.nickName != null && localStorage.nickName != 'null') {
            const targetId = this.getDiveShopByUniqueName._id;
            var result = await axios({
                url: 'https://api.wedives.com/graphql',
                method: 'post',
                headers: {
                    countrycode: 'ko',
                    idtoken: (localStorage.idToken) ? localStorage.idToken : "",
                },
                data: {
                    query: `
                        mutation Subscribe($targetId: ID!, $targetType: UserReactionTargetType!) {
                            subscribe(targetId: $targetId, targetType: $targetType)
                        }
                    `,
                    variables: {
                        "targetId": targetId,
                        "targetType": "diveShop"
                    }
                }
            });
            if (result && result.data && result.data.data && result.data.data.subscribe == true) {
                this.subscribe_img = 'ico_subscribe2';
            } else if (result && result.data && result.data.data && result.data.data.subscribe == false) {
                this.subscribe_img = 'ico_subscribe';
            }
          } else {
              this.login();
          }
      },
      async review_send() {
        var _id_list = new Array();
        for (var i=0; i<file_photo.length; i++) {
            const upload_photo = file_photo[i];
            console.log(upload_photo);
            var result_img = await this.$apollo.mutate({
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
                    file: upload_photo
                },
            });


            var result_upload = await this.$apollo.mutate({
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
                        _id: result_img.uploadImage._id,
                        name: result_img.name,
                        description: "reviewImage",
                        reference: null
                    }
                },
            });
            
            _id_list.push(result_img.uploadImage._id);
        }
        var _input = {images: _id_list, targetId: this.getDiveShopByUniqueName._id, targetType: 'diveShop', content: this.review_detail, rating: this.rating};
        const ipt = _input;

        var result = await this.$apollo.mutate({
            // Query
            mutation: gql`
                mutation Mutation($input: ReviewInput) {
                    upsertReview(input: $input) {
                        _id
                        targetId
                        targetType
                        author {
                            nickName
                            email
                            _id
                            profileImages {
                                thumbnailUrl
                            }
                        }
                        title
                        content
                        images {
                            _id
                            thumbnailUrl
                        }
                        rating
                        reviewCount
                        views
                        isUserLike
                        isUserDislike
                        likes
                        dislikes
                        createdAt
                    }
                }
            `,
            // Parameters
            variables: {
                input: ipt
            },
        });
        

        this.getDiveShopByUniqueName.reviews.push(result.data.upsertReview);

        // close dialog
        const activeMenu = document.querySelectorAll('.menu-active');
        for(let i=0; i < activeMenu.length; i++){activeMenu[i].classList.remove('menu-active');}
        // jjangs close menu
        if(window.location.href.split('/').pop() == 'modal'){
            window.history.back(); 
        }

        // toast
        var toastData = 'snackbar-review-success';
        var notificationToast = document.getElementById(toastData);
        var notificationToast = new bootstrap.Toast(notificationToast);
        notificationToast.show();
      },
      addImage({ target: { files = [] } }) {
        if (!files.length) {
          return;
        }
        file_photo.push(files[0]);
        $("#div_upload_photo").append('<div class="col-3 p-1 square " style="position: relative;"><div class="square_inner border-08" style="background:url('+URL.createObjectURL(files[0])+');background-size: cover;"><div class="square_inner_close" onclick="abc('+files[0].lastModified+',this);"></div></div></div>');
        if (file_photo.length%4 == 1) {
            var square_height = $("#div_upload_photo .square").height();
            $("#menu-review").css("height", 470 + (square_height*(parseInt(file_photo.length/4)+1)) + "px");
        }
      },
      setRating(rating) {
          this.rating = rating;
          switch ((rating+"")) {
              case '1':
                this.rateDescription = '매우 아쉬워요';
              break;
              case '2':
                this.rateDescription = '아쉬워요';
              break;
              case '3':
                this.rateDescription = '나쁘지 않아요.';
              break;
              case '4':
                this.rateDescription = '만족해요!';
              break;
              case '5':
                this.rateDescription = '매우 만족해요!';
              break;
              default:
              break;
          }  
      },
      goCourse: function() {
          location.href='/course';
      },
      gallery_show: function() {
          /*for (var i=0; i<this.getDiveShopByUniqueName.images.length; i++) {
              setTimeout(function(src, dst) {
                  $("[src='"+src+"']").attr("src", dst);
              }, 50, this.getDiveShopByUniqueName.images[i].thumbnailUrl, this.getDiveShopByUniqueName.images[i].url)
          }*/
      },
      login() {
        localStorage.loginUrl = window.location.pathname;
        if (localStorage.hasOwnProperty("idToken") == false || localStorage.idToken == null) {
          this.$root.$children[0].$refs.loginBottomSheet.open();
        } else if (localStorage.hasOwnProperty("nickName") == false || localStorage.nickName == null || localStorage.nickName == 'null') {
          location.href='/user/create';
        }
      },
      timeForToday(value) {
        const today = new Date();
        const timeValue = new Date(value);

        const betweenTime = Math.floor((today.getTime() - timeValue.getTime()) / 1000 / 60);
        if (betweenTime < 1) return '방금전';
        if (betweenTime < 60) {
            return `${betweenTime}분전`;
        }

        const betweenTimeHour = Math.floor(betweenTime / 60);
        if (betweenTimeHour < 24) {
            return `${betweenTimeHour}시간전`;
        }

        const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
        if (betweenTimeDay < 365) {
            return `${betweenTimeDay}일전`;
        }

        return `${Math.floor(betweenTimeDay / 365)}년전`;
      },
      clickSelect(event) {
          $(".wedive-select-border").each((index, item) => {
              if (item.classList.contains("active")) {
                  item.classList.remove("active");
                  item.children[0].children[0].children[0].classList.add("fa-circle");
                  item.children[0].children[0].children[0].classList.remove("fa-check-circle")
              }
          })
          event.currentTarget.classList.toggle("active");

          event.currentTarget.children[0].children[0].children[0].classList.toggle("fa-circle");
          event.currentTarget.children[0].children[0].children[0].classList.toggle("fa-check-circle")
      }
  }
  

  
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.light-border-bottom {border-bottom: 1px solid #dee2e6;}
.evaluation {background-color: rgba(196,187,171,.15);justify-content: space-around;border-radius: 5px;padding: 8px 8px 8px 0;}
.evaluation>span.info {padding-left: 11px;border-left: 1px solid #c4bbab;}
.evaluation>span .icon_question {display: inline-block;position: relative;top: 1px;display: block;width: 18px;height: 18px;background-size: 18px 18px;background-repeat: no-repeat;background-image: url(https://d34l91104zg4p3.cloudfront.net/assets/question.png);text-indent: -9999px;}

.span_feature {width:66px;line-height:1.2;}
.ico_feature {}
.ico_feature1 {width: 44px;height: 40px;background-position: 0px 0px;}
.ico_feature2 {width: 44px;height: 40px;background-position: -45px 0px;}
.ico_feature3 {width: 44px;height: 40px;background-position: -90px 0px;}
.ico_feature4 {width: 44px;height: 40px;background-position: -135px 0px;}
.ico_feature5 {width: 44px;height: 40px;background-position: -180px 0px;}
.ico_feature6 {width: 44px;height: 40px;background-position: -225px 0px;}
.ico_feature7 {width: 44px;height: 40px;background-position: 0px -36px;}
.ico_feature8 {width: 44px;height: 40px;background-position: -45px -38px;}
.ico_feature9 {width: 44px;height: 40px;background-position: -90px -36px;}
.ico_feature10 {width: 44px;height: 40px;background-position: -135px -36px;}
.ico_feature11 {width: 44px;height: 40px;background-position: -180px -36px;}
.ico_feature12 {width: 44px;height: 40px;background-position: -225px -36px;}
.ico_feature13 {width: 44px;height: 40px;background-position: 0px -72px;}
.ico_feature14 {width: 44px;height: 40px;background-position: -45px -72px;}
.ico_feature15 {width: 44px;height: 40px;background-position: -90px -72px;}
.ico_feature16 {width: 44px;height: 40px;background-position: -135px -72px;}
.ico_feature17 {width: 44px;height: 40px;background-position: -180px -72px;}
.ico_feature18 {width: 44px;height: 40px;background-position: -225px -72px;}
.ico_feature19 {width: 44px;height: 40px;background-position: 0px -108px;}
.ico_feature20 {width: 44px;height: 40px;background-position: -45px -108px;}
.ico_feature21 {width: 44px;height: 40px;background-position: -90px -108px;}
.ico_feature22 {width: 44px;height: 40px;background-position: -135px -108px;}
.ico_feature23 {width: 44px;height: 40px;background-position: -180px -111px;}
.ico_feature24 {width: 44px;height: 40px;background-position: -225px -108px;}
.ico_feature25 {width: 44px;height: 40px;background-position: 0px -156px;}
.ico_feature26 {width: 44px;height: 40px;background-position: -45px -156px;}
.ico_feature27 {width: 44px;height: 40px;background-position: -90px -156px;}
.ico_feature28 {width: 44px;height: 40px;background-position: -135px -156px;}
.ico_feature29 {width: 44px;height: 40px;background-position: -180px -156px;}
.ico_feature30 {width: 44px;height: 40px;background-position: -225px -156px;}
.ico_feature31 {width: 44px;height: 40px;background-position: 0px -196px;}
.ico_feature32 {width: 44px;height: 40px;background-position: -45px -196px;}
.ico_feature33 {width: 44px;height: 40px;background-position: -90px -196px;}
.ico_feature34 {width: 44px;height: 40px;background-position: -135px -196px;}
.ico_feature35 {width: 44px;height: 40px;background-position: -180px -196px;}
.ico_feature36 {width: 44px;height: 40px;background-position: -225px -196px;}



.icon-service {overflow: hidden;display: block;margin-left: 11px;background-image: url(https://d34l91104zg4p3.cloudfront.net/assets/wedive_service2.png);background-repeat: no-repeat;-webkit-background-size: 270px 270px;background-size: 270px 270px;}

.ico_equipt {}
.ico_equipt1 {width: 60px;height: 63px;background-position: 0px 3px;}
.ico_equipt2 {width: 60px;height: 63px;background-position: -56px 3px;}
.ico_equipt3 {width: 60px;height: 63px;background-position: -112px 3px;}
.ico_equipt4 {width: 60px;height: 63px;background-position: -168px 3px;}
.ico_equipt5 {width: 60px;height: 63px;background-position: -224px 3px;}
.ico_equipt6 {width: 60px;height: 63px;background-position: -280px 3px;}
.ico_equipt7 {width: 60px;height: 63px;background-position: 0px -54px;}
.ico_equipt8 {width: 60px;height: 63px;background-position: -56px -54px;}
.ico_equipt9 {width: 60px;height: 63px;background-position: -112px -54px;}
.ico_equipt10 {width: 60px;height: 63px;background-position: -168px -54px;}
.ico_equipt11 {width: 60px;height: 63px;background-position: -222px -56px;}
.ico_equipt12 {width: 60px;height: 63px;background-position: -280px -54px;}
.ico_equipt13 {width: 60px;height: 63px;background-position: 0px -110px;}
.ico_equipt14 {width: 60px;height: 63px;background-position: -56px -110px;}
.ico_equipt15 {width: 60px;height: 63px;background-position: -112px -110px;}
.ico_equipt16 {width: 60px;height: 63px;background-position: -168px -110px;}
.ico_equipt17 {width: 60px;height: 63px;background-position: -224px -110px;}
.ico_equipt18 {width: 60px;height: 63px;background-position: -280px -110px;}
.ico_equipt19 {width: 60px;height: 63px;background-position: 0px -168px;}
.ico_equipt20 {width: 60px;height: 63px;background-position: -56px -170px;}
.ico_equipt21 {width: 60px;height: 63px;background-position: -112px -168px;}
.ico_equipt22 {width: 60px;height: 63px;background-position: -168px -168px;}
.ico_equipt23 {width: 60px;height: 63px;background-position: -224px -168px;}
.ico_equipt24 {width: 60px;height: 63px;background-position: -280px -168px;}
.ico_equipt25 {width: 60px;height: 63px;background-position: 0px -224px;}
.ico_equipt26 {width: 60px;height: 63px;background-position: -56px -224px;}
.ico_equipt27 {width: 60px;height: 63px;background-position: -112px -224px;}
.ico_equipt28 {width: 60px;height: 63px;background-position: -168px -224px;}
.ico_equipt29 {width: 60px;height: 63px;background-position: -224px -224px;}
.ico_equipt30 {width: 60px;height: 63px;background-position: -280px -224px;}
.ico_equipt31 {width: 60px;height: 63px;background-position: 0px -280px;}
.ico_equipt32 {width: 60px;height: 63px;background-position: -58px -280px;}
.ico_equipt33 {width: 60px;height: 63px;background-position: -112px -280px;}
.ico_equipt34 {width: 60px;height: 63px;background-position: -168px -280px;}
.ico_equipt35 {width: 60px;height: 63px;background-position: -224px -280px;}
.ico_equipt36 {width: 60px;height: 63px;background-position: -280px -280px;}


.ico_equipt37 {width: 60px;height: 63px;background-position: 0px -336px;}
.ico_equipt38 {width: 60px;height: 63px;background-position: -60px -336px;}
.ico_equipt39 {width: 60px;height: 63px;background-position: -112px -336px;}
.ico_equipt40 {width: 60px;height: 63px;background-position: -168px -336px;}
.ico_equipt41 {width: 60px;height: 63px;background-position: -224px -336px;}
.ico_equipt42 {width: 60px;height: 63px;background-position: -280px -336px;}

.ico_equipt43 {width: 60px;height: 63px;background-position: 0px -398px;}
.ico_equipt44 {width: 60px;height: 63px;background-position: -60px -397px;}
.ico_equipt45 {width: 60px;height: 63px;background-position: -112px -398px;}
.ico_equipt46 {width: 60px;height: 63px;background-position: -168px -398px;}
.ico_equipt47 {width: 60px;height: 63px;background-position: -224px -398px;}
.ico_equipt48 {width: 60px;height: 63px;background-position: -280px -398px;}

.ico_equipt49 {width: 60px;height: 63px;background-position: 0px -466px;}
.ico_equipt50 {width: 60px;height: 63px;background-position: -58px -466px;}
.ico_equipt51 {width: 60px;height: 63px;background-position: -112px -466px;}
.ico_equipt52 {width: 60px;height: 63px;background-position: -168px -466px;}
.ico_equipt53 {width: 60px;height: 63px;background-position: -224px -466px;}
.ico_equipt54 {width: 60px;height: 63px;background-position: -280px -466px;}

.ico_equipt55 {width: 60px;height: 63px;background-position: 0px -525px}
.ico_equipt56 {width: 60px;height: 63px;background-position: -58px -525px;}
.ico_equipt57 {width: 60px;height: 63px;background-position: -112px -525px;}
.ico_equipt58 {width: 60px;height: 63px;background-position: -168px -525px;}
.ico_equipt59 {width: 60px;height: 63px;background-position: -224px -525px;}
.ico_equipt60 {width: 60px;height: 63px;background-position: -280px -525px;}

.ico_equipt61 {width: 60px;height: 63px;background-position: 0px -560px;}
.ico_equipt62 {width: 60px;height: 63px;background-position: -58px -560px;}
.ico_equipt63 {width: 60px;height: 63px;background-position: -112px -560px;}
.ico_equipt64 {width: 60px;height: 63px;background-position: -168px -560px;}
.ico_equipt65 {width: 60px;height: 63px;background-position: -224px -560px;}
.ico_equipt66 {width: 60px;height: 63px;background-position: -280px -560px;}


.icon-equiptment {overflow: hidden;display: block;margin-left: 3px;background-image: url(https://d34l91104zg4p3.cloudfront.net/assets/wedive_equiptment2.png);background-repeat: no-repeat;-webkit-background-size: 335px 585px;background-size: 335px 585px;}

.wedive-ul {width: 100%;list-style:none;display: inline-block;margin-bottom: 0;padding-left: 5px !important;padding-right: 5px !important;}
.wedive-ul > li {float: left;width: 50%;}
.small-title {color: #ababab;font-weight: 400;font-size: 10px;}
.review-text {overflow: hidden;text-overflow: ellipsis;word-wrap: break-word;display: -webkit-box;-webkit-line-clamp: 5;-webkit-box-orient: vertical;}
.text-show-all{position: absolute;top: 26px;right: 20px;color: #727272 !important;font-size:13px;}
.min-h-230 {min-height: 210px;}
.review_img {float: left;width: 88px; height:88px;margin-right:10px;margin-bottom:2px;border-radius:10px;object-fit: cover !important;}
.wedive-txt-all {position: absolute;top: 20px;right: 16px;}
.map-box {position: absolute;right: 6px;bottom: 21px;margin: 5px 5px 4px;width: 115px;}
.bx {background-color: rgba(255,255,255);padding: 10px;min-height: 105px;border: 1px solid rgba(0,0,0,.1);border-radius: 10px;}
.point_desc {font-family: 'Noto Sans Korean' !important;font-weight:200;overflow: hidden;text-overflow: ellipsis;word-wrap: break-word;display: -webkit-box;-webkit-line-clamp: 5;-webkit-box-orient: vertical;}
.nearby_desc {font-family: 'Noto Sans Korean' !important;font-weight:200;overflow: hidden;text-overflow: ellipsis;word-wrap: break-word;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;line-height: 1.4;}
.square-rect {position: relative;padding:0;}
.square-rect:after {content: "";display: block;padding-bottom: 100%;}
.square-rect > img {position: absolute;width: 100%;height: 100%;left: 0;padding:4px;object-fit: cover;}
.wedive-comment-number {float: left;position: relative;width: 20px;}
.wedive-comment-desc {padding-left: 30px;}
.hori-line {width: 10px;padding: 0;margin-left: 16px;margin-top: 10px;opacity: 1 !important;}
.right-icon {position: absolute;top: 10px;width: 15px;text-align: center;right: 0px;opacity: 0.3;}
.wedive-textarea {min-height: 150px;border: 2px solid #e9e9e9;background: #f5f5f5;padding-left: 10px;padding-right: 10px;}
.deco-end {height: 10px !important;}
.emphasis {text-emphasis-style: circle;
  text-emphasis-position: over left;
  -webkit-text-emphasis-style: circle;
  -webkit-text-emphasis-position: over;
  color: #1d397c ;
  font-weight:500;}
.wedive-select-border {border-radius:12px;padding:8px;margin:2px 12px 10px 12px;}
.wedive-select > .wedive-select-border {border: 2px solid lightgray;}
.wedive-select > .active {border: 2px solid #2c9bc3;}
.wedive-select i {color: lightgray;}
.wedive-select .active i {color: #2c9bc3;}
.chip-normal {padding:3px 8px;background:lightgray;border-radius:4px;color:gray;}
.chip-emphasis {padding:3px 8px;background:#1d397c ;border-radius:4px;color:#ddd;}
.border-bottom {border-bottom: 1px solid rgba(0, 0, 0, 0.08) !important}
.background-center {background-position: center !important;background-size: cover !important;}
.mx-80 {max-width: 80%;}
.mx-120 {max-width: 120px;}
.mx-140 {max-width: 140px;}


.stepper {border-color: black;}
.stepper a {font-size: 14px !important;}
.stepper a:first-child {border-right-color: black;}
.stepper a:last-child {border-left-color: black;background: #1d397c;}
.stepper a:last-child i {color: white !important;}
.stepper input {font-size: 18px !important;}
.wedive-textarea2, .wedive-input2 {max-height: 38px;min-height: 38px;padding-left: 10px;padding-right: 10px;font-family: 'Noto Sans Korean';font-size: 16px;}
.wedive-textarea2 {padding-top: 5px;}
.wedive-textarea2::placeholder, .wedive-input2::placeholder{font-family: 'Noto Sans Korean' !important;font-size: 16px !important;opacity:.7 !important;}
.ticket-select {border: 2px solid #2c9ac3 !important;}
</style>
