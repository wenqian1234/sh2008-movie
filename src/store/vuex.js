/*
 * @Author: your name
 * @Date: 2020-10-14 17:01:58
 * @LastEditTime: 2020-10-15 12:33:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \project\sh2008-movie\src\store\vuex.js
 */
// 引入
import Vue from 'vue'
import Vuex from 'vuex'
// 在vue中使用vuex
Vue.use(Vuex)
export default new Vuex.Store({
    state:{
        count:0,
        city:'地球',
    },
    mutations:{
        add:function(state,step){
            state.count +=step;
        },
        setCity:function(state,cityName) {
            state.city =cityName
        },
        
    },
    actions:{
        addAsync:function(context,step){
            setTimeout(() => {
               context.commit('add',step) 
            }, 3000);
        }
    },
    getters:{
        getCount:function(state){
            return "当前总数是" + state.count
        }
    },
});