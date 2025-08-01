import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-karmed-header-transparent',
  imports: [],
  templateUrl: './karmed-header-transparent.component.html',
  styleUrl: './karmed-header-transparent.component.scss',
})
export class KarmedHeaderTransparentComponent {
  // Bu event, sağ sidebar'ı açma isteğini parent component'e (app.component) iletecek.
  @Output() toggleRightSidebar = new EventEmitter<void>();

  // Örnek dinamik veriler
  pageTitle = 'Gösterge Paneli';
  userName = 'Can Yılmaz';
  userAvatarUrl = 'https://picsum.photos/id/237/40/40';

  onToggleRightSidebar(): void {
    this.toggleRightSidebar.emit();
  }
}
