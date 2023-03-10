import Vue from 'vue'
import VueRouter from 'vue-router'
import BookcitySearch from '../views/BookcityView/BookcitySearchword.vue'
import BookcityView from '../views/BookcityView/BookcityView.vue'
import BookshelfView from '../views/BookshelfView.vue'
import SettingView from '../views/SettingView/SettingView.vue'
import LoginView from '../views/SettingView/LoginView.vue'
import BookInfo from "../views/BookInfo.vue";
import DirectoryInfo from "../views/DirectoryInfo.vue"
import RegisterView from "../views/SettingView/RegisterView.vue"
import MoreBook from "../views/BookcityView/MoreBook.vue"
import ListClassify from "../views/BookcityView/ListClassify.vue"
import LookFiction from "../views/LookFiction.vue"

Vue.use(VueRouter)

const routes = [
    {
        path: '/booksearchword',
        name: 'booksearchword',
        component: BookcitySearch,
        meta: {
            navShow: false // true显示，false隐藏
        }
    },
    {
        path: '/bookshelf',
        name: 'bookshelf',
        component: BookshelfView,
        meta: {
            navShow: true,
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
        }
    },
    {
        path: '/bookinfo/directory',
        name: 'DirectoryInfo',
        component: DirectoryInfo,
        meta: {
            navShow: false
        },
    },
    {
        path: '/register',
        name: 'register',
        component: RegisterView,
        meta: {
            navShow: false
        },
    },
    {
        path: '/more',
        name: 'more',
        component: MoreBook,
        meta: {
            navShow: false
        },
    },
  {
    path: '/listClassify',
    name: 'listClassify',
    component: ListClassify,
    meta: {
      navShow: false
    },
  },
  {
    path: '/lookfiction',
    name: 'lookfiction',
    component: LookFiction,
    meta: {
      navShow: false
    },
  },
]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})

export default router
