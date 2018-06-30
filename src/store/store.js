import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

export const store = new Vuex.Store({
  state: { //如果要是数据在页面里有效，一定要预先把需要的属性的写在state
    menuItems: [],
    currentUser: null,
    isLogin: false
  },
  getters: {
    getMenuItems: (state) => {
      return state.menuItems
    },
    currentUser: state => state.currentUser,
    isLogin: state => state.isLogin
  },
  mutations: {
    setMenuItems(state, data) {
      state.menuItems = data;
    },
    removeMenuItems(state, item) {
      state.menuItems.splice(state.menuItems.indexOf(item), 1)
      console.log(state.menuItems)
    },
    setMenuItems(state, item) {
      state.menuItems = item;
    },
    pushToMenuItems(state, data) {
      state.menuItems.push(data)
    },
    exit(state) {
      state.isLogin = !state.isLogin;
      state.currentUser = null;
    },
    login(state, user) {
      if (user) {
        state.currentUser = user;
        state.isLogin = true
      } else {
        state.currentUser = null;
        state.isLogin = false
      }
    }
  },
  actions: {
    setUser(context, data) { //这里的context 就是store对象，可以用{commit}代替
      if (data) {
        context.commit('login', data)
      }
    }
  }
})
