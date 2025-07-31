import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KarmedButtonCreateComponent } from './karmed-button-create.component';

describe('KarmedButtonCreateComponent', () => {
  let component: KarmedButtonCreateComponent;
  let fixture: ComponentFixture<KarmedButtonCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KarmedButtonCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KarmedButtonCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
