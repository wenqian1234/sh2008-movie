/*
 * @Author: your name
 * @Date: 2020-10-09 11:35:27
 * @LastEditTime: 2020-10-13 15:01:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \project\sh2008-movie\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

// axios体验
// import axios from 'axios'
// // 配置域名
// axios.defaults.baseURL = "https://m.maizuo.com";
// // 添加请求拦截器
// axios.interceptors.request.use(function(config){
//   config.headers = {
//     "X-Client-Info": 
//     '{"a":"3000","ch":"1002","v":"5.0.4","e":"1598087896889693885431809","bc":"110100"}',
//     "X-Host": 
//     "mall.film-ticket.film.list",
//   }
//   // 返回配置
//   return config;
// },function(error){
//   // 对错误的处理
//   return Promise.reject(error);
// });

// axios.get("gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=8591124");

// 使用懒加载
import VuelazyLoad from 'vue-lazyload'
Vue.use(VuelazyLoad,{
  loading:
    "https://2url.cc/1OwrB",
});

// 定义事件总线
Vue.prototype.eventBus = new Vue();

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
