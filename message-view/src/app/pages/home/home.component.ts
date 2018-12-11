import { Component, OnInit } from '@angular/core';
import { IUsers } from '../../utils/models/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  currentUser: IUsers;
 
  constructor() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
   }

  ngOnInit() {
  }


}
