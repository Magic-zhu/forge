<template>
  <div class="Editor-wrapper">
    <div class="Editor-suspension">
      <div>手机模式</div>
      <div>pc模式</div>
    </div>
    <div class="" id="editor">
      <div class="target"></div>
      <div class="target2"></div>
    </div>
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
        snappable: true,
        snapCenter: true,
        snapHorizontal: true,
        snapVertical: true,
        // Enabling pinchable lets you use events that
        // can be used in draggable, resizable, scalable, and rotateable.
        pinchable: true, // ["resizable", "scalable", "rotatable"]
        origin: true,
        keepRatio: true,
        // Resize, Scale Events at edges.
        // edge: true,
        throttleDrag: 0,
        throttleResize: 0,
        throttleScale: 0,
        throttleRotate: 0,
        // dragArea:true,
      });
      moveable.elementGuidelines = [
        document.getElementsByClassName("target2")[0],
      ];
      moveable.horizontalGuidelines = [100, 200, 500];
      /* draggable */
      moveable
        .on("dragStart", ({ target, clientX, clientY }) => {
          console.log("onDragStart", target);
        })
        .on(
          "drag",
          ({
            target,
            transform,
            left,
            top,
            right,
            bottom,
            beforeDelta,
            beforeDist,
            delta,
            dist,
            clientX,
            clientY,
          }) => {
            console.log("onDrag left, top", left, top);
            target!.style.left = `${left}px`;
            target!.style.top = `${top}px`;
            // console.log("onDrag translate", dist);
            // target!.style.transform = transform;
          }
        )
        .on("dragEnd", ({ target, isDrag, clientX, clientY }) => {
          console.log("onDragEnd", target, isDrag);
        });
      const moveable2 = new Moveable(editor, {
        target: document.getElementsByClassName("target2")[0],
        // If the container is null, the position is fixed. (default: parentElement(document.body))
        container: editor,
        draggable: true,
        resizable: true,
        scalable: true,
        rotatable: true,
        warpable: true,
        snappable: true,
        snapCenter: true,
        snapHorizontal: true,
        snapVertical: true,
        elementGuidelines: [document.getElementsByClassName("target")[0]],
        // Enabling pinchable lets you use events that
        // can be used in draggable, resizable, scalable, and rotateable.
        pinchable: true, // ["resizable", "scalable", "rotatable"]
        origin: true,
        keepRatio: true,
        // Resize, Scale Events at edges.
        // edge: true,
        throttleDrag: 0,
        throttleResize: 0,
        throttleScale: 0,
        throttleRotate: 0,
      });
      moveable2
        .on("dragStart", ({ target, clientX, clientY }) => {
          console.log("onDragStart", target);
        })
        .on(
          "drag",
          ({
            target,
            transform,
            left,
            top,
            right,
            bottom,
            beforeDelta,
            beforeDist,
            delta,
            dist,
            clientX,
            clientY,
          }) => {
            console.log("onDrag left, top", left, top);
            target!.style.left = `${left}px`;
            target!.style.top = `${top}px`;
            // console.log("onDrag translate", dist);
            // target!.style.transform = transform;
          }
        )
        .on("dragEnd", ({ target, isDrag, clientX, clientY }) => {
          console.log("onDragEnd", target, isDrag);
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
@import './index.less';
</style>
