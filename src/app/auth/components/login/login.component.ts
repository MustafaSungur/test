import { NgClass, NgIf } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { SliderImageDataService } from '../../services/slider-images-data.service';
@Component({
  selector: 'app-login',
  imports: [NgClass, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';
  rememberMe = false;
  isDarkMode = false;
  sliderImages = [];

  constructor(private sliderService: SliderImageDataService) {}

  ngOnInit(): void {
    this.sliderImages = this.sliderService.getSliderImages();

    if (this.sliderImages && this.sliderImages.length > 0) {
      this.startSlider();
    }
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
  }
  handleSubmit(event: Event): void {
    event.preventDefault();

    console.log({
      email: this.email,
      password: this.password,
      rememberMe: this.rememberMe,
    });
    alert('Giriş bilgileri konsola yazdırıldı.');
  }
  currentSlideIndex = 0;
  isSliderVisible = true;
  private intervalId: any;

  private startSlider(): void {
    this.intervalId = setInterval(() => {
      this.isSliderVisible = false;

      setTimeout(() => {
        this.currentSlideIndex =
          (this.currentSlideIndex + 1) % this.sliderImages.length;
        this.isSliderVisible = true;
      }, 500);
    }, 6000);
  }
}
