import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MainPageComponent, CannotAccessPageComponent } from './components';


const routes: Route[] = [
    {
    path: '',
    component: AppComponent,
    pathMatch: 'full', 
  },
   {
    path: 'dashboard/:id',
     component: MainPageComponent,
  },
   {
    path: 'access-denied',
     component: CannotAccessPageComponent,
     pathMatch: 'full', 
  },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
