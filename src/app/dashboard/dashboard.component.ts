import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // Array with the 'users' from JSON placeholder.
  userList: Object[] = [];

  constructor(private authService: AuthService, private usersService: UsersService) { }

  ngOnInit() {
    this.getUsers();
  }

  // Fetching users from UsersService and puts in the array.
  getUsers() {
    this.usersService.getUsers()
      .subscribe(users => this.userList = users);
  }

  //  Checks with AuthService if logged in or not.
  checkIfLoggedIn() {
    return this.authService.checkIfLoggedIn();
  }

  // Adds a new user in the array with Output from edit-users.
  addUser(user: string) {
    this.userList.unshift(user);
  }

  // Deletes an user from the array.
  removeUser() {
    this.userList.pop();
  }

}
