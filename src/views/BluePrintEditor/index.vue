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
        <div class="middle-box">
          <BlueprintEditor />
        </div>
        <div class="detail-panel">
          <DetailPanel />
        </div>
      </div>
      <div class="footer"></div>
    </div>
  </div>
</template>
<script lang="ts">
import {defineComponent} from 'vue';
import Header from './header.vue';
import VariablePanel from './variable.vue';
import DetailPanel from './detail.vue';
import BlueprintEditor from './blueprint.vue';
export default defineComponent({
  components: {
    Header,
    VariablePanel,
    DetailPanel,
    BlueprintEditor,
  },
  setup() {
    return {};
  },
});
</script>
<style lang="less" scoped>
@import './index.less';
</style>
