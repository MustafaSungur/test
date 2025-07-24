import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { KarmedCardCategoryComponent } from './src/app/shared/components/cards/components/karmed-card-category/karmed-card-category.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, KarmedCardCategoryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'upate_test';
}
