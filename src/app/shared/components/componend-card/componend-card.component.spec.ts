import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponendCardComponent } from './componend-card.component';

describe('ComponendCardComponent', () => {
  let component: ComponendCardComponent;
  let fixture: ComponentFixture<ComponendCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponendCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ComponendCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
