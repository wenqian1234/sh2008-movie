
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
            <div class="actor">演职人员 
                <div>
                        <Swiper :key=" 'actors_'+film.actors.length">
                            <!-- 循环输出演员信息 --> 
                            <div v-for="(item,index) in film.actors" :key="index" class="swiper-slide">
                                <img :src="item.avatarAddress" alt="">
                                <!-- <span :class="item.name"></span>  -->
                            </div>
                        </Swiper>
                </div>
            </div>
            <div class="photo">剧照 
                <div>
                        <Swiper :key=" 'photos_'+film.photos.length">
                             <!-- 循环输出剧照信息 -->  
                             <div v-for="(item,index) in film.photos" :key="index" class="swiper-slide">
                                <img class="picture" :src="item" alt="">
                            </div>
                        </Swiper> 
                </div>
            </div> 
        </div>
        <button @click="gotocinema" class="btn btn-success">选座购票</button>
    </div>
</template>

<script>
import {movieDetailData} from '@/api/api'
// 引入moment
import moment from 'moment'
import Swiper from '@/components/swiper'
// import Swiperphoto from '@/components/swiperphoto'

export default {
    data(){
        return{
            film:{actors:[],photos:[]}
        };
    },

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
    methods:{
        gotocinema(){
            // 点击跳转到上次浏览页面
            // this.$router.go(-1)
            // 点击跳转到影院列表页
            this.$router.replace('/cinema')
        }
    }

}
</script>
<style lang="scss" scoped>
.detail {
    margin-bottom:50px;
    overflow: hidden;
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
    .actor{
        margin:10px 0;
        width:100%;
        
    }
    .photo{
        margin:10px 0;
        width:100%;
        height: 80%;

        .picture{
            width:100px;
            height:80px;
            position: relative;
        }
    }
    
}
button{
    position: fixed;
    bottom: 0;
    left: 0;
    height: 49px;
    width: 100%;
    text-align: center;
    background-color: #ff5f16;
    color: #fff;
    font-size: 16px;
    line-height: 49px;
    border: #cccccc;
}
</style>
    
