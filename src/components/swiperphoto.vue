<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <!-- 插槽（坑） -->
            <slot></slot>
        </div>
    </div>
</template>

<script>
// import Swiperphoto from "swiperphoto";
import Swiper from 'swiper';
import "swiper/swiper-bundle.min.css";
export default {
    mounted() {
        this.$nextTick(()=>{
            new Swiper(".swiper-container",{
                 slidesPerView: 2, //默认显示4个
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