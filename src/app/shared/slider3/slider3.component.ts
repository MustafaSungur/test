import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Slide3 {
  url: string;
  title: string;
  description?: string;
}

export type SliderSize3 = 'small' | 'default' | 'large' | 'full-width';

@Component({
  selector: 'app-slider3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slider3.component.html',
  styleUrls: ['./slider3.component.scss'],
})
export class Slider3Component implements OnInit, OnDestroy {
  @Input() slides: Slide3[] = [];
  @Input() autoPlayInterval: number = 5000;
  @Input() size: SliderSize3 = 'default';

  public currentIndex = 0;
  private isPaused = false;
  private timerId?: number;

  /**
   * Dışarıdan gelen 'size' girdisine göre dinamik olarak yükseklik ve
   * maksimum genişlik sınıflarını döndürür.
   */
  public get perspectiveContainerClasses(): string {
    const baseClasses = 'w-full';
    let sizeClass = '';

    switch (this.size) {
      case 'full-width':
        // Tam genişlikte max-width olmaz, sadece yükseklik ayarlanır.
        sizeClass = 'h-[300px] md:h-[450px] lg:h-[550px]';
        break;
      case 'large':
        sizeClass = 'h-[400px] md:h-[550px] lg:h-[700px] max-w-7xl';
        break;
      case 'default':
        sizeClass = 'h-[350px] md:h-[500px] lg:h-[600px] max-w-5xl';
        break;
      case 'small':
        sizeClass = 'h-[250px] md:h-[400px] lg:h-[500px] max-w-4xl';
        break;
    }
    return `${baseClasses} ${sizeClass}`;
  }

  ngOnInit(): void {
    this.resetTimer();
  }

  ngOnDestroy(): void {
    clearTimeout(this.timerId);
  }

  /**
   * Belirli bir slayt indeksi için dinamik CSS stillerini hesaplar.
   * Bu, 3D carousel efektini oluşturan ana mantıktır.
   * @param index Slaytın döngüdeki indeksi.
   * @returns Bir ngStyle nesnesi.
   */
  public getSlideStyle(index: number): { [key: string]: any } {
    const total = this.slides.length;
    let offset = index - this.currentIndex;

    // Döngüsel geçiş için en kısa yolu bulma mantığı
    if (Math.abs(offset) > total / 2) {
      offset = offset > 0 ? offset - total : offset + total;
    }

    const isCurrent = offset === 0;
    const isSideSlide = Math.abs(offset) === 1;

    const transform = `
      translateX(${offset * 60}%)
      scale(${isCurrent ? 1 : 0.7})
      rotateY(${offset * -45}deg)
    `;

    const opacity = isCurrent ? 1 : isSideSlide ? 0.7 : 0;
    const zIndex = total - Math.abs(offset);

    return {
      transform: transform,
      opacity: opacity,
      zIndex: zIndex,
    };
  }

  private resetTimer(): void {
    clearTimeout(this.timerId);
    if (!this.isPaused && this.autoPlayInterval > 0) {
      this.timerId = window.setTimeout(
        () => this.goToNext(),
        this.autoPlayInterval
      );
    }
  }

  public pauseTimer(): void {
    this.isPaused = true;
    clearTimeout(this.timerId);
  }

  public resumeTimer(): void {
    this.isPaused = false;
    this.resetTimer();
  }

  public goToPrevious(): void {
    const isFirstSlide = this.currentIndex === 0;
    this.currentIndex = isFirstSlide
      ? this.slides.length - 1
      : this.currentIndex - 1;
    this.resetTimer();
  }

  public goToNext(): void {
    const isLastSlide = this.currentIndex === this.slides.length - 1;
    this.currentIndex = isLastSlide ? 0 : this.currentIndex + 1;
    this.resetTimer();
  }
}
