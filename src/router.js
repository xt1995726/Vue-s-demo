import VueRouter from "vue-router";

import HomeContainer from "./components/tabbar/HomeContainer.vue";
import MemberContainer from "./components/tabbar/MemberContainer.vue";
import ShopcarContainer from "./components/tabbar/ShopcarContainer.vue";
import SearchContainer from "./components/tabbar/SearchContainer.vue";

import NewsList from "./components/news/NewsList.vue";
import NewsInfo from "./components/news/NewsInfo.vue";

import PhotoList from "./components/photo/photoList.vue"
import PhotoInfo from "./components/photo/photoInfo.vue"


// 3. 创建路由对象
var router = new VueRouter({
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: HomeContainer },
    { path: "/member", component: MemberContainer },
    { path: "/shopcar", component: ShopcarContainer },
    { path: "/search", component: SearchContainer },
    { path: "/home/newslist", component: NewsList },
    { path: "/home/newsinfo/:index", component: NewsInfo },
    { path: "/home/photoList", component: PhotoList },
    { path: "/home/photoInfo/:index", component: PhotoInfo },
  ],
  linkActiveClass: "mui-active"
});

// 把路由对象暴露出去
export default router;
