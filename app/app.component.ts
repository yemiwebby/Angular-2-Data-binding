import { Component } from '@angular/core';
import { User } from './shared/models/user';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
})
export class AppComponent  { 

  angular = 'Basics of Angular 2 two-way data binding'; 
  
  users: User[] = [
    {id: 1, name: 'temitope', username: 'temitopsy' },
    {id: 2, name: 'Oluyemi', username: 'yemmywebby'},
    {id: 3, name: 'codez', username: 'codezyemmy'}
  ];

  activeUser: User;

  showUsers(user){
    this.activeUser = user;
    console.log(this.activeUser);
  }

  onUserCreated(event){
    console.log(event);
    this.users.push(event.user)
  }
}

