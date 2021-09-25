<template>
  <div class="MoveItem-wrapper" :id="id">我是附表</div>
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
        bounds: {'left': 0, 'top': 0, 'right': 375},
        resizable: true,
        snappable: true,
        snapCenter: true,
        snapHorizontal: true,
        snapVertical: true,
        pinchable: true, // ["resizable", "scalable", "rotatable"]
        origin: true,
        keepRatio: false,
        // Resize, Scale Events at edges.
        edge: false,
        dragArea: true,
        className: 'moveItem',
      });
      instance
          .on('dragStart', ({target, clientX, clientY}) => {
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
                target!.style.left = `${left}px`;
                target!.style.top = `${top}px`;
                // console.log("onDrag translate", dist);
                // target!.style.transform = transform;
          },
          )
          .on('dragEnd', ({target, isDrag, clientX, clientY}) => {
          })
          .on('resize', ({
            target,
            width,
            height,
          }) => {
            target.style.width = `${width}px`;
            target.style.height = `${height}px`;
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
  width: 100px;
  height: 100px;
  background-color: rgba(0,0,0,0);
  position:absolute;
  left: 0;
  top:0;
  color: red;
}

</style>
