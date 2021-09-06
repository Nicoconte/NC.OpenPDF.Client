import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDefaultSectionComponent } from './dashboard-default-section.component';

describe('DashboardDefaultSectionComponent', () => {
  let component: DashboardDefaultSectionComponent;
  let fixture: ComponentFixture<DashboardDefaultSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardDefaultSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardDefaultSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
