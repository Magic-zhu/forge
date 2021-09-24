<template>
  <div class="menu-wrapper" :style="{ width: ifShowMenu + 'px' }">
    <div
      class="menu-hidden"
      @click="hiddenMenu()"
      :style="ifShowMenu === 0 ? { opacity: 1 } : ''"
    >
      <i
        class="fa fa-angle-double-left"
        aria-hidden="true"
        v-show="ifShowMenu === 300"
      ></i>
      <i
        class="fa fa-angle-double-right"
        aria-hidden="true"
        v-show="ifShowMenu === 0"
      ></i>
    </div>
    <div class="boxPanel">
      <div
        class="menu-item"
        v-for="item in list"
        :key="item.name"
        v-show="ifSHowItem"
        @click="addToEditor(item)"
        draggable="true"
      >
        <div class="gradient-border"></div>
        <div class="menu-item-content">
          <div class="menu-icon">
            <i :class="item.icon" aria-hidden="true"></i>
          </div>
          <div class="menu-name">{{ item.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';
import {BOX_LIST} from './config';
export default defineComponent({
  name: 'Menu',
  setup() {
    const ifShowMenu = ref(300);
    const ifSHowItem = ref(true);
    const hiddenMenu = () => {
      if (ifShowMenu.value === 0) {
        ifShowMenu.value = 300;
        setTimeout(() => {
          ifSHowItem.value = true;
        }, 200);
      } else {
        ifShowMenu.value = 0;
        ifSHowItem.value = false;
      }
    };
    const addToEditor = () => {};
    return {
      list: BOX_LIST,
      hiddenMenu,
      addToEditor,
      ifShowMenu,
      ifSHowItem,
    };
  },
});
</script>

<style lang="less">
@import "./index.less";
</style>
