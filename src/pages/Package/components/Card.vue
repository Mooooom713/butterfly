<template>
  <div id="card">
    <app-effect />
  </div>
</template>

<script>
import Effect from "./Effect";

export default {
  name: "Card",
  components: {
    "app-effect": Effect
  },
  data() {
    return {};
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
#card {
    width: auto;
    height: 122pt;
    margin: 12pt 12pt;
    background: #ffffff;
    border-radius: 5px;
}
</style>
