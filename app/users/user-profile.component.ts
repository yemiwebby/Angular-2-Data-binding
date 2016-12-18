import { Component, Input } from '@angular/core'
import { User } from '../shared/models/user'


@Component({
    moduleId: module.id,
    selector: 'user-profile',
    templateUrl: 'user-profile.component.html',
    styles:[`
      .jumbotron .glyphicon {
          font-size: 80px;
      }
    `]
})

export class UserProfileComponent{
    @Input() user: User
}