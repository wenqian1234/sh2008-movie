<!--
 * @Author: your name
 * @Date: 2020-10-14 20:03:34
 * @LastEditTime: 2020-10-15 12:46:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \project\sh2008-movie\src\views\Vuex\Vuex.vue
-->
<template>
    <div>
        {{num}}
        {{city}}
        {{getCount}}
        <br/>
        <button @click="handle4()">点我+13</button>
        <button @click="handle5()">获取总数</button>

    </div>
</template>

<script>
// 按需导入mapState和mapMutations
import {mapActions, mapState} from 'vuex';
import {mapMutations} from 'vuex'
import {Actions} from 'vuex'
// 按需导入mapGetters
import {mapGetters} from 'vuex'
export default {
    data(){
        return{
            num:1
        };
    },
    mounted() {
        // 1.state直接获取对应的数据值,只能写$store,不能写其他的
        console.log(this.$store.state.count);
        console.log(this.$store.state.city);
    },
    computed: {
        ...mapState(['count','city']),
        ...mapGetters(['getCount']),
    },
    methods:{
        ...mapMutations(['add']),
        ...mapActions(['addAsync']),
        handle1: function(){
            this.$store.commit('add',13)
        },
        handle2: function(){
            this.add(13)    //通过this.add 传参
        },
        handle3:function(){
            // dispatch是actions的异步调用方法
            this.$store.dispatch('addAsync',31)
        },
        handle4:function(){
            this.$store.dispatch('addAsync',20)
        },
        handle5:function(){
            console.log(this.$store.getters.getCount)
        }

        
    }
}
</script>