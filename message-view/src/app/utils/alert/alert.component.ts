import { Component, OnInit, Input } from '@angular/core';
import {MatSnackBar} from '@angular/material';
import { Subscription } from 'rxjs';
import { AlertService } from '../services/alert.service';


@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.less']
})
export class AlertComponent implements OnInit {
  constructor(
    public snackBar: MatSnackBar,
    public alertMessage: string,
    private subscription: Subscription,
    private alertService: AlertService) { 

      this.subscription = alertService.getMessage().subscribe(message => {
        this.alertMessage = message;
        this.snackBar.open(message, 'Close', {
          duration: 4000
        });
      })
    }

  // openSnackBar() {
  //   this.snackBar.openFromComponent(SnackBar, {
  //     duration: 500,
  //   });
  // };

  ngOnInit() {
  }

}

// @Component({
//   selector: 'snack-bar',
//   templateUrl: './snack-bar.component.html'
// })
// export class SnackBar {}
