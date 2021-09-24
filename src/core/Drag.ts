export const dragOver = (dom: HTMLElement) => {
  dom.addEventListener(
      'dragover',
      function(event) {
        console.log('dragOver');
        // 防止拖拉效果被重置，允许被拖拉的节点放入目标节点
        event.preventDefault();
      },
      false,
  );
};
