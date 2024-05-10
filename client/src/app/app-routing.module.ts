import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MainPageComponent, CannotAccessPageComponent } from './components';
import { CanActivateUser } from './guards/permissions.service';


const routes: Route[] = [
    {
    path: '',
    component: AppComponent,
    pathMatch: 'full', 
  },
   {
    path: 'dashboard/:id',
     component: MainPageComponent,
    canActivate: [CanActivateUser]
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
