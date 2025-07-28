import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TsComponentComponent } from './ts-component.component';

describe('TsComponentComponent', () => {
  let component: TsComponentComponent;
  let fixture: ComponentFixture<TsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TsComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
