<template>
    <div>
        <h3>Photo</h3>
        <ul class="photo-list">
            <li v-for="(item, index) in list" :key="index">
                <img v-lazy="item.url">
                <div class="info">
                    <h1 class="info-title">{{item.type}}</h1>
                    <div class="info-body">{{item.publishedAt | dataFormat}}</div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  data() {
    return {
      list: []
    };
  },
  mounted() {
    this.getPhotoList();
  },
  methods: {
    getPhotoList() {
      this.$http.get("https://www.apiopen.top/meituApi?page=2").then(res => {
        if (res.body.code === 200) {
          this.list = res.body.data;
          console.log(this.list);
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.photo-list {
  list-style: none;
  margin: 0;
  padding: 10px;
  padding-bottom: 0;

  li {
    background: #ccc;
    text-align: center;
    margin-bottom: 10px;
    position: relative;
    box-shadow: 0 0 9px #999;
    img {
      width: 100%;
      vertical-align: middle;
    }
    img[lazy="loading"] {
      width: 40px;
      width: 300px;
      margin: auto;
    }
    .info {
      color: white;
      text-align: left;
      width: 100%;
      position: absolute;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.4);
      .info-title {
        font-size: 14px;
      }
      .info-body {
        font-size: 13px;
      }
    }
  }
}
</style>
