<template>
 <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'


export default defineComponent({
  name: 'App',
  components: {}
})
</script>

<style lang='less'>
@import './UI/theme.less';
#app {
  background-color: @dark-background;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>
