<template>
    <div class="container-fluid h-100 border">
        <div class="row h-100 border">
            <div class="col col-sm-12 col-md-5 item-img">
                <swiper :options="swiperOptionTop" class="gallery-top" ref="swiperTop">
                    <!-- slides -->
                    <swiper-slide>
                        <img src="../assets/img/white-seat.png" alt="" srcset="">
                    </swiper-slide>
                    <swiper-slide>
                        <img src="../assets/img/seat-off-b-1.png" alt="" srcset="">
                    </swiper-slide>
                    <swiper-slide>
                        <img src="../assets/img/seat-off-w-3.png" alt="" srcset="">
                    </swiper-slide>
                    <swiper-slide>
                        <img src="../assets/img/seat-off-w-2.png" alt="" srcset="">
                    </swiper-slide>
                    <swiper-slide>
                        <img src="../assets/img/seat-off-n-2.png" alt="" srcset="">
                    </swiper-slide>
                    <!-- Optional controls -->
                </swiper>
            </div>
            <div class="col col-sm-12 col-md-7  item__content">
                <div class="row  h-100">
                    <div class="col-md-12 item__content-description">
                        <div class="mt-5 breadcrumb border">
                            <ul class="breadcrumb__content">
                                <li>
                                    <a href="">PRODUCTS</a>
                                </li>
                            </ul>
                        </div>
                        <div class="vcenter border">

                            <!-- mixing catalog__content-item- -->
                            <div class="catalog__content-item  border">
                                <div class="item-description">
                                    <h4 class="title">WHITE TABLE - OFFICE</h4>
                                    <p class="subtitle"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, odit? </p>
                                    <div class="row no-gutters">
                                        <div class="col border w-100">
                                            <p class="hint">COST</p>
                                            <p class="price mb-auto">$50</p>
                                        </div>
                                        <div class="col border">
                                            <p class="hint">QUANTITY</p>
                                            <input type="number" name="" class="" style="width: 20%;">
                                            <button class="item-actions header__intro-button">ADD TO CARD</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- mixing catalog__content-item- -->
                        </div>
                    </div>
                    <div class="col-md-12 item__content-collections ">
                        <swiper :options="swiperOptionThumbs" class="gallery-thumbs" ref="swiperThumbs">
                            <!-- slides -->
                            <swiper-slide>
                                <img src="../assets/img/white-seat.png" alt="" srcset="">
                            </swiper-slide>
                            <swiper-slide>
                                <img src="../assets/img/seat-off-b-1.png" alt="" srcset="">
                            </swiper-slide>
                            <swiper-slide>
                                <img src="../assets/img/seat-off-w-3.png" alt="" srcset="">
                            </swiper-slide>
                            <swiper-slide>
                                <img src="../assets/img/seat-off-w-2.png" alt="" srcset="">
                            </swiper-slide>
                            <swiper-slide>
                                <img src="../assets/img/seat-off-n-2.png" alt="" srcset="">
                            </swiper-slide>
                            <!-- Optional controls -->
                            <!-- <div class="swiper-pagination" slot="pagination"></div> -->
                            <div class="swiper-button-prev" slot="button-prev"></div>
                            <div class="swiper-button-next" slot="button-next"></div>
                            <!-- <div class="swiper-scrollbar" slot="scrollbar"></div> -->
                        </swiper>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            swiperOptionTop: {
                notNextTick: true,
                centeredSlides: true

            },
            swiperOptionThumbs: {
                notNextTick: true,
                spaceBetween: 10,
                centeredSlides: true,
                slidesPerView: 3,
                touchRatio: 0.2,
                mousewheelControl: true,
                slideToClickedSlide: true,
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev'
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

<style scoped>
.item-img {
    height: inherit;

    /* display: flex; */
    /* flex-direction: column; */
    /* justify-content: center;  */
    /* align-items: center; */
    overflow: hidden;
    padding-left: 0; 
    padding-right: 0; 
    background-color: rgb( 255, 255, 255);
    box-shadow: 0px 0px 25px 0px rgb( 219, 219, 219);
    z-index: 10;
    border: 1px solid black;
    text-align: center;
}



.swiper-slide {
    /* height: inherit; */
    text-align: center;
    margin: auto;
    padding: 1px;
    /* background: grey; */
    border: 1px solid black;
}

.gallery-top {
    height: 100%;
}

.gallery-top .swiper-slide img {
    width: 100%;
    height: auto;
}

.gallery-thumbs .swiper-slide img {
    width: 75%;
    height: auto;
}

.gallery-top .swiper-slide {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.vcenter {
    display: flex;
    height: 85%;
    flex-direction: column;
    justify-content: center;
}


.item__content-description {
    height: 70%;
    padding-left: 4vw;
    border: 1px solid black;
}

.item__content-description .catalog__content-item {
    width: 70%;
    background: none;
}

.item__content-description .hint {
    font-family: "Lato-Light";
    font-size: 1.5vh;
    font-weight: bold;
    color: #828282;
}

.catalog__content-item .item-description .title {
    font-size: 4vh;
}

.catalog__content-item .item-description .subtitle {
    margin: 20px 0;
    font-size: 3vh;
}

.catalog__content-item .item-description .price {
    margin-top: 18px;
    font-family: "Lato-Bold";
    font-size: 2.8vh;
}



.item__content-collections {
    height: 30%;
    padding-top: 10px;
    background-color: rgb( 255, 255, 255);
    /* box-shadow: 0px 0px 25px 0px rgb( 219, 219, 219); */
    z-index: 1;
    border: 1px solid black;
}

.item__list-collections {
    white-space: nowrap;
    /* overflow: hidden; */
    overflow-x: scroll;
}

.item-on-list {
    display: inline-block;
    height: 64px;
    width: 128px;
    border: 1px solid black;
}

* {
    border: none !important;
}
</style>

