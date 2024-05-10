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
  canvas?: any;
  private canvasState = inject(CanvasService);
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
