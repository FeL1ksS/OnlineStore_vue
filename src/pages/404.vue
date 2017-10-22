<template>
    <div class="wrapper-swiper">

        <swiper :options="swiperOptionTop" :not-next-tick="notNextTick" ref="swiperTop">
            <!-- slides -->
            <swiper-slide>
                <img src="../assets/img/red-seat.png" alt="" srcset="">
            </swiper-slide>
            <swiper-slide>
                 <img src="../assets/img/blue-seat.png" alt="" srcset="">
            </swiper-slide>
            <swiper-slide>
                <img src="../assets/img/red-seat.png" alt="" srcset="">
            </swiper-slide>
            <swiper-slide>
                 <img src="../assets/img/blue-seat.png" alt="" srcset="">
            </swiper-slide>
            <swiper-slide>
                <img src="../assets/img/red-seat.png" alt="" srcset="">
            </swiper-slide>
            <swiper-slide>
                 <img src="../assets/img/blue-seat.png" alt="" srcset="">
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination" slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
            <div class="swiper-scrollbar" slot="scrollbar"></div>
        </swiper>
        <swiper :options="swiperOptionThumbs" class="gallery-thumbs" ref="swiperThumbs">
            <!-- slides -->
            <swiper-slide>
                <img src="../assets/img/red-seat.png" alt="" srcset="">
            </swiper-slide>
            <swiper-slide>
                 <img src="../assets/img/blue-seat.png" alt="" srcset="">
            </swiper-slide>
            <swiper-slide>
                <img src="../assets/img/red-seat.png" alt="" srcset="">
            </swiper-slide>
            <swiper-slide>
                 <img src="../assets/img/blue-seat.png" alt="" srcset="">
            </swiper-slide>
            <swiper-slide>
                <img src="../assets/img/red-seat.png" alt="" srcset="">
            </swiper-slide>
            <swiper-slide>
                 <img src="../assets/img/blue-seat.png" alt="" srcset="">
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination" slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
            <div class="swiper-scrollbar" slot="scrollbar"></div>
        </swiper>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        swiperOptionTop: {
          notNextTick: true,
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev',
          spaceBetween: 10
        },
        swiperOptionThumbs: {
          notNextTick: true,
          spaceBetween: 10,
          centeredSlides: true,
          slidesPerView: 3,
          touchRatio: 0.2,
          slideToClickedSlide: true
        }
      }
    },
    mounted() {
      const swiperTop = this.$refs.swiperTop.swiper
      const swiperThumbs = this.$refs.swiperThumbs.swiper
      swiperTop.params.control = swiperThumbs
      swiperThumbs.params.control = swiperTop
    }
  }
</script>


<style>
    .wrapper-swiper {
        border: 1px solid black;
        width: 60%;
        /* height: 20%; */
        margin: 0 auto;
    }
    .swiper-slide {
        margin: 0 auto;
        /* width: 150px; */
        /* height: 100px; */
        /* border: 1px solid black; */
        text-align: center;
        /* background: grey; */
    }
</style>
