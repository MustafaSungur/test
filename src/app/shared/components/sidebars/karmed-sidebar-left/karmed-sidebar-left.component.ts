// karmed-sidebar-left.component.ts

import { CommonModule, NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

interface NavItem {
  text: string;
  icon: SafeHtml;
}

@Component({
  selector: 'app-karmed-sidebar-left',
  standalone: true, // standalone olduğu varsayılarak
  imports: [NgClass, CommonModule, FormsModule],
  templateUrl: './karmed-sidebar-left.component.html',
  styleUrl: './karmed-sidebar-left.component.scss',
})
export class KarmedSidebarLeftComponent {
  @Input() isCollapsed = false;
  @Output() toggle = new EventEmitter<void>();

  activeItem = 'Gösterge Paneli';
  searchTerm = '';

  // navItems dizisinin tipini yeni interface'imize göre ayarlayalım
  navItems: NavItem[];

  // 2. DomSanitizer'ı CONSTRUCTOR İLE ENJEKTE EDİN
  constructor(private sanitizer: DomSanitizer) {
    // 3. İKONLARI GÜVENLİ OLARAK İŞARETLEYİN
    // Ham veriyi burada tanımlayıp, constructor içinde işleyerek 'navItems' dizisini dolduruyoruz.
    const rawNavItems = [
      {
        text: 'Gösterge Paneli',
        icon: `<svg class="h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>`,
      },
      {
        text: 'Analiz',
        icon: `<svg class="h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>`,
      },
      {
        text: 'Projeler',
        icon: `<svg class="h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" /></svg>`,
      },
      // ... Diğer elemanlar
      {
        text: 'Takvim',
        icon: `<svg class="h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>`,
      },
      {
        text: 'Raporlar',
        icon: `<svg class="h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>`,
      },
      {
        text: 'Ayarlar',
        icon: `<svg class="h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.096 2.572-1.065z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>`,
      },
    ];

    this.navItems = rawNavItems.map((item) => ({
      ...item,
      icon: this.sanitizer.bypassSecurityTrustHtml(item.icon),
    }));
  }

  get filteredNavItems() {
    if (!this.searchTerm) {
      return this.navItems;
    }
    return this.navItems.filter((item) =>
      item.text.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  toggleSidebar() {
    this.toggle.emit();
  }

  setActive(itemText: string, event: MouseEvent) {
    event.preventDefault();
    this.activeItem = itemText;
  }
}
