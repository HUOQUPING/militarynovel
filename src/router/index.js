import Vue from 'vue'
import VueRouter from 'vue-router'
import BookcityView from '../views/BookcityView/BookcityView.vue'
import BookshelfView from '../views/BookshelfView.vue'
import SettingView from '../views/SettingView/SettingView.vue'
import LoginView from '../views/SettingView/LoginView.vue'
import BookInfo from "../views/BookInfo.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/bookshelf',
    name: 'bookshelf',
    component: BookshelfView,
    meta: {
      navShow: true, // true显示，false隐藏
    },
  },
  {
    path: '/',
    name: 'bookcity',
    component: BookcityView,
    meta: {
      navShow: true
    },
  },
  {
    path: '/setting',
    name: 'setting',
    component: SettingView,
    meta: {
      navShow: true
    },
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    meta: {
      navShow: false
    },
  },
  {
    path: '/bookinfo',
    name: 'bookinfo',
    component: BookInfo,
    meta: {
      navShow: false
    },
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
