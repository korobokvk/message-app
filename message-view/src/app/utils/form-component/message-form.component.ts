import { Component, OnInit, Input, OnDestroy, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RestService } from '../services/rest.service';
import { Observable, Subscription } from 'rxjs';
import * as _ from 'lodash';


@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.less']
})
export class MessageFormComponent implements OnInit, OnDestroy {
  public messageForm: FormGroup;
  private create: Subscription;
  private update: Subscription;
  @Input() messageData: any;
  @ViewChild('f') myForm;
  constructor(private restService: RestService) {
   }
  
  ngOnInit() {
    if(this.messageData) {
        this.initForm(this.messageData.title, this.messageData.message)
    } else {
      this.initForm();
    }
  }
  initForm(title?: string, message?: string) {
    this.messageForm = new FormGroup({
      "title": new FormControl(title, [Validators.required, Validators.maxLength(15)]),
      "message": new FormControl(message, Validators.required)
    });
  };
  edit(data) {
    this.update = this.restService.updateMessage(data.value, this.messageData._id).subscribe(responce => {
      this.restService.editSubject.next(responce);
    });
  }
  submit() {
    if(this.messageForm.valid) {
      this.create = this.restService.createMessage(_.get(this.messageForm, 'value')).subscribe(responce => {
        if(_.get(responce, 'status', void 0) === 200) {
          this.myForm.resetForm();
        } 
      });
    }
  
  };

  ngOnDestroy() {
    this.create ? this.create.unsubscribe() : undefined;
    this.update ? this.update.unsubscribe() : undefined;
  }

}
