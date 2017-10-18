<template>
    <div>
        <div class="left-nav">
            <div class="left-nav__logo">
                <img src="../assets/img/logo-blue.png" alt="">
            </div>
            <div class="left-nav__content">
                <router-link to="/" tag="button" class="left-nav__button">
                    <!-- <button class="left-nav__button"> -->
                        <i class="material-icons">home</i>
                    <!-- </button> -->
                </router-link>
                <button class="left-nav__button">
                    <i class="material-icons">shopping_basket</i>
                </button>
                <button class="left-nav__button">
                    <i class="material-icons">search</i>
                </button>
                <button class="left-nav__button">
                    <i class="material-icons">exit_to_app</i>
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
    top: 0;
    left: 0;

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

.left-nav__button {
    height: 42px;
    margin: 10px 0;

    cursor: pointer;
    background: none;
    border: none;
}

.left-nav__button i {
    transition: 0.4s;
    opacity: 0.3;
}

.left-nav__button:hover i {
    opacity: .8;
    color: blue;
}



.left-nav__button:last-child {
    margin-top: auto;
    /* background: orange; */
}
</style>