import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserService } from 'src/app/services';

@Component({
  selector: 'app-cannot-access-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cannot-access-page.component.html',
  styleUrl: './cannot-access-page.component.scss'
})
export class CannotAccessPageComponent {
}