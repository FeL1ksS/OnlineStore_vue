<template>
    <div class="container-fluid catalog">
        <div class="row justify-content-center ">
            <div class="col-md-11 col-lg-8">
                <div class="breadcrumb">
                    <ul class="breadcrumb__content">
                        <li>
                            <a href="">PRODUCTS</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="row justify-content-center catalog__content">
            <div class="col-sm-12 col-md-3 col-lg-2">
                <div class="catalog__content-item catalog__content-item_size_2">
                    <img src="../assets/img/red-seat.png" alt="" srcset="">
                    <div class="item-description">
                        <h4>RED SEAT</h4>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p class="catalog__item-price">$45</p>
                    </div>
                </div>
            </div>
            <div class=" col-sm-12 col-md-8 col-lg-6">
                <div class="catalog__content-item catalog__content-item_size_6">
                    <img src="../assets/img/white-table.png" alt="" srcset="">
                    <div class="item-description">
                        <h4>WHITE TABLE</h4>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p class="catalog__item-price">$350</p>
                    </div>
                </div>
            </div>
            <div class="w-100"></div>
            <div class="col-sm-12 col-md-3 col-lg-2">
                <div class="catalog__content-item catalog__content-item_size_2">
                    <img src="../assets/img/blue-seat.png" alt="" srcset="">
                    <div class="item-description">
                        <h4>BLUE SEAT</h4>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p class="catalog__item-price">$35</p>
                    </div>
                </div>
            </div>
            <div class="col-md-8 col-lg-4">
                <div class="catalog__content-item catalog__content-item_size_4">
                    <img src="../assets/img/modern-bed.png" alt="" srcset="">
                    <div class="item-description">
                        <h4>RED SEAT</h4>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p class="catalog__item-price">$120</p>
                    </div>
                </div>
            </div>
            <div class="col-md-11 col-lg-2">
                <div class="catalog__content-item catalog__content-item_size_2">
                    <img src="../assets/img/dark-seat.png" alt="" srcset="">
                    <div class="item-description">
                        <h4>RED SEAT</h4>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p class="catalog__item-price">$50</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.catalog {
    height: inherit;
    /* border: 1px solid black; */
    overflow: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.catalog__content {
    margin-top: 20px;
}

.catalog__content-item {
    display: flex;
    flex-direction: column;
    height: 220px;
    padding: 10px;
    margin-bottom: 20px;
    background-color: rgb( 255, 255, 255);
    border: 2px solid transparent;
    cursor: pointer;
    transition: all 0.3s;
    overflow: hidden;
}

.catalog__content-item:hover {
    transition: all 0.3;
    border: 2px solid orange;
}



.catalog__content-item img {}

.catalog__content-item .item-description h4,
p {
    margin: 5px;
    font-family: "Lato-Light";
}

.catalog__content-item .item-description h4 {
    font-size: 2.6vh;
}

.catalog__content-item .item-description p {
    font-size: 2.2vh;
    color: #a8a8a8;
}

.catalog__content-item .item-description .catalog__item-price {
    margin-top: 15px;
    color: blue;
    font-size: 2vh;
    letter-spacing: 1.5px;
    font-family: "Lato-Bold";
}


/* -------------------------------------- */

.catalog__content-item_size_2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.catalog__content-item_size_2 img {
    height: 50%;
}

.catalog__content-item_size_2 .catalog__item-price {
    margin-top: 5px;
    margin-bottom: 10px;
}


/* -------------------------------------- */

.catalog__content-item_size_4 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

.catalog__content-item_size_4 img {
    width: 50%;
    height: auto;
}

.catalog__content-item_size_4 .item-description {
    margin: 0 5%;
}

.catalog__content-item_size_4 .item-description h4 {
    font-size: 3.5vh;
}

.catalog__content-item_size_4 .item-description p {
    font-size: 2.5vh;
    /* margin-bottom:  */
}

.catalog__content-item_size_4 .item-description .catalog__item-price {
    margin-top: 10px;
    font-size: 2.5vh;
}


/* -------------------------------------- */

.catalog__content-item_size_6 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

.catalog__content-item_size_6 img {
    display: block;
    width: 50%;
    height: auto;
}

.catalog__content-item_size_6 .item-description {
    margin: 0 5%;
}

.catalog__content-item_size_6 .item-description h4 {
    font-size: 3.5vh;
}

.catalog__content-item_size_6 .item-description p {
    font-size: 2.5vh;
    /* margin-bottom:  */
}

.catalog__content-item_size_6 .item-description .catalog__item-price {
    margin-top: 10px;
    font-size: 2.5vh;
}


/* -------------------------------------- */


/* .catalog__content-item:nth-child(4){
    width: calc(220px * 2);
}
.catalog__content-item:nth-child(5){
}  */


/* .Grupa_20 {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 2300px;
  height: 1438px;
  z-index: 108;
}
.Photo {
  background-image: url("Photo.png");
  position: absolute;
  left: 463px;
  top: 308px;
  width: 193px;
  height: 204px;
  z-index: 107;
} */
</style>