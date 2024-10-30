import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Dog-card.component.html',
  styleUrls: ['./Dog-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Dog-card]': 'true'
  }
})

export class DogCardComponent {


}