import VueRouter from "vue-router";

import HomeContainer from "./components/tabbar/HomeContainer.vue";
import MemberContainer from "./components/tabbar/MemberContainer.vue";
import ShopcarContainer from "./components/tabbar/ShopcarContainer.vue";
import SearchContainer from "./components/tabbar/SearchContainer.vue";

import NewsList from "./components/news/NewsList.vue";

// 3. 创建路由对象
var router = new VueRouter({
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: HomeContainer },
    { path: "/member", component: MemberContainer },
    { path: "/shopcar", component: ShopcarContainer },
    { path: "/search", component: SearchContainer },
    { path: "/home/newslist", component: NewsList }
  ],
  linkActiveClass: "mui-active"
});

// 把路由对象暴露出去
export default router;
