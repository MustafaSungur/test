import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-karmed-card-user-profile-mini',
  imports: [],
  templateUrl: './karmed-card-user-profile-mini.component.html',
  styleUrl: './karmed-card-user-profile-mini.component.scss',
})
export class userProfileMiniCard {
  @Input() imageUrl: string = '';
  @Input() name: string = '';
  @Input() role: string = '';
  @Input() email: string = '';
  @Input() phone: string = '';
}
