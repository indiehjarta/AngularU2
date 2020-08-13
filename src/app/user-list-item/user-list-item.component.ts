/**
 *  This USER-LIST-ITEM component:
 *  is a child to USERS-LIST.
 *  receives a user with NgFor
 *  receives and sets value for the input textColor
 */

import { Component, OnInit, Input } from '@angular/core';

/**
 * @input user - Receives a user from the array with NgFor
 * @input textColor - Receives and sets value 
 */

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.css']
})
export class UserListItemComponent implements OnInit {

  @Input() user: any;
  @Input() textColor: boolean;

  constructor() { }

  ngOnInit() { 
  }

}
