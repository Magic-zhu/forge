<template>
  <div class="StatusBar-wrapper"></div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent({
    name:'StatusBar',
    setup(){
        
    }
})
</script>

<style lang='less' scoped>
    @import '../../UI/theme.less';
    .StatusBar-wrapper{
        width: 100%;
        height: 40px;
        background-color: @background;
    }
</style>