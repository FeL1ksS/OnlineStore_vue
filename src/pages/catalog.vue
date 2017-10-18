<template>
    <div class="pg">
        <div class="breadcrumb">
            <ul class="breadcrumb__content">
                <li>
                    <a href="">PRODUCTS</a>
                </li>
                <li>
                    <a href="">PRODUCTS2</a>
                </li>
            </ul>
        </div>
        <div class="container catalog">
            <div class="row justify-content-start catalog__content">
                <!-- <div class="col-md-12"> -->
                    <div class="col-md-4">
                        <div class="catalog__content-item">1</div>
                    </div>
                    <div class="col-md-8">
                        <div class="catalog__content-item">2</div>
                    </div>
                    <div class="w-100"></div>
                    <div class="col-md-4">
                        <div class="catalog__content-item">3</div>
                    </div>
                    <div class="col-md-4">
                        <div class="catalog__content-item">4</div>
                    </div>
                    <div class="col-md-4">
                        <div class="catalog__content-item">5</div>
                    </div>
                <!-- </div> -->
            </div>

        </div>

    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.pg {
    height: 100%;
    border: 1px solid red;
    box-sizing: border-box;
}

.catalog {
    /* display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start; */
    /* box-sizing: border-box;
    height: 70%;
    */
    /* width: initial; */
    /* margin: 4% 20% 0 10%; */
    border: 1px solid orange;
}

.catalog__content {
    /* padding: 10px; */
    /* display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap; */
}
.col-md-2{
}
.catalog__content-item {
    box-sizing: border-box;
    height: 200px;
    
    margin: 10px 0;
    padding: 10px;
    /* margin: 20px; */
    background: white;
    border: 1px solid black;
}

.catalog__content-item:nth-child(2) {
    /* margin-right: 0px; */
}


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