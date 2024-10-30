import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './SystemLog-card.component.html',
  styleUrls: ['./SystemLog-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.SystemLog-card]': 'true'
  }
})

export class SystemLogCardComponent {


}