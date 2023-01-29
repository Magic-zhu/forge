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
        @dragstart="dragStart($event, item)"
        @dragend="dragEnd"
      >
        <span class="variable-name">{{ item.name }}</span>
        <div class="variable-type">
          <Icon type="fa-circle" :color="getIconColor(item.type)" />
          <span class="variable-type-text">{{ typeLabel(item.type) }}</span>
        </div>
      </div>
    </div>
    <div class="variable-panel-footer">
      <div class="fn">
        <Icon type="fa-plus-circle" color="#57d97c"></Icon>
        <span class="label">Add</span>
      </div>
      <div class="fn">
        <Icon type="fa-minus-circle" color="red"></Icon>
        <span class="label">Delete</span>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import {defineComponent, watch, reactive, ref, computed} from 'vue';
import {AttributeTitle} from 'dark-ui';
import Icon from '/src/components/Icon/Icon.vue';

export enum VariableType {
  string = 'string',
  number = 'number',
  object = 'object',
}

export interface Variable {
  name: string;
  type: VariableType;
  description?: string;
  canEdit?: boolean;
  readonly?: boolean;
  private?: boolean;
  group?: string;
  value: any;
}

export default defineComponent({
  components: {
    AttributeTitle,
    Icon,
  },
  setup(props) {
    const ExpandStatus = ref(true);
    const list = ref<any[]>([
      {
        name: '测试变量1',
        type: 'string',
        value: '',
      },
      {
        name: '测试变量2',
        type: 'number',
        value: '',
      },
    ]);
    const show = () => {
      ExpandStatus.value = !ExpandStatus.value;
    };

    const getIconColor = (type: string): string => {
      switch (type) {
        case 'string':
          return '#a139bf';
        case 'number':
          return '#8bc24a';
        case 'object':
          return '#26bbff';
        default:
          return '';
      }
    };
    const typeLabel = (type: VariableType): string => {
      switch (type) {
        case VariableType.number:
          return '浮点数';
        case VariableType.string:
          return '字符串';
        case VariableType.object:
          return '对象';
        default:
          return '';
      }
    };
    const dragStart = (event: DragEvent, item: Variable) => {
      event.dataTransfer?.setData('varible', JSON.stringify(item));
    };
    const dragEnd = (ev: DragEvent) => {};
    return {
      ExpandStatus,
      list,
      // *** methods *** //
      show,
      getIconColor,
      typeLabel,
      dragStart,
      dragEnd,
    };
  },
});
</script>
<style lang="less" scoped>
@import './variable.less';
</style>
