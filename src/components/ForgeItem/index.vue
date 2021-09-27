<template>
  <div
    :class="className"
    :style="forgeStyle"
    :data-uid="forgeNode.id"
    @mouseover="mouseoverHandler($event)"
    @mouseout="mouseoutHandler($event)"
  >
    <ForgeItem
      v-for="item in forgeNode.children"
      :key="item.id"
      :forgeNode="item"
      :ref="item.id"
    />
  </div>
</template>

<script lang="ts">
export default {
  name: 'ForgeItem',
  props: {
    forgeNode: Object,
  },
  beforeCreate() {},
  mounted() {
    if (this.forgeNode?.type === 'root') {
      this.className = 'forge-item-wrapper-root';
    }
    if (this.forgeNode?.type === 'flex') {
      this.className = 'forge-item-wrapper-flex';
    }
    if (this.forgeNode?.type === 'img') {
      this.className = 'forge-item-wrapper-img';
    }
  },
  data() {
    return {
      className: 'forge-item-wrapper',
      forgeStyle: {
        color: 'blue',
        border: '',
      },
    };
  },
  methods: {
    // Recursion
    update() {
      this.$forceUpdate();
      this.forceChildUpdate();
    },
    // Recursion
    forceChildUpdate() {
      try {
        // @ts-ignore
        this.forgeNode.children.forEach((item) => {
          // @ts-ignore
          this.$refs[item.id].update();
        });
      } catch (error) {}
    },
    mouseoverHandler(e:any) {
      console.log(e);
      this.forgeStyle.border = '2px solid orange';
      e.stopPropagation();
      e.preventDefault();
    },
    mouseoutHandler(e:any) {
      this.forgeStyle.border = '';
      e.stopPropagation();
    },
  },
};
</script>

<style lang="less" scoped>
@import "./index.less";
</style>
