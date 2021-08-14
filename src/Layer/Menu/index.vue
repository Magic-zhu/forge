<template>
  <div class="menu-wrapper">
    <div class="menu-item" v-for="item in list" :key='item.name'>
      <div class=" gradient-border"></div>
      <div class="menu-item-content">
        <div class="menu-icon">
          <i :class="item.icon" aria-hidden="true"></i>
        </div>
        <div class="menu-name">{{item.name}}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
export default defineComponent({
  name: 'Menu',
  setup() {
    return {
      list: [
        {icon: 'fa fa-th-large', name: 'flex盒子'},
        {icon: 'fa fa-image', name: '图片盒子'},
      ],
    };
  },
});
</script>

<style lang="less">
@import './index.less';
</style>
