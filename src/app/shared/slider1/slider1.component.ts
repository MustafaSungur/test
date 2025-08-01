import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';

export interface Slide1 {
  url: string;
  title: string;
  description?: string;
}

export type SliderSize1 = 'small' | 'default' | 'large' | 'full-width';

@Component({
  selector: 'app-slider1',
  standalone: true,
  imports: [CommonModule], // ngFor, ngClass, ngStyle gibi direktifler için gereklidir
  templateUrl: './slider1.component.html',
  styleUrls: ['./slider1.component.scss'],
})
export class Slider1Component implements OnInit, OnDestroy {
  @Input() slides: Slide1[] = [];
  @Input() autoPlayInterval: number = 5000;

  // Yeni boyut girdisi. Varsayılan olarak 'medium' ayarlandı.
  @Input() size: SliderSize1 = 'default';

  public currentIndex = 0;
  private isPaused = false;
  private timerId?: number;

  /**
   * Boyut girdisine göre dinamik olarak CSS sınıflarını döndüren getter.
   * Şablonun daha temiz kalmasını sağlar.
   */
  public get containerClasses(): string {
    const baseClasses = 'w-full m-auto relative group';
    let sizeClass = '';

    switch (this.size) {
      case 'full-width':
        sizeClass = 'h-[300px] md:h-[450px] lg:h-[550px]';
        break;
      case 'large':
        sizeClass = 'h-[400px] md:h-[550px] lg:h-[700px] max-w-7xl';
        break;
      case 'default':
        sizeClass = 'h-[350px] md:h-[500px] lg:h-[600px] max-w-6xl';
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

  private resetTimer(): void {
    clearTimeout(this.timerId);
    if (!this.isPaused) {
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
    const newIndex = isFirstSlide
      ? this.slides.length - 1
      : this.currentIndex - 1;
    this.currentIndex = newIndex;
    this.resetTimer();
  }

  public goToNext(): void {
    const isLastSlide = this.currentIndex === this.slides.length - 1;
    const newIndex = isLastSlide ? 0 : this.currentIndex + 1;
    this.currentIndex = newIndex;
    this.resetTimer();
  }

  public goToSlide(slideIndex: number): void {
    this.currentIndex = slideIndex;
    this.resetTimer();
  }
}
