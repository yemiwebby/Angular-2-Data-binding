import { Component, Output, EventEmitter } from '@angular/core';
import { User } from '../shared/models/user'

@Component({
    moduleId: module.id,
    selector: 'user-form',
    templateUrl: 'user-form.component.html',
    styles: [`
    form {
        background: #f2f2f2;
        padding: 10px;
        margin-bottom: 30px;
    }
    `] 
})

export class UserFormComponent{
@Output() userCreated = new EventEmitter();

newUser: User = new User();
active: boolean = true;

onSubmit(){
    // show the event that the user was created
    this.userCreated.emit({user: this.newUser });

    this.newUser = new User();
    this.active = false;
    setTimeout(() => this.active = true, 0);
}
}