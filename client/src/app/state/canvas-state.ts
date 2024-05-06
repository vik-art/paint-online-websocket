import { Injectable } from '@angular/core';
import { makeObservable } from 'mobx';

@Injectable({
  providedIn: 'root',
})
export class CanvasService {
  canvas = null;
  constructor() {
    makeObservable(this);
  }

  setCanvas(canvas: any) {
    this.canvas = canvas;
  }
}
