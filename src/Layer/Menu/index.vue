<template>
  <div class="menu-wrapper" :style="{ width: ifShowMenu + 'px' }">
    <div class="menu-hidden" @click="hiddenMenu()">
      <i class="fa fa-angle-double-left" aria-hidden="true" v-show="ifShowMenu===300"></i>
      <i class="fa fa-angle-double-right" aria-hidden="true" v-show="ifShowMenu===0"></i>
    </div>
    <div
      class="menu-item"
      v-for="item in list"
      :key="item.name"
      v-show="ifShowMenu !== 0"
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
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "Menu",
  setup() {
    const ifShowMenu = ref(300);
    const hiddenMenu = () => {
      if (ifShowMenu.value === 0) {
        ifShowMenu.value = 300;
      } else {
        ifShowMenu.value = 0;
      }
    };
    return {
      list: [
        { icon: "fa fa-th-large", name: "flex盒子" },
        { icon: "fa fa-image", name: "图片盒子" },
      ],
      hiddenMenu,
      ifShowMenu,
    };
  },
});
</script>

<style lang="less">
@import "./index.less";
</style>
