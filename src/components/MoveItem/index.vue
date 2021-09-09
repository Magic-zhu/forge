<template>
  <div class="MoveItem-wrapper" :id="id"></div>
</template>

<script lang='ts'>
import {defineComponent, onMounted} from 'vue';
import Moveable from 'moveable';

export default defineComponent({
  name: 'MoveItem',
  props: ['id', 'editor', 'container'],
  setup(props) {
    let instance:Moveable;
    onMounted(() => {
      console.log('执行到这里了吗', props.editor);
      instance = new Moveable(props.editor, {
        target: document.getElementById(props.id),
        container: props.container,
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
      instance
          .on('dragStart', ({target, clientX, clientY}) => {
            console.log('onDragStart', target);
          })
          .on('drag', ({
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
            console.log('onDrag left, top', left, top);
                target!.style.left = `${left}px`;
                target!.style.top = `${top}px`;
                // console.log("onDrag translate", dist);
                // target!.style.transform = transform;
          },
          )
          .on('dragEnd', ({target, isDrag, clientX, clientY}) => {
            console.log('onDragEnd', target, isDrag);
          });
    });
    return {
      // instance,
    };
  },

});
</script>

<style lang='less'>
@import "../../UI/theme.less";
.MoveItem-wrapper {
  width: 300px;
  height: 100%;
  background-color: @dark-background;
}
</style>
