import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KarmedSidebarLeftTransparentComponent } from './karmed-sidebar-left-transparent.component';

describe('KarmedSidebarLeftTransparentComponent', () => {
  let component: KarmedSidebarLeftTransparentComponent;
  let fixture: ComponentFixture<KarmedSidebarLeftTransparentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KarmedSidebarLeftTransparentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KarmedSidebarLeftTransparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
