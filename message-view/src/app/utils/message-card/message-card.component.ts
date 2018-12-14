import { Component, OnInit, OnDestroy } from '@angular/core';

import { RestService } from '../services/rest.service';
import { AlertService } from '../services/alert.service';
import { MessageModalComponent } from '../message-modal/message-modal.component';
import { IMessage } from '../models/models';

import { MatDialog } from '@angular/material/dialog';
import { MatIconRegistry } from '@angular/material';

import { DomSanitizer } from '@angular/platform-browser';

import * as _ from 'lodash';
import { Subscription } from 'rxjs';




@Component({
  selector: 'app-message-card',
  templateUrl: './message-card.component.html',
  styleUrls: ['./message-card.component.less']
})
export class MessageCardComponent implements OnInit, OnDestroy {
  public messages: Array<IMessage>;
  public currentUser: IMessage;
  public showButtons: boolean = false;
  private interval: Subscription;
  private delete: Subscription;
  constructor(
    private restService: RestService, 
    public dialog: MatDialog,
    private alertService: AlertService,
    private sanitizer: DomSanitizer,
    private iconRegistry: MatIconRegistry) {

      iconRegistry.addSvgIcon(
        'edit',
        sanitizer.bypassSecurityTrustResourceUrl('assets/baseline-edit.svg'));
      iconRegistry.addSvgIcon(
        'delete',
        sanitizer.bypassSecurityTrustResourceUrl('assets/baseline-delete_forever.svg'));

  }

  openDialog(content: IMessage) {
    console.log(content)
     this.dialog.open(MessageModalComponent, {
        width: '400px',
        data: content
      });
    
    

    // dialogRef.afterClosed().subscribe(result => {
    // })
  };



  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.getMessage();
    this.interval = this.restService.secondInterval.subscribe(() => {
      this.getMessage();
    });
    this.restService.editSubject.subscribe(message => {
      if(message) {
       const index = _.findIndex(this.messages, (msg) => {
          return msg._id === message._id
        });

        index >= 0 ? this.messages[index] = message : null;
      }
    });
  };

  deleteMessage(message) {
    this.delete = this.restService.deleteMessage(message).subscribe(responce => {
      responce === 'success'? this.getMessage() : void 0
    })
  };

  getMessage() {
    this.restService.getMessages().subscribe(data => {
      this.messages = data;
    });
  };

  switchButtonState() {
    this.showButtons = !this.showButtons;
  }

  ngOnDestroy() {
    this.interval ? this.interval.unsubscribe(): null;
    this.delete ? this.delete.unsubscribe() : null;
  }
}
