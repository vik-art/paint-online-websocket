import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-greet-modal-window',
  standalone: true,
  imports: [
    ReactiveFormsModule,
  ],
  templateUrl: './greet-modal-window.component.html',
  styleUrl: './greet-modal-window.component.scss',
})
export class GreetModalWindowComponent {
  name = new FormControl<string>('');
  @Input() visible?: boolean;

  constructor() {
    console.log('the dialog was opened')
  }
}
