import { signal } from '@angular/core';
import Tool from './tool';

export class Line extends Tool {   
    mouseDown = signal(false);
    currentX = signal(0);
    currentY = signal(0);
    saved: any;

  constructor(canvas: HTMLCanvasElement) {
        super(canvas);
        this.listen()
    }

    listen() {
        this.canvas.onmousedown = this.mouseDownHandler.bind(this)
        this.canvas.onmouseup = this.mouseUpHandler.bind(this)
        this.canvas.onmousemove = this.mouseMoveHandler.bind(this)
    }

    mouseDownHandler(e: any) {
        this.mouseDown.set(true);
        this.currentX.set(e.pageX-e.target.offsetLeft)
        this.currentY.set(e.pageY - e.target.offsetTop);
        this.ctx?.beginPath()
        this.ctx?.moveTo(this.currentX(), this.currentY() )
        this.saved = this.canvas.toDataURL()
    }

    mouseUpHandler() {
        this.mouseDown.set(false);
    }

    mouseMoveHandler(e: any) {
        if (this.mouseDown()) {
            this.draw(e.pageX-e.target.offsetLeft, e.pageY-e.target.offsetTop);
        }
    }


    draw(x: number, y: number) {
        const img = new Image()
        img.src = this.saved
        img.onload = async () => {
            this.ctx?.clearRect(0, 0, this.canvas.width, this.canvas.height)
            this.ctx?.drawImage(img, 0, 0, this.canvas.width, this.canvas.height)
            this.ctx?.beginPath()
            this.ctx?.moveTo(this.currentX(), this.currentY())
            this.ctx?.lineTo(x, y)
            this.ctx?.stroke()
        };
        Line.bind(this);

    }
}
