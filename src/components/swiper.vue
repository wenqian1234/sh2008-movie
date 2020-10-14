<!--
 * @Author: your name
 * @Date: 2020-10-12 20:24:08
 * @LastEditTime: 2020-10-12 23:04:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \project\sh2008-movie\src\components\swiper.vue
-->
<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
           <slot></slot>
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
                slidesPerView: 4,
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