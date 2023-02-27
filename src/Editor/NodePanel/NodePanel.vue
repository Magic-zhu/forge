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
        <div class="NodeSelect" v-show="nodeSelectList.length > 0">
          <div v-for="(item, index) in nodeSelectList" :key="index">
            {{ item }}
          </div>
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
const Nodes: any[] = ['sdakshdkahjkd', '123', '123456'];
const nodeNameChange = (value: string) => {
  console.log(value);
};

const findMatchNode = () => {};
const nodeNameInput = (value: string) => {
  const t: any = [];
  Nodes.forEach(item => {
    if (item.indexOf(value) !== -1) {
      t.push(item);
    }
  });
  nodeSelectList.value = t;
};
</script>
<style lang="less">
@import './NodePanel.less';
</style>
