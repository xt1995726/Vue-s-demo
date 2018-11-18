<template>
  <ul class="mui-table-view">
    <li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.$index">
      <a href="javascript:;">
        <img class="mui-media-object mui-pull-left">
        <div class="mui-media-body">
          <h1>{{ item[0].title }}</h1>
          <p class="mui-ellipsis">
            <span>发表时间：{{item[0].ptime}}</span>
            <span>点击：{{item[0].tcount}}次</span>
          </p>
        </div>
      </a>
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
      this.$http.get("https://www.apiopen.top/journalismApi").then(result => {
        if (result.body.code === 200) {
          this.newslist = result.body.data;
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
