<template>
  <div class="app-container">
    <!-- top -->
    <mt-header fixed title="practice app">
      <span slot="left" @click="goBack" v-show="flag">
        <mt-button icon="back">back</mt-button>
      </span>
    </mt-header>
    <!-- mid -->
    <transition>
      <router-view></router-view>
    </transition>
    <!-- bottom -->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" to="/member">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item" to="/shopcar">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge" id="badge">{{$store.getters.getAllCount}}</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item" to="/search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
import mui from './lib/mui/js/mui.min.js';

mui('body').on('tap', 'a', function () { document.location.href = this.href; });
mui('body').on('click', 'a', function () { document.location.href = this.href; });

export default {
  data() {
    return {
      flag: false,
    }
  },
  created() {
    this.flag = this.$route.path === '/home' ? false : true;
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  },
  watch: {
    '$route.path': function (newVal) {
      if (newVal === '/home') {
        this.flag = false;
      } else {
        this.flag = true;
      }
    }
  }
}

</script>


<style lang="scss" scoped>
.app-container {
  padding-top: 40px;
  padding-bottom: 50px;
  overflow-x: hidden;
  touch-action: pan-y;
}

.v-enter {
  opacity: 0;
  transform: translateX(100%);
}
.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}
</style>