import Vue from 'vue'
import Router from 'vue-router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(MintUI)
Vue.use(Router)

// 路由懒加载
const Index = (resolve) =>import ('@/components/index').then((module) => resolve(module))
const RankPage = (resolve) =>import ('@/components/novel/rank-page').then((module) => resolve(module))

export default new Router({
  routes: [{
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/rank',
      component: RankPage
    }
  ]
})
