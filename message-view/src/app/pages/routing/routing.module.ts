import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'register', loadChildren: '../registration/registration.module#RegistrationModule'},
  { path: 'login', loadChildren: '../login/login.module#LoginModule'},
  { path: 'main', loadChildren: '../main-page/main-page.module#MainPageModule' },
  { path: 'messages', loadChildren: '../message-page/message-page.module#MessagePageModule' },
  { path: '**', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
