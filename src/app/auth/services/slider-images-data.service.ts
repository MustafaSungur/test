// src/app/services/slider-data.service.ts

import { Injectable } from '@angular/core';
// Interface'i burada da kullanmak iyi bir pratik

@Injectable({
  providedIn: 'root', // Servisin tüm uygulamada kullanılabilir olmasını sağlar
})
export class SliderImageDataService {
  private sliderImages = [
    {
      path: 'assets/bir.jpg',
      title: 'Takip Et,',
      subtitle: 'Başarıya Birlikte Koş!',
      description:
        'Etkili görev takibi, başarılı proje yönetiminin temelidir...',
    },
    {
      path: 'assets/iki.jpg',
      title: 'Sistemin Gücü,',
      subtitle: 'Başarıya Birlikte Koş!',
      description: 'Görev takip platformumuz, kullanıcı dostu arayüzü...',
    },
    {
      path: 'assets/uc.jpg',
      title: 'Geleceğin İş Yönetimi,',
      subtitle: 'Başarıya Birlikte Koş!',
      description:
        'İş dünyası sürekli değişiyor ve biz bu değişime ayak uyduracak çözümler sunuyoruz...',
    },
  ];

  constructor() {}

  getSliderImages() {
    return this.sliderImages;
  }
}
