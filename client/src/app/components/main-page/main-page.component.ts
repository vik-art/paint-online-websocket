import { Component } from '@angular/core';
import { CanvasComponent } from '../canvas/canvas.component';
import { SettingBarComponent } from '../setting-bar/setting-bar.component';
import { ToolbarComponent } from '../toolbar/toolbar.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CanvasComponent, SettingBarComponent, ToolbarComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent {}
