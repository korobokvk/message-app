import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagePageComponent } from './message-page.component';
import { RouterModule, Routes } from '@angular/router';
import { UtilsModule } from '../../utils/utils.module'

const routes: Routes = [
  { path: '', component: MessagePageComponent},
  { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  declarations: [MessagePageComponent],
  imports: [
    CommonModule,
    UtilsModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MessagePageModule { }
