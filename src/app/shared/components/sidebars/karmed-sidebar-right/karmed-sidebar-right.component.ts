// karmed-sidebar-right.component.ts

import { FormsModule } from '@angular/forms';
import { NgClass, NgFor, NgIf } from '@angular/common'; // NgIf'i de ekliyoruz
import { Component, EventEmitter, Input, Output } from '@angular/core';

// Hasta verisi için bir interface tanımlamak iyi bir pratiktir
export interface Patient {
  id: number;
  name: string;
  status: 'Bekliyor' | 'İçeride'; // Örnek bir durum alanı ekleyelim
}

@Component({
  selector: 'app-karmed-sidebar-right',
  // imports dizisine FormsModule ve NgIf eklenir
  imports: [NgClass, NgFor, FormsModule, NgIf],
  templateUrl: './karmed-sidebar-right.component.html',
  styleUrl: './karmed-sidebar-right.component.css',
})
export class KarmedSidebarRightComponent {
  @Input() isOpen = false;
  @Output() closeRequest = new EventEmitter<void>();

  searchTerm = '';

  // Veri yapısını yeni interface'imize göre güncelliyoruz
  allPatients: Patient[] = [
    { id: 101, name: 'Ahmet Yılmaz', status: 'Bekliyor' },
    { id: 102, name: 'Fatma Kaya', status: 'Bekliyor' },
    { id: 103, name: 'Mehmet Çelik', status: 'İçeride' },
    { id: 104, name: 'Ayşe Demir', status: 'Bekliyor' },
    { id: 105, name: 'Mustafa Arslan', status: 'Bekliyor' },
    { id: 106, name: 'Zeynep Öztürk', status: 'Bekliyor' },
    { id: 107, name: 'Ali Can', status: 'Bekliyor' },
    { id: 108, name: 'Elif Şahin', status: 'İçeride' },
    { id: 109, name: 'Hasan Vural', status: 'Bekliyor' },
    { id: 110, name: 'Merve Aydın', status: 'Bekliyor' },
    { id: 108, name: 'Elif Şahin', status: 'İçeride' },
    { id: 109, name: 'Hasan Vural', status: 'Bekliyor' },
    { id: 110, name: 'Merve Aydın', status: 'Bekliyor' },
    { id: 110, name: 'Merve Aydın', status: 'Bekliyor' },
    { id: 108, name: 'Elif Şahin', status: 'İçeride' },
    { id: 109, name: 'Hasan Vural', status: 'Bekliyor' },
    { id: 110, name: 'Merve Aydın', status: 'Bekliyor' },
  ];

  announcements: string[] = [
    "Sistem bakımı Cuma 22:00'de yapılacaktır.",
    'Yeni raporlama özellikleri eklendi.',
    'Lütfen profil bilgilerinizi güncelleyiniz.',
  ];

  // Filtreleme mantığını nesnenin 'name' özelliğine göre güncelliyoruz
  get filteredPatients(): Patient[] {
    if (!this.searchTerm) {
      return this.allPatients;
    }
    return this.allPatients.filter((patient) =>
      patient.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  onClose(): void {
    this.closeRequest.emit();
  }
}
