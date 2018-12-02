<template>
  <div class="shopcar-container">
    <div class="goods-list">
      <!-- 商品列表区域 -->
      <div class="mui-card" v-for="(item, index) in goodlist" :key="index">
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <mt-switch></mt-switch>
            <img :src="item.thumb">
            <div class="info">
              <h1>{{item.title}}</h1>
              <p>
                <span class="price">${{item.artist_id}}</span>
                <numbox></numbox>
                <a href="#">删除</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- 结算区域 -->
      <div class="mui-card">
        <div class="mui-card-content">
          <div class="mui-card-content-inner"></div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import numbox from '../subcomponents/shopcar_numbox.vue';

export default {
  data() {
    return {
      goodlist: [],
    }
  },
  created() {
    this.getGoodsList();
  },
  methods: {
    getGoodsList() {
      var idArr = [];
      this.$store.state.car.forEach(item => idArr.push(item.id));
      if (idArr.length <= 0) {
        return;
      }
      idArr.forEach(item => {
        this.$http.get('https://api.apiopen.top/musicBroadcastingDetails?channelname=' + item).then(res => {
          if (res.body.code === 200) {
            // console.log(item);
            this.goodlist = this.goodlist.concat(res.body.result.songlist[0]);
          }
        });
      });

    }
  },
  components: {
    numbox,
  },
}
</script>


<style lang="scss" scoped>
.shopcar-container {
  background-color: #eee;
  overflow: hidden;

  .goods-list {
    .mui-card-content-inner {
      display: flex;
      align-items: center;
    }
    img {
      width: 60px;
      height: 60px;
    }
    h1 {
      font-size: 13px;
    }
    .info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .price {
        color: red;
        font-weight: bold;
      }
    }
  }
}
</style>