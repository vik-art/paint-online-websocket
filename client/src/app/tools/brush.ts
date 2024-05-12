import { signal } from "@angular/core";
import Tool from "./tool";

export class Brush extends Tool {

    mouseDown = signal(false);

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
        this.mouseDown.set(false)
    }
    
    mouseDownHandler(e: any) { 
        this.mouseDown.set(true);
        this.ctx?.beginPath();
        this.ctx?.moveTo(e.pageX - e?.target?.offsetLeft, e.pageY - e.target.offsetTop)
    }
    
    mouseMoveHandler(e: any) {
        if (this.mouseDown()) {
            this.draw(e.pageX - e?.target?.offsetLeft, e.pageY - e.target.offsetTop)
        }
    } 
    
    draw(x: number, y: number) {
        this.ctx?.lineTo(x, y);
        this.ctx?.stroke();
    }
}