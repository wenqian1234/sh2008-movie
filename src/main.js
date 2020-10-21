
import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

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
    "https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1603181227&di=3f37e99c8d02a8094e012133383af8c1&src=http://a2.att.hudong.com/36/48/19300001357258133412489354717.jpg",
});

// 定义事件总线
Vue.prototype.eventBus = new Vue();

// 导入store的store对象
import store from '@/store/vuex';
// 同步一下localStorage到Vuex
let _token = localStorage.getItem("_token");
if(_token){
  store.commit("updateToken",_token);
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
