import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './WalkerAvailability-card.component.html',
  styleUrls: ['./WalkerAvailability-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.WalkerAvailability-card]': 'true'
  }
})

export class WalkerAvailabilityCardComponent {


}