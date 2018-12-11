import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Subscription } from 'rxjs';
import { AlertService } from '../services/alert.service';


@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.less']
})
export class AlertComponent implements OnDestroy, OnInit {
  private subscription: Subscription
  
  constructor(
    public snackBar: MatSnackBar,
    private alertService: AlertService
    ) { 
  }

  ngOnInit() {
   this.getAlerts();
  }
  public getAlerts() {
    this.subscription = this.alertService.subject.subscribe(message => {
      console.log(message)
      if (message) {
        this.snackBar.open(message, 'Close', {
          duration: 4000
        });
      }
    })
  }
  ngOnDestroy() {
    //this.subscription.unsubscribe();
  }

}
