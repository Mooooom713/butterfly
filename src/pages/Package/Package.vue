<template>
  <div id="package">
    <van-nav-bar title="套餐专区" left-text="返回" left-arrow />
    <img :src="imgSrc" />
    <div id="hint-text">
      成为代言人
      <br />尊享精选套餐 8大权益
    </div>
    <div id="router-text">了解权益详情 &lt;</div>
  </div>
</template>

<script>
export default {
  name: "Package",
  data() {
    return {
      imgSrc: require("../../assets/header-background.png")
    };
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
#package {
  width: 100%;
}

#hint-text {
  position: fixed;
  top: 50pt;
  left: 13pt;
  color: #fde8c9;
  text-align: left;
  font-size: 16pt;
  width: 185pt;
  height: 44pt;
}

#router-text {
  position: fixed;
  top: 100pt;
  left: 13pt;
  color: #fae3c3;
  text-align: left;
  font-size: 12pt;
  width: 87pt;
  height: 12pt;
}
</style>
