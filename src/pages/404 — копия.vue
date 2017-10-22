<template>
    <div class="wrapper-swiper">

        <swiper :options="swiperOption" :not-next-tick="notNextTick" ref="mySwiper">
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
        swiperOption: {
          pagination: '.swiper-pagination',
          slidesPerView: 3,
          paginationClickable: true,
        //   spaceBetween: -400
        }
      }
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
