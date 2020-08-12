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

  //
  checkIfLoggedIn() {
    return this.authService.checkIfLoggedIn();
  }

  //
  login() {
    this.authService.login(this.model);
  }

  //
  logout() {
    this.authService.logout();
  }

}
