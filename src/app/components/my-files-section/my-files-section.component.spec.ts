import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFilesSectionComponent } from './my-files-section.component';

describe('MyFilesSectionComponent', () => {
  let component: MyFilesSectionComponent;
  let fixture: ComponentFixture<MyFilesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyFilesSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFilesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
