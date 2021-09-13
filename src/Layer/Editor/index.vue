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
import {defineComponent, onMounted, ref} from 'vue';
import MoveItem from '../../components/MoveItem/index.vue';
import ForgeNode from '../../core/ForgeNode';

export default defineComponent({
  name: 'Editor',
  components: {MoveItem},
  setup() {
    const editor:any= ref(null);
    const root = new ForgeNode({
      type: 'root',
    });
    const nodeTree = ref(root);
    onMounted(() => {
      editor.value = document.getElementById('editor');
      console.log(editor);
    });
    return {
      nodeTree,
      editor,
    };
  },
});
</script>

<style lang="less">
@import "./index.less";
</style>
