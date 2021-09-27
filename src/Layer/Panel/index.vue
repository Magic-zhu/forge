<template>
    <div class="Panel-wrapper">
      <BaseInfoPanel />
      <FlexInfoPanel />
    </div>
</template>

<script lang='ts'>
import BaseInfoPanel from '@components/BaseInfoPanel/index.vue';
import FlexInfoPanel from '@components/FlexInfoPanel/index.vue';
export default {
  name: 'Pannel',
  components: {BaseInfoPanel, FlexInfoPanel},
  data() {
    return {

    };
  },
  methods: {

  },
};
</script>

<style lang='less'>
 @import '../../UI/theme.less';
 @import "./index";
</style>
