<template>
  <div class="flex-info-panel-wrapper">
    <div class="flex-info-panel-wrapper-item">
      <span class="label">align-items:</span>
      <span><i class="fa fa-align-left"></i></span>
      <span><i class="fa fa-align-center"></i></span>
      <span><i class="fa fa-align-right"></i></span>
    </div>
    <div class="flex-info-panel-wrapper-item">
      <span class="label">y:</span>
      <span><i class="fa fa-align-left"></i></span>
      <span><i class="fa fa-align-center"></i></span>
      <span><i class="fa fa-align-right"></i></span>
    </div>
    <div class="flex-info-panel-wrapper-item">
      <span class="label">width:</span>
      <span class="value">100</span>
    </div>
    <div class="flex-info-panel-wrapper-item">
      <span class="label">height:</span>
      <span class="value">100</span>
    </div>
    <div class="flex-info-panel-wrapper-item">
      <span class="label">radius:</span>
      <span class="value">100</span>
    </div>
  </div>
</template>
<script lang="ts">
import {defineComponent} from 'vue';
export default defineComponent({
  setup() {},
});
</script>
<style lang="less" scoped>
@import "./index.less";
</style>
