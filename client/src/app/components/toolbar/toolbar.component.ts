import { NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { BUTTONS_LIST } from 'src/app/models/button-list';
import { CanvasService } from 'src/app/services';
import { CanvasState, ToolService } from 'src/app/state';
import { Brush, Rect, Circle, Line, Eraser } from 'src/app/tools';
import { ButtonType, ToolbarButtons } from 'src/app/types/toolbar-button-types';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  standalone: true,
  imports: [NgIf, NgFor]
})
export class ToolbarComponent {
  readonly buttonsList = BUTTONS_LIST;
  buttonTypes = ButtonType;

  private CanvasState = inject(CanvasState);
  private toolService = inject(ToolService);
  private canvasService = inject(CanvasService)

  constructor() { }

  setTool(button: any) {
    const canvas = this.CanvasState.getCanvas();
    switch (button.name) {
      case ToolbarButtons.BRUSH:
        this.toolService.setTool(new Brush(canvas));
        break;
       case ToolbarButtons.RECT:
        this.toolService.setTool(new Rect(canvas));
        break;
      case ToolbarButtons.CIRCLE:
        this.toolService.setTool(new Circle(canvas));
        break;
      case ToolbarButtons.LINE:
        this.toolService.setTool(new Line(canvas));
        break;
      case ToolbarButtons.ERASER:
        this.toolService.setTool(new Eraser(canvas));
        break;
      case ToolbarButtons.UNDO:
        this.canvasService.undo();
        break;
       case ToolbarButtons.REDO:
        this.canvasService.redo();
        break;
       case ToolbarButtons.SAVE:
        console.log(this.CanvasState.getCanvas());
        break;
    }
  }

  setColor(e: any) {
    if (e) {
      this.toolService.setStrokeColor(e.target.value);
      this.toolService.setFillColor(e.target.value);
    }
  }

}
