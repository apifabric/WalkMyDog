import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './BusinessAdministrator-card.component.html',
  styleUrls: ['./BusinessAdministrator-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.BusinessAdministrator-card]': 'true'
  }
})

export class BusinessAdministratorCardComponent {


}