<template>
    <div class="container-fluid h-100 border">
        <div class="row h-100 border">
            <div class="col col-sm-12 col-md-5 item-img">
                <div class="my-auto">
                    <img src="../assets/img/white-seat.png" alt="">
                </div>
            </div>
            <div class="col col-sm-12 col-md-7 pl-5  item__content">

                <div class="row h-100">
                    <div class="col-md-12 item__content-description">
                        <div class="mt-5 breadcrumb border">
                            <ul class="breadcrumb__content">
                                <li>
                                    <a href="">PRODUCTS</a>
                                </li>
                            </ul>
                        </div>
                        <!-- mixing catalog__content-item- -->
                        <div class="catalog__content-item border">
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
                    <div class="col-md-12 item__content-collections ">3</div>
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
.item-img {
    height: inherit;
    overflow: visible;
    background-color: rgb( 255, 255, 255);
    box-shadow: 0px 0px 25px 0px rgb( 219, 219, 219);

    border: 1px solid black;
    /* text-align: center; */
}
.item-img img{
    width: 50%;
    
}
.item__content-description {
    height: 70%;
    border: 1px solid black;
}
.item__content-description .catalog__content-item {
    width: 70%;
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
    background-color: rgb( 255, 255, 255);
    box-shadow: 0px 0px 25px 0px rgb( 219, 219, 219);
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


</style>

