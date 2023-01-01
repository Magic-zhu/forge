<template>
  <div class="">
    <div></div>
    <div class="wrapper">
      <div class="header">
        <Header />
      </div>
      <div class="body">
        <div class="left-box">
          <VariablePanel />
        </div>
        <div class="middle-box"></div>
        <div class="detail-panel"></div>
      </div>
      <div class="footer"></div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Header from "./header.vue";
import VariablePanel from "./variable.vue";
export default defineComponent({
  components: {
    Header,
    VariablePanel,
  },
  setup() {
    return {};
  },
});
</script>
<style lang="less" scoped></style>
