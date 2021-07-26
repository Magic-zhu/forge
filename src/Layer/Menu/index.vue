<template>
    <div class="menu-wrapper"></div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent({
    name:'Menu',
    setup(){
        
    }
})
</script>

<style lang='less'>
    @import '../../UI/theme.less';
    .menu-wrapper{
        width: 300px;
        height: 100%;
        background-color: @dark-background;
    }
</style>