import dragModel from '@models/drag.model';
console.log(dragModel);


/**
 *
 * @param {*} event -
 * @param {*} data - data Transfer
 */
export const dragStart = (event:any, data:any) =>{

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
        console.log(dragModel);
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
        console.log(e);
        const target = e.target;
        e.target.style.background = dragModel.originBackground;
        dragModel.originBackground = '';
        callback && callback(target);
        e.preventDefault();
        e.stopPropagation();
      },
      false,
  );
};
