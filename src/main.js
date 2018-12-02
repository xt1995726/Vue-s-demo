// 入口文件
import Vue from "vue";

import app from "./App.vue";
import VueRouter from "vue-router";
import VueResouce from "vue-resource";
import VuePreview from "vue-preview";
import Vuex from "vuex";

Vue.use(VueRouter);
Vue.use(VueResouce);
Vue.use(VuePreview);
Vue.use(Vuex);

import "./lib/mui/css/mui.min.css";
import "./lib/mui/css/icons-extra.css";

// import { Header, Swipe, SwipeItem, Button, Lazyload } from 'mint-ui'

// Vue.component(Header.name, Header)
// Vue.component(Swipe.name, Swipe)
// Vue.component(SwipeItem.name, SwipeItem)
// Vue.component(Button.name, Button)
// Vue.use(Lazyload);

import MintUI from "mint-ui";
Vue.use(MintUI);
import "mint-ui/lib/style.css";

import router from "./router.js";

import moment from "moment";
Vue.filter("dataFormat", function(dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
  return moment(dataStr).format(pattern);
});

var car = JSON.parse(localStorage.getItem('car') || '[]');

var store = new Vuex.Store({
  state: {
    // this.$store.state.****
    car: car
  },
  mutations: {
    // this.$store.commit('func.name', 'param')
    addToCar(state, goodsinfo) {
      var flag = false;

      state.car.some(item => {
        if (item.id == goodsinfo.id) {
          item.count += parseInt(goodsinfo.count);
          flag = true;
          return true;
        }
      });
      if (!flag) {
        state.car.push(goodsinfo);
      }
      localStorage.setItem('car',JSON.stringify(state.car));
    }
  },
  getters: {
    //  this.$store.getters.****
    getAllCount(state) {
      var c = 0;
      state.car.forEach(item => {
        c += item.count;
      });
      return c;
    }
  }
});

var vm = new Vue({
  el: "#app",
  render: c => c(app),
  router,
  store
});
