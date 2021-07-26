<template>
  <div class="toolbar-wrapper"></div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent({
    name:'ToolBar',
    setup(){
        
    }
})
</script>

<style lang='less' scoped>
    @import '../../UI/theme.less';
    .toolbar-wrapper{
        width: 100%;
        height: 40px;
        background-color: @background;
        border-bottom: 1px solid #ffffff;
    }
</style>