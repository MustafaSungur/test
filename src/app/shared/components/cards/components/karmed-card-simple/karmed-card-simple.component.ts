import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-karmed-card-simple',
  imports: [],
  templateUrl: './karmed-card-simple.component.html',
  styleUrl: './karmed-card-simple.component.scss',
})
export class KarmedCardSimple {
  @Input() title: string = '';
  @Input() description: string = '';

  constructor() {}
}
