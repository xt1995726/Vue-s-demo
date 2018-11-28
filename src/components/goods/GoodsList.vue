<template>
  <div class="goods-list">
    <div
      class="goods-item"
      v-for="(item, index) in goodslist"
      :key="index"
      @click="goDetail(item.ch_name)"
    >
      <img :src="item.thumb" alt>
      <h1 class="title">{{item.name}}</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥{{item.channelid}}</span>
          <span class="old">￥{{item.value}}</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩{{item.value}}件</span>
        </p>
      </div>
    </div>
    <mt-button type="danger" size="large" @click="getMore">加载更多</mt-button>
    {{more}}
  </div>
</template>
<script>
export default {
  data() {
    return {
      goodslist: [],
      more: "",
    };
  },
  created() {
    this.getGoodsList();
  },
  methods: {
    getGoodsList() {
      this.$http.get("https://api.apiopen.top/musicBroadcasting").then(res => {
        if (res.body.code === 200) {
          this.goodslist = res.body.result[0].channellist;
          console.log(this.goodslist);
        }
      });
    },
    getMore() {
      this.more = "没有更多啦。";
    },
    goDetail(ch_name) {
      this.$router.push({ name: 'goodsinfo', params: { ch_name } });
    }
  }
};
</script>
<style lang="scss" scoped>
.goods-list {
  display: flex;
  flex-wrap: wrap;
  padding: 7px;
  justify-content: space-between;

  .goods-item {
    width: 49%;
    border: 1px solid #ccc;
    box-shadow: 0 0 8px #ccc;
    margin: 4px 0;
    padding: 2px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 293px;
    img {
      width: 100%;
    }
    .title {
      font-size: 14px;
    }
    .info {
      background-color: #eee;
      p {
        margin: 0;
        padding: 5px;
      }
      .price {
        .now {
          color: red;
          font-size: 16px;
          font-weight: bold;
        }
        .old {
          text-decoration: line-through;
          font-size: 12px;
          margin-left: 10px;
        }
      }
      .sell {
        display: flex;
        justify-content: space-between;
        font-size: 13px;
      }
    }
  }
}
</style>

