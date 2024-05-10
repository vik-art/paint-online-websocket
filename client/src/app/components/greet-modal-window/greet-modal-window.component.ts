import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

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
  name = new FormControl<string>('', [Validators.required, Validators.minLength(3)]);
  @Input() visible?: boolean;
  @Output() hideModal = new EventEmitter<boolean>()

  closeModal() {
    this.visible = true;
    this.hideModal.emit(true)
    console.log('the modal was closed')
  }
}
