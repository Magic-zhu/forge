<template>
  <div class="Editor-wrapper">
    <!-- <div class="Editor-suspension">
      <div class="typeBtn">手机模式</div>
      <div class="typeBtn">pc模式</div>
      <i class="fa fa-circle-o-notch fa-spin"></i>
    </div> -->
    <div class="" id="editor">
      <MoveItem id='xx' :editor='editor' :container='editor' v-if="editor"/>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted} from 'vue';
import MoveItem from '../../components/MoveItem/index.vue';
// import ForgeNode from '../../core/ForgeNode';

export default defineComponent({
  name: 'Editor',
  component: {MoveItem},
  setup() {
    let editor;
    onMounted(() => {
      editor = document.getElementById('editor');
      // new ForgeNode({});
    });
    return {
      boxList: [{}],
      editor,
    };
  },
});
</script>

<style lang="less">
@import "./index.less";
</style>
