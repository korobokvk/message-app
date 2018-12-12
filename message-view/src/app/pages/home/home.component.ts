import { Component, OnInit, OnDestroy } from '@angular/core';
import { IUsers } from '../../utils/models/models';
import { AuthenticationService } from '../../utils/services/authentication.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit, OnDestroy {
  currentUser: IUsers;
  private subscriber: Subscription;
  constructor(private authService: AuthenticationService) {
    this.checkIfAuth()

   }

  ngOnInit() {
    this.subscriber = this.authService.subject.subscribe(async data => {
      this.currentUser = await data;
    });
  };

  checkIfAuth() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  };

  ngOnDestroy() {
    this.subscriber.unsubscribe();
  };

}
