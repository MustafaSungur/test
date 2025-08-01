import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AileHekimiDemoComponent } from './features/test-pages/aile-hekimi-demo/aile-hekimi-demo.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, AileHekimiDemoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'upate_test';
}
