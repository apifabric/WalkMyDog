import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './WalkerRate-card.component.html',
  styleUrls: ['./WalkerRate-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.WalkerRate-card]': 'true'
  }
})

export class WalkerRateCardComponent {


}