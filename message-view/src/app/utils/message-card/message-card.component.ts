import { Component, OnInit } from '@angular/core';
import { RestService } from '../services/rest.service';

interface Message { 
  id: string,
  title: string,
  message: string
};

@Component({
  selector: 'app-message-card',
  templateUrl: './message-card.component.html',
  styleUrls: ['./message-card.component.less']
})
export class MessageCardComponent implements OnInit {
  public messages: Array<Message>;

  constructor(private restService: RestService) {
    this.restService.secondInterval.subscribe(() => {
      this.getMessage();
    });
  
  }

  ngOnInit() {
    this.getMessage();
  }

  getMessage() {
    this.restService.getMessages().subscribe(data => {
      this.messages = data;
    })
  }

 
}
