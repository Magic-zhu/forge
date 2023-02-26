<template>
  <div class="NodePanel-wrapper">
    <div class="NodePanel-box">
      <div class="NodeInput">
        <Input
          v-model="nodeName"
          placeholder="Please Input Node Name"
          style="width: 300px"
          @change="nodeNameChange"
          @input="nodeNameInput"
        />
        <div class="NodeSelect">
          <div>sdakshdkahjkd</div>
          <div>sdakshdkahjkd</div>
          <div>sdakshdkahjkd</div>
          <div>sdakshdkahjkd</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {ref} from 'vue';
import {Input} from 'vexip-ui';
const nodeName = ref('');
const nodeSelectList = ref<any>([]);
const Nodes: any[] = [];
const nodeNameChange = (value: string) => {
  console.log(value);
};

const findMatchNode = () => {};
const nodeNameInput = (value: string) => {
  nodeSelectList.value = Nodes.map(item => {
    if (item.indexOf(value)) {
    }
    return;
  });
};
</script>
<style lang="less">
@import './NodePanel.less';
</style>
