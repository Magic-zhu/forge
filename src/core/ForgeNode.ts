import {simpleClone} from '@utils/index';
interface Options {
  type:string
  tag?:string
  className?:string
  idName?:string
  attributes?:Object
}

let uid:number = 0;

/**
 *
 *
 * @class ForgeNode
 */
class ForgeNode {
  type: string = '';
  tag: string = '';
  id: string = '';
  className: string = '';
  idName: string = '';
  attributes: {} = {};
  parent: ForgeNode | null = null;
  children: ForgeNode[] = [];

  /**
   * Creates an instance of ForgeNode.
   * @param {Options} options
   * @memberof ForgeNode
   */
  constructor(options:Options) {
    this.id = 'forge' + uid++;
    this.type = options.type;
    this.className = options.className ||'';
  }

  /**
   *
   * @param {ForgeNode} child
   * @memberof ForgeNode
   */
  appendChild(child:ForgeNode): void {
    child.parent = this;
    this.children.push(child);
  }

  /**
   *
   * clone self
   * @memberof ForgeNode
   */
  clone() {
    new ForgeNode({
      type: this.type,
      className: this.className,
      idName: this.idName,
      attributes: simpleClone(this.attributes),
    });
  }
}

export default ForgeNode;
