import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Walk-card.component.html',
  styleUrls: ['./Walk-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Walk-card]': 'true'
  }
})

export class WalkCardComponent {


}