import dragModel from '@models/drag.model';

/**
 *
 * @param {*} event -
 * @param {*} data - data Transfer
 */
export const dragStart = (event:any, data:any) =>{
  const {dataTransfer} = event;
  dataTransfer.setData('text/plain', data);
};

export const dragOver = (dom: HTMLElement) => {
  dom.addEventListener(
      'dragover',
      function(event) {
      // allow the node drop
        event.preventDefault();
      },
      false,
  );
};

export const dragEnter = (dom: HTMLElement) => {
  dom.addEventListener(
      'dragenter',
      function(e: any) {
        dragModel.originBackground = e.target.style.background || '';
        e.target.style.background = dragModel.SELECTED_COLOR;
        e.preventDefault();
        e.stopPropagation();
      },
      false,
  );
};

export const dragLeave = (dom: HTMLElement) => {
  dom.addEventListener(
      'dragleave',
      function(e: any) {
        e.target.style.background = dragModel.originBackground;
        dragModel.originBackground = '';
        e.preventDefault();
        e.stopPropagation();
      },
      false,
  );
};

export const drop = (dom: HTMLElement, callback?: Function) => {
  dom.addEventListener(
      'drop',
      function(e: any) {
        const target = e.target;
        const data = e.dataTransfer.getData('text');
        e.target.style.background = dragModel.originBackground;
        dragModel.originBackground = '';
        callback && callback(target, data);
        e.dataTransfer.clearData();
        e.preventDefault();
        e.stopPropagation();
      },
      false,
  );
};
