<template>
  <div class="shopcar-container">
    <div class="goods-list">
      <!-- 商品列表区域 -->
      <div class="mui-card" v-for="(item, index) in goodlist" :key="index">
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <mt-switch
              v-model="$store.getters.getGoodsSelected[item.artist_id]"
              @change="selectedChanged(item.artist_id,$store.getters.getGoodsSelected[item.artist_id])"
            ></mt-switch>
            <img :src="item.thumb">
            <div class="info">
              <h1>{{item.title}}</h1>
              <p>
                <span class="price">${{item.artist_id.slice(0,4)}}</span>
                <numbox
                  :initcount="$store.getters.getGoodsCount[item.artist_id]"
                  :goodsid="item.artist_id"
                ></numbox>
                <a href="#" @click.prevent="remove(item.artist_id, index)">删除</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- 结算区域 -->
      <div class="mui-card">
        <div class="mui-card-content">
          <div class="mui-card-content-inner jiesuan">
            <div class="left">
              <p>总计（不含运费）</p>
              <p>
                已勾选商品
                <span class="red">{{$store.getters.getGoodsCountAndAmount.count}}</span> 件，总价
                <span class="red">${{$store.getters.getGoodsCountAndAmount.amount}}</span>
              </p>
            </div>
            <div class="right">
              <mt-button type="danger">去结算</mt-button>
            </div>
          </div>
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
    },
    remove(id, index) {
      this.goodlist.splice(index, 1);
      this.$store.commit('removeFromCar', id);
    },
    selectedChanged(id, val) {
      this.$store.commit('updateGoodsSelected', { id, selected: val });
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
      align-items: space-between;
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
  .jiesuan {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .red {
      color: red;
      font-weight: bold;
      font-size: 16px;
    }
  }
}
</style>