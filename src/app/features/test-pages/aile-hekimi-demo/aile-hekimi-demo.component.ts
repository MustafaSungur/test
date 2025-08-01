import { Component } from '@angular/core';
import { KarmedSidebarLeftComponent } from '../../../shared/components/sidebars/karmed-sidebar-left/karmed-sidebar-left.component';
import { KarmedSidebarRightComponent } from '../../../shared/components/sidebars/karmed-sidebar-right/karmed-sidebar-right.component';
import { NgIf } from '@angular/common';
import { KarmedSidebarLeftDarkComponent } from '../../../shared/components/sidebars/karmed-sidebar-left-dark/karmed-sidebar-left-dark.component';

@Component({
  selector: 'app-aile-hekimi-demo',
  imports: [
    KarmedSidebarLeftComponent,
    KarmedSidebarRightComponent,
    NgIf,
    KarmedSidebarLeftDarkComponent,
  ],
  templateUrl: './aile-hekimi-demo.component.html',
  styleUrl: './aile-hekimi-demo.component.css',
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
