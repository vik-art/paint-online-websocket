import { ToolbarButtons } from "../types/toolbar-button-types";

export const BUTTONS_LIST = [
  {
    type: 'img',
    name: ToolbarButtons.BRUSH,
    src: 'assets/brush.png',
  },
  {
    type: 'img',
    name: ToolbarButtons.RECT,
    src: 'assets/rect.png',
  },
  {
    type: 'img',
    name: ToolbarButtons.CIRCLE,
    src: 'assets/circle.png',
  },
  {
    type: 'img',
    name: ToolbarButtons.ERASER,
    src: 'assets/eraser.png',
  },
  {
    type: 'img',
    name: ToolbarButtons.LINE,
    src: 'assets/line.png',
  },
  {
    type: 'input',
    name: 'color',
  },
  {
    type: 'img',
    name: 'undo',
    src: 'assets/undo.png',
    right: true,
  },
  {
    type: 'img',
    name: 'redo',
    src: 'assets/redo.png',
  },
  {
    type: 'img',
    name: 'save',
    src: 'assets/save.png',
  },
];
