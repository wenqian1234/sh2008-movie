
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
import authRouter from './routes/auth'

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
  // 注册路由
  ...authRouter,
];

const router = new VueRouter({
  mode: 'history',
  // 前缀
  // base: process.env.BASE_URL,
  routes
});

// 路由守卫
router.beforeEach( (to,from,next)=>{
  let arr =[
    // 存需要登录的地址,继续往里加就行
    "/cinema",
  ];
  if(arr.includes(to.path)){
    // 返回真则在（需要登录）
    if(localStorage.getItem("_token")){
      next()
    }else{
      next({path:'/login',query:{'refer':to.fullPath}})
    }
  }else{
    next()
  }
})
export default router
