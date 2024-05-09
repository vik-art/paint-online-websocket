import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private router = inject(Router);
  
  ngOnInit(): void {
   this.router.navigate(['/dashboard/', this.getId() ]);
  }

  getId(): string {
    return `/${(+new Date()).toString(16)}`
  }
}
