import chalk from 'chalk-web';
export class Kernal {
  downKey: string = '';
  constructor() {
    this.initKeyPress();
  }

  initKeyPress() {
    document.body.addEventListener('keydown', ev => {
      if (ev.code === 'Space') {
        ev.preventDefault();
        chalk('red', '打开面板');
      }
    });
    document.body.addEventListener('keyup', ev => {
      ev.preventDefault();
    });

    document.body.addEventListener('keypress', ev => {});
  }
}
