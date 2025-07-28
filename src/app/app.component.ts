import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { KarmedCardCategoryComponent } from './shared/components/cards/components/karmed-card-category/karmed-card-category.component';

@Component({
  selector: 'app-root',
  imports: [KarmedCardCategoryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'upate_test';
}
