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
   *
   * @param {ForgeNode} child
   * @memberof ForgeNode
   */
  appendChild(child:ForgeNode): void {
    this.children.push(child);
  }
}

export default ForgeNode;
