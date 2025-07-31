import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KarmedButtonOutlineComponent } from './karmed-button-outline.component';

describe('KarmedButtonOutlineComponent', () => {
  let component: KarmedButtonOutlineComponent;
  let fixture: ComponentFixture<KarmedButtonOutlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KarmedButtonOutlineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KarmedButtonOutlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
