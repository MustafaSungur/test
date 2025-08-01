import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KarmedSidebarRightComponent } from './karmed-sidebar-right.component';

describe('KarmedSidebarRightComponent', () => {
  let component: KarmedSidebarRightComponent;
  let fixture: ComponentFixture<KarmedSidebarRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KarmedSidebarRightComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KarmedSidebarRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
