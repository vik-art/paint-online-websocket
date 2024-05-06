import { Brush } from './brush';

export class Eraser extends Brush {

  constructor(canvas: any) {
    super(canvas);
  }

    override draw(x: number, y: number) {
        if (this.ctx) {
            this.ctx.strokeStyle = "white";
            this.ctx.lineTo(x, y);
            this.ctx?.stroke();
        }
  }
}
