import { CommonModule, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-karmed-card-category',
  imports: [CommonModule],
  templateUrl: './karmed-card-category.component.html',
  styleUrl: './karmed-card-category.component.scss',
})
export class KarmedCardCategoryComponent {
  @Input() name!: string;
  @Input() description!: string;
  @Input() image!: string;
}
