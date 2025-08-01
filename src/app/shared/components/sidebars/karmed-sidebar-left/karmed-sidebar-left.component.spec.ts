import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KarmedSidebarLeftComponent } from './karmed-sidebar-left.component';

describe('KarmedSidebarLeftComponent', () => {
  let component: KarmedSidebarLeftComponent;
  let fixture: ComponentFixture<KarmedSidebarLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KarmedSidebarLeftComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KarmedSidebarLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
