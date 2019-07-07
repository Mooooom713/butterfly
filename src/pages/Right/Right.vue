<template>
  <div class="right-wrap">
    <van-nav-bar title="权益详情" left-arrow />
    <right-title></right-title>
    <div class="right-menu-block">
      <p>代言人套餐</p>
      <p>购超值商品套餐(任选其一)尊享代言人权益</p>
    </div>
    <div class="right-detail-block">
      <p>
        8大权益
      </p>
    </div>
  </div>
</template>

<script>
import RightTitle from './components/RightTitle'

export default {
  name: "Right",
  components: {
    RightTitle
  },
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss">
  @import "../../scss/navBar.scss";

  .right-wrap{
    width: 100%;
  }
</style>
