<template>
    <div class="container-fluid item">
        <div class="row" style="height: inherit">
            <div class="col-md-5 col-lg-5 item-img">
                asd
            </div>
            <div class="col ml-5 border item__content">
                <div class="row mt-5 breadcrumb border">
                    <ul class="breadcrumb__content">
                        <li>
                            <a href="">PRODUCTS</a>
                        </li>
                    </ul>
                </div>
                <div class="row catalog__content-item item__content-info border">
                    <div class="item-description item__content-description">
                        <h4 class="title">WHITE TABLE</h4>
                        <p class="subtitle"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, odit? </p>
                        <div class="row no-gutters">
                            <div class="col border w-100">
                                <p class="hint">COST</p>
                                <p class="price mb-auto">$50</p>
                            </div>
                            <div class="col border">
                                <p class="hint">QUANTITY</p>
                                <input type="number" name="" class="w-50">
                                <button class="item-actions header__intro-button">ADD TO CARD</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row item__list-content border">
                <div class="col">
                    <div class="item__list-collections border">
                        <div class="item-on-list">1</div>
                        <div class="item-on-list">2</div>
                        <div class="item-on-list">3</div>
                        <div class="item-on-list">4</div>
                        <div class="item-on-list">5</div>
                        <div class="item-on-list">6</div>
                        <div class="item-on-list">7</div>
                        <div class="item-on-list">8</div>
                        <div class="item-on-list">9</div>
                        <div class="item-on-list">10</div>
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
.item {
    height: 90%;
    /* width: 100%; */
}

.item__content {
    display: flex;
    /* width: 100%; */
    flex-direction: column;
    justify-content: flex-start;
    /* overflow-y: hidden; */
}

.item-img {
    height: inherit;
    overflow: visible;
    background-color: rgb( 255, 255, 255);
    box-shadow: 0px 0px 25px 0px rgb( 219, 219, 219);

    border: 1px solid black;
}

.item-actions {}


.item__content-info {
    margin: auto 0;
}

.item__content-description .hint {
    font-family: "Lato-Light";
    font-size: 1.5vh;
    font-weight: bold;
    color: #828282;
}

.item__list-content {
    height: 10%;
    width: 100%;
    /* margin-left: -10%; */
    /* overflow: scroll; */
    background-color: rgb( 255, 255, 255);
    box-shadow: 0px 0px 25px 0px rgb( 219, 219, 219);
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

.Prostokąt_1_kopia_2 {
    background-color: rgb( 255, 255, 255);
    box-shadow: 0px 0px 25px 0px rgb( 219, 219, 219);
    position: absolute;
    left: 891px;
    top: 1045px;
    width: 1410px;
    height: 393px;
    z-index: 186;
}

.catalog__content-item .item-description .title {
    font-size: 4vh;
}

.catalog__content-item .item-description .subtitle {
    font-size: 3vh;
}

.catalog__content-item .item-description .price {
    margin-top: 18px;
    font-family: "Lato-Bold";
    font-size: 2.8vh;
}
</style>

