import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsersService } from './service/users.service';
import { User } from './interfaces/User';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-CRUD_Oprations_API';

  users: User[] = [];
  constructor(private userService:UsersService) { 

  }
  ngOnInit(){
     this.userService.getUsers().subscribe((data:User[]) => {
      this.users = data;
      console.log(this.users);
     })
  }
}
