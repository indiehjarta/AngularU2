import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AdminFull } from './models/admin-full.model';
import { AdminLogin } from './models/admin-login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedUser: string;

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

  /**
   * 
   */
  checkIfLoggedIn(): boolean {
    if (localStorage.getItem('user')) {
      return true;
    } 
    return false;
  }

  public login(user: AdminLogin) {
    for (let i = 0; i < this.admins.length; i++) {
      if (user.email === this.admins[i].email && user.password === this.admins[i].password) {
        localStorage.setItem('user', user.email);
        this.router.navigate(['/dashboard']);
      }
    }
  }

  //
  public logout(): void {
    localStorage.clear();
    this.loggedUser = undefined;
  }

}
