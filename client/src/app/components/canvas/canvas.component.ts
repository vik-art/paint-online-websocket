import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
  inject,
} from '@angular/core';
import { CanvasService } from 'src/app/services';
import { CanvasState, ToolService } from 'src/app/state';
import { Brush } from 'src/app/tools/brush';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss'],
})
export class CanvasComponent implements AfterViewInit {
  @ViewChild('canvas', { read: ElementRef })
  canvas?: any;
  private canvasState = inject(CanvasState);
  private toolService = inject(ToolService);
  private canvasService = inject(CanvasService)

  constructor() {}

  ngAfterViewInit(): void {
    if (this.canvas) this.canvasState.setCanvas(this.canvas);
    this.toolService.setTool(new Brush(this.canvas?.nativeElement));
  }

  handleMouseUp() {
    const currentUrl = this.canvas?.nativeElement?.toDataURL();
    this.canvasService.pushToUndoList(currentUrl);
    this.canvasService.setCanvas(this.canvas);
  }
}
