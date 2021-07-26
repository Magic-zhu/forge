<template>
  <div class="Editor-wrapper">
    <div class="" id="editor">    <div class="target" draggable></div></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import Moveable from "moveable";

export default defineComponent({
  name: "Editor",
  setup() {
    const init = (editor) => {
      const moveable = new Moveable(editor, {
        target: document.getElementsByClassName("target")[0],
        // If the container is null, the position is fixed. (default: parentElement(document.body))
        container: editor,
        draggable: true,
        resizable: true,
        scalable: true,
        rotatable: true,
        warpable: true,
        // Enabling pinchable lets you use events that
        // can be used in draggable, resizable, scalable, and rotateable.
        pinchable: true, // ["resizable", "scalable", "rotatable"]
        origin: true,
        keepRatio: true,
        // Resize, Scale Events at edges.
        edge: false,
        throttleDrag: 0,
        throttleResize: 0,
        throttleScale: 0,
        throttleRotate: 0,
      });
    };
    onMounted(() => {
      const editor = document.getElementById("editor");
      init(editor);
    });
  },
});
</script>

<style lang="less">
.Editor-wrapper {
  width: 100%;
  height: 100%;
  background-color: blue;
  #editor {
    width: 100%;
    height: 100%;
  }
  .target {
    width: 200px;
    height: 200px;
    background-color: grey;
  }
}
</style>
