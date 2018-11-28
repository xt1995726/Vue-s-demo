<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in lunboList.slice(0,4)" :key="item.url">
        <img :src="item.url" :class="{'full':isfull}">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
export default {
  props: ["lunboList", "isfull"]
}
</script>
<style lang="scss" scoped>
.mint-swipe {
  height: 200px;
  text-align: center;

  img{
    height: 100%;
  }
}

.full{
    width: 100%;
}
</style>
