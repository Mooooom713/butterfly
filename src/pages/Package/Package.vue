<template>
  <div id="package">
    <van-nav-bar title="套餐专区" left-arrow />
    <img :src="imgSrc" />
    <div>
      <div id="hint-text">
        成为代言人
        <br />尊享精选套餐 8大权益
      </div>
      <div id="router-text">了解权益详情 &lt;</div>
    </div>
    <div>
      <p>购超值商品套餐尊享代言人权益</p>
      <app-card />
      <app-card />
    </div>
  </div>
</template>

<script>
import Card from "./components/Card.vue";

export default {
  name: "Package",
  components: {
    "app-card": Card
  },
  data() {
    return {
      imgSrc: require("../../assets/header-background.png")
    };
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "../../scss/navBar.scss";
#package {
  width: 100%;
}

#hint-text {
  position: fixed;
  top: 50pt;
  left: 13pt;
  color: #fde8c9;
  text-align: left;
  font-size: 15pt;
  width: 185pt;
  height: 44pt;
  font-weight: bold;
}

#router-text {
  position: fixed;
  top: 100pt;
  left: 13pt;
  color: #fae3c3;
  text-align: left;
  font-size: 9pt;
  width: 87pt;
  height: 12pt;
  font-weight: bold;
}
</style>
