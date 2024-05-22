import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-info-toast',
  standalone: true,
  imports: [],
  templateUrl: './info-toast.component.html',
  styleUrl: './info-toast.component.scss'
})
export class InfoToastComponent {
  @Input() user: string = '';
  @Input() visible = false;
}
