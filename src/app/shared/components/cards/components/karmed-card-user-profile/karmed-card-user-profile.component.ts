import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-karmed-card-user-profile',
  imports: [],
  templateUrl: './karmed-card-user-profile.component.html',
  styleUrl: './karmed-card-user-profile.component.scss',
})
export class UserProfileCard {
  @Input() imageUrl: string = '';
  @Input() name: string = '';
  @Input() role: string = '';
  @Input() email: string = '';
  @Input() phone: string = '';

  constructor() {}
}
