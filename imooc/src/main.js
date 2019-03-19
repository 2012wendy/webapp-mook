// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

Vue.config.productionTip = true //是否打开错误提示
Vue.use(VueRouter)



//引入自定义路由模块
import router from './router/index.js'


/* eslint-disable no-new */
var vn=new Vue({
  el: '#app',
  render:c => c(App),
  router,
  
})
