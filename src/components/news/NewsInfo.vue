<template>
    <div class="newsinfo-container">
        <h3 class="title">{{newsinfo.title}}</h3>
        <p class="subtitle">
            <span>发表时间：{{newsinfo.ptime}}</span>
            <span>点击：{{newsinfo.tcount}}次</span>
        </p>
        <hr>
        <div class="content">
            <a :href="newsinfo.link">{{newsinfo.link}}</a>
        </div>
        <!-- 评论区域 -->
        <comment-box></comment-box>
    </div>
</template>

<script>
import comment from "../subcomponents/comment.vue";

export default {
  data() {
    return {
      index: this.$route.params.index,
      newsinfo: {}
    };
  },
  created() {
    this.getNewsInfo();
  },
  methods: {
    getNewsInfo() {
      this.$http.get("https://www.apiopen.top/journalismApi").then(res => {
        if (res.body.code === 200) {
          this.newsinfo = res.body.data.auto[this.index];
        } else {
          Toast("获取新闻失败");
        }
      });
    }
  },
  components: {
    "comment-box": comment
  }
};
</script>

<style lang="scss" scoped>
.newsinfo-container {
  padding: 0 4px;
  .title {
    font-size: 16px;
    text-align: center;
    margin: 15px 0;
    color: red;
  }
  .subtitle {
    font-size: 13px;
    color: #226aff;
    display: flex;
    justify-content: space-between;
  }
  .content {
  }
}
</style>
