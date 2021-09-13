<template>
  <div class="MoveItem-wrapper"></div>
</template>

<script lang='ts'>
import {defineComponent} from 'vue';
export default defineComponent({
  name: 'MoveItem',
  setup() {},
});
</script>

<style lang='less'>
@import "../../UI/theme.less";
.MoveItem-wrapper {
  width: 100%;
  height: 300px;
  display: flex;
}
</style>
