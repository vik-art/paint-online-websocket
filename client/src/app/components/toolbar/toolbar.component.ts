import { Component, OnInit } from '@angular/core';
import { BUTTONS_LIST } from 'src/app/models/button-list';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  readonly buttonsList = BUTTONS_LIST;

  constructor() { }

  ngOnInit(): void {
  }

}
