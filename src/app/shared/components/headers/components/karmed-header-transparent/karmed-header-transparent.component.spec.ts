import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KarmedHeaderTransparentComponent } from './karmed-header-transparent.component';

describe('KarmedHeaderTransparentComponent', () => {
  let component: KarmedHeaderTransparentComponent;
  let fixture: ComponentFixture<KarmedHeaderTransparentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KarmedHeaderTransparentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KarmedHeaderTransparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
