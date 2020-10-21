
<template>
        <!--两个class 是固定写法  -->
    <div class="swiper-container">   
        <div class="swiper-wrapper">
            <!-- 插槽（坑） -->
           <slot></slot>
           <!-- <slot></slot> -->
        </div> 
    </div>
</template>

<script>
import Swiper from 'swiper';
import "swiper/swiper-bundle.min.css";  //与project/sh2008-movie/node-modules/swiper/swiper-bundle.min.css一致
export default {
    mounted() {
        this.$nextTick( ()=>{
            new Swiper(".swiper-container",{
                slidesPerView: 4, //默认显示4个
                //  breakpoints: {
                //     640: {
                //         slidesPerView: 2,
                //         spaceBetween: 20,
                //     },
                //     768: {
                //         slidesPerView: 4,
                //         spaceBetween: 40,
                //     },
                //     1024: {
                //         slidesPerView: 5,
                //         spaceBetween: 50,
                //     },
                // },
            })
        })
    },
}
</script>