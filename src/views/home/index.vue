<template>
  <div class="wrapper">
    <ToolBar />
    <div class="main">
      <Menu />
      <div class="center">
        <Editor />
      </div>
      <Pannel />
    </div>
    <StatusBar />
  </div>
</template>

<script lang='ts'>

import ToolBar from '../../Layer/ToolBar/index.vue';
import Menu from '../../Layer/Menu/index.vue';
import StatusBar from '../../Layer/StatusBar/index.vue';
import Editor from '../../Layer/Editor/index.vue';
import Pannel from '../../Layer/Pannel/index.vue';

export default {
  name: 'Home',
  components: {ToolBar, Menu, StatusBar, Editor, Pannel},
};
</script>

<style lang='less' scoped>
.wrapper{
    color: white;
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    .main{
      display: flex;
      flex:1;
      .center {
        flex:1;
      }
    }
}
</style>
