<template>
  <div class="">
    <div class="dashboard-title fl-wrap">
        <h3>포인트 추가</h3>
    </div>
    <!-- profile-edit-container--> 
    <div class="profile-edit-container fl-wrap block_box">
        <div class="custom-form">
            <label>url주소 (영문으로, 띄어쓰기 금지, 이 내용으로 URL이 표시됩니다.) <i class="fal fa-briefcase"></i></label>
            <input type="text" placeholder="yangyang 혹은 dalian-liaoning-east-dalian-island" value=""/>

            <div class="row">
                <div class="col-md-6">
                    <label>포인트 이름 (한글) <i class="fal fa-briefcase"></i></label>
                    <input type="text" placeholder="양양" value=""/>
                </div>
                <div class="col-md-6">
                    <label>포인트 이름 (영문) <i class="fal fa-briefcase"></i></label>
                    <input type="text" placeholder="Yangyang" value=""/>
                </div>
            </div>

            <div class="row">
                <div class="col-md-4">
                    <label>국가</label>
                    <div class="listsearch-input-item">
                        <select data-placeholder="국가를 선택하세요" class="chosen-select no-search-select" >
                            <option>대한민국</option>
                            <option>미국</option>
                        </select>
                    </div>
                </div>
                <div class="col-md-4">
                    <label>사이트</label>
                    <div class="listsearch-input-item">
                        <select data-placeholder="사이트를 선택하세요" class="chosen-select no-search-select" >
                            <option>고성</option>
                            <option>양양</option>
                            <option>강릉</option>
                            <option>서귀포</option>
                            <option>성산</option>
                            <option>제주시</option>
                        </select>
                    </div>
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
                <div class="review-range-item">
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
                </div>
            </div>
            <div class="row">
                <div class="col-md-3">
                    <label>시야(최저,m) <i class="fal fa-briefcase"></i></label>
                    <input type="text" placeholder="10" value=""/>
                </div>
                <div class="col-md-3">
                    <label>시야(최고,m) <i class="fal fa-briefcase"></i></label>
                    <input type="text" placeholder="10" value=""/>
                </div>
                <div class="col-md-3">
                    <label>수심(최저,m) <i class="fal fa-briefcase"></i></label>
                    <input type="text" placeholder="10" value=""/>
                </div>
                <div class="col-md-3">
                    <label>수심(최고,m) <i class="fal fa-briefcase"></i></label>
                    <input type="text" placeholder="10" value=""/>
                </div>
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
            <!-- Checkboxes -->
            <ul class="fl-wrap filter-tags no-list-style ds-tg">
                <li>
                    <input id="check-feature1" type="checkbox" name="check" checked>
                    <label for="check-feature1">동굴</label>
                </li>
                <li>
                    <input id="check-feature2" type="checkbox" name="check" checked>
                    <label for="check-feature2">난파선</label>
                </li>
                <li>
                    <input id="check-feature3" type="checkbox" name="check">
                    <label for="check-feature3">마크로</label>
                </li>
                <li>
                    <input id="check-feature4" type="checkbox" name="check">
                    <label for="check-feature4">대물</label>
                </li>
                <li>
                    <input id="check-feature5" type="checkbox" name="check" checked>
                    <label for="check-feature5">월다이빙</label>
                </li>
                <li>
                    <input id="check-feature6" type="checkbox" name="check">
                    <label for="check-feature6">딥다이빙</label>
                </li>
                <li>
                    <input id="check-feature6" type="checkbox" name="check">
                    <label for="check-feature6">드리프트</label>
                </li>
                <li>
                    <input id="check-feature6" type="checkbox" name="check">
                    <label for="check-feature6">리브어보드</label>
                </li>
                <li>
                    <input id="check-feature6" type="checkbox" name="check">
                    <label for="check-feature6">구조물</label>
                </li>
                <li>
                    <input id="check-feature6" type="checkbox" name="check">
                    <label for="check-feature6">국내우수</label>
                </li>
                <li>
                    <input id="check-feature6" type="checkbox" name="check">
                    <label for="check-feature6">글로벌TOP</label>
                </li>
            </ul>
            <!-- Checkboxes end -->
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
    <!-- profile-edit-container end-->
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
        <h3>하이라이트</h3>
    </div>
    <!-- profile-edit-container--> 
    <div class="profile-edit-container fl-wrap block_box">
        <div class="custom-form">
            <div class="row">
                <div class="col-md-6">
                    <label>하이라이트 #1 <i class="fal fa-briefcase"></i></label>
                    <input type="text" placeholder="국내 최대규모의 연산호 군락지, 유네스코 생물권 보호지역" value=""/>
                </div>
                <div class="col-md-6">
                    <label>이미지 (3장 이상)</label>
                    <div class="add-list-media-wrap">
                        <div class="listsearch-input-item fl-wrap">
                            <div class="fuzone">
                                <form>
                                    <div class="fu-text">
                                        <span><i class="fal fa-images"></i> Click here or drop files to upload</span>
                                        <div class="photoUpload-files fl-wrap"></div>
                                    </div>
                                    <input type="file" class="upload">
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div class="custom-form">
            <div class="row">
                <div class="col-md-6">
                    <label>하이라이트 #2 <i class="fal fa-briefcase"></i></label>
                    <input type="text" placeholder="형형색색의 작은 물고기 떼" value=""/>
                </div>
                <div class="col-md-6">
                    <label>이미지 (3장 이상)</label>
                    <div class="add-list-media-wrap">
                        <div class="listsearch-input-item fl-wrap">
                            <div class="fuzone">
                                <form>
                                    <div class="fu-text">
                                        <span><i class="fal fa-images"></i> Click here or drop files to upload</span>
                                        <div class="photoUpload-files fl-wrap"></div>
                                    </div>
                                    <input type="file" class="upload">
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="custom-form">
            <div class="row">
                <div class="col-md-6">
                    <label>하이라이트 #3 <i class="fal fa-briefcase"></i></label>
                    <input type="text" placeholder="구난파선, 신난파선 두군데의 난파선 포인트" value=""/>
                </div>
                <div class="col-md-6">
                    <label>이미지 (3장 이상)</label>
                    <div class="add-list-media-wrap">
                        <div class="listsearch-input-item fl-wrap">
                            <div class="fuzone">
                                <form>
                                    <div class="fu-text">
                                        <span><i class="fal fa-images"></i> Click here or drop files to upload</span>
                                        <div class="photoUpload-files fl-wrap"></div>
                                    </div>
                                    <input type="file" class="upload">
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="custom-form">
            <div class="row">
                <div class="col-md-6">
                    <label>하이라이트 #4 <i class="fal fa-briefcase"></i></label>
                    <input type="text" placeholder="" value=""/>
                </div>
                <div class="col-md-6">
                    <label>이미지 (3장 이상)</label>
                    <div class="add-list-media-wrap">
                        <div class="listsearch-input-item fl-wrap">
                            <div class="fuzone">
                                <form>
                                    <div class="fu-text">
                                        <span><i class="fal fa-images"></i> Click here or drop files to upload</span>
                                        <div class="photoUpload-files fl-wrap"></div>
                                    </div>
                                    <input type="file" class="upload">
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="custom-form">
            <div class="row">
                <div class="col-md-6">
                    <label>하이라이트 #5 <i class="fal fa-briefcase"></i></label>
                    <input type="text" placeholder="" value=""/>
                </div>
                <div class="col-md-6">
                    <label>이미지 (3장 이상)</label>
                    <div class="add-list-media-wrap">
                        <div class="listsearch-input-item fl-wrap">
                            <div class="fuzone">
                                <form>
                                    <div class="fu-text">
                                        <span><i class="fal fa-images"></i> Click here or drop files to upload</span>
                                        <div class="photoUpload-files fl-wrap"></div>
                                    </div>
                                    <input type="file" class="upload">
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div class="dashboard-title  dt-inbox fl-wrap">
        <h3>포인트 이미지</h3>
    </div>
    <!-- profile-edit-container--> 
    <div class="profile-edit-container fl-wrap block_box">
        <div class="custom-form">
            <label>이미지 (5장 이상)</label>
            <div class="add-list-media-wrap">
                <div class="listsearch-input-item fl-wrap">
                    <div class="fuzone">
                        <form>
                            <div class="fu-text">
                                <span><i class="fal fa-images"></i> Click here or drop files to upload</span>
                                <div class="photoUpload-files fl-wrap"></div>
                            </div>
                            <input type="file" class="upload">
                        </form>
                    </div>
                </div>
            </div>
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
    $("#dash_poing_manage").addClass("user-profile-act");
  }
}
</script>


<style scoped>
@import '../../static/css/dashboard-style.css';
.text-start {text-align: left;}
</style>
