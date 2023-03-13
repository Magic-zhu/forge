<template>
  <div class="container">
    <AttributeTitle
      label="变量属性"
      :ExpandStatus="expandStatus"
      @onClick="show"
    />
    <div v-show="expandStatus">
      <div class="attribute">
        <span class="label">{{ 'nihap' }}</span>
        <div>
          <MInput value="sda"></MInput>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import {defineComponent, ref} from 'vue';
import {AttributeTitle, MInput} from 'dark-ui';
export default defineComponent({
  components: {
    AttributeTitle,
    MInput,
  },
  setup() {
    const expandStatus = ref(true);
    const show = () => {
      expandStatus.value = !expandStatus.value;
    };
    return {
      expandStatus,
      show,
    };
  },
});
</script>
<style lang="less" scoped>
@import './detail.less';
</style>
