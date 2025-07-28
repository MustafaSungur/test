import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticTabsComponent } from './static-tabs.component';

describe('StaticTabsComponent', () => {
  let component: StaticTabsComponent;
  let fixture: ComponentFixture<StaticTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaticTabsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaticTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
