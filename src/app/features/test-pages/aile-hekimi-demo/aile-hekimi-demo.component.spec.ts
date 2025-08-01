import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AileHekimiDemoComponent } from './aile-hekimi-demo.component';

describe('AileHekimiDemoComponent', () => {
  let component: AileHekimiDemoComponent;
  let fixture: ComponentFixture<AileHekimiDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AileHekimiDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AileHekimiDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
