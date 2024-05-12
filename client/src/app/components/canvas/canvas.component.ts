import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
  inject,
} from '@angular/core';
import { CanvasService, ToolService } from 'src/app/services';
import { Brush } from 'src/app/tools/brush';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss'],
  standalone: true
})
export class CanvasComponent implements AfterViewInit {
  @ViewChild('canvas', { read: ElementRef })
  canvas?: ElementRef<HTMLCanvasElement>;
  private canvasState = inject(CanvasService);
  private toolService = inject(ToolService);
  private canvasService = inject(CanvasService)

  constructor() {}

  ngAfterViewInit(): void {
    if (this.canvas) {
      const canvas = this.canvas?.nativeElement;
      this.canvasState.setCanvas(canvas);
      this.toolService.setTool(new Brush(canvas));
    }
  }

  handleMouseUp() {
    const currentUrl = this.canvas?.nativeElement.toDataURL();
    this.canvasService.pushToUndoList(currentUrl);
    if (this.canvas) this.canvasState.setCanvas(this.canvas.nativeElement);
  }
}
