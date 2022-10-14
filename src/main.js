import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAxiosPlugin from 'vue-axios-plugin'
import { Toast } from 'vant';
import { Icon } from 'vant';
import { List } from 'vant';
import { Image as VanImage } from 'vant';
import { Dialog } from 'vant';
import { Checkbox, CheckboxGroup } from 'vant';
import { Loading } from 'vant';

Vue.use(Loading);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(Dialog);
Vue.use(VanImage);
Vue.use(List);
Vue.use(Icon);
Vue.use(Toast);
Vue.use(VueAxiosPlugin, {
  // 请求拦截处理
  reqHandleFunc: config => config,
  reqErrorFunc: error => Promise.reject(error),
  // 响应拦截处理
  resHandleFunc: response => response,
  resErrorFunc: error => Promise.reject(error)
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
