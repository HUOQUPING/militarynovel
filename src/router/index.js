import Vue from 'vue'
import VueRouter from 'vue-router'
import BookcityView from '../views/BookcityView/BookcityView.vue'
import BookshelfView from '../views/BookshelfView.vue'
import SettingView from '../views/SettingView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/bookshelf',
    name: 'bookshelf',
    component: BookshelfView
  },
  {
    path: '/',
    name: 'bookcity',
    component: BookcityView
  },
  {
    path: '/setting',
    name: 'setting',
    component: SettingView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
