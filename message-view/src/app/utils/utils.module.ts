import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppMaterialModule } from '../app-material-module/app-material.module'

import { MessageFormComponent } from './form-component/message-form.component';
import { MessageCardComponent } from './message-card/message-card.component';
import { MessageModalComponent } from './message-modal/message-modal.component';
import { UsersComponent } from './users/users.component';
import { AlertComponent } from './alert/alert.component';

import { ErorrInterception, ErrorInterceptorProvider } from './services/erorr.interceptor';
import { JwtInterceptor, JwtInterceptorProvider } from './services/jwt.interceptor';



@NgModule({
  declarations: [MessageFormComponent, MessageCardComponent, MessageModalComponent, UsersComponent, AlertComponent],
  entryComponents: [MessageModalComponent],
  imports: [
    CommonModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    ],
  providers: [
    HttpClientModule,
    ErrorInterceptorProvider,
    JwtInterceptorProvider
    ],
  exports: [
    MessageFormComponent,
    MessageCardComponent,
    MessageModalComponent,
    UsersComponent,
    HttpClientModule,
    AppMaterialModule,
    AlertComponent
    ]
})
export class UtilsModule { }
