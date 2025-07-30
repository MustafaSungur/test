// src/app/card2/card2.component.ts

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card2', // HTML'de <app-card2> olarak kullanacağız
  templateUrl: './card2.component.html',
  styleUrls: ['./card2.component.scss'],
})
export class Card2Component {
  // @Input() dekoratörü bu özelliklerin dışarıdan (üst bileşenden)
  // değer almasını sağlar.
  @Input() imageUrl: string = '';
  @Input() category: string = '';
  @Input() title: string = '';
  @Input() description: string = '';

  constructor() {}
}
