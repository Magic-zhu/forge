<template>
  <div class="container">
    <AttributeTitle
      label="变量属性"
      :ExpandStatus="expandStatus"
      @onClick="show"
    />
    <div v-show="expandStatus">
      <div></div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { AttributeTitle } from "dark-ui";
export default defineComponent({
  components: {
    AttributeTitle,
  },
  setup() {
    const expandStatus = ref(true);
    const show = () => {
      expandStatus.value = !expandStatus.value;
    };
    return {
      expandStatus,
      show,
    };
  },
});
</script>
<style lang="less" scoped>
@import "./header.less";
</style>
