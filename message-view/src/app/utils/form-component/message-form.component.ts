import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RestService } from '../services/rest.service';
import * as _ from 'lodash';


@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.less']
})
export class MessageFormComponent implements OnInit {
  messageForm: FormGroup;
  constructor(private restService: RestService) {
    this.initForm();
   }
  
  ngOnInit() {
  }
  initForm() {
    this.messageForm = new FormGroup({
      "title": new FormControl(),
      "message": new FormControl()
    });
  };

  submit() {
    this.restService.createMessage(_.get(this.messageForm, 'value')).subscribe(responce => {
      _.get(responce, 'status', void 0) === 200 ? this.messageForm.reset() : null 
    });
  }

}
