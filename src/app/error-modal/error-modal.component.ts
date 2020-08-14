/**
 * Opens a modal who gives visual feedback for invalid fields.
 */

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-error-modal',
  templateUrl: './error-modal.component.html',
  styleUrls: ['./error-modal.component.css']
})
export class ErrorModalComponent implements OnInit {

  @Input() error: string;

  constructor() { }

  ngOnInit(): void {
  }

}
