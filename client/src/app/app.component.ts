import { Component, OnInit, inject, signal } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private router = inject(Router);
  showModal = signal(false)

  ngOnInit(): void {
    this.showModal.set(true)
  //  this.router.navigate(['/dashboard/', this.getId() ]);
  }

  getId(): string {
    return `/${(+new Date()).toString(16)}`
  }
}
