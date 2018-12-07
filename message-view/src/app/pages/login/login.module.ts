import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule, Routes } from '@angular/router';
import { AppMaterialModule } from '../../app-material-module/app-material.module';
import { UtilsModule } from '../../utils/utils.module';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: '**', redirectTo: '', pathMatch: 'full'}
];
@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UtilsModule
  ],
  exports: [RouterModule]
})
export class LoginModule { }
