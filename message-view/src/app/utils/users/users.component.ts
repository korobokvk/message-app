import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Route } from '@angular/router';

import { AlertService } from '../services/alert.service';
import { AuthenticationService } from '../services/authentication.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.less']
})
export class UsersComponent implements OnInit {
  public userForm: FormGroup;
  public buttonTitle: string;
  @Input() authorisationState: boolean;
  @ViewChild('f') myForm;
  loading: boolean = false;
  returnUrl: string;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthenticationService,
    private alertService: AlertService,
    private userService: UserService
  ) { }

  initForm() {
    this.userForm = new FormGroup({
      "username": new FormControl(null, [Validators.required, Validators.email]),
      "password": new FormControl(null, Validators.required)
    });
  };
  ngOnInit() {
    this.authService.logout();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    /**
     * If authorisationState is exist - register user if doesn't - login user
     */
    this.buttonTitle = this.authorisationState ? 'Sign Up' : 'Sign In';
    this.initForm();
  };

  login() {
    console.log(this.userForm)
    this.loading = true;
    this.authService.login(this.userForm.value.username, this.userForm.value.password).subscribe(data => {
      console.log(this.returnUrl)
      this.router.navigate([this.returnUrl]);
    }, error => {
      this.alertService.error(error);
      this.loading = false;
    })
  }
  register() {
    this.loading = true;
    this.userService.create(this.userForm.value).subscribe(data => {
                this.alertService.success('Registration successful', true);
                this.router.navigate(['/login']);
            },
            error => {
                this.alertService.error(error);
                this.loading = false;
            });
  }


}
