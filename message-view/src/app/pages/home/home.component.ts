import { Component, OnInit } from '@angular/core';
import { IUsers } from '../../utils/models/models';
import { AuthenticationService } from '../../utils/services/authentication.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  currentUser: IUsers;
 
  constructor(private authService: AuthenticationService) {
    this.checkIfAuth()

   }

  ngOnInit() {
    this.authService.subject.subscribe(async data => {
      this.currentUser = await data;
  })
 }

  checkIfAuth() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }


}
