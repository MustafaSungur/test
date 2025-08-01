// src/app/card2/card2.component.ts

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-karmed-card-article-summary', // HTML'de <app-card2> olarak kullanacağız
  templateUrl: './karmed-card-article-summary.component.html',
  styleUrls: ['./karmed-card-article-summary.component.scss'],
})
export class ArticleSummaryCard {
  @Input() imageUrl: string = '';
  @Input() category: string = '';
  @Input() title: string = '';
  @Input() description: string = '';

  constructor() {}
}
