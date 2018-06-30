import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 引入模块
import Home from '../components/Home'
import Menu from '../components/Menu'
import Admin from '../components/Admin'
import Login from '../components/Login'
import Register from '../components/Register'

// 二级路由
import About from '../components/about/About'
import Contact from '../components/about/Contact'
import Delivery from '../components/about/Delivery'
import History from '../components/about/History'
import OrderingGuide from '../components/about/OrderingGuide'


const routes = [{
    path: '/',
    components: {
      default: Home,
      'delivery': Delivery,
      'history': History,
      'orderingGuide': OrderingGuide

    },
    // beforeEnter: (to, from, next) => {
    //   alert('非登录状态，不能访问本页面');
    //   next('/login'); //如果传入false就不会跳转了
    // }

  },
  {
    path: "/menu",
    component: Menu
  },
  {
    path: "/admin",
    component: Admin
  },
  { //这里命名式路由
    path: '/login',
    name: "login",
    component: Login
  }, {
    path: "/register",
    component: Register
  },
  {
    path: '/about',
    component: About,
    redirect: '/about/contact',
    children: [{
      path: 'contact',
      name: 'contact',
      component: Contact
    }, {
      path: 'delivery',
      component: Delivery,
      name: "delivery"
    }, {
      path: 'history',
      component: History,
      name: 'history'
    }, {
      path: "orderingGuide",
      component: OrderingGuide,
      name: 'orderingGuide'
    }]
  }, {
    // 这个特殊的路由写在最下面
    path: "*",
    redirect: '/'
  }
];

export default new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 100
    }
    // return {selector:'.btn's}
  }
})
