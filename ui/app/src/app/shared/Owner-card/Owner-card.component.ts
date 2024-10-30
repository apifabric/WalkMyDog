import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Owner-card.component.html',
  styleUrls: ['./Owner-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Owner-card]': 'true'
  }
})

export class OwnerCardComponent {


}