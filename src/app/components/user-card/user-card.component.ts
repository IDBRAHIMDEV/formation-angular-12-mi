import { User } from './../../models/user';
import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input() user: User | null = null
  @Output() delete = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  destroyUser() {
    this.delete.emit({message: 'Dad please i want delete this user', id: this.user?.id})
  }

}
