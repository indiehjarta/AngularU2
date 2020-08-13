/**
 * Displays data from a specific user you've clicked on from the user-list-item.
 */

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent implements OnInit {

  user: Object;

  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService,
    private authService: AuthService) { 
  }
  
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getUser(params.id);
    });
  }

  // Checks with AuthService if logged in or not.
  checkIfLoggedIn() {
    return this.authService.checkIfLoggedIn();
  }

  // Gets info about the user from UsersService.
  getUser(id) {
    this.usersService.getUser(id)
      .subscribe(user => this.user = user);
  }

}