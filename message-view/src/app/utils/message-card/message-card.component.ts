import { Component, OnInit, OnDestroy } from '@angular/core';
import { RestService } from '../services/rest.service';
import { MessageModalComponent } from '../message-modal/message-modal.component';
import { IMessage } from '../models/models';
import { MatDialog } from '@angular/material/dialog';
import * as _ from 'lodash';
import { Subscription } from 'rxjs';




@Component({
  selector: 'app-message-card',
  templateUrl: './message-card.component.html',
  styleUrls: ['./message-card.component.less']
})
export class MessageCardComponent implements OnInit, OnDestroy {
  public messages: Array<IMessage>;
  private interval: Subscription;
  private delete: Subscription;
  constructor(private restService: RestService, public dialog: MatDialog) {

  }

  openDialog(content: IMessage) {
    const dialogRef = this.dialog.open(MessageModalComponent, {
      width: '400px',
      data: content
    });

    dialogRef.afterClosed().subscribe(result => {
    })
  };



  ngOnInit() {
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
  }

  getMessage() {
    this.restService.getMessages().subscribe(data => {
      this.messages = data;
    });
  }

  ngOnDestroy() {
    this.interval ? this.interval.unsubscribe(): null;
    this.delete ? this.delete.unsubscribe() : null;
  }
}
