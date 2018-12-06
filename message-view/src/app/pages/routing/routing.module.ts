import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { MainPageModule } from '../main-page/main-page.module'
const routes: Routes = [
  { path: 'main', loadChildren: '../main-page/main-page.module#MainPageModule' },
  { path: 'messages', loadChildren: '../message-page/message-page.module#MessagePageModule' },
  { path: '**', redirectTo: 'main', pathMatch: 'full' }
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
