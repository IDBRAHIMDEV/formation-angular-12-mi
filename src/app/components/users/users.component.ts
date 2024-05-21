import { User } from './../../models/user';

import { UsersService } from './../../services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[] = []

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
      this.getAllUser()
  }

  getAllUser() {
    this.userService.getUsers().subscribe({
      next: (data) => { this.users = data }
    })
  }

}
