<template>
    <div class="cmt-comtainer">
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请输入评论（不超过120字）" maxlength="120"></textarea>
        <mt-button type="primary" size="large">发表评论</mt-button>
        <div class="cmt-list">
            <div class="cmt-item" v-for="(item, index) in comments" :key="index">
                <div
                    class="cmt-title"
                >第{{index + 1}}楼&nbsp;&nbsp;用户：{{item.user.username}}&nbsp;&nbsp;发表时间：{{item.ctime | dataFormat}}</div>
                <div class="cmt-body">{{item.content}}</div>
            </div>
        </div>
        <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
    </div>
</template>

<script>
import { Toast } from "mint-ui";

export default {
  data() {
    return {
      pageIndex: 1,
      comments: []
    };
  },
  created() {
    this.getComments();
  },
  methods: {
    getComments() {
      this.$http
        .get(
          "https://www.apiopen.top/satinCommentApi?id=27610708&page=" +
            this.pageIndex
        )
        .then(res => {
          if (res.body.code === 200) {
            this.comments = this.comments.concat(res.data.data.normal.list);
            console.log(this.comments);
          } else {
            Toast("failed load comments");
          }
        });
    },
    getMore() {
      this.pageIndex++;
      this.getComments();
    }
  }
};
</script>

<style lang="scss" scoped>
.cmt-comtainer {
  h3 {
    font-size: 18px;
  }
  textarea {
    font-size: 14px;
    height: 85px;
    margin: 0;
  }

  .cmt-list {
    margin: 5px 0;
    .cmt-item {
      font-size: 13px;
      .cmt-title {
        line-height: 35px;
        background-color: #ccc;
      }
      .cmt-body {
        line-height: 35px;
        text-indent: 2em;
      }
    }
  }
}
</style>
