import { Component } from '@angular/core';
import { KarmedSidebarLeftComponent } from '../../../shared/components/sidebars/karmed-sidebar-left/karmed-sidebar-left.component';
import { KarmedSidebarRightComponent } from '../../../shared/components/sidebars/karmed-sidebar-right/karmed-sidebar-right.component';
import { NgIf } from '@angular/common';
import { KarmedSidebarLeftDarkComponent } from '../../../shared/components/sidebars/karmed-sidebar-left-dark/karmed-sidebar-left-dark.component';
import { RouterOutlet } from '@angular/router';
import { TabComponent } from '../../tabs/components/tab/tab.component';
import { KarmedSidebarLeftTransparentComponent } from '../../../shared/components/sidebars/karmed-sidebar-left-transparent/karmed-sidebar-left-transparent.component';
import { KarmedHeaderTransparentComponent } from '../../../shared/components/headers/components/karmed-header-transparent/karmed-header-transparent.component';

@Component({
  selector: 'app-aile-hekimi-demo',
  imports: [
    KarmedSidebarLeftComponent,
    KarmedSidebarRightComponent,
    NgIf,
    KarmedSidebarLeftDarkComponent,
    RouterOutlet,
    TabComponent,
    KarmedSidebarLeftTransparentComponent,
    KarmedHeaderTransparentComponent,
  ],
  templateUrl: './aile-hekimi-demo.component.html',
  styleUrl: './aile-hekimi-demo.component.scss',
})
export class AileHekimiDemoComponent {
  isLeftSidebarCollapsed = false;

  isRightSidebarOpen = false;

  toggleLeftSidebar(): void {
    this.isLeftSidebarCollapsed = !this.isLeftSidebarCollapsed;
  }

  openRightSidebar(): void {
    this.isRightSidebarOpen = true;
  }

  closeRightSidebar(): void {
    this.isRightSidebarOpen = false;
  }
}
