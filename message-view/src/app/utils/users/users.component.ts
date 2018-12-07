import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.less']
})
export class UsersComponent implements OnInit {
  public userForm: FormGroup;
  public buttonTitle: string;
  @Input() authorisationState: string;
  @ViewChild('f') myForm;
  constructor() { }
  initForm() {
    this.userForm = new FormGroup({
      "email": new FormControl(null, [Validators.required, Validators.email]),
      "password": new FormControl(null, Validators.required)
    });
  };
  ngOnInit() {
    this.buttonTitle = this.authorisationState;
    this.initForm();
  }

}
