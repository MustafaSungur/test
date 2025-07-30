import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card3',
  imports: [],
  templateUrl: './card3.component.html',
  styleUrl: './card3.component.scss',
})
export class Card3Component {
  @Input() imageUrl: string = '';
  @Input() name: string = '';
  @Input() role: string = '';
  @Input() email: string = '';
  @Input() phone: string = '';

  constructor() {}
}
