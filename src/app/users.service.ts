  /**
   * Service for fetching users from JSONplaceholder, using HttpClient and RxJS.
   * Returns Observables with GET request.
   */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }
  
  // Returns all users
  public getUsers(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  // Returns a specific user from it's ID.
  public getUser(id): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/users/' + id);
  }

}