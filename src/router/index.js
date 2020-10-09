import Vue from 'vue'
import VueRouter from 'vue-router'
import center from './routes/center'

Vue.use(VueRouter)

// 引入路由模块化文件
import centerRouter from './routes/center'
import cinemaRouter from './routes/cinema'
import filmRouter from './routes/film'

const routes = [
  {
    path: '/',
    redirect:'/film'
  },
  // 注册路由模块
  centerRouter,
  cinemaRouter,
  filmRouter,
]

const router = new VueRouter({
  mode: 'history',
  // 前缀
  // base: process.env.BASE_URL,
  routes
})

export default router
