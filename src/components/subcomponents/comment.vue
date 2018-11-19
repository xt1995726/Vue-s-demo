<template>
    <div class="cmt-comtainer">
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请输入评论（不超过120字）" maxlength="120"></textarea>
        <mt-button type="primary" size="large">发表评论</mt-button>
        <div class="cmt-list">
            <div class="cmt-item">
                <div class="cmt-title">第一楼&nbsp;&nbsp;用户：匿名用户&nbsp;&nbsp;发表时间：2018-11-19 00:00:00</div>
                <div class="cmt-body">123123123</div>
            </div>
        </div>
        <mt-button type="danger" size="large" plain>加载更多</mt-button>
    </div>
</template>

<script>
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
}
</style>
