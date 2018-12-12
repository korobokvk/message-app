import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar, mixinColor } from '@angular/material';
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
    this.subscription = this.alertService.getMessage().subscribe(message => {
      if (message) {
        this.snackBar.open(message.text, 'Close', {
          duration: 4000,
          panelClass: message.type === 'error' ? ['red-snackbar'] : ['green-snack']
        });
      }
    })  
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
