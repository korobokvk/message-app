import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagePageComponent } from './message-page.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: MessagePageComponent},
  { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  declarations: [MessagePageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MessagePageModule { }
