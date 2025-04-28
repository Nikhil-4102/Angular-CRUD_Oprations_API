import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsersService } from './service/users.service';
import { User } from './interfaces/User';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet , FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-CRUD_Oprations_API';

  users: User[] = [];
  constructor(private userService:UsersService) { 

  }
  ngOnInit(){
    this.getUsers()
  }

  getUsers(){
    this.userService.getUsers().subscribe((data:User[]) => {
      this.users = data;
      console.log(this.users);
     })
  }

  addUser(user:User){

    this.userService.saveUsers(user).subscribe((data:User) => {
      if(data){
        this.getUsers
      }
      console.log(data)
    })

  }  
}
