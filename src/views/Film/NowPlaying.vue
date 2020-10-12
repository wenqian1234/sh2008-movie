
<template>
    <div>
        <FilmList :list="list" :type="type" :key=" 'film'+list.length"></FilmList>
        <!-- <Loading></Loading> -->
    </div>
</template>

<script>
// 导入正在热映的请求方法
import {nowPlayingListData} from '@/api/api'
// import Loading from '@/components/Loading'
import FilmList from '@/components/FilmList'
export default {
    data() {   //data是对象，对象必须有返回值
        return {
            pageNum:1,
            list:[],
            type:1 //当前传递的数据为正在热映的电影数据
        }
    },
    // 异步请求加async
     async mounted() {
        let ret = await nowPlayingListData(this.pageNum)
        // console.log(ret.data);
        this.list = ret.data.data.films;
    },
    // components:{
    //     Loading
    // }
    components:{
        FilmList
    }
}
</script>