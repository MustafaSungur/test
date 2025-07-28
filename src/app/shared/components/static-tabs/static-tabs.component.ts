import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-static-tabs',
  standalone: true,
  templateUrl: './static-tabs.component.html',
  styleUrls: ['./static-tabs.component.scss'],
  imports: [CommonModule],
})
export class StaticTabsComponent implements OnInit {
  @Input() tabs: any[] = [];
  activeTabIndex = 0;

  get activeComponent() {
    return this.tabs[this.activeTabIndex]?.component;
  }

  ngOnInit(): void {
    if (!this.activeComponent && this.tabs.length > 0) {
      this.activeTabIndex = 0;
    }
  }

  selectTab(index: number): void {
    this.activeTabIndex = index;
  }
}
