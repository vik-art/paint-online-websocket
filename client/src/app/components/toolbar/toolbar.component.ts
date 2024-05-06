import { Component, inject } from '@angular/core';
import { BUTTONS_LIST } from 'src/app/models/button-list';
import { CanvasService } from 'src/app/state/canvas-state';
import { ToolService } from 'src/app/state/tool-state';
import { Brush } from 'src/app/tools/brush';
import { Circle } from 'src/app/tools/circle';
import { Eraser } from 'src/app/tools/eraser';
import { Rect } from 'src/app/tools/rect';
import { ButtonType, ToolbarButtons } from 'src/app/types/toolbar-button-types';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  readonly buttonsList = BUTTONS_LIST;
  buttonTypes = ButtonType;

  private canvasService = inject(CanvasService);
  private toolService = inject(ToolService)

  constructor() { }

  setTool(button: any) {
    console.log(button);
    const canvas = this.canvasService.getCanvas();
    console.log(canvas);
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
      case ToolbarButtons.ERASER:
        this.toolService.setTool(new Eraser(canvas));
        break;
    }
  }

}
