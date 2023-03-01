export interface FVariableAttribute {
  label: string;
  type: string;
}
export class FVariable {
  // * 描述一个变量有哪些属性
  readonly attributes: FVariableAttribute[] = [
    {
      label: '变量名称',
      type: 'input',
    },
  ];

  // * 变量名称
  _name: string = '';
  // * 变量类型
  _type: string = '';
  // * 变量描述
  _description: string = '';
  // * 是否只读
  _readonly: boolean = false;
  // * 是否私有
  _private: boolean = false;
  // * 属于哪一个类别
  _group: string = '';
  // * 默认值
  _defalut: any = 0;

  constructor() {}

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get type(): string {
    return this._type;
  }

  set type(value: string) {
    this._type = value;
  }

  get description() {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }
}
