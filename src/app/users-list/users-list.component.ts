import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

    /**
   * @desc Receives input with the array userList 
   *       and a boolean property to change the color when you click Toggle
   */

  @Input() users: Object[];

  textColor = true;

  constructor() { }

  ngOnInit() {
  }

  // Sends true/false to the child user-list-item to ngClass
  onClickToggle() {
    this.textColor = !this.textColor;
  }

}
