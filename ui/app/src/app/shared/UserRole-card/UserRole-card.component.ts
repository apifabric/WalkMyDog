import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './UserRole-card.component.html',
  styleUrls: ['./UserRole-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.UserRole-card]': 'true'
  }
})

export class UserRoleCardComponent {


}