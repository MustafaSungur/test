import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card5',
  imports: [],
  templateUrl: './card5.component.html',
  styleUrl: './card5.component.scss',
})
export class Card5Component {
  @Input() imageUrl: string = '';
  @Input() name: string = '';
  @Input() role: string = '';
  @Input() email: string = '';
  @Input() phone: string = '';
}
