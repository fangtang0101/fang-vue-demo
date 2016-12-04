import Vue from 'vue'
import App from './App.vue'
//1.导入 router 和 config 文件
import VueRouter from 'vue-router'
import routerConfig from './router.config.js'

//2.实例化路由
Vue.use(VueRouter);
const router=new VueRouter(routerConfig);
//3.使用路由
new Vue({
  //一定要记得用
  router,
  el: '#app',
  render: h => h(App)
})
