import Vue from "vue";
import Router from "vue-router";
import MintUI from "mint-ui";
import "mint-ui/lib/style.css";

Vue.use(MintUI);
Vue.use(Router);

import Index from "@/components/index";
import RankPage from "@/components/novel/rank-page";
import VipPage from "@/components/novel/vip-page";
import SubscibePage from "@/components/novel/subscibe-page";
import CommonPage from "@/components/novel/common-page";
import ClassifyPage from "@/components/novel/classify-page";
import ComicsDetailPage from "@/components/novel/comics-detail-page";
import HtmlPage from "@/components/novel/html-page";
import CommentPage from "@/components/novel/comment-page";
import AuthorPage from "@/components/novel/author-page";
import SearchPage from "@/components/novel/search-page";

export default new Router({
  routes: [{
      path: "/",
      component: Index
    },
    {
      path: "/rank",
      component: RankPage
    },
    {
      path: "/vip",
      component: VipPage
    },
    {
      path: "/subscibe",
      component: SubscibePage
    },
    {
      path: "/common",
      component: CommonPage
    },
    {
      path: "/classify",
      component: ClassifyPage
    },
    {
      path: "/comics-detail",
      component: ComicsDetailPage
    },
    {
      path: "/comment-page",
      component: CommentPage
    },
    {
      path: "/author-page",
      component: AuthorPage
    },
    {
      path: "/search-page",
      component: SearchPage
    },
    {
      path: "/html-page",
      component: HtmlPage
    }
  ]
});
