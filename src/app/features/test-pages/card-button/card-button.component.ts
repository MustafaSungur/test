import { Component } from '@angular/core';
import { KarmedCardImageFeature } from '../../../shared/components/cards/components/karmed-card-image-feature/karmed-card-image-feature.component';
import { ArticleSummaryCard } from '../../../shared/components/cards/components/karmed-card-article-summary/karmed-card-article-summary.component';
import { KarmedCardSimple } from '../../../shared/components/cards/components/karmed-card-simple/karmed-card-simple.component';
import { UserProfileCard } from '../../../shared/components/cards/components/karmed-card-user-profile/karmed-card-user-profile.component';
import { userProfileMiniCard } from '../../../shared/components/cards/components/karmed-card-user-profile-mini/karmed-card-user-profile-mini.component';
import { KarmedButtonCreateComponent } from '../../../shared/components/button/components/karmed-button-create/karmed-button-create.component';
import { KarmedButtonOutlineComponent } from '../../../shared/components/button/components/karmed-button-outline/karmed-button-outline.component';

@Component({
  selector: 'app-card-button',
  imports: [
    KarmedCardImageFeature,
    ArticleSummaryCard,
    KarmedCardSimple,
    UserProfileCard,
    userProfileMiniCard,
    KarmedButtonCreateComponent,
    KarmedButtonOutlineComponent,
  ],
  templateUrl: './card-button.component.html',
  styleUrl: './card-button.component.css',
})
export class CardButtonComponent {
  card1 = {
    image: 'https://images.unsplash.com/photo-1554629947-334ff61d85dc',
    title: 'Dağ Manzarası',
    description: 'Karlı dağların ve yeşil vadilerin muhteşem bir görünümü.',
  };

  blogPost = {
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
    category: 'Teknoloji',
    title: 'Modern Web Geliştirme',
    description:
      'React, Angular ve Vue gibi popüler kütüphanelerle modern web uygulamaları nasıl oluşturulur?',
  };

  user1 = {
    pic: 'https://randomuser.me/api/portraits/men/78.jpg',
    fullName: 'Jane Doe',
    jobTitle: 'Frontend Developer',
    contactEmail: 'jane.doe@example.com',
    contactPhone: '(555) 123-4567',
  };

  devCard = {
    title: 'Geliştirme Araçları',
    description:
      'Verimliliği artıran, hata ayıklamayı kolaylaştıran ve kod kalitesini yükselten modern araç setleri.',
  };
}
