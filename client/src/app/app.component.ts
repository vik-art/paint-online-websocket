import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private router = inject(Router);
  private userService = inject(UserService);
  private activatedRoute = inject(ActivatedRoute);
  showModal = signal(false);

  ngOnInit(): void {
    this.showModal.set(true);
     this.router.navigate(['/dashboard/', this.getId() ]);
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
    this.connectWebSockets();
  }

  connectWebSockets() {
    const routeId = this.activatedRoute.snapshot.params['id'];
    const userName = this.userService.user;
    console.log(userName);
    if (userName) {
      const socket = new WebSocket('ws://localhost:7000/');
      socket.onopen = () => {
        console.log('connection started');
        socket.send(
          JSON.stringify({
            id: routeId,
            userName,
            method: 'connection',
          })
        );
      };
      socket.onmessage = (event) => {
        const user = JSON.parse(event.data);
        console.log(`User ${user.userName} was connected`);
      };
    }
  }
}
