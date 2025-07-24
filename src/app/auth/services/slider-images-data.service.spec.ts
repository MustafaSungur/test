import { TestBed } from '@angular/core/testing';

import { SliderImagesDataService } from './slider-images-data.service';

describe('SliderImagesDataService', () => {
  let service: SliderImagesDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SliderImagesDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
