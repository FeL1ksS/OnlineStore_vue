<template>
    <!-- <div class="page"> -->
        <header class="header">
            <div class="header__intro">
                <h1>OLIOS</h1>
                <p>NEWEST FURNITURE SHOP</p>
                <p class="header__intro-bg-text">NEWEST</p>   
                <router-link to="/catalog">
                    <button class="header__intro-button">VIEW MORE</button>
                </router-link>
            </div>
            <div class="header__content">
                <!-- <div class="header__content-item">1</div>
                <div class="header__content-item">2</div>
                <div class="header__content-item">3</div>
                <div class="header__content-item">4</div>
                <div class="header__content-item">5</div> -->
            </div>
        </header>
    <!-- </div> -->
</template>

<script>
export default {

}
</script>
    
<style scoped>
    @font-face {
        font-family: Lato-Thin;
        src: url('../assets/font/Lato-Thin.ttf');
    }
    @font-face {
        font-family: Lato-Black;
        src: url('../assets/font/Lato-Black.ttf');
    }
    .header{
        height: inherit;
        display: flex;
        flex-direction: column;
        justify-content: center;
        /* border: 1px solid black; */
    }
    .header__intro{
        position: relative;
        font-size: 8vmin;
        text-align: center;
        font-family: "Lato-Thin";
        

        z-index: 10;
        /* border: 1px solid black; */
    }
    .header__intro h1,p{
        margin: 0;
    }
    .header__intro-bg-text{
        position: absolute;
        top: 0; left: 0; bottom: 0; right: 0;
        font-size: 32vmin;

        margin: auto;
        overflow:hidden; 

        /* position:absolute; top:0; text-align:center; ; */

        opacity: .1;
        z-index: -1;

        font-family: "Lato-Black";
    }
    .header__intro-button{
        height: 42px;
        width: 144px;

        color: white;
        font-family: "Lato-Black";
        font-size: 12px;
        letter-spacing: 1px;
        background-color: #0023ff;        
        border-radius: 40px;
        border: none;
        outline: none;
        cursor: pointer;
    }
    
    /* .header__content{
        width: 50%;
        align-self: center;
        display: inherit;
        flex-wrap: wrap;
        justify-content: space-around;
        border: 1px solid black;
    }
    .header__content-item{
        width: 225px;
        height: 200px;
        margin: 10px;
        border: 1px solid black;
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
    } */

</style>