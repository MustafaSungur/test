import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KarmedSidebarLeftDarkComponent } from './karmed-sidebar-left-dark.component';

describe('KarmedSidebarLeftDarkComponent', () => {
  let component: KarmedSidebarLeftDarkComponent;
  let fixture: ComponentFixture<KarmedSidebarLeftDarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KarmedSidebarLeftDarkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KarmedSidebarLeftDarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
