<template>
  <div class="container">
    <div>
      <div class="fn">
        <Icon type="fa-play" color="#57d97c" />
        <Span class="label">Run</Span>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Icon from "@components/Icon/Icon.vue";
import { defineComponent } from "vue";
export default defineComponent({
  setup() {
    return {};
  },
  components: { Icon },
});
</script>
<style lang="less" scoped>
@import "./header.less";
</style>
