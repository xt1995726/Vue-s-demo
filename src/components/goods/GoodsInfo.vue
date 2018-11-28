<template>
  <div class="goodsinfo-container">
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
      <div class="mui-card-header">页眉</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）</div>
      </div>
    </div>
    <!-- 商品参数区域 -->
    <div class="mui-card">
      <div class="mui-card-header">页眉</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）</div>
      </div>
      <div class="mui-card-footer">页脚</div>
    </div>
  </div>
</template>
<script>
import swiper from '../subcomponents/swiper.vue';

export default {
  data() {
    return {
      lunbotu: [],
      ch_name: this.$route.params.ch_name,
    }
  },
  created() {
    this.getLunbotu();
  },
  methods: {
    getLunbotu() {
      this.$http.get('https://api.apiopen.top/musicBroadcastingDetails?channelname=' + this.ch_name).then(res => {
        if (res.body.code === 200) {
          res.body.result.songlist.forEach(item => {
            item.url = item.thumb;
          });

          this.lunbotu = res.body.result.songlist;
          console.log(this.lunbotu);
        }
      });
    }
  },
  components: {
    swiper,
  }
}
</script>
<style lang="scss" scoped>
.goodsinfo-container{
    background-color: #eee;
    overflow: hidden;
}
</style>
