import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store";

import Toast from "./components/common/toast";
//安装toast插件
Vue.use(Toast)

import FastClick from 'fastclick'
FastClick.attach(document.body)

Vue.config.productionTip = false

//添加事件总线
Vue.prototype.$bus = new Vue

new Vue({
  router,
  store,
  render: h => h(App),

}).$mount('#app')
