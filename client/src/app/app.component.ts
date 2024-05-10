import { Component, OnInit, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private router = inject(Router);
  private userService = inject(UserService)
  showModal = signal(false);

  ngOnInit(): void {
    this.showModal.set(true)
  }

  getId(): string {
    return (+new Date()).toString(16);
  }

  hideModal() {
    this.showModal.set(false);
    this.router.navigate(['/access-denied' ])
  }

  saveUserName(e: string) {
    if (!e) return;
    this.userService.setUser(e);
    this.showModal.set(false);
    this.router.navigate(['/dashboard/', this.getId() ]);
  }
}
