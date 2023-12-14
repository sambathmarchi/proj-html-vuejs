<template>
    <div class="">
        <h3>Testimonials</h3>
      <h1>Why Do People *Hearts* Us?</h1>
      <h4>Seeking for verbals of our service quality? Find them here. Everything is transparent and straightforward for your sense of jusitifcation.</h4>
    </div>
  
    <swiper
      ref="{swiperRef}"
      :slidesPerView="3"
      :centeredSlides="true"
      :pagination="{ type: 'fraction' }"
      :navigation="true"
      :loop="true"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide>
        <div class="card">
          <img src="" alt="">
          <div class="card-overlay">
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="card">
          <img src="" alt="">
          <div class="card-overlay">
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="card">
          <img src="" alt="">
          <div class="card-overlay">
          </div>
        </div>
      </swiper-slide>
    </swiper>
  
    <p class="append-buttons"></p>
  </template>
  
  <script>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  import 'swiper/css/pagination';
  import 'swiper/css/navigation';
  import { Pagination, Navigation } from 'swiper/modules';
  
  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Pagination, Navigation],
      };
    },
  };
  </script>
  
  <style>
  
  .swiper {
    width: 70%;
  }
  
  .swiper-slide {
    position: relative;
    
  }
  
  .swiper-slide img {
    width: 100%;
    height: auto;
    transition: transform 0.3s ease-in-out;
    
  }
  .original-price {
    text-decoration: line-through;
    margin-right: 0.5rem; 
}
  
 
   
  .card{
    border: none;
  }
  
  </style>
  