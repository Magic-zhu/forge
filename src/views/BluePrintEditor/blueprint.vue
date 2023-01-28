<template>
  <div class="container" @drop="drop" @dragover="dragover">
    <div ref="app" id="upp"></div>
  </div>
</template>
<script lang="ts">
import {defineComponent, onMounted} from 'vue';
declare const window: any;
export default defineComponent({
  setup() {
    let Editor: any;
    const {Node, NodeFactory} = window.blueprint;
    const factory = new NodeFactory();
    const createCanvas = () => {
      Editor = new window.blueprint.BluePrintEditor(
        document.getElementById('upp')
      );
    };
    console.log('blueprint', window.blueprint);
    const drop = (ev: DragEvent) => {
      ev.preventDefault();
      console.log(ev.dataTransfer?.getData('varible'));
      const node = factory.createBeginNode(100, 100, 'Mounted');
      console.log(node);

      Editor.add(node);
    };
    const dragover = (ev: DragEvent) => {
      ev.preventDefault();
    };

    onMounted(() => {
      createCanvas();
    });

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
