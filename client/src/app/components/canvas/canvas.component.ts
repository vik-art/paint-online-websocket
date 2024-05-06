import { AfterViewInit, Component, ElementRef, ViewChild, inject } from "@angular/core";
import { CanvasService } from "src/app/state/canvas-state";
import { ToolService } from "src/app/state/tool-state";
import { Brush } from "src/app/tools/brush";


@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements AfterViewInit {
  @ViewChild('canvas',  { read: ElementRef }) canvas?: ElementRef<HTMLInputElement>;
  private canvasService = inject(CanvasService);
  private toolService = inject(ToolService)

  constructor() { }
  
  ngAfterViewInit(): void {
    this.canvasService.setCanvas(this.canvas);
    this.toolService.setTool(new Brush(this.canvas?.nativeElement))
  }

}
