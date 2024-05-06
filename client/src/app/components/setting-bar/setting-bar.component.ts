import { Component, inject } from "@angular/core";
import { ToolService } from "src/app/state/tool-state";

@Component({
  selector: 'app-setting-bar',
  templateUrl: './setting-bar.component.html',
  styleUrls: ['./setting-bar.component.scss']
})
export class SettingBarComponent {

  private toolState = inject(ToolService)

  constructor() { }

  setLineWidth(e: any) {
    if (e) this.toolState.setLineWidth(e?.target?.value);
  }

  setLineColor(e: any) {
    if(e) this.toolState.setStrokeColor(e?.target?.value)
  }
}
