import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { RouterModule, Routes } from '@angular/router';
import { UtilsModule } from '../../utils/utils.module'


const routes: Routes = [
  { path: '', component: MainPageComponent},
  { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  declarations: [MainPageComponent],
  imports: [
    CommonModule,
    UtilsModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MainPageModule { }
