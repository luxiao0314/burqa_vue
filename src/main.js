// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {get} from './utils/api'
import {post} from './utils/api'

Vue.config.productionTip = false

Vue.prototype.get = get;
Vue.prototype.post = post;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
