<template>
    <div class="container-fluid h-100 border">
        <!-- <div class="row h-100"> -->
            <div class="row h-100 border">
                <div class="col col-sm-12 col-md-6       cl-1 ">1</div>
                <div class="col col-sm-12 col-md-6 pl-5  cl-2 ">
                    <div class="row h-100">
                        <div class="col-md-12 cl-2-1 ">2</div>
                        <div class="col-md-12 cl-2-2 ">3</div>
                    </div>
                </div>
                
            </div>
        <!-- </div> -->
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

    .cl-1{
        height: 100%;
        background: green;
        /* z-index: 1; */
    }
    .cl-2{
        background: orange;
    }

    .cl-2-1{
        height: 70%;
        background: blue;
    }
    .cl-2-2{
        height: 30%;
        width: 120%;
        /* margin-left: -3rem; */
        background: grey;
        /* margin-left: -10rem !important; */
    }
    .r-3{
        width: 100%;
        margin-left: -3rem !important;
        margin-right: -3rem !important;
        /* margin-left: -17%; */
    }
</style>


            // <div class="row justify-content-center">
            //     <div class="col-xs-1">
            //         <h1>404</h1>
            //     </div>
            // </div>


