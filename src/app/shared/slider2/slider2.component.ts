import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
export interface Slide2 {
  url: string;
  title: string;
  description?: string;
}
export type SliderSize2 = 'small' | 'default' | 'large' | 'full-width';

@Component({
  selector: 'app-slider2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slider2.component.html',
  styleUrls: ['./slider2.component.css'],
})
export class Slider2Component implements OnInit, OnDestroy {
  @Input() slides: Slide2[] = [];
  @Input() autoPlayInterval: number = 5000;

  // Yeni boyut girdisi. Varsayılan olarak 'medium' ayarlandı.
  @Input() size: SliderSize2 = 'default';
  public currentIndex = 0;
  private isPaused = false;
  private timerId?: number;

  ngOnInit(): void {
    this.resetTimer();
  }

  ngOnDestroy(): void {
    clearTimeout(this.timerId);
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

  public goToSlide(slideIndex: number): void {
    this.currentIndex = slideIndex;
    this.resetTimer();
  }
}
