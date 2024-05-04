import { Component, OnInit } from '@angular/core';
import { BUTTONS_LIST } from 'src/app/models/button-list';
import { ButtonType } from 'src/app/types/toolbar-button-types';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  readonly buttonsList = BUTTONS_LIST;
  buttonTypes = ButtonType;

  constructor() { }

  ngOnInit(): void {
  }

}
