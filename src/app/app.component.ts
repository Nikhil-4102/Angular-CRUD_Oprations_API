import { Component } from '@angular/core';

import { UsersService } from './service/users.service';
import { User } from './interfaces/User';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Angular-CRUD_Oprations_API';

  users: User[] = [];

  selectedUser: User | undefined;

  constructor(private userService: UsersService) {}
  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe((data: User[]) => {
      this.users = data;
      console.log(this.users);
    });
  }

  addUser(user: User) {
    if (!this.selectedUser) {
      this.userService.saveUsers(user).subscribe((data: User) => {
        if (data) {
          this.getUsers();
        }
        console.log(data);
      });
    } else {

        const userData = {...user,id:this.selectedUser.id}

      console.log('Upadate user here ', user);

      this.userService.updateUser(userData).subscribe((data: User) => {
        if (data) {
          this.getUsers();
        }
      });
    }
  }

  deleteUser(id: string) {
    this.userService.deleteUser(id).subscribe((data: User) => {
      if (data) {
        this.getUsers();
      }
    });
  }

  selectUser(id: string) {
    this.userService.getSelectedUser(id).subscribe((data: User) => {
      this.selectedUser = data;
    });
    console.log(id);
  }
}
