<template>
    <div class="MoveItem-wrapper"></div>
</template>

<script lang='ts'>
import {defineComponent} from 'vue';
export default defineComponent({
  name: 'MoveItem',
  setup() {

  },
});
</script>

<style lang='less'>
    @import '../../UI/theme.less';
    .MoveItem-wrapper{
        width: 300px;
        height: 100%;
        background-color: @dark-background;
    }
</style>