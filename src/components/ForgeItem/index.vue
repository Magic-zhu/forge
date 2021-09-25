<template>
  <div class="forge-item-wrapper">
    <div class="forge-item" :data-uid="forgeNode.id" >forge元素</div>
    <div v-if="forgeNode.children">
      <ForgeItem
        v-for="item in forgeNode.children"
        :key="item.id" :forgeNode="item"
      />
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted, ref} from 'vue';

export default defineComponent({
  name: 'ForgeItem',
  props: ['forgeNode'],
  // components: {},
  setup(props) {
    console.log('neibu', props.forgeNode);
    onMounted(() => {});
    return {};
  },
});
</script>

<style lang="less" scoped>
@import "./index.less";
</style>
