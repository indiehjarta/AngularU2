import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  /**
   * 
   */

  public getUsers(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  public getUser(id): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/users/' + id);
  }

}