import Vue from 'vue'
import Router from 'vue-router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(MintUI)
Vue.use(Router)

// 路由懒加载
const Index = (resolve) =>
  import ('@/components/index').then((module) => resolve(module))
const RankPage = (resolve) =>
  import ('@/components/novel/rank-page').then((module) => resolve(module))
const VipPage = (resolve) =>
  import ('@/components/novel/vip-page').then((module) => resolve(module))
const SubscibePage = (resolve) =>
  import ('@/components/novel/subscibe-page').then((module) => resolve(module))
const CommonPage = (resolve) =>
  import ('@/components/novel/common-page').then((module) => resolve(module))
const ClassifyPage = (resolve) =>
  import ('@/components/novel/classify-page').then((module) => resolve(module))
const ComicsDetailPage = (resolve) =>
  import ('@/components/novel/comics-detail-page').then((module) => resolve(module))
const HtmlPage = (resolve) =>
  import ('@/components/novel/html-page').then((module) => resolve(module))

export default new Router({
  routes: [{
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/rank',
      component: RankPage
    },
    {
      path: '/vip',
      component: VipPage
    },
    {
      path: '/subscibe',
      component: SubscibePage
    },
    {
      path: '/common',
      component: CommonPage
    },
    {
      path: '/classify',
      component: ClassifyPage
    },
    {
      path: '/comics-detail',
      component: ComicsDetailPage
    },
    {
      path: '/html-page',
      component: HtmlPage
    }
  ]
})
