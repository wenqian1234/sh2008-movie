<!--
 * @Author: your name
 * @Date: 2020-10-09 17:09:16
 * @LastEditTime: 2020-10-12 12:08:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \project\sh2008-movie\src\views\Film\ComingSoon.vue
-->
<template>
    <div>
         <FilmList :list="list" :type="type" :key=" 'film'+list.length"></FilmList>
    </div>
</template>

<script>
// 导入即将上映的请求方法
import {comingSoonListData} from '@/api/api'
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
        let ret = await comingSoonListData(this.pageNum)
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