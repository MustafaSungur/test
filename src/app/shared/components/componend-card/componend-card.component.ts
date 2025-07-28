import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

import { StaticTabsComponent } from '../static-tabs/static-tabs.component';
import { HtmlComponent } from '../../../features/components/html-component/html-component.component';
import { TsComponentComponent } from '../../../features/components/ts-component/ts-component.component';
import { CssComponent } from '../../../features/components/css-component/css-component.component';

@Component({
  selector: 'app-componend-card',
  standalone: true,
  imports: [NgIf, StaticTabsComponent],
  templateUrl: './componend-card.component.html',
  styleUrls: ['./componend-card.component.scss'],
})
export class ComponendCardComponent {
  @Input() title!: string;
  @Input() description!: string;
  @Input() imageUrl!: string;

  showCode = false;
  staticTabs = [
    { label: 'HTML', component: HtmlComponent },
    { label: 'TS', component: TsComponentComponent },
    { label: 'CSS', component: CssComponent },
  ];

  toggleCode() {
    this.showCode = !this.showCode;
  }
}
