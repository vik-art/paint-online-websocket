export default class Tool {
    canvas: any;
    ctx: CanvasRenderingContext2D | null;
    constructor(canvas: any) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.destroyEvents();
    }

    destroyEvents() {
         this.canvas.onmousemove = null;
        this.canvas.onmousedown = null;
        this.canvas.onmouseup = null;
    }
}