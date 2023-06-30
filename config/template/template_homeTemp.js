const homeTemp = `<script setup>
import Wave from "@/component/wave/index.vue";
</script>

<template>
  <div class="container">
    <h1 class="container__title">Welcome to xxx Manage System !</h1>
    <Wave />
  </div>
</template>

<style lang="less" scoped>
.container {
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  .container__title {
    flex: 1;
    align-self: center;
    padding-top: 160px;
    font-size: 55px;
    font-family: monospace;
  }
}
</style>`;

module.exports = homeTemp;
