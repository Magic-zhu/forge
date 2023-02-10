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
      <div class="fn" @click="openCreateModal">
        <Icon type="fa-plus-circle" color="#57d97c"></Icon>
        <span class="label">Add</span>
      </div>
      <div class="fn">
        <Icon type="fa-minus-circle" color="red"></Icon>
        <span class="label">Delete</span>
      </div>
    </div>
    <Modal
      v-model:active="modalActive"
      transfer
      top="auto"
      title="新建变量"
      :width="500"
      class="dark"
      @confirm="createVar"
    >
      <div style="padding-left: 70px">
        <Form style="max-width: 300px; padding-left: ">
          <FormItem label="变量名称" prop="name">
            <Input></Input>
          </FormItem>
          <FormItem label="变量类型" prop="type">
            <Select></Select>
          </FormItem>
        </Form>
      </div>
    </Modal>
  </div>
</template>
<script lang="ts">
import {defineComponent, watch, reactive, ref, computed} from 'vue';
import {AttributeTitle} from 'dark-ui';
import Icon from '/src/components/Icon/Icon.vue';
import {Modal, Form, FormItem, Input, Select} from 'vexip-ui';

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
    Modal,
    Form,
    FormItem,
    Input,
    Select,
  },
  setup(props) {
    const ExpandStatus = ref(true);
    const modalActive = ref(false);
    const openCreateModal = () => {
      modalActive.value = true;
    };

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

    const createVar = () => {};
    return {
      ExpandStatus,
      list,
      modalActive,
      // *** methods *** //
      show,
      getIconColor,
      typeLabel,
      dragStart,
      dragEnd,
      openCreateModal,
      createVar,
    };
  },
});
</script>
<style lang="less" scoped>
@import './variable.less';
</style>
