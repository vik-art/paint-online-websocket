import { ElementRef, Injectable } from '@angular/core';
import { makeObservable } from 'mobx';

@Injectable({
  providedIn: 'root',
})
export class CanvasService {
  canvas: ElementRef<HTMLInputElement> | null = null;
  constructor() {
    makeObservable(this);
  }

  setCanvas(canvas: ElementRef<HTMLInputElement>) {
    this.canvas = canvas;
  }

  getCanvas() {
    return this.canvas?.nativeElement;
  }
}
