import { Routes } from '@angular/router';
import { CardButtonComponent } from './features/test-pages/card-button/card-button.component';
import { SidebarHeaderComponent } from './features/test-pages/sidebar-header/sidebar-header.component';
import { AileHekimiDemoComponent } from './features/test-pages/aile-hekimi-demo/aile-hekimi-demo.component';
import { PatientListComponent } from './features/patientList/components/patient-list/patient-list.component';
import { PatientDetailComponent } from './features/patientDetail/components/patient-detail/patient-detail.component';

// export const routes: Routes = [
//   { path: '', pathMatch: 'full', redirectTo: 'home' },
//   { path: 'home', component: CardButtonComponent },
//   { path: 'sidebar-header', component: SidebarHeaderComponent },
//   { path: 'demo', component: AileHekimiDemoComponent },
//   // Tüm bilinmeyen rotalar için
// ];
// src/app/app.routes.ts

export const routes: Routes = [
  // Ana sayfa, otomatik olarak /patients adresine yönlendirilsin
  { path: '', redirectTo: 'patients', pathMatch: 'full' },

  // Hasta listesi sayfası
  { path: 'patients', component: PatientListComponent },

  // ID parametresi alan hasta detay sayfası
  { path: 'patients/:id', component: PatientDetailComponent },

  // Diğer route'larınız buraya gelebilir
  // { path: 'analiz', component: AnalizComponent },

  // Eşleşmeyen tüm yollar için yönlendirme (opsiyonel)
  { path: '**', redirectTo: 'patients' },
];
