<template>
  <div class="container" @drop="drop" @dragover="dragover">
    <div></div>
  </div>
</template>
<script lang="ts">
import {defineComponent} from 'vue';
export default defineComponent({
  setup() {
    const drop = (ev: DragEvent) => {
      ev.preventDefault();
      console.log(ev.dataTransfer?.getData('varible'));
    };
    const dragover = (ev: DragEvent) => {
      ev.preventDefault();
    };
    return {
      drop,
      dragover,
    };
  },
});
</script>
<style lang="less" scoped>
@import './blueprint.less';
</style>
