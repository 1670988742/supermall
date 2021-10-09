//配置路由相关信息导入路由对象
import VueRouter from "vue-router";
import Vue from "vue";


const originalReplace = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalReplace.call(this, location).catch(err => err)
}

//1.通过vue.use（插件），安装插件
Vue.use(VueRouter)

import Home from "views/home/Home";
import Category from "views/category/Category";
import Cart from "views/cart/Cart";
import Profile from "views/profile/Profile";
import Detail from "../views/detail/Detail";
import Login from "../views/login/Login";
import Collection from "../views/profile/childComps/collect/Collection";



const routes = [
  {
    path: '',
    name: 'Home',
    meta: {
      title: '首页'
    },
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    meta: {
      title: '首页'
    },
    component: Home
  },
  {
    path: '/category',
    name: 'Category',
    meta: {
      title: '分类'
    },
    component: Category,

  },
  {
    path: '/cart',
    name: 'Cart',
    meta: {
      title: '购物车'
    },
    component: Cart,

  },
  {
    path: '/profile',
    name: 'Profile',
    meta: {
      title: '个人中心',
      requireAuth: true
    },
    component: Profile,

  },


  {
    path: '/detail/:id',
    props:true,
    name: 'Detail',
    meta: {
      title: '商品详情'
    },
    component: Detail
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '登录'
    },
    component: Login,
  },
  {
    path: '/collection',
    name: 'Collection',
    meta: {
      title: '商品收藏',
      requireAuth: true
    },
    component: Collection,
  }
]


const router  = new VueRouter({
  //配置路由和组建之间的映射关系
  routes,
  mode: 'history',
  linkActiveClass: 'active',

})

router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title
  if (to.meta.requireAuth) {     // 判断该路由是否需要登录权限
    let token = localStorage.getItem('token')
    if (token) {              // 通过localStorage.getItem()获取当前的 token 是否存在
      next()
    }
    else {
      next({
        path: '/login',
        // query: {
        //   redirect: to.fullPath    // 将跳转的路由path作为参数，登录成功后跳转到该路由
        // }
      })
    }
  }
  else {
    next()
  }
})


export default router
