<template>
    <div>
        <div class="left-nav">
            <div class="left-nav__logo">
                <img src="../assets/logo-blue.png" alt="">
            </div>
            <div class="left-nav__content">
                <button class="left-nav__button">
                    <img src="../assets/home.svg" alt="" width="24">
                </button>
                <button class="left-nav__button">К</button>
                <button class="left-nav__button">П</button>
                <button class="left-nav__button">
                    <img src="../assets/log-out.svg" alt="" width="24">
                </button>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
    .left-nav {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: center;

        width: 100px;
        height: 100%;

        position: fixed;

        background-color: rgb( 255, 255, 255);
        box-shadow: 0px 0px 25px 0px rgb( 219, 219, 219);

        z-index: 10;

        /* border: 1px solid grey; */
    }

    .left-nav__content {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: stretch;
        flex-grow: 1;
        width: inherit;

        /* border: 1px solid grey; */
    }
    .left-nav__content img{
        opacity: 0.3;
    }

    .left-nav__button {
        height: 42px;
        margin: 10px 0;
        background: none;
        border: none;
    }

    .left-nav__button:last-child {
        margin-top: auto;
        /* background: orange; */
    }
</style>