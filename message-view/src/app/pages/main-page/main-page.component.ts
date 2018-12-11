import { Component, OnInit } from '@angular/core';
import { IUsers } from '../../utils/models/models';
import { UserService } from '../../utils/services/user.service'; 

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.less']
})
export class MainPageComponent implements OnInit {
  currentUser: IUsers;
  users: IUsers[] = new Array();
  constructor(private userService: UserService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
   }
  
   ngOnInit() {
    this.loadAllUsers();
  }

  deleteUser(_id: string) {
    this.userService.delete(_id).subscribe(() => {
      this.loadAllUsers()
    })
  };

  private loadAllUsers() {
    this.userService.getAll().subscribe(users => { this.users = users; })
 }

}
