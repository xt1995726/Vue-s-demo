// 入口文件
import Vue from 'vue'

import app from './App.vue'
import VueRouter from 'vue-router'
import VueResouce from 'vue-resource'

Vue.use(VueRouter)
Vue.use(VueResouce)

import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

// import { Header, Swipe, SwipeItem, Button, Lazyload } from 'mint-ui'

// Vue.component(Header.name, Header)
// Vue.component(Swipe.name, Swipe)
// Vue.component(SwipeItem.name, SwipeItem)
// Vue.component(Button.name, Button)
// Vue.use(Lazyload);

import MintUI from 'mint-ui'
Vue.use(MintUI);
import 'mint-ui/lib/style.css'


import router from './router.js'

import moment from 'moment'
Vue.filter('dataFormat', function (dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
    return moment(dataStr).format(pattern);
});


var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router
})