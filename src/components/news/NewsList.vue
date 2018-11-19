<template>
  <ul class="mui-table-view">
    <li class="mui-table-view-cell mui-media" v-for="(item, index) in newslist" :key="index">
      <router-link :to="'/home/newsinfo/' + index">
        <img class="mui-media-object mui-pull-left" :src="item.picInfo[0].url">
        <div class="mui-media-body">
          <h1>{{ item.title }}</h1>
          <p class="mui-ellipsis">
            <span>发表时间：{{item.ptime}}</span>
            <span>点击：{{item.tcount}}次</span>
          </p>
        </div>
      </router-link>
    </li>
  </ul>
</template>

<script>
import { Toast } from "mint-ui";

export default {
  data() {
    return {
      newslist: []
    };
  },
  created() {
    this.getNewsList();
  },

  methods: {
    getNewsList() {
      this.$http.get("https://www.apiopen.top/journalismApi").then(res => {
        if (res.body.code === 200) {
          this.newslist = res.body.data.auto;
          console.log(this.newslist);
        } else {
          Toast("获取新闻列表失败");
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.mui-table-view {
  li {
    h1 {
      font-size: 14px;
    }
    .mui-ellipsis {
      font-size: 12px;
      color: #2266ff;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
