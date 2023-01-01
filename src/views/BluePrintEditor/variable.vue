<template>
  <div class="variable-panel">
    <AttributeTitle
      label="变量表"
      :ExpandStatus="ExpandStatus"
      @onClick="show"
    />
    <div v-show="ExpandStatus" class="content">
      <div
        class="variable"
        v-for="(item, index) in list"
        :key="index"
        :draggable="true"
      >
        <span class="variable-name">{{ item.name }}</span>
        <div class="variable-type">
          <Icon type="fa-circle" :color="getIconColor(item.type)" />
          <span class="variable-type-text">{{ typeLabel(item.type) }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, watch, reactive, ref, computed } from "vue";
import { AttributeTitle } from "dark-ui";

export enum VariableType {
  string = "string",
  number = "number",
  object = "object",
}

export interface Variable {
  default: any;
  type: VariableType;
  readonly: boolean;
  name: string;
}

export default defineComponent({
  components: {
    AttributeTitle,
  },
  setup(props) {
    const ExpandStatus = ref(true);
    const list = ref<any[]>([
      {
        name: "测试变量1",
        type: "string",
        value: "",
      },
      {
        name: "测试变量2",
        type: "number",
        value: "",
      },
    ]);
    const show = () => {
      ExpandStatus.value = !ExpandStatus.value;
    };

    const getIconColor = (type: string): string => {
      switch (type) {
        case "string":
          return "#a139bf";
        case "number":
          return "#8bc24a";
        default:
          return "";
      }
    };
    const typeLabel = (type: VariableType): string => {
      switch (type) {
        case VariableType.number:
          return "浮点数";
        case VariableType.string:
          return "字符串";
        default:
          return "";
      }
    };
    return {
      ExpandStatus,
      list,
      show,
      getIconColor,
      typeLabel,
    };
  },
});
</script>
<style lang="less" scoped>
@import "./variable.less";
</style>
