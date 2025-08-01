// src/app/services/tab-management.service.ts

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

// Her bir sekmenin yapısını tanımlayan arayüz
export interface Tab {
  label: string; // Sekmede görünecek yazı (Hasta Adı)
  route: string; // Sekmeye tıklandığında gidilecek route
}

@Injectable({
  providedIn: 'root', // Servisin tüm uygulama tarafından erişilebilir olmasını sağlar
})
export class TabManagementService {
  // BehaviorSubject, sekmelerin güncel listesini tutar ve değişiklikleri abonelere anında bildirir.
  private readonly _tabs = new BehaviorSubject<Tab[]>([]);

  // Dışarıdan okunabilir Observable
  readonly tabs$ = this._tabs.asObservable();

  constructor(private router: Router) {}

  private get tabs(): Tab[] {
    return this._tabs.getValue();
  }

  private set tabs(val: Tab[]) {
    this._tabs.next(val);
  }

  /**
   * Yeni bir sekme ekler. Eğer aynı route'a sahip bir sekme zaten varsa eklemez.
   * @param newTab Eklenecek olan yeni sekme nesnesi
   */
  addTab(newTab: Tab): void {
    const isTabAlreadyOpen = this.tabs.some(
      (tab) => tab.route === newTab.route
    );

    if (!isTabAlreadyOpen) {
      this.tabs = [...this.tabs, newTab];
    }
    // Sekme zaten açık olsa bile o sekmeye git
    this.router.navigateByUrl(newTab.route);
  }

  /**
   * Belirtilen sekmeyi kapatır.
   * @param tabToRemove Kapatılacak olan sekme nesnesi
   */
  closeTab(tabToRemove: Tab): void {
    this.tabs = this.tabs.filter((tab) => tab.route !== tabToRemove.route);

    // Eğer kapatılan sekme aktif olan sekme ise, hasta listesine geri dön
    if (this.router.url === tabToRemove.route) {
      this.router.navigateByUrl('/patients');
    }
  }
}
