import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlComponentComponent } from './html-component.component';

describe('HtmlComponentComponent', () => {
  let component: HtmlComponentComponent;
  let fixture: ComponentFixture<HtmlComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HtmlComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
