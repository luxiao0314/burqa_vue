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
const CommentPage = (resolve) =>
  import ('@/components/novel/comment-page').then((module) => resolve(module))
const AuthorPage = (resolve) =>
  import ('@/components/novel/author-page').then((module) => resolve(module))
const SearchPage = (resolve) =>
  import ('@/components/novel/search-page').then((module) => resolve(module))

export default new Router({
  routes: [{
      path: '/',
      name: 'index',
      component: Index,
      meta: {
        index: 0,
        keepAlive: true
      }
    },
    {
      path: '/rank',
      component: RankPage,
      meta: {
        index: 1,
        keepAlive: true
      }
    },
    {
      path: '/vip',
      component: VipPage,
      meta: {
        index: 1,
        keepAlive: true
      }
    },
    {
      path: '/subscibe',
      component: SubscibePage,
      meta: {
        index: 1,
        keepAlive: true
      }
    },
    {
      path: '/common',
      component: CommonPage,
      meta: {
        index: 1,
        keepAlive: false
      }
    },
    {
      path: '/classify',
      component: ClassifyPage,
      meta: {
        index: 1,
        keepAlive: true
      }
    },
    {
      path: '/comics-detail',
      component: ComicsDetailPage,
      meta: {
        index: 1,
        keepAlive: false
      }
    },
    {
      path: '/comment-page',
      component: CommentPage,
      meta: {
        index: 1,
        keepAlive: false
      }
    },
    {
      path: '/author-page',
      component: AuthorPage,
      meta: {
        index: 1,
        keepAlive: false
      }
    },
    {
      path: '/search-page',
      component: SearchPage,
      meta: {
        index: 1,
        keepAlive: true
      }
    },
    {
      path: '/html-page',
      component: HtmlPage
    }
  ]
})
