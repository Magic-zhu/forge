<template>
  <div class="editor">
    <div></div>
    <div class="wrapper">
      <div class="header">
        <Header />
      </div>
      <div class="body">
        <div class="left-box">
          <VariablePanel />
        </div>
        <div class="middle-box" :style="dynamicWidth">
          <BlueprintEditor />
        </div>
        <div class="detail-panel">
          <DetailPanel />
        </div>
      </div>
      <div class="footer"></div>
      <NodePanel v-show="false" />
    </div>
  </div>
</template>
<script lang="ts">
import {defineComponent, ref, onMounted} from 'vue';
import Header from '../BluePrintEditor/header.vue';
import VariablePanel from '../BluePrintEditor/variable.vue';
import DetailPanel from '../BluePrintEditor/detail.vue';
import BlueprintEditor from '../BluePrintEditor/blueprint.vue';
import NodePanel from '../NodePanel/NodePanel.vue';
import {Kernal} from '../Kernal/index';
export default defineComponent({
  components: {
    Header,
    VariablePanel,
    DetailPanel,
    BlueprintEditor,
    NodePanel,
  },
  setup() {
    const dynamicWidth = ref('');
    const kernal = new Kernal();
    onMounted(() => {
      console.log(document.body.clientWidth);
    });
    return {dynamicWidth};
  },
});
</script>
<style lang="less" scoped>
@import './index.less';
</style>
