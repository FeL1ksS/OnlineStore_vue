<template>
    <div class="page">
        <header class="header">
            <div class="header__introduction">
                <p>Newest Shop</p>
                <router-link to="/catalog">Переход</router-link>
            </div>
            <div class="header__content">
                <div class="header__content-item">1</div>
                <div class="header__content-item">2</div>
                <div class="header__content-item">3</div>
                <div class="header__content-item">4</div>
                <div class="header__content-item">5</div>
            </div>
        </header>
    </div>
</template>

<script>
export default {

}
</script>
    
<style scoped>
    .header{
        height: inherit;
        display: flex;
        flex-direction: column;
        justify-content: center;

        /* border: 1px solid black; */
    }
    .header__introduction{

        border: 1px solid black;
    }
    .header__content{
        width: 50%;
        align-self: center;
        display: inherit;
        /* align-items: flex-end; */
        flex-wrap: wrap;
        justify-content: space-around;
        border: 1px solid black;
    }
    .header__content-item{
        width: 225px;
        height: 200px;
        margin: 10px;
        border: 1px solid black;
        /* flex-grow: 1; */
    }
    .header__content-item:nth-child(1){
        -webkit-order: 0;
        -ms-flex-order: 0;
        order: 0;
        -webkit-flex: 2 0 auto;
        -ms-flex: 2 0 auto;
        flex: 2 0 auto;
        -webkit-align-self: baseline;
        -ms-flex-item-align: baseline;
        align-self: baseline;
    }
</style>