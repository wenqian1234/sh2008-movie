<!--
 * @Author: your name
 * @Date: 2020-10-12 01:45:13
 * @LastEditTime: 2020-10-13 15:10:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \project\sh2008-movie\src\views\Detail\Detail.vue
-->

<template>
    <div>
        <div class="detail">
            <div class="img">
                <img v-lazy="film.poster"/>
            </div>
            <div>
                <div>{{film.name}}</div>
                <div>{{film.category}}</div>
                <div>{{film.premiereAt|parsepremiereAt}}上映</div>
                <div>{{film.nation}} | {{film.runtime}} 分钟</div>
                <div>
                    {{film.synopsis}}
                </div>
            </div>
            <div>
                    <div>
                        <Swiper :key=" 'actors_'+film.actors.length">
                            <!-- 循环输出演员信息 --> 
                            <div v-for="(item,index) in film.actors" :key="index" class="swiper-slide">
                                <img :src="item.avatarAddress" alt="">
                            </div>
                        </Swiper>
                    </div>

                     <!-- <div>
                        <Swiper :key=" 'photos_'+film.photos.length">
                             循环输出演员信息 --> 
                            <!-- <div v-for="(item,index) in film.photos" :key="index" class="swiper-slide">
                                <img :src="item.photos" alt="">
                            </div>
                        </Swiper>
                    </div> --> 
            </div>
        </div>
    </div>
</template>

<script>
import {movieDetailData} from '@/api/api'
import moment from 'moment'
import Swiper from '@/components/swiper'
export default {
    data(){
        return{
            film:{actors:[]}
        };
    },
    //  data(){
    //     return{
    //         film:{photos:[]}
    //     };
    // },
    async mounted() {
        let ret =await movieDetailData(this.$route.params.filmId)
        this.film=ret.data.data.film;
    },
    filters:{
       parsepremiereAt:function(value){
        //   时间戳的单位是秒，需要乘1000转化成毫秒处理 
           return moment(value*1000).format('YYYY-MM-DD')
       }
    },
    components:{
        Swiper
    },
    created() {
        // 发起通知，通知app.vue组件移除底部菜单
        this.eventBus.$emit('footernav',false);
    },
    beforeDestroy() {
        // 发起通知，通知app.vue组件恢复底部菜单
        this.eventBus.$emit('footernav',true);      
    },
}
</script>
<style lang="scss" scoped>
.detail {
    .swiper-slide{
        img{
            width:80px;
        }
    }
    .img {
        width: 100%;
        height: 260px;

        img {
            width: 100%;
            height: 100%;
        }
    }
}
</style>
    
