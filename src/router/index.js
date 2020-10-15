/*
 * @Author: your name
 * @Date: 2020-10-09 11:35:27
 * @LastEditTime: 2020-10-14 18:29:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \project\sh2008-movie\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import center from './routes/center'

Vue.use(VueRouter)

// 引入路由模块化文件
import centerRouter from './routes/center'
import cinemaRouter from './routes/cinema'
import filmRouter from './routes/film'
import detailRouter from './routes/detail'
import cityRouter from './routes/city'
import vuexRouter from './routes/vuex'


const routes = [
  {
    path: '/',
    redirect:'/film',
  },
  // 注册路由模块
  centerRouter,
  cinemaRouter,
  filmRouter,
  detailRouter,
  cityRouter,
  vuexRouter,
]

const router = new VueRouter({
  mode: 'history',
  // 前缀
  // base: process.env.BASE_URL,
  routes
})

export default router
