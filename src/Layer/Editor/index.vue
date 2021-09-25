<template>
  <div class="Editor-wrapper">
    <!-- <div class="Editor-suspension">
      <div class="typeBtn">手机模式</div>
      <div class="typeBtn">pc模式</div>
      <i class="fa fa-circle-o-notch fa-spin"></i>
    </div> -->
    <div class="" id="editor">
      <!-- must be rendered after edtior!==null -->
      <div v-if="editor">
        <ForgeItem :forgeNode="nodeTree"/>
      <!-- <MoveItem v-for="item in nodeTree.children"
        :key="item.id" :id='item.id' :editor='editor'
        :container='editor'/> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted, ref, getCurrentInstance} from 'vue';
import MoveItem from '@components/MoveItem/index.vue';
import ForgeItem from '@components/ForgeItem/index.vue';
import ForgeNode from '../../core/ForgeNode';
import {dragOver, dragEnter, drop, dragLeave} from '@core/Drag';

export default defineComponent({
  name: 'Editor',
  components: {MoveItem, ForgeItem},
  setup() {
    const instance = getCurrentInstance();
    const editor:any= ref(null);
    const root = new ForgeNode({
      type: 'root',
      tag: 'div',
    });
    const testNode1 = new ForgeNode({
      type: 'flex',
      tag: 'div',
    });
    const testNode2 = new ForgeNode({
      type: 'flex',
      tag: 'div',
    });
    root.appendChild(testNode1);
    testNode1.appendChild(testNode2);
    console.log(root);
    const nodeTree = ref(root);
    onMounted(() => {
      editor.value = document.getElementById('editor');
      dragOver(editor.value);
      dragEnter(editor.value);
      dragLeave(editor.value);
      drop(editor.value, ()=>{
        root.appendChild(new ForgeNode({
          type: 'flex',
          tag: 'div',
        }));
        console.log(root);
        nodeTree.value = root;
        console.log('ins', instance);
        instance.proxy.$forceUpdate();
        console.log(2);
      });
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
