<template>
    <div class="photo-container">
        <h3>{{photolist.type}}</h3>
        <div class="subtitle">
            <span>发表时间：{{photolist.publishedAt | dataFormat}}</span>
            <span>点击：0次</span>
        </div>
        <hr>
        <!-- 缩略图 -->
        <div class="thumbs">
            <img
                class="preview-img"
                v-for="(item, index) in list"
                :key="index"
                :src="item.url"
                height="100"
                @click="$preview.open(index,list)"
            >
        </div>
        <div class="content">{{photolist.url}}</div>
        <cmt-box :index="id"></cmt-box>
    </div>
</template>
<script>
import comment from "../subcomponents/comment.vue";

export default {
  data() {
    return {
      id: this.$route.params.index,
      photolist: {},
      list: []
    };
  },
  created() {
    this.getPhotoInfo();
    this.getThumbs();
  },
  methods: {
    getPhotoInfo() {
      this.$http.get("https://www.apiopen.top/meituApi?page=2").then(res => {
        if (res.body.code === 200) {
          this.photolist = res.body.data[this.id - 1];
          console.log(this.list);
        }
      });
    },

    getThumbs() {
      this.$http
        .get("https://www.apiopen.top/meituApi?page=" + this.id)
        .then(res => {
          if (res.body.code === 200) {
            res.body.data.forEach(item => {
              item.w = 600;
              item.h = 400;
            });
            this.list = res.body.data;
            console.log(this.list);
          }
        });
    }
  },
  components: {
    "cmt-box": comment
  }
};
</script>
<style lang="scss" scoped>
.photo-container {
  padding: 3px;
  h3 {
    font-size: 15px;
    color: #26a2ff;
    text-align: center;
    margin: 15px 0;
  }
  .subtitle {
    font-size: 13px;
    display: flex;
    justify-content: space-between;
  }
  .content {
    font-size: 13px;
    line-height: 30px;
  }
  .thumbs{
      img{
          margin: 10px;
          box-shadow: 0 0 8px #999;
      }
  }
}
</style>
