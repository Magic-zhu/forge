<template>
  <div class="container" @drop="drop" @dragover="dragover">
    <div ref="app" id="app"></div>
  </div>
</template>
<script lang="ts">
import {defineComponent} from 'vue';
declare const window: any;
export default defineComponent({
  setup() {
    let Editor: any;
    const createCanvas = () => {
      Editor = new window.blueprint.BluePrintEditor();
    };
    console.log('blueprint', window.blueprint);
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
