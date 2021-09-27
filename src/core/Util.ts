import forgeNode from './ForgeNode';

/**
 *
 * @param {string} id
 * @param {forgeNode} root
 * @return {forgeNode}
 */
export const findForgeNodePosition = (id: string, root: forgeNode) => {
  let pointer: forgeNode = root;
  const find = (node: forgeNode): void => {
    if (node.id === id) {
      pointer = node;
    } else {
      for (let index = 0; index < node.children.length; index++) {
        const element = node.children[index];
        find(element);
      }
    }
  };
  find(root);
  return pointer;
};
