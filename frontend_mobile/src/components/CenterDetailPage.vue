<template>
  <div class="">
    <div id="menu-main" class="menu menu-box-left rounded-0" data-menu-width="280" data-menu-active="nav-site" data-menu-load=""></div>    
    <div class="page-content">
        <div class="splide single-slider cover-slider slider-no-arrows slider-has-dots" id="cover-slider-1" data-card-height="250">
            <div class="splide__track">
                <div class="splide__list">
                    <div class="splide__slide" v-if="centerData.backgroundImages == null || centerData.backgroundImages.length == 0">
                        <div id="background_img_null" data-card-height="250" class="card rounded-0 mb-0" style="background: url(/static/empty.jpg);background-size: contain !important;">
                            
                        </div>
                    </div>
                    <div class="splide__slide" v-for="(image, index) in centerData.backgroundImages">
                        <div data-card-height="250" :class="'card rounded-0 mb-0 background_img_' + index" v-bind:style="'background: url('+image.url+');background-size: cover !important;'">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        

    
        
        
        <div class="card card-style" style="margin-top:-60px; z-index:1">
            <div class="content text-center mt-4">
                <h2 class="font-20 font-700 mb-0 mt-1">{{ centerData.name }}</h2>
                <p class="color-gray m-0">{{ centerData.description }}</p>
                <div class="wedive-star-back">
                  <div class="wedive-star-front" v-bind:style="'width:'+centerData.adminScore+'%'">
                  </div>
                  <span class="wedive-star-number">{{ (centerData.adminScore/20).toFixed(1) }}</span>
                </div>
                
                <div class="evaluation d-flex">
                    <span class="view font-12">경치 {{ (centerData.viewScore/20).toFixed(1) }}</span>
                    <span class="training font-12">교육 {{ (centerData.educationScore/20).toFixed(1) }}</span>
                    <span class="equiptment font-12">시설 {{ (centerData.facilityScore/20).toFixed(1) }}</span>
                    <span class="service font-12">서비스 {{ (centerData.serviceScore/20).toFixed(1) }}</span>
                    <!--<span class="info" style="margin-bottom:3px;margin-top:3px;"><i class="icon_question font-12">별점 안내</i></span>-->
                </div>
                <div style="margin-top:8px;"><span>최근리뷰 {{ (centerData.reviewCount)?centerData.reviewCount:'0' }}</span>&nbsp;&nbsp;<font class="color-gray-light">|</font>&nbsp;&nbsp;
                <span v-if="centerData.institutionTypes && centerData.institutionTypes.length > 0"><img v-if="insti in centerData.institutionTypes" class="ext-img" :src="'/static/images/agency/logo_'+insti.toLowerCase()+'.svg'" width="48" />&nbsp;&nbsp;<font class="color-gray-light">|</font>&nbsp;&nbsp;</span>
                <span v-if="interest.type=='priceIndex'" v-for="interest in centerData.interests" style="letter-spacing: -2px;">{{interest.title.replace(/\$/gi, '￦')}}</span>
                <!--<span class="badge font-10 bg-fade-gray-dark">PADI 공식</span>-->
                </div>

                <div class="divider mt-3 mb-3"></div>
                <div class="d-flex mt-3 mb-0 text-center">
                    <div class="flex-grow-1 pd-0" style="border-right: 1px solid lightgray;">
                    <button :href="'tel:'+centerData.phoneNumber"">
                        <img class="ext-img" src="/static/images/assets/ico_call.png" width="24" style="margin-top:-4px;"/>
                        <span class="font-16 font-500 font-noto">전화</span>
                    </button>
                    </div>
                    <div class="flex-grow-1 pd-0" style="border-right: 1px solid lightgray;">
                        <img class="ext-img" src="/static/images/assets/ico_heart.png" width="24" style="margin-top:-4px;"/>
                        <span class="font-16 font-500 font-noto">찜 0</span>
                    </div>
                    
                    <div class="flex-grow-1 pd-0" data-menu="menu-share">
                        <img class="ext-img" src="/static/images/assets/ico_share.png" width="24" style="margin-top:-4px;"/>
                        <span class="font-16 font-500 font-noto">공유</span>
                    </div>
                    
                </div>
            </div>
        </div>

        <div class="card card-style p-2" v-if="centerData.wediveComments && centerData.wediveComments.length > 0 && centerData.wediveComments[0] != ''">
            <div class="content mb-2">
                <div class="text-center">
                    <i class="ico ico-wedive-w color-primary scale-box fa-4x"></i>
                </div>
                <h4 class="text-center pt-2 mb-0">wedive's comment</h4>
                <div class="justify-content-center mb-2 mt-3 text-start font-noto">
                    <div v-for="(comment, index) in centerData.wediveComments">
                        <div class="color-gray-light-mid font-700 wedive-comment-number">0{{(index+1)}}</div>
                        <div class="mb-2 font-200 wedive-comment-desc">
                            {{comment}}
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        
        
        <div class="card card-style">
            <div class="content mb-0 mt-3" id="tab-group-1">
                <div class="tab-controls tabs-small tabs-rounded" data-highlight="bg-highlight">
                    <a v-if="centerData.educations && centerData.educations.filter(x=>x.type.includes('education')).length > 0" href="#" data-active data-bs-toggle="collapse" data-bs-target="#tab-1ab">교육</a>
                    <a v-else-if="centerData.educations && centerData.educations.filter(x=>x.type.includes('fun')).length > 0" href="#" data-bs-toggle="collapse" data-bs-target="#tab-2ab">펀 다이빙</a>
                    <a v-else-if="centerData.educations && centerData.educations.filter(x=>x.type.includes('experience')).length > 0" href="#" data-bs-toggle="collapse" data-bs-target="#tab-3ab">체험 다이빙</a>
                </div>

                <div class="clearfix mb-4"></div>
                <div v-if="centerData.educations && centerData.educations.filter(x=>x.type.includes('education')).length > 0" data-bs-parent="#tab-group-1" class="collapse show" id="tab-1ab">
                    <div v-for="education in centerData.educations.filter(x=>x.type.includes('education'))" class="d-flex mb-3">
                        <div class="align-self-center">
                            <img :src="education.images[0].thumbnailUrl" class="rounded-sm" width="40" height="40" style="object-fit: cover;margin-right:10px;">
                        </div>
                        <div class="text-start align-self-center">
                            <h2 class="font-15 line-height-s mt-1 mb-n1">{{ education.name }}</h2>
                            <p class="color-highlight font-11" v-if="education.interest && education.interest.length > 0">{{ education.interest.map(x=>x.title).join()}}</p>
                            <p class="color-highlight font-11" v-else>&nbsp;</p>
                        </div>
                        <div class="ms-auto ps-3 align-self-center text-end">
                            <h2 class="font-15 mb-n1">￦{{ education.price | makeComma}}</h2>
                            <p class="color-highlight font-10">{{ education.unitName }}</p>
                        </div>
                    </div>
                </div>
                <div v-else-if="centerData.educations && centerData.educations.filter(x=>x.type.includes('fun')).length > 0" data-bs-parent="#tab-group-1" class="collapse" id="tab-2ab">
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
                <div v-else-if="centerData.educations && centerData.educations.filter(x=>x.type.includes('experience')).length > 0" data-bs-parent="#tab-group-1" class="collapse" id="tab-3ab">
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
                            <p class="color-highlight font-10">오전 반일</p>
                        </div>
                    </div>
                    <div class="d-flex mb-3 cursor-pointer" v-on:click="goCourse()">
                        <div class="align-self-center">
                            <img src="/static/images/diving_boat.jpg" class="rounded-sm me-3" width="70">
                        </div>
                        <div class="text-start align-self-center">
                            <h2 class="font-15 line-height-s mt-1 mb-n1">보트 체험 다이빙</h2>
                            <p class="color-highlight font-11">렌탈/보트/사진</p>
                        </div>
                        <div class="ms-auto ps-3 align-self-center text-end">
                            <h2 class="font-15 mb-n1">￦130,000</h2>
                            <p class="color-highlight font-10">오전 반일</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
        
        <div class="card card-style bg-theme pb-0">
            <div class="content" id="tab-group-2">
                <div class="tab-controls tabs-small tabs-rounded" data-highlight="bg-blue-dark">
                    <a href="#" data-active data-bs-toggle="collapse" data-bs-target="#tab-info">기타 정보</a>
                    <a href="#" data-bs-toggle="collapse" data-bs-target="#tab-time">영업 시간</a>
                    <a href="#" data-bs-toggle="collapse" data-bs-target="#tab-eqpt">대여 장비</a>
                </div>
                
                <div data-bs-parent="#tab-group-2" class="collapse text-start px-2 show" id="tab-info">
                    <div class="line-height-l pb-3 mt-2 light-border-bottom" v-if="centerData.tickets && centerData.tickets.length > 0" style="position: relative;">
                        <strong class="small-title">입장료</strong>
                        <div class="">
                            <div v-for="ticket in centerData.tickets" class="row mb-0">
                                <h5 class="col-6 text-start font-13 font-400">{{ ticket.unitName }}</h5>
                                <p class="col-6 mb-2 text-end">{{ ticket.price | makeComma }}</p>
                            </div>
                        </div>
                        <i class="fas fa-money-bill-alt color-blue2-dark mt-n2 right-icon"></i>
                    </div>

                    <div class="line-height-l pb-3 mt-2 light-border-bottom" style="position: relative;">
                        <strong class="small-title">시설 정보</strong>
                        <div class="row text-start">
                            <div class="ico_feature col-3" v-if="interest.type=='facility'" v-for="interest in centerData.interests">
                                <i v-if="item == interest.title" v-for="(item, index) in feature_list" :class="'ico_feature'+(index+1)+' icon-service'"></i>
                                <p class="span_feature text-center">{{ interest.title }}</p>
                            </div>
                        </div>
                        <i class="fas fa-highlighter color-blue2-dark mt-n2 right-icon"></i>
                    </div>
                    
                    <div class="vcard-field line-height-l pb-3 mt-4">
                        <strong>결제 방법</strong>
                        <ul class="wedive-ul ps-0">
                            <li v-if="interest.type=='payment'" v-for="interest in centerData.interests" class="col-md-6">{{interest.title}}</li>
                        </ul>
                        <i class="fas fa-credit-card color-blue2-dark mt-n2"></i>
                    </div>

                    <div class="vcard-field line-height-l pb-3 mt-3 hide">
                        <strong>사이트 까지 거리</strong>
                        20km 이상 소요
                        <i class="fa fa-map-marker color-blue2-dark mt-n2"></i>
                    </div>

                    <div class="vcard-field line-height-l pb-3 mt-3 hide">
                        <strong>직원수</strong>
                        <div class="row mb-0">
                            <div class="col-6 text-start font-13">다이브 마스터</div>
                            <p class="col-6 mb-0 text-end">2</p>
                            <div class="col-6 text-start font-13">오픈워터 강사</div>
                            <p class="col-6 mb-0 text-end">6</p>
                        </div>
                        <i class="fas fa-user-tie color-blue2-dark mt-n2"></i>
                    </div>

                    <div class="vcard-field line-height-l pb-0 mt-3 bd-b-w-0">
                        <strong>지원 언어</strong>
                        <ul class="wedive-ul ps-0">
                            <li v-if="interest.type=='language'" v-for="interest in centerData.interests" class="col-md-6">{{interest.title}}</li>
                        </ul>
                        <i class="fas fa-language color-blue2-dark mt-n2"></i>
                    </div>

                    
                </div>
                <div data-bs-parent="#tab-group-2" class="collapse px-2" id="tab-time">
                    <div class="mt-3" v-if="centerData.openingHours && centerData.openingHours.length > 0">
                        <div v-for="opening in centerData.openingHours" class="row mb-0" style="position: relative;">
                            <div v-if="opening[0].includes('>')" class="timeline-deco" style="padding: 0;left: 16px;"></div>
                            <hr v-if="opening[0].includes('>')" class="hori-line">
                            <h5 v-if="opening[0].includes('>')" class="col-6 text-start font-13 font-400 mb-0" style="width: calc(50% - 26px);">{{ opening[0].replace('>','') }}</h5>
                            <h5 v-else class="col-6 text-start font-13 font-400 mb-0">{{ opening[0] }}</h5>
                            <p class="col-6 mb-1 text-end">{{ opening[1] }}</p>
                        </div>
                    </div>
                    <div class="mt-3" v-else>
                        <div class="text-center"><img src="/static/images/assets/empty_time.jpg" width="60%"/></div>
                        <div class="font-noto text-center mb-3" style="color: #717a92;">영업시간 데이터가 아직 없어요.</div>
                    </div>
                </div>
                <div data-bs-parent="#tab-group-2" class="collapse px-2" id="tab-eqpt">
                    <div class="mt-3 text-start row" v-if="centerData.rentals && centerData.rentals.length > 0">
                        <div class="ico_equipt col-3" v-for="rental in centerData.rentals">
                            <i :class="'ico_equipt' + (rentalOptions.findIndex(x=>x==rental.name)+1) + ' icon-equiptment'"></i>
                            <p class="span_feature text-center mb-0">{{ rental.name }}</p>
                            <p v-if="rental.price==0" class="span_feature text-center mb-0 color-gray mt-n1">무료</p>
                            <p v-else-if="rental.unitName==''" class="span_feature text-center mb-0 color-gray mt-n1">{{ rental.price | makeComma }}</p>
                            <p v-else class="span_feature text-center mb-0 color-gray mt-n1">{{ rental.price | makeComma }}/{{ rental.unitName}}</p>
                        </div>

                    </div>
                    <div class="mt-3 text-start row" v-else>
                        <div class="text-center"><img src="/static/images/assets/empty_list.jpg" width="60%"/></div>
                        <div class="font-noto text-center mb-3" style="color: #717a92;">대여장비 리스트가 아직 없어요.</div>
                    </div>
                </div>
            </div>    
        </div>

        <div v-if="centerData.divePoints && centerData.divePoints.length > 0" class="card card-style">
            <div class="content">
                <h4 class="text-start pt-2 mb-2">다이빙 가능 포인트</h4>
                <a class="color-highlight font-12 wedive-txt-all">모두보기</a>
                <div v-for="(point,index) in centerData.divePoints">
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

                                <div v-if="point.highlights" class="row text-center row-cols-3 mb-1" style="padding-left:10px;padding-right:10px;">
                                    <a v-if="point.highlights.length>0&&point.highlights[0].images&&point.highlights[0].images.length>0" class="col square-rect" v-bind:data-gallery="'gallery-'+index" v-bind:href="point.highlights[0].images[0].url" title="">
                                        <img src="/static/images/assets/empty.png" v-bind:data-src="point.highlights[0].images[0].url" class="preload-img img-fluid rounded-s" alt="Point image">
                                        <div class="wedive-source mx-140">{{ point.highlights[0].images[0].reference | makeReference }}</div>
                                    </a>
                                    <a v-if="point.highlights.length>1&&point.highlights[1].images&&point.highlights[1].images.length>0" class="col square-rect" v-bind:data-gallery="'gallery-'+index" v-bind:href="point.highlights[1].images[0].url" title="">
                                        <img src="/static/images/assets/empty.png" v-bind:data-src="point.highlights[1].images[0].url" class="preload-img img-fluid rounded-s" alt="Point image">
                                        <div class="wedive-source mx-140">{{ point.highlights[1].images[0].reference | makeReference }}</div>
                                    </a>
                                    <a v-if="point.highlights.length>2&&point.highlights[2].images&&point.highlights[2].images.length>0" class="col square-rect" v-bind:data-gallery="'gallery-'+index" v-bind:href="point.highlights[2].images[0].url" title="">
                                        <img src="/static/images/assets/empty.png" v-bind:data-src="point.highlights[2].images[0].url" class="preload-img img-fluid rounded-s" alt="Point image">
                                        <div class="wedive-source mx-140">{{ point.highlights[2].images[0].reference | makeReference }}</div>
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
                    <a href="#" data-menu="menu-copy"><i class="far fa-copy me-2"></i>{{ centerData.geoAddress }}</a><br/>
                    <a href="#" class="color-highlight" data-menu="menu-direction"><i class="fas fa-route me-2"></i> 공항-샵 이동방법 안내</a>
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
                <ul v-if="centerData.images != null && centerData.images.length > 0" class="gallery-filter-controls">
                    <li class="color-highlight gallery-filter-all" data-filter="all">전체보기</li>
                    <li v-for="(option, index) in imageCategory" :data-filter="(index+1)">{{ option }}</li>
                </ul>
            </div>
            <div v-if="centerData.images == null || centerData.images.length == 0" class="content mb-3 mt-n3">
                <div class="text-center"><img src="/static/images/assets/empty_image.jpg" width="60%" style="margin-top:-40px;"/></div>
                <div class="font-noto text-center mb-3" style="color: #717a92;">등록된 사진이 아직 없어요.</div>
            </div>
            <div class="content mb-3 mt-n3">
                <div class="gallery gallery-filter">
                    <a v-for="(image, index) in centerData.images" :href="image.url" data-gallery="gallery-image" class="center_image filtr-item" title="" :data-category="(imageCategory.findIndex(x=>x==image.description)+1)">
                        <img :src="image.url" :data-src="image.url" :data-index="index" class="preload-img rounded-s shadow-m">
                    </a>
                </div>
            </div>
        </div>

        <div class="card card-style">
            <div class="content mb-2" id="tab-group-index">
                <h4 class="text-start pt-2 mb-2">스쿠버 지수</h4>
                <div class="tab-controls tabs-small tabs-rounded" data-highlight="bg-highlight">
                    <a href="#" data-active data-bs-toggle="collapse" data-bs-target="#tab-realtime">실시간 지수</a>
                    <a href="#" data-bs-toggle="collapse" data-bs-target="#tab-monthly">월별 수온</a>
                </div>
                <div class="clearfix mb-4"></div>
                <div data-bs-parent="#tab-group-index" class="collapse show" id="tab-realtime">
                    <table class="table table-borderless text-center rounded-sm shadow-l mt-3" style="overflow: hidden;">
                        <thead>
                            <tr class="bg-secondary th-02">
                                <th scope="col" class="color-white font-12">날짜</th>
                                <th scope="col" class="color-white font-12">파고</th>
                                <th scope="col" class="color-white font-12">유속</th>
                                <th scope="col" class="color-white font-12">수온</th>
                                <th scope="col" class="color-white font-12">스쿠버</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th class="font-12" scope="row">09/11</th>
                                <td class="font-12">0.1~0.3</td>
                                <td class="font-12">0.4~1.0</td>
                                <td class="font-12">22~23</td>
                                <td class="color-blue-dark font-12">보통</td>
                            </tr>
                            <tr>
                                <th class="font-12" scope="row">09/12</th>
                                <td class="font-12">0.2~0.3</td>
                                <td class="font-12">0.4~0.8</td>
                                <td class="font-12">23~24</td>
                                <td class="color-green-dark font-12">좋음</td>
                            </tr>
                            <tr>
                                <th class="font-12" scope="row">09/13</th>
                                <td class="color-red-dark font-12">0.7~0.9</td>
                                <td class="color-red-dark font-12">0.6~1.2</td>
                                <td class="font-12">24</td>
                                <td class="color-red-dark font-12">나쁨</td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="text-end">
                        <img class="me-1 mb-3" height="20" src="/static/images/assets/logo-kaoh.svg" />
                    </div>
                </div>
                <div data-bs-parent="#tab-group-index" class="collapse" id="tab-monthly">
                    <table class="table table-borderless text-center rounded-sm shadow-l mt-3" style="overflow: hidden;">
                        <thead>
                            <tr class="bg-secondary th-02">
                                <th scope="col" class="color-white font-12">월</th>
                                <th scope="col" class="color-white font-12">최저/최고 수온</th>
                                <th scope="col" class="color-white font-12">평균</th>
                                <th scope="col" class="color-white font-12">인기도</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-bottom">
                                <th class="font-12" scope="row">1월</th>
                                <td class="font-12 color-gray">5.2ºC / 12.3ºC</td>
                                <td class="font-12"><img class="me-2" src="/static/images/assets/weather_partly_cloudy.svg" width="20" height="20"/>8.8ºC</td>
                                <td class=""><img class="img_pop" src="/static/images/assets/icon_popularity_01.svg" width="32" height="32"/></td>
                            </tr>
                            <tr class="border-bottom">
                                <th class="font-12" scope="row">2월</th>
                                <td class="font-12 color-gray">3.4ºC / 9.8ºC</td>
                                <td class="font-12"><img class="me-2" src="/static/images/assets/weather_partly_cloudy.svg" width="20" height="20"/>6.6ºC</td>
                                <td class=""><img class="img_pop" src="/static/images/assets/icon_popularity_01.svg" width="32" height="32"/></td>
                            </tr>
                            <tr class="border-bottom">
                                <th class="font-12" scope="row">3월</th>
                                <td class="font-12 color-gray">3.2ºC / 9.4ºC</td>
                                <td class="font-12"><img class="me-2" src="/static/images/assets/weather_partly_cloudy.svg" width="20" height="20"/>6.3ºC</td>
                                <td class=""><img class="img_pop" src="/static/images/assets/icon_popularity_01.svg" width="32" height="32"/></td>
                            </tr>
                            <tr class="border-bottom">
                                <th class="font-12" scope="row">4월</th>
                                <td class="font-12 color-gray">7.0ºC / 13.3ºC</td>
                                <td class="font-12"><img class="me-2" src="/static/images/assets/weather_partly_cloudy.svg" width="20" height="20"/>10.2ºC</td>
                                <td class=""><img class="img_pop" src="/static/images/assets/icon_popularity_01.svg" width="32" height="32"/></td>
                            </tr>
                            <tr class="border-bottom">
                                <th class="font-12" scope="row">5월</th>
                                <td class="font-12 color-gray">10.5ºC / 17.8ºC</td>
                                <td class="font-12"><img class="me-2" src="/static/images/assets/weather_partly_cloudy.svg" width="20" height="20"/>14.6ºC</td>
                                <td class=""><img class="img_pop" src="/static/images/assets/icon_popularity_01.svg" width="32" height="32"/></td>
                            </tr>
                            <tr class="border-bottom">
                                <th class="font-12" scope="row">6월</th>
                                <td class="font-12 color-gray">15.1ºC / 23.4ºC</td>
                                <td class="font-12"><img class="me-2" src="/static/images/assets/weather_partly_cloudy.svg" width="20" height="20"/>19.2ºC</td>
                                <td class=""><img class="img_pop" src="/static/images/assets/icon_popularity_02.svg" width="32" height="32"/></td>
                            </tr>
                            <tr class="border-bottom">
                                <th class="font-12" scope="row">7월</th>
                                <td class="font-12 color-gray">19.9ºC / 24.4ºC</td>
                                <td class="font-12"><img class="me-2" src="/static/images/assets/weather_heavy_rain.svg" width="20" height="20"/>22.2ºC</td>
                                <td class=""><img class="img_pop" src="/static/images/assets/icon_popularity_02.svg" width="32" height="32"/></td>
                            </tr>
                            <tr class="border-bottom">
                                <th class="font-12" scope="row">8월</th>
                                <td class="font-12 color-gray">21.3ºC / 26.0ºC</td>
                                <td class="font-12"><img class="me-2" src="/static/images/assets/weather_showers.svg" width="20" height="20"/>23.7ºC</td>
                                <td class=""><img class="img_pop" src="/static/images/assets/icon_popularity_02.svg" width="32" height="32"/></td>
                            </tr>
                            <tr class="border-bottom">
                                <th class="font-12" scope="row">9월</th>
                                <td class="font-12 color-gray">18.6ºC / 24.1ºC</td>
                                <td class="font-12"><img class="me-2" src="/static/images/assets/weather_sunny.svg" width="20" height="20"/>21.4ºC</td>
                                <td class=""><img class="img_pop" src="/static/images/assets/icon_popularity_02.svg" width="32" height="32"/></td>
                            </tr>
                            <tr class="border-bottom">
                                <th class="font-12" scope="row">10월</th>
                                <td class="font-12 color-gray">14.9ºC / 21.6ºC</td>
                                <td class="font-12"><img class="me-2" src="/static/images/assets/weather_partly_cloudy.svg" width="20" height="20"/>18.2ºC</td>
                                <td class=""><img class="img_pop" src="/static/images/assets/icon_popularity_02.svg" width="32" height="32"/></td>
                            </tr>
                            <tr class="border-bottom">
                                <th class="font-12" scope="row">11월</th>
                                <td class="font-12 color-gray">10.8ºC / 17.6ºC</td>
                                <td class="font-12"><img class="me-2" src="/static/images/assets/weather_partly_cloudy.svg" width="20" height="20"/>14.2ºC</td>
                                <td class=""><img class="img_pop" src="/static/images/assets/icon_popularity_01.svg" width="32" height="32"/></td>
                            </tr>
                            <tr>
                                <th class="font-12" scope="row">12월</th>
                                <td class="font-12 color-gray">6.4ºC / 13.8ºC</td>
                                <td class="font-12"><img class="me-2" src="/static/images/assets/weather_partly_cloudy.svg" width="20" height="20"/>10.1ºC</td>
                                <td class=""><img class="img_pop" src="/static/images/assets/icon_popularity_01.svg" width="32" height="32"/></td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="text-end">
                        <img class="me-1 mb-3" height="20" src="/static/images/assets/logo-kma.svg" />
                    </div>
                </div>
            </div>
        </div>


        <div class="card card-style">
            <div class="content">
            <h4 class="text-start">리뷰</h4>
            <a class="color-highlight font-12 wedive-txt-all">모두보기</a>
            <div class="divider mt-3 mb-2"></div>
                <div class="splide single-slider slider-no-arrows slider-has-dots pb-2 mb-0 me-n2 ms-n2" id="single-slider-review">
                    <div class="splide__track">
                        <div class="splide__list">
                            <div class="splide__slide pt-2">
                                <div class="min-h-230 p-2">
                                        <div class="d-flex">
                                            <div class="flex-grow-1">
                                                <div class="float-start">
                                                    <h1 class="fa-2x font-900 me-2 mb-0">5.00</h1>
                                                    <p class="font-10 mb-0 mt-n2 opacity-40 text-end">보트 체험 다이빙</p>
                                                </div>
                                                <span>
                                                    <i class="fa fa-star color-yellow-dark"></i>
                                                    <i class="fa fa-star color-yellow-dark"></i>
                                                    <i class="fa fa-star color-yellow-dark"></i>
                                                    <i class="fa fa-star color-yellow-dark"></i>
                                                    <i class="fa fa-star color-yellow-dark"></i>
                                                </span>
                                                
                                            </div>
                                            <div>
                                                <h6 class="text-end">김성진</h6>
                                                <p class="font-10 mb-0 mt-n2 opacity-40 text-end">2021.08.30</p>
                                            </div>
                                        </div>
                                        <p class="review-text mt-2 mb-1">
                                            <a href="https://myplace-phinf.pstatic.net/20210827_62/16300643312513fe1S_JPEG/upload_07fc7f5449b8fecbeca86e655f0afce3.jpg" data-gallery="gallery-99" class="filtr-item" title="" data-category="99">
                                                <img src="/static/images/assets/empty.png" data-src="https://search.pstatic.net/common/?autoRotate=true&amp;quality=95&amp;type=f87_87&amp;src=https%3A%2F%2Fmyplace-phinf.pstatic.net%2F20210827_62%2F16300643312513fe1S_JPEG%2Fupload_07fc7f5449b8fecbeca86e655f0afce3.jpg" class="preload-img rounded-s shadow-m review_img" alt="방문자리뷰">
                                            </a>
                                            제주도에서 스쿠버 다이빙 할 때 항상 방문하는 버블탱크 입니다.<br/>
                                            예약할 때 문의 드리면 친절하게 답변해 주십니다.<br/>
                                            다이빙 할 때도 신경 많이 써 주시고<br/>
                                            불편한 점 말씀 드리면 신속하게 해결해 주세요<br/>
                                            렌탈 장비 관리 철저하게 하셔서<br/>
                                            믿고 이용할 수 있어요!!
                                        </p>
                                </div>     
                            </div>
                            <div class="splide__slide">
                                <div class="min-h-230 p-2">
                                        <div class="d-flex">
                                            <div class="flex-grow-1">
                                                <div class="float-start">
                                                    <h1 class="fa-2x font-900 me-2 mb-0">4.98</h1>
                                                    <p class="font-10 mb-0 mt-n2 opacity-40 text-end">어드벤스드 코스</p>
                                                </div>
                                                <span>
                                                    <i class="fa fa-star color-yellow-dark"></i>
                                                    <i class="fa fa-star color-yellow-dark"></i>
                                                    <i class="fa fa-star color-yellow-dark"></i>
                                                    <i class="fa fa-star color-yellow-dark"></i>
                                                    <i class="fa fa-star color-yellow-dark"></i>
                                                </span>
                                            </div>
                                            <div>
                                                <h6 class="text-end">조관우</h6>
                                                <p class="font-10 mb-0 mt-n2 opacity-40 text-end">2021.08.27</p>
                                            </div>
                                        </div>
                                        <p class="review-text mt-2 mb-1">
                                            태풍이 올라와서 취소되진 않을까 걱정을 많이 했는데 잘챙겨주셔서 오픈워터 딸수 있었습니다ㅎㅎ<br/>
                                            맑은날이 아니라 아쉬웠지만 어드밴스드 딸때는 날씨요정이 함께 해주기를 기대합니다...ㅎㅎ<br/>
                                            잡아주신 숙소도 버블탱크 바로 앞에 있어서 넘 좋았어요.<br/>
                                            깔끔하고 호텔사장님도 엄청 친절하셨어요ㅋ<br/>
                                            그리고 버블탱크 샤워실에 스킨로션에 샴푸,린스,바디워시,클렌징폼, 머리끈까지 구비되어 있었습니다.<br/>
                                            세심함에 치였슴당💕
                                        </p>
                                </div>   
                            </div>
                            <div class="splide__slide">
                                <div class="min-h-230 p-2">
                                        <div class="d-flex">
                                            <div class="flex-grow-1">
                                                <div class="float-start">
                                                    <h1 class="fa-2x font-900 me-2 mb-0">4.5</h1>
                                                    <p class="font-10 mb-0 mt-n2 opacity-40 text-end">섬 다이빙</p>
                                                </div>
                                                <span>
                                                    <i class="fa fa-star color-yellow-dark"></i>
                                                    <i class="fa fa-star color-yellow-dark"></i>
                                                    <i class="fa fa-star color-yellow-dark"></i>
                                                    <i class="fa fa-star color-yellow-dark"></i>
                                                    <i class="fa fa-star color-yellow-dark"></i>
                                                </span>
                                            </div>
                                            <div>
                                                <h6 class="text-end">조윤구</h6>
                                                <p class="font-10 mb-0 mt-n2 opacity-40 text-end">2021.08.20</p>
                                            </div>
                                        </div>
                                        <p class="review-text mt-2 mb-1">
                                            <a href="https://myplace-phinf.pstatic.net/20210824_287/1629760530492Jfami_JPEG/upload_b0549f411c1a65e230ea73a17359faae.jpeg" data-gallery="gallery-99" class="filtr-item" title="" data-category="99">
                                                <img src="/static/images/assets/empty.png" data-src="https://search.pstatic.net/common/?autoRotate=true&amp;quality=95&amp;type=f87_87&amp;src=https%3A%2F%2Fmyplace-phinf.pstatic.net%2F20210824_287%2F1629760530492Jfami_JPEG%2Fupload_b0549f411c1a65e230ea73a17359faae.jpeg" class="preload-img rounded-s shadow-m review_img" alt="방문자리뷰">
                                            </a>
                                            강의듣는 내내 사진,동영상 많이찍어주셔서  좋았어요 !!  시설도깔끔하고  강사분들도 재밌고 친절해서 좋았습니다~  앞으로 제주도오면 많이 애용할듯! 자주자주 방문하겠습니다. 다음에 또 가면 잘알려주세요~
                                        </p>
                                </div>   
                            </div>
                            <div class="splide__slide">
                                <div class="min-h-230 p-2">
                                        <h1 class="text-center"><i class="fas fa-pen-square fa-2x color-highlight mt-4"></i></h1>
                                        <h1 class="text-center pt-3 font-20 mb-n1">17개 리뷰</h1>
                                        <p class="text-center color-highlight font-600">더보기 <i class="fas fa-chevron-right"></i></p>
                                </div>    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="divider mt-2 mb-2 ms-3 me-3"></div>
            <div class="star-area mt-4 text-center">
                <i class="fa fa-star font-20 color-gray-light"></i>
                <i class="fa fa-star font-20 color-gray-light"></i>
                <i class="fa fa-star font-20 color-gray-light"></i>
                <i class="fa fa-star font-20 color-gray-light"></i>
                <i class="fa fa-star font-20 color-gray-light"></i>
            </div>
            <div class="text-center color-gray mt-2 mb-3">이 다이빙 센터는 어떠셨나요?</div>
            <div class="me-4 ms-4" style="margin-bottom: 34px;background: rgba(58, 58, 58, 0.03);padding: 10px 20px;border-radius: 4px;">
                <p class="mb-0" style="color: rgba(58, 58, 58, 0.6)">다른 다이버들에게 도움이 되어보세요.</p>
                <p class="mb-0 color-highlight">지금 리뷰남기기 <i class="fas fa-chevron-right ms-1"></i></p>
            </div>
        </div>




        <!--<div class="card card-style">
            <div class="content text-start mb-0">
                <h4 class="pt-2 mb-0">리뷰</h4>
                <span class="text-show-all">전체 보기 <i class="fas fa-chevron-right"></i></span>
            </div>
                
            <div class="content text-start">
                <div class="d-flex">
                    <div class="flex-grow-1">
                        <h1 class="float-start fa-2x font-900 me-3">5.00</h1>
                        <span>
                            <i class="fa fa-star color-yellow-dark"></i>
                            <i class="fa fa-star color-yellow-dark"></i>
                            <i class="fa fa-star color-yellow-dark"></i>
                            <i class="fa fa-star color-yellow-dark"></i>
                            <i class="fa fa-star color-yellow-dark"></i>
                        </span>
                    </div>
                    <div>
                        <h6 class="text-end">김성진</h6>
                        <p class="font-10 mb-0 mt-n2 opacity-40 text-end">2021.08.30</p>
                    </div>
                </div>
                <p class="review-text mt-3">
                    제주도에서 스쿠버 다이빙 할 때 항상 방문하는 버블탱크 입니다.<br/>
                    예약할 때 문의 드리면 친절하게 답변해 주십니다.<br/>
                    다이빙 할 때도 신경 많이 써 주시고<br/>
                    불편한 점 말씀 드리면 신속하게 해결해 주세요<br/>
                    렌탈 장비 관리 철저하게 하셔서<br/>
                    믿고 이용할 수 있어요!!
                </p>
            </div>
                
            <div class="divider divider-margins mb-3"></div>
                
            <div class="content text-start">
                <div class="d-flex">
                    <div class="flex-grow-1">
                        <h1 class="float-start fa-2x font-900 me-3">4.98</h1>
                        <span>
                            <i class="fa fa-star color-yellow-dark"></i>
                            <i class="fa fa-star color-yellow-dark"></i>
                            <i class="fa fa-star color-yellow-dark"></i>
                            <i class="fa fa-star color-yellow-dark"></i>
                            <i class="fa fa-star color-yellow-dark"></i>
                        </span>
                    </div>
                    <div>
                        <h6 class="text-end">조관우</h6>
                        <p class="font-10 mb-0 mt-n2 opacity-40 text-end">2021.08.27</p>
                    </div>
                </div>
                <p class="review-text mt-3">
                    태풍이 올라와서 취소되진 않을까 걱정을 많이 했는데 잘챙겨주셔서 오픈워터 딸수 있었습니다ㅎㅎ<br/>
                    맑은날이 아니라 아쉬웠지만 어드밴스드 딸때는 날씨요정이 함께 해주기를 기대합니다...ㅎㅎ<br/>
                    잡아주신 숙소도 버블탱크 바로 앞에 있어서 넘 좋았어요.<br/>
                    깔끔하고 호텔사장님도 엄청 친절하셨어요ㅋ<br/>
                    그리고 버블탱크 샤워실에 스킨로션에 샴푸,린스,바디워시,클렌징폼, 머리끈까지 구비되어 있었습니다.<br/>
                    세심함에 치였슴당💕
                </p>
            </div>

            <div class="content text-start">
                <a href="#" class="btn btn-full font-400 rounded-s shadow-l gradient-highlight color-white bd-w-0"><i class="fas fa-pencil-alt"></i>&nbsp;&nbsp;리뷰 쓰기</a>
            </div>
        </div>
        -->
        

        
        <div data-menu-load="/static/menu-footer.html"></div>

    </div>


    <!-- End of Page Content--> 
    <!-- All Menus, Action Sheets, Modals, Notifications, Toasts, Snackbars get Placed outside the <div class="page-content"> -->

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

    
  </div>
