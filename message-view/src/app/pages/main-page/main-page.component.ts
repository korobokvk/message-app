import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.less']
})
export class MainPageComponent implements OnInit {
  messageForm: FormGroup;
  constructor() {
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
    console.log(this.messageForm)
  }
}
