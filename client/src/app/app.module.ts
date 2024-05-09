import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { GreetModalWindowComponent } from './components/greet-modal-window/greet-modal-window.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    GreetModalWindowComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
