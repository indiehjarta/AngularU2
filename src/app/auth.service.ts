/**
 * Service "cooperates" with the models and defines admins that existing.
 * The localStorage properties allow to save key/value pairs in a web browser.
 * Sets the key to "user" and it's value is that we send in.
 */

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AdminFull } from './models/admin-full.model';
import { AdminLogin } from './models/admin-login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedUser: string;

  // Fake backend
  public admins:AdminFull[] = [{

    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@email.com',
    password: '1234567890'
  }, {
    firstName: 'Kylie',
    lastName: 'Johnson',
    email: 'kylie.johnson@email.com',
    password: '0987654321'
  }];

  constructor(public router: Router) { }

  // Checks if localStorage has user or not. 
  // If localStorage has, you're logged in.
  checkIfLoggedIn(): boolean {
    if (localStorage.getItem('user')) {
      return true;
    } 
    return false;
  }

  // Controls if login is an existing admin from the model and if it's email and password matches.
  // Sets the localStorage for the user.
  public login(user: AdminLogin) {
    for (let i = 0; i < this.admins.length; i++) {
      if (user.email === this.admins[i].email && user.password === this.admins[i].password) {
        localStorage.setItem('user', user.email);
        this.router.navigate(['/dashboard']);
      }
    }
  }

  // Logs out the user/admin by clears the localStorage and set loggedUser to undefined.
  public logout(): void {
    localStorage.clear();
    this.loggedUser = undefined;
  }

}
