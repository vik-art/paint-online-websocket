export default class Tool {
    canvas: any;
    ctx: CanvasRenderingContext2D | null;
    constructor(canvas: any) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.destroyEvents();
    }

    set fillColor(color: string | CanvasGradient | CanvasPattern) {
        if(this.ctx)
        this.ctx.fillStyle = color;
    }

    set strokeColor(color: string | CanvasGradient | CanvasPattern) {
        if (this.ctx)
            this.ctx.strokeStyle = color
    }

    set lineWidth(width: number) {
        if (this.ctx)
            this.ctx.lineWidth = width;
    }

    destroyEvents() {
         this.canvas.onmousemove = null;
        this.canvas.onmousedown = null;
        this.canvas.onmouseup = null;
    }
}