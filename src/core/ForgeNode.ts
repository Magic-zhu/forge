interface Options {
  type:string
  tag:string
}
/**
 *
 *
 * @class ForgeNode
 */
class ForgeNode {
  type: string = '';
  tag: string = '';
  id: string = '';
  class: string = '';
  attributes: [] = [];
  stylesheet: {} = {};
  parent: ForgeNode | null = null;
  children: ForgeNode[] = [];

  /**
   * Creates an instance of ForgeNode.
   * @param {Options} options
   * @memberof ForgeNode
   */
  constructor(options:Options) {
    this.type = options.type;
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
}

export default ForgeNode;
