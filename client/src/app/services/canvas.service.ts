import { Injectable } from '@angular/core';
import { makeObservable } from 'mobx';

@Injectable({
  providedIn: 'root',
})
export class CanvasService {
  canvas!: HTMLCanvasElement;
  undoList: any[] = [];
  redoList: any[] = [];

  constructor() {
    makeObservable(this);
  }

  setCanvas(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
  }

  getCanvas() {
    return this.canvas;
  }

  pushToUndoList(data: any) {
    this.undoList.push(data);
  }

  pushToRedo(data: any) {
    this.redoList.push(data);
  }

  undo() {
    const current = this.getCanvas();
    let ctx = current?.getContext('2d');
    if (this.undoList.length > 0) {
      let dataUrl = this.undoList.pop();
      this.redoList.push(current?.toDataURL());
      let img = new Image();
      img.src = dataUrl;
      img.onload = () => {
        ctx?.clearRect(0, 0, current!.width, current!.height);
        ctx?.drawImage(img, 0, 0, current!.width, current!.height);
      };
    } else {
      ctx?.clearRect(0, 0, current!.width, current!.height);
    }
  }

  redo() {
    const current = this.getCanvas();
    let ctx = current?.getContext('2d');
    if (this.redoList.length > 0) {
      let dataUrl = this.redoList.pop();
       this.redoList.push(current?.toDataURL());
      let img = new Image();
      img.src = dataUrl;
      img.onload = () => {
        ctx?.clearRect(0, 0, current!.width, current!.height);
        ctx?.drawImage(img, 0, 0, current!.width, current!.height);
      };
    } else {
      ctx?.clearRect(0, 0, current!.width, current!.height);
    }
  }
}
