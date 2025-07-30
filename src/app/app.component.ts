import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { KarmedCardCategoryComponent } from './shared/components/cards/components/karmed-card-category/karmed-card-category.component';
import { ComponendCardComponent } from './shared/components/componend-card/componend-card.component';
import { MaterialTestComponent } from './shared/components/material-test/material-test.component';
import { Slide1, Slider1Component } from './shared/slider1/slider1.component';
import { Slide2, Slider2Component } from './shared/slider2/slider2.component';
import { Slider3Component } from './shared/slider3/slider3.component';
import { Card1Component } from './shared/components/cards/components/card1/card1.component';
import { Card2Component } from './shared/components/cards/components/card2/card2.component';
import { Card3Component } from './shared/components/cards/components/card3/card3.component';
import { Card4Component } from './shared/components/cards/components/card4/card4.component';
import { Card5Component } from './shared/components/cards/components/card5/card5.component';

@Component({
  selector: 'app-root',
  imports: [
    KarmedCardCategoryComponent,
    ComponendCardComponent,
    MaterialTestComponent,
    Slider1Component,
    Slider2Component,
    Slider3Component,
    Card1Component,
    Card2Component,
    Card3Component,
    Card4Component,
    Card5Component,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'upate_test';

  // Slider için örnek veri
  public sampleSlides: Slide2[] = [
    {
      url: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0',
      title: 'Doğanın Kalbi',
      description: 'Görkemli dağlar ve sakin göller.',
    },
    {
      url: 'https://images.unsplash.com/photo-1511576661531-b34d7da5d0bb',
      title: 'Şehir Işıkları',
      description: 'Gece parlayan metropol manzaraları.',
    },
    {
      url: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8',
      title: 'Sabah Sisi',
      description: 'Güneşin doğuşuyla ormanın uyanışı.',
    },
    {
      url: 'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3',
      title: 'Yıldızlı Gece',
      description: 'Samanyolu altında sonsuz bir gökyüzü.',
    },
  ];

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
