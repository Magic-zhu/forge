<template>
  <i :class="class" :style="style" aria-hidden="true"></i>
</template>
<script lang="ts">
import {defineComponent, computed} from 'vue';
export default defineComponent({
  props: {
    color: {
      type: String,
    },
    type: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
    },
  },
  setup(props) {
    return {
      style: computed(() => ({
        color: props.color || 'white',
        fontSize: props.size || 10 + 'px',
      })),
      class: computed(() => ({
        fa: true,
        [`${props.type}`]: true,
      })),
    };
  },
});
</script>
<style lang="less" scoped></style>
