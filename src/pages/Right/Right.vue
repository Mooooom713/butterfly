<template>
  <div class="right-wrap">
    <van-nav-bar title="权益详情" left-arrow />
    <right-title></right-title>
    <div class="right-menu-block">
      <right-menu></right-menu>
    </div>
    <div class="right-detail-block">
      <right-detail></right-detail>
    </div>
   <button>获取分红资格</button>
  </div>
</template>

<script>
import RightTitle from './components/RightTitle'
import RightMenu from './components/RightMenu'
import RightDetail from './components/RightDetail'

export default {
  name: "Right",
  components: {
    RightTitle,
    RightMenu,
    RightDetail
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
