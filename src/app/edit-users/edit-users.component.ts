/**
 * This EDIT-USERS component:
 * let you add or remove users from the array in dashboard.
 */

import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.css']
})
export class EditUsersComponent implements OnInit {

  // Sends data with EventEmitter to the parent (dashboard)

  @Output() addUser = new EventEmitter<string>();
  @Output() removeUser = new EventEmitter<void>();

  user: string = ''; 

  constructor() { }

  ngOnInit() {
  }

  /**
   * @desc if - Makes sure that you can't send an empty value/user
   *            Sends an event to the parent (dashboard) and add the user in the array
   *            Resets the input after sending
   */
  onClickAdd(): void {
    if (this.user !== '') {
      this.addUser.emit(this.user);
      //this.user = '';
      console.log(this.user);
    }
  }

  // Sends an event to a function that delete a user from the array

  onClickRemove() {
    this.removeUser.emit();
  }

}
