// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './components/router'
import {get} from './utils/api'
import {post} from './utils/api'

Vue.config.productionTip = false

Vue.prototype.get = get;
Vue.prototype.post = post;

// 将全局样式文件写在 main.js
import '@/assets/scss/iconfont.scss'
import '@/assets/ali-fonts/iconfont.css'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  data: {eventHub: new Vue()}
})
