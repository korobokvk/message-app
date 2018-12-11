import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../utils/guard/auth-guard.guard';

const routes: Routes = [
  { path: 'register', loadChildren: '../registration/registration.module#RegistrationModule'},
  { path: 'login', loadChildren: '../login/login.module#LoginModule'},
  { path: 'main', loadChildren: '../main-page/main-page.module#MainPageModule', canActivate: [AuthGuard] },
  { path: 'messages', loadChildren: '../message-page/message-page.module#MessagePageModule', canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'main', pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule,
  ]
})
export class RoutingModule { }
