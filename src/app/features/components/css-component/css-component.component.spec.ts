import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssComponentComponent } from './css-component.component';

describe('CssComponentComponent', () => {
  let component: CssComponentComponent;
  let fixture: ComponentFixture<CssComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CssComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CssComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
