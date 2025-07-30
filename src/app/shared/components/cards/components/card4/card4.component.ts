import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card4',
  imports: [],
  templateUrl: './card4.component.html',
  styleUrl: './card4.component.scss',
})
export class Card4Component {
  @Input() title: string = '';
  @Input() description: string = '';

  constructor() {}
}
