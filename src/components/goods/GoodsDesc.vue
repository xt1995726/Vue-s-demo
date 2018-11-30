<template>
  <div class="goodsdesc-container">
    <h3>{{info.title}}</h3>
    <hr>
    <div class="content">
      {{info.thumb}}
      {{info.artist}}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: {}
    }
  },
  created() {
    this.getGoodsDesc();
  },
  methods: {
    getGoodsDesc() {
      this.$http.get('https://api.apiopen.top/musicBroadcastingDetails?channelname=' + this.$route.params.ch_name).then(res => {
        if (res.body.code === 200) {
          this.info = res.body.result.songlist[0];
          console.log(this.info);
        }
      })
    }
  }
}

</script>

<style lang="scss" scoped>
.goodsdesc-container {
  padding: 4px;
  h3 {
    font-size: 16px;
    color: #226aff;
    text-align: center;
    margin: 15px 0;
  }
}
</style>
