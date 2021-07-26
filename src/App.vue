<template>
 <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  }
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
