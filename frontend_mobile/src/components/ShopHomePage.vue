<template>
  <div class="mb-3 pb-5">
    <div id="menu-main" class="menu menu-box-left rounded-0" data-menu-width="280" data-menu-active="nav-shopping" data-menu-load=""></div>    
    

    <div class="card card-style bg-transparent shadow-0 mb-2 rounded-sm">
        <div class="content mt-n3 mb-4">
            <div class="search-box search-dark shadow-sm border-0 mt-4 bg-theme rounded-sm bottom-0">
                <i class="fa fa-search ms-1"></i>
                <input type="text" class="border-0" placeholder="Searching for something? Try 'pizza'" data-search>
            </div>   
            <div class="search-results disabled-search-list">
                <div>
                    <a href="#" data-filter-item data-filter-name="all food burger cheese ham bacon">
                        <div class="d-flex mt-4">
                            <div class="align-self-center">
                                <img src="images/food/small/1s.jpg" class="rounded-m me-3" width="80">
                            </div>
                            <div class="align-self-center">
                                <h2 class="font-15 line-height-s mt-1 mb-n1">Cheesy Hamburger <br> with Bacon and Ham</h2>
                                <p class="mb-0 font-11 mt-2 line-height-s">
                                    <i class="fa fa-truck color-brown-dark pe-2"></i>Ready in 20 Minutes
                                </p>
                            </div>
                            <div class="ms-auto ps-3 align-self-center text-center">
                                <h2 class="font-18 mb-n2">$14.75</h2>
                                <span class="color-highlight font-9">per serving</span>
                            </div>
                        </div>
                    </a>          
                    <a href="#" data-filter-item data-filter-name="all food fries chicken breast fried">
                        <div class="d-flex mt-4">
                            <div class="align-self-center">
                                <img src="images/food/small/8s.jpg" class="rounded-m me-3" width="80">
                            </div>
                            <div class="align-self-center">
                                <h2 class="font-15 line-height-s mt-1 mb-n1">Chicken Crispy <br> Strips with Fries</h2>
                                <p class="mb-0 font-11 mt-2 line-height-s">
                                    <i class="fa fa-truck color-brown-dark pe-2"></i>Ready in 25 Minutes
                                </p>
                            </div>
                            <div class="ms-auto ps-3 align-self-center text-center">
                                <h2 class="font-18 mb-n2">$23.44</h2>
                                <span class="color-highlight font-9">per serving</span>
                            </div>
                        </div>
                    </a>
                    <a href="#" data-filter-item data-filter-name="all food pizza special house">
                        <div class="d-flex mt-4">
                            <div class="align-self-center">
                                <img src="images/food/small/2s.jpg" class="rounded-m me-3" width="80">
                            </div>
                            <div class="align-self-center">
                                <h2 class="font-15 line-height-s mt-1 mb-n1">House Special <br> Classic Crust Pizza</h2>
                                <p class="mb-0 font-11 mt-2 line-height-s">
                                    <i class="fa fa-truck color-brown-dark pe-2"></i>Ready in 43 Minutes
                                </p>
                            </div>
                            <div class="ms-auto align-self-center text-center">
                                <h2 class="font-18 mb-n2">$17.25</h2>
                                <span class="color-highlight font-9">per serving</span>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <div class="search-no-results disabled mt-4">
            <div class="card card-style">
                <div class="content">
                    <h1>No Results</h1>
                    <p>
                        Your search brought up no results. Try using a different keyword. Or try typying all 
                        to see all items in the demo. These can be linked to anything you want.
                    </p>
                </div>
            </div>
        </div>
    </div>

    <div class="splide topic-slider slider-no-arrows slider-no-dots pb-2" id="topic-slider-1">
        <div class="splide__track">
            <div class="splide__list">
                <div class="splide__slide">
                    <h1 class="font-16 d-block"><a href="#" class="color-theme">슈트</a></h1>
                </div>
                <div class="splide__slide">
                    <h1 class="font-16 d-block"><a href="#" class="color-theme opacity-50">핀</a></h1>
                </div>
                <div class="splide__slide">
                    <h1 class="font-16 d-block"><a href="#" class="color-theme opacity-50">마스크&스노클</a></h1>
                </div>
                <div class="splide__slide">
                    <h1 class="font-16 d-block"><a href="#" class="color-theme opacity-50">장갑&삭스&후드</a></h1>
                </div>
                <div class="splide__slide">
                    <h1 class="font-16 d-block"><a href="#" class="color-theme opacity-50">부이시스템</a></h1>
                </div>
                <div class="splide__slide">
                    <h1 class="font-16 d-block"><a href="#" class="color-theme opacity-50">웨이트시스템</a></h1>
                </div>
                <div class="splide__slide">
                    <h1 class="font-16 d-block"><a href="#" class="color-theme opacity-50">이퀄라이징</a></h1>
                </div>
                <div class="splide__slide">
                    <h1 class="font-16 d-block"><a href="#" class="color-theme opacity-50">가방</a></h1>
                </div>
                <div class="splide__slide">
                    <h1 class="font-16 d-block"><a href="#" class="color-theme opacity-50">악세서리</a></h1>
                </div>
            </div>
        </div>
    </div>




    <div class="divider divider-margins"></div>
        
        <div class="content mb-0">
            <div class="row mb-0">
                <div class="col-6 pe-2">
                    <div class="card card-style mx-0 px-2">
                        <img src="/static/images/diving_beach.jpg" class="img-fluid">
                        <p class="color-highlight font-600 mb-n1">Pizza</p>
                        <h2>Margerita</h2>
                        <h5 class="font-14">$14.99</h5>
                        <p class="font-11 line-height-s pt-3">
                            Tomato Sauce, Mozzarella, Pizza Stuff, Oregano
                        </p>
                        <a href="#" class="btn btn-s btn-full border-highlight rounded-s color-highlight mb-3">Order</a>
                    </div>
                </div>
                <div class="col-6 ps-2">
                    <div class="card card-style mx-0 px-2">
                        <img src="/static/images/diving_beach.jpg" class="img-fluid">
                        <p class="color-highlight font-600 mb-n1">Pizza</p>
                        <h2>Vegetarian</h2>
                        <h5 class="font-14">$24.99</h5>
                        <p class="font-11 line-height-s pt-3">
                            Tomato Sauce, Mozzarella, Pizza Stuff, Oregano
                        </p>
                        <a href="#" class="btn btn-s btn-full border-highlight rounded-s color-highlight mb-3">Order</a>
                    </div>
                </div>
            </div>
            
        </div>
        
        <div class="divider divider-margins"></div>

        <div class="content mt-0 mb-0">
            <div class="d-flex">
                <div class="align-self-center">
                    <h1 class="mb-0 font-18">Our Favorites</h1>
                </div>
                <div class="ms-auto align-self-center">
                    <a href="#" class="float-end font-12 font-400">See All</a>
                </div>
            </div>
        </div>
        
        <div class="splide double-slider visible-slider slider-no-arrows slider-no-dots" id="double-slider-1">
            <div class="splide__track">
                <div class="splide__list">
                    <div class="splide__slide">
                        <div class="card m-2 card-style">
                            <img src="images/food/regular/1.jpg" class="img-fluid">
                            <div class="p-2 bg-theme rounded-sm">
                                <div class="d-flex">
                                    <div>
                                        <h4 class="mb-n1 font-14 line-height-xs pb-2">Royal <br>Burger</h4>
                                    </div>
                                    <div class="ms-auto">
                                        <h4 class="font-16">$24</h4>
                                    </div>
                                </div>
                                <p class="font-10 mb-0"><i class="fa fa-star color-yellow-dark pe-2"></i>34 Recommend It</p>
                            </div>
                        </div>
                    </div>
                    <div class="splide__slide">
                        <div class="card m-2 card-style">
                            <img src="images/food/regular/2.jpg" class="img-fluid">
                            <div class="p-2 bg-theme rounded-sm">
                                <div class="d-flex">
                                    <div>
                                        <h4 class="mb-n1 font-14 line-height-xs pb-2">Pizza <br>Prosciutto</h4>
                                    </div>
                                    <div class="ms-auto">
                                        <h4 class="font-16">$24</h4>
                                    </div>
                                </div>
                                <p class="font-10 mb-0"><i class="fa fa-star color-yellow-dark pe-2"></i>34 Recommend It</p>
                            </div>
                        </div>
                    </div>
                    <div class="splide__slide">
                        <div class="card m-2 card-style">
                            <img src="images/food/regular/3.jpg" class="img-fluid">
                            <div class="p-2 bg-theme rounded-sm">
                                <div class="d-flex">
                                    <div>
                                        <h4 class="mb-n1 font-14 line-height-xs pb-2">Chocolate <br>Dessert</h4>
                                    </div>
                                    <div class="ms-auto">
                                        <h4 class="font-16">$24</h4>
                                    </div>
                                </div>
                                <p class="font-10 mb-0"><i class="fa fa-star color-yellow-dark pe-2"></i>34 Recommend It</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>











        <div class="card card-style card-full-left" style="background-image:url(images/food/regular/3.jpg)" data-card-height="230">
            <div class="card rounded-0 shadow-xl" data-card-height="cover" style="width:100px; z-index:99;">
                <div class="card-center text-center">
                    <h1 class="font-28 text-uppercase font-900 opacity-30">Mon</h1>
                    <h1 class="font-24 font-900">27th</h1>
                </div>
            </div>
            <div class="card-top ps-5 ms-5 pt-3">
                <div class="ps-4">
                    <h1 class="color-white pt-3 pb-3">Grand Opening </h1>
                    <p class="color-white mb-0"><i class="fa fa-mobile color-white pe-2 icon-30"></i> Bench Pressing and Squats</p>
                    <p class="color-white"><i class="fa fa-map-marker color-white pe-2 icon-30"></i> Steve Jobs Theater, Palo Alto</p>
                    <a href="#" data-menu="menu-join" class="btn btn-m bg-white color-black font-700">Accept</a>
                    <a href="#" data-menu="menu-join" class="btn btn-m border-white color-white font-700 ms-3">Decline</a>
                </div>
            </div>
            <div class="card-overlay bg-black opacity-70"></div>
        </div>

  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  mounted() {
    var preloader = document.getElementById('preloader')
    if(preloader){preloader.classList.add('preloader-hide');}
    
    
    
  },
  components: {
    
  },
  created() {
    
  },
  destroyed () {
    
  },
  data () {
    return {
      
    }
  }, methods: {
    
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.font-noto {font-family: 'Noto Sans Korean'}

</style>
