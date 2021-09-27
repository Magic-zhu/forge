<template>
  <div class="Editor-wrapper">
    <!-- <div class="Editor-suspension">
      <div class="typeBtn">手机模式</div>
      <div class="typeBtn">pc模式</div>
      <i class="fa fa-circle-o-notch fa-spin"></i>
    </div> -->
    <div class="" id="editor">
      <!-- must be rendered after edtior!==null -->
      <div v-if="editor" class="editor-box">
        <ForgeItem :forgeNode="nodeTree" ref="root"/>
      <!-- <MoveItem v-for="item in nodeTree.children"
        :key="item.id" :id='item.id' :editor='deditor'
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
import {findForgeNodePosition} from '@core/Util';

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
    const nodeTree = ref(root);
    onMounted(() => {
      editor.value = document.getElementById('editor');
      dragOver(editor.value);
      dragEnter(editor.value);
      dragLeave(editor.value);
      drop(editor.value, (s:any, type:string)=>{
        console.log(type);
        const uid = s.dataset.uid;
        const node = findForgeNodePosition(uid, root);
        node.appendChild(new ForgeNode({
          type: type,
          tag: 'div',
        }));
        nodeTree.value = root;
        if (instance!==null) {
          instance?.proxy?.$forceUpdate();
          // @ts-ignore
          instance.refs.root.update();
        }
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
