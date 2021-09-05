import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiskSpaceBarComponent } from './disk-space-bar.component';

describe('DiskSpaceBarComponent', () => {
  let component: DiskSpaceBarComponent;
  let fixture: ComponentFixture<DiskSpaceBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiskSpaceBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiskSpaceBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
