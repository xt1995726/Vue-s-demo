<template>
  <div class="goodsinfo-container">
    <transition>
      <div class="ball" v-show="ballFlag"></div>
    </transition>
    <!-- 商品轮播区域 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <swiper :lunboList="lunbotu" :isfull="false"></swiper>
        </div>
      </div>
    </div>
    <!-- 商品购买区域 -->
    <div class="mui-card">
      <div class="mui-card-header">{{goodsinfo.title}}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="price">
            市场价：
            <del>${{goodsinfo.songid}}</del>&nbsp;&nbsp;销售价：
            <span class="now_price">${{goodsinfo.artist_id}}</span>
          </p>
          <p>购买数量：
            <numbox></numbox>
          </p>
          <p>
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small" @click="addToShopCar">加入购物车</mt-button>
          </p>
        </div>
      </div>
    </div>
    <!-- 商品参数区域 -->
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号：{{goodsinfo.all_rate}}</p>
          <p>库存情况：{{goodsinfo.songid}}件</p>
          <p>商家情况：{{goodsinfo.artist}}</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button type="primary" size="large" plain @click="goDesc(ch_name)">图文介绍</mt-button>
        <mt-button type="danger" size="large" plain @click="goComment(ch_name)">商品评论</mt-button>
      </div>
    </div>
  </div>
</template>
<script>
import swiper from '../subcomponents/swiper.vue';
import numbox from '../subcomponents/goodsinfo_numbox.vue'

export default {
  data() {
    return {
      lunbotu: [],
      ch_name: this.$route.params.ch_name,
      goodsinfo: [],
      ballFlag: false,
    }
  },
  created() {
    this.getLunbotu();
    this.getGoodsInfo();
  },
  methods: {
    getLunbotu() {
      this.$http.get('https://api.apiopen.top/musicBroadcastingDetails?channelname=' + this.ch_name).then(res => {
        if (res.body.code === 200) {
          res.body.result.songlist.forEach(item => {
            item.url = item.thumb;
          });

          this.lunbotu = res.body.result.songlist;
          // console.log(this.lunbotu);
        }
      });
    },
    getGoodsInfo() {
      this.$http.get('https://api.apiopen.top/musicBroadcastingDetails?channelname=' + this.ch_name).then(res => {
        if (res.body.code === 200) {
          this.goodsinfo = res.body.result.songlist[0];
          console.log(this.goodsinfo);
        }
      });
    },
    goDesc(ch_name) {
      this.$router.push({ name: 'goodsdesc', params: { ch_name } });
    },
    goComment(ch_name) {
      this.$router.push({ name: 'goodscomment', params: { ch_name } });
    },
    addToShopCar() {
      this.ballFlag = !this.ballFlag;
    }
  },
  components: {
    swiper,
    numbox,
  }
}
</script>
<style lang="scss" scoped>
.goodsinfo-container {
  background-color: #eee;
  overflow: hidden;

  .now_price {
    color: red;
    font-size: 16px;
    font-weight: bold;
  }

  .mui-card-footer {
    display: block;

    button {
      margin: 15px 0;
    }
  }
  .ball{
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: red;
    position: absolute;
    z-index: 50;
    top: 390px;
    left: 150px;
  }
}
</style>
