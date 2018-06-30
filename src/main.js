import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import {
  store
} from './store/store'
import axios from 'axios'
Vue.prototype.axios = axios;

axios.defaults.baseURL = 'https://wd1347713459zgtrvt.wilddogio.com'

// 全局守卫
// router.beforeEach((to, from, next) => {
//   // alert('还没有登录，请先登录');
//   // next();
//   // 判断store.getters.isLogin===false

//   if (to.path == '/login' || to.path == '/register') {
//     next()
//      next(false)； //不会跳转
//   } else {
//     alert('还没有登录，请先登录');
//     next('/login')
//   }
// })

// 后置钩子  真心没啥用，每一个跳转都会运行
// router.afterEach((to, from) => {
//   alert('alert Each')
// })



new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
