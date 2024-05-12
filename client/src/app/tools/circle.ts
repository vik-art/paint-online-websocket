import { signal } from '@angular/core';
import Tool from './tool';

export class Circle extends Tool {
  mouseDown = signal(false);
  startX = signal(0);
  startY = signal(0);
  saved: string | null = null;

  constructor(canvas: HTMLCanvasElement) {
    super(canvas);
    this.listen();
  }

  listen() {
    this.canvas.onmousemove = this.mouseMoveHandler.bind(this);
    this.canvas.onmousedown = this.mouseDownHandler.bind(this);
    this.canvas.onmouseup = this.mouseUpHandler.bind(this);
  }

  mouseUpHandler() {
    this.mouseDown.set(false);
  }

  mouseDownHandler(e: any) {
    this.mouseDown.set(true);
    this.ctx?.beginPath();
    this.startX.set(e.pageX - e?.target?.offsetLeft);
    this.startY.set(e.pageY - e.target.offsetTop);
    this.saved = this.canvas.toDataURL();
  }

  mouseMoveHandler(e: any) {
    if (this.mouseDown()) {
      const currentX = e.pageX - e?.target?.offsetLeft;
      const currentY = e.pageY - e.target.offsetTop;
      const width = currentX - this.startX();
      const height = currentY - this.startY();
      const r = Math.sqrt(width ** 2 + height ** 2);
      this.draw(this.startX(), this.startY(), r);
    }
  }

  draw(x: number, y: number, r: number) {
    if (this.saved) {
      const img = new Image();
      img.src = this.saved;
      img.onload = () => {
        this.ctx?.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx?.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
        this.ctx?.beginPath();
        this.ctx?.arc(x, y, r, 0, 2 * Math.PI);
        this.ctx?.fill();
        this.ctx?.stroke();
      };
    }
  }
}
