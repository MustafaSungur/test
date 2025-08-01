import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import {
  Tab,
  TabManagementService,
} from '../../services/tab-management.service';

@Component({
  selector: 'app-tab',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
})
export class TabComponent {
  tabs$: Observable<Tab[]>;

  constructor(private tabService: TabManagementService) {
    this.tabs$ = this.tabService.tabs$;
  }

  closeTab(event: MouseEvent, tab: Tab): void {
    // Tıklamanın parent'taki link'e (routerLink) gitmesini engelle
    event.preventDefault();
    event.stopPropagation();

    this.tabService.closeTab(tab);
  }
}
