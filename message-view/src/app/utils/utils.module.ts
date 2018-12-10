import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageFormComponent } from './form-component/message-form.component';
import { AppMaterialModule } from '../app-material-module/app-material.module'
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { MessageCardComponent } from './message-card/message-card.component';
import { MessageModalComponent } from './message-modal/message-modal.component';
import { RestService } from './services/rest.service';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './users/users.component'


@NgModule({
  declarations: [MessageFormComponent, MessageCardComponent, MessageModalComponent, UsersComponent],
  entryComponents: [MessageModalComponent],
  imports: [
    CommonModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    RestService
    ],
  exports: [
    MessageFormComponent,
    MessageCardComponent,
    MessageModalComponent,
    UsersComponent,
    HttpClientModule,
    AppMaterialModule
  ]
})
export class UtilsModule { }
