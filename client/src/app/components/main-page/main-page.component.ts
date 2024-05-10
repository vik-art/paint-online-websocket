import { Component, OnInit, inject } from '@angular/core';
import { CanvasComponent } from '../canvas/canvas.component';
import { SettingBarComponent } from '../setting-bar/setting-bar.component';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { UserService } from 'src/app/services';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CanvasComponent, SettingBarComponent, ToolbarComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent implements OnInit {
  private userService = inject(UserService);
  private activatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    this.connectWebSockets()
  }

  connectWebSockets() {
    const routeId = this.activatedRoute.snapshot.params['id'];
    const userName = this.userService.user()
    const socket = new WebSocket('ws://localhost:7000/');
    socket.onopen = () => {
      console.log('connection started')
      socket.send(JSON.stringify({
        id: routeId,
        userName,
        method: 'connection'
      }));
    }
    socket.onmessage = (event) => {
      const user = JSON.parse(event.data);
        console.log(`User ${user.userName} was connected`);
      }
  }
}
