import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabManagementService } from '../../../tabs/services/tab-management.service';

// Sağ sidebar'daki Patient interface'ini buraya da alabiliriz
export interface Patient {
  id: number;
  name: string;
  status: 'Bekliyor' | 'İçeride';
}

@Component({
  selector: 'app-patient-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './patient-list.component.html',
})
export class PatientListComponent {
  patients: Patient[] = [
    { id: 101, name: 'Ahmet Yılmaz', status: 'Bekliyor' },
    { id: 102, name: 'Fatma Kaya', status: 'Bekliyor' },
    { id: 103, name: 'Mehmet Çelik', status: 'İçeride' },
    { id: 104, name: 'Ayşe Demir', status: 'Bekliyor' },
  ];

  constructor(private tabService: TabManagementService) {}

  /**
   * Bir hastaya çift tıklandığında TabManagementService aracılığıyla yeni bir sekme açar.
   * @param patient Tıklanan hasta nesnesi
   */
  openPatientTab(patient: Patient): void {
    this.tabService.addTab({
      label: patient.name,
      route: `/patients/${patient.id}`,
    });
  }
}
