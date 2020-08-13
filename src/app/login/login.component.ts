/** 
 * An template-driven form allows users to login/logout and handles validation.
 */

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AdminLogin } from '../models/admin-login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: AdminLogin = new AdminLogin('', '');

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  // Checks with AuthService if logged in or not. 
  // Displays two different screens depending on it's state.
  checkIfLoggedIn() {
    return this.authService.checkIfLoggedIn();
  }

  // Calls the function from AuthService to log in user.
  login() {
    this.authService.login(this.model);
  }

  // Calls the function from AuthService to log out user.
  logout() {
    this.authService.logout();
  }

}