</template>
<script>
const axios = require("axios")

export default {
  name: 'HelloWorld',
  async beforeRouteEnter(to, from, next) {
    if (to.params.id != null) {
        var result = await axios({
        url: 'https://api.wedives.com/graphql',
        method: 'post',
        data: {
            query: `
                query GetDiveCenterByUniqueName($uniqueName: String!) {
                    getDiveCenterByUniqueName(uniqueName: $uniqueName) {
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
                        openingHours
                        institutionTypes
                        webPageUrl
                        geoAddress
                        adminScore
                        viewScore
                        educationScore
                        facilityScore
                        serviceScore
                        wediveComments
                        divePoints {
                            _id
                            name
                            uniqueName
                            adminScore
                            highlightDescription
                            highlights {
                                images {
                                    _id
                                    name
                                    description
                                    reference
                                    thumbnailUrl
                                }    
                            }
                            images {
                                _id
                                name
                                description
                                reference
                                thumbnailUrl
                            }
                        }
                        images {
                            _id
                            name
                            description
                            reference
                            thumbnailUrl
                        }
                        backgroundImages {
                            _id
                            name
                            description
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
                            name
                            description
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
                        targetTypeName
                        author {
                            name
                            email
                            _id
                        }
                        title
                        description
                        images {
                            _id
                            name
                            description
                            reference
                            thumbnailUrl
                        }
                        }
                        reviewCount
                    }
                }
            `,
            variables: {
                uniqueName: to.params.id
            }

        }
        }, {
        headers: {
            countryCode: 'ko',
            android: (localStorage.android) ? localStorage.android : "",
        }
        });

        if (result.data.data.getDiveCenterByUniqueName.backgroundImages.length > 0) {
            for (var i=0; i<result.data.data.getDiveCenterByUniqueName.backgroundImages.length; i++) {
                result.data.data.getDiveCenterByUniqueName.backgroundImages[i].url = '/static/empty.jpg';
            }
            var id_arr = [];
            var width_arr = [];
            for (var i=0; i<result.data.data.getDiveCenterByUniqueName.backgroundImages.length; i++) {
                id_arr.push(result.data.data.getDiveCenterByUniqueName.backgroundImages[i]._id);
                width_arr.push(720);
            }
            if (id_arr.length > 0) {
                var result_image = await axios({
                url: 'https://api.wedives.com/graphql',
                method: 'post',
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
                }, {
                headers: {
                countryCode: 'ko',
                }
                });
                if (result_image.data.data.getImageUrlsByIds) {
                    for (var i=0; i<result_image.data.data.getImageUrlsByIds.length; i++) {
                        result.data.data.getDiveCenterByUniqueName.backgroundImages[i].url = result_image.data.data.getImageUrlsByIds[i];
                        //$(".background_img_" + i).css("background", "url(" + result_image.data.data.getImageUrlsByIds[i] + ")");
                    }
                }
            }
        }


        if (result.data.data.getDiveCenterByUniqueName.images.length > 0) {
            for (var i=0; i<result.data.data.getDiveCenterByUniqueName.images.length; i++) {
                result.data.data.getDiveCenterByUniqueName.images[i].url = '/static/empty.jpg';
            }
            var id_arr = [];
            var width_arr = [];
            for (var i=0; i<result.data.data.getDiveCenterByUniqueName.images.length; i++) {
                id_arr.push(result.data.data.getDiveCenterByUniqueName.images[i]._id);
                width_arr.push(720);
            }
            if (id_arr.length > 0) {
                var result_image = await axios({
                url: 'https://api.wedives.com/graphql',
                method: 'post',
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
                }, {
                headers: {
                countryCode: 'ko',
                }
                });
                if (result_image.data.data.getImageUrlsByIds) {
                    for (var i=0; i<result_image.data.data.getImageUrlsByIds.length; i++) {
                        result.data.data.getDiveCenterByUniqueName.images[i].url = result_image.data.data.getImageUrlsByIds[i];
                        //$(".center_image > [data-index="+i+"]").parent().attr("href", result.data.data.getDiveCenterByUniqueName.images[i].url);
                    }
                }
            }
            
        }

        // points 내 하이라이트 이미지 리스트
        if (result.data.data.getDiveCenterByUniqueName.divePoints.length > 0) {
            for (var j=0; j<result.data.data.getDiveCenterByUniqueName.divePoints.length; j++) {
                for (var i=0; i<result.data.data.getDiveCenterByUniqueName.divePoints[j].highlights.length; i++) {
                    if (result.data.data.getDiveCenterByUniqueName.divePoints[j].highlights[i].images && result.data.data.getDiveCenterByUniqueName.divePoints[j].highlights[i].images.length>0) {
                        result.data.data.getDiveCenterByUniqueName.divePoints[j].highlights[i].images[0].url = '/static/empty.jpg';
                    }
                }
                var id_arr = [];
                var width_arr = [];
                for (var i=0; i<result.data.data.getDiveCenterByUniqueName.divePoints[j].highlights.length; i++) {
                    if (result.data.data.getDiveCenterByUniqueName.divePoints[j].highlights[i].images && result.data.data.getDiveCenterByUniqueName.divePoints[j].highlights[i].images.length > 0) {
                        id_arr.push(result.data.data.getDiveCenterByUniqueName.divePoints[j].highlights[i].images[0]._id);
                        width_arr.push(720);
                    }
                }
                if (id_arr.length > 0) {
                    var result_image = await axios({
                    url: 'https://api.wedives.com/graphql',
                    method: 'post',
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
                    }, {
                    headers: {
                    countryCode: 'ko',
                    }
                    });

                    var cnt = 0;
                    for (var i=0; i<result.data.data.getDiveCenterByUniqueName.divePoints[j].highlights.length; i++) {
                        if (result.data.data.getDiveCenterByUniqueName.divePoints[j].highlights[i].images && result.data.data.getDiveCenterByUniqueName.divePoints[j].highlights[i].images.length > 0) {
                            result.data.data.getDiveCenterByUniqueName.divePoints[j].highlights[i].images[0].url = result_image.data.data.getImageUrlsByIds[cnt++];
                        }
                    }
                }
            }
        }
        next(vm => {vm.setData(result.data.data.getDiveCenterByUniqueName)});
    }
  },
  async mounted() {
    if (this.$route.params.id) {
        if (this.centerData.latitude && this.centerData.longitude) {
            var preloader = document.getElementById('preloader')
            if(preloader){preloader.classList.add('preloader-hide');}
            
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
                    center: {lat: this.centerData.latitude, lng: this.centerData.longitude},
                    zoom: 13,
                    mapTypeControl: false,
                    streetViewControl: false,
                    zoomControl: false,
                    styles: map_style
                });
                var marker_shop = new google.maps.Marker({
                    map: this.map,
                    position: {lat: this.centerData.latitude, lng: this.centerData.longitude},
                    label: {text: this.centerData.name, color: 'white', className: 'marker-position'},
                    icon: new google.maps.MarkerImage('/static/images/assets/ico_pin1.png',null, null, null, new google.maps.Size(38,43)),
                });

                if (false) {
                    var position = {lat: 33.22900114645303, lng: 126.56260977136935};
                    const title = '문섬 포인트';
                    const star = '4.3';
                    const img = '/static/images/point/ko/jeju_munisland_06.jpg';
                    

                    var marker_point = new google.maps.Marker({
                        map: this.map,
                        position: position,
                        label: {text: title, color: 'white', className: 'marker-position2'},
                        icon: new google.maps.MarkerImage('/static/images/assets/ico_pin2.png',null, null, null, new google.maps.Size(38,43)),
                    });
                    marker_point.addListener("click", () => {
                        $(".map-box").removeClass("hide");
                        for (var j=0; j<this.marker_list.length; j++) {
                            var _icon = this.marker_list[j].getIcon();
                            if (_icon.size.width != 38) {
                                this.marker_list[j].setIcon(new google.maps.MarkerImage('/static/images/assets/ico_pin2.png', null, null, null, new google.maps.Size(38,43)));
                                try {
                                    this.marker_list[j].setLabel({text: title, color: 'white', className: 'marker-position2'});
                                } catch (e) {
                                }
                            }
                        }

                        $("#map_box_shop_name").text(title);
                        $("#map_box_shop_star").text(star);
                        $("#map_box_shop_img").attr("src", img);
                        
                        
                        marker_point.setIcon(new google.maps.MarkerImage('/static/images/assets/ico_pin_big2.png', null, null, null, new google.maps.Size(58,66)));
                        marker_point.setLabel({text: title, color: 'white', className: 'marker-position2 mt-86'});
                        this.map.panTo(marker_point.getPosition());
                        //if (this.map.getZoom() == 17) {
                        //} else {
                        //    this.map.setZoom(17);
                        //    this.map.setCenter(marker_point.getPosition());
                        //}
                    });
                    this.marker_list.push(marker_point);
                }
                this.map.addListener("click", (e) => {
                    $(".map-box").addClass("hide");
                    for (var j=0; j<this.marker_list.length; j++) {
                        var _icon = this.marker_list[j].getIcon();
                        if (_icon.size.width != 38) {
                            this.marker_list[j].setIcon(new google.maps.MarkerImage('/static/images/assets/ico_pin2.png', null, null, null, new google.maps.Size(38,43)));
                            var _title = this.marker_list[j].getLabel().text;
                            this.marker_list[j].setLabel({text: _title, color: 'white', className: 'marker-position2'});
                        }
                    }
                });
            };
        }
    }

    if (this.$route.query.header && this.$route.query.header == 'hide') {
        $(".page-title").hide();
        $(".page-title-clear").hide();
        $(".header-fixed").hide();
    }
    if (this.$route.query.footer && this.$route.query.footer == 'hide') {
        $("#footer-bar").hide();
    }

  },
  data () {
    return {
        map: null,
        marker_list: [],
        centerData: {},
        feature_list: ["외국어가능", "샤워가능", "룸서비스", "늦은 퇴실", "컨시어지", "주차", "주방", "남녀화장실", "24시업무", "비지니스", "장애인편의", "세탁서비스", "금연실", "아이돌봄", "반려동물", "WIFI", "공항셔틀", "피트니스"],
        pay_list: ["현금", "VISA", "MasterCard", "UnionPay", "JCB", "American Express", "Discover card", "PAYCO", "Kakao Pay", "Naver Pay"],
        equipt_list: ["마스크", "레귤레이터", "다이버 PC", "다이버 워치", "나침반", "수중 스쿠터", "산소탱크", "핀", "구명조끼", "나이프", "스노클링", "부츠", "잠수복 상의", "잠수복 하의", "라이트", "스쿠버 세트", "카메라", "수심계", , "게이지", "잠수복", , "풀세트", "유아장비"],
        rentalOptions: ["스킨스쿠버 세트", "스킨 세트", "마스크", "스노클", "잠수복", "오리발(핀)", "부츠", "장갑", "부츠&장갑", "웨이트&벨트", "웨이트", "스쿠버 세트", "부력조절기", "레귤레이터", "보조호흡기", "SMB", "공기통", "나이트록스", "라이트", "다이브컴퓨터", "카메라", "DPV", "조류걸이", "프리 세트", "프리 핀", "프리 마스크", "프리 스노클", "프리 잠수복", "프리 웨이트&벨트", "프리 웨이트", "바텀웨이트", "랜야드", "부이", "로프", "부이&로프", "고정부이"],
        imageCategory: ["다이빙", "교육", "센터"],
    }
  }, methods: {
      setData(_centerData) {
          this.centerData = _centerData;
          setTimeout(function() {
            init_template();
            var preloader = document.getElementById('preloader')
            if(preloader){preloader.classList.add('preloader-hide');}
          }, 1000);

          
      },
      goCourse: function() {
          location.href='/course';
      },
      gallery_show: function() {
          for (var i=0; i<this.centerData.images.length; i++) {
              setTimeout(function(src, dst) {
                  $("[src='"+src+"']").attr("src", dst);
              }, 50, this.centerData.images[i].thumbnailUrl, this.centerData.images[i].url)
          }
      },
  }

  
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.light-border-bottom {border-bottom: 1px solid #dee2e6;}
.evaluation {background-color: rgba(196,187,171,.2);justify-content: space-around;border-radius: 5px;padding: 8px 8px 8px 0;}
.evaluation>span.info {padding-left: 11px;border-left: 1px solid #c4bbab;}
.evaluation>span .icon_question {display: inline-block;position: relative;top: 1px;display: block;width: 18px;height: 18px;background-size: 18px 18px;background-repeat: no-repeat;background-image: url(/static/images/assets/question.png);text-indent: -9999px;}

.span_feature {width:66px;}
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
.ico_feature23 {width: 44px;height: 40px;background-position: -180px -108px;}
.ico_feature24 {width: 44px;height: 40px;background-position: -225px -108px;}
.ico_feature25 {width: 44px;height: 40px;background-position: 0px -144px;}
.ico_feature26 {width: 44px;height: 40px;background-position: -45px -144px;}
.ico_feature27 {width: 44px;height: 40px;background-position: -90px -144px;}
.ico_feature28 {width: 44px;height: 40px;background-position: -135px -144px;}
.ico_feature29 {width: 44px;height: 40px;background-position: -180px -144px;}
.ico_feature30 {width: 44px;height: 40px;background-position: -225px -144px;}

.icon-service {overflow: hidden;display: block;margin-left: 11px;background-image: url(/static/images/assets/wedive_service2.png);background-repeat: no-repeat;-webkit-background-size: 270px 200px;background-size: 270px 200px;}

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

.icon-equiptment {overflow: hidden;display: block;margin-left: 3px;background-image: url(/static/images/assets/wedive_equiptment2.png);background-repeat: no-repeat;-webkit-background-size: 335px 350px;background-size: 335px 350px;}

.wedive-ul {width: 100%;list-style:none;display: inline-block;margin-bottom: 0;padding-left: 5px !important;padding-right: 5px !important;}
.wedive-ul > li {float: left;width: 50%;}
.small-title {color: #ababab;font-weight: 400;font-size: 10px;}
.review-text {overflow: hidden;text-overflow: ellipsis;word-wrap: break-word;display: -webkit-box;-webkit-line-clamp: 5;-webkit-box-orient: vertical;}
.text-show-all{position: absolute;top: 26px;right: 20px;color: #727272 !important;font-size:13px;}
.ico-wedive-w {-webkit-font-smoothing: antialiased;display: grid;margin-left: calc(50% - 20px);font-style: normal;font-variant: normal;text-rendering: auto;line-height: 1;width:40px;height:40px;}
.ico-wedive-w:before {content: "";background-image: url('/static/images/assets/ico_wedive_d.png');background-size:40px 40px;width:40px;height:40px;display:inline-block;}
.min-h-230 {min-height: 210px;}
.review_img {float: left;width: 88px; height:88px;margin-right:10px;margin-bottom:2px;border-radius:10px;object-fit: cover !important;}
.wedive-txt-all {position: absolute;top: 20px;right: 16px;}
.font-noto {font-family: 'Noto Sans Korean'}
.map-box {position: absolute;right: 6px;bottom: 21px;margin: 5px 5px 4px;width: 115px;}
.bx {background-color: rgba(255,255,255);padding: 10px;min-height: 105px;border: 1px solid rgba(0,0,0,.1);border-radius: 10px;}
.point_desc {font-family: 'Noto Sans Korean' !important;font-weight:200;overflow: hidden;text-overflow: ellipsis;word-wrap: break-word;display: -webkit-box;-webkit-line-clamp: 5;-webkit-box-orient: vertical;}
.nearby_desc {font-family: 'Noto Sans Korean' !important;font-weight:200;overflow: hidden;text-overflow: ellipsis;word-wrap: break-word;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;line-height: 1.4;}
.square-rect {position: relative;padding:0;}
.square-rect:after {content: "";display: block;padding-bottom: 100%;}
.square-rect > img {position: absolute;width: 100%;height: 100%;left: 0;padding:4px;object-fit: cover;}
.wedive-comment-number {float: left;position: relative;width: 20px;}
.wedive-comment-desc {padding-left: 30px;}
.hori-line {border: 1px solid silver;width: 10px;padding: 0;margin-left: 16px;margin-top: 10px;}
.right-icon {position: absolute;top: 10px;width: 15px;text-align: center;right: 0px;opacity: 0.3;}
</style>
