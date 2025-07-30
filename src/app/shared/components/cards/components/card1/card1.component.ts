import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card1',
  imports: [],
  templateUrl: './card1.component.html',
  styleUrl: './card1.component.scss',
})
export class Card1Component {
  @Input() imageUrl: string = '';
  @Input() title: string = '';
  @Input() description: string = '';

  constructor() {}
}
