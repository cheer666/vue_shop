import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from '../components/LoginView.vue'
import HomeView from '../components/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: LoginView
  },
  {
    path: '/home',
    component: HomeView
  }
]


const router = new VueRouter({
  routes
})

router.beforeEach((to,from,next)=>{
  // to 将来访问的路径
  // from 代表从哪个路径跳转而来
  // next 是一个函数，表示方向
  // next() 放行 next('/login') 强制跳转

  if(to.path === '/login') return next();
  // 获取token
  const tokenStr = window.sessionStorage.getItem('token')
  if(!tokenStr) return next('/login')
  next();
})

export default router
