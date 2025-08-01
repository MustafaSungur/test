import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-karmed-card-image-feature',
  imports: [],
  templateUrl: './karmed-card-image-feature.component.html',
  styleUrl: './karmed-card-image-feature.component.scss',
})
export class KarmedCardImageFeature {
  @Input() imageUrl: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  constructor() {}
}
