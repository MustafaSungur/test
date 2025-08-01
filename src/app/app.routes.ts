import { Routes } from '@angular/router';
import { CardButtonComponent } from './features/test-pages/card-button/card-button.component';
import { SidebarHeaderComponent } from './features/test-pages/sidebar-header/sidebar-header.component';
import { AileHekimiDemoComponent } from './features/test-pages/aile-hekimi-demo/aile-hekimi-demo.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: CardButtonComponent },
  { path: 'sidebar-header', component: SidebarHeaderComponent },
  { path: 'demo', component: AileHekimiDemoComponent },
  // Tüm bilinmeyen rotalar için
];
