import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfFilesSectionComponent } from './pdf-files-section.component';

describe('PdfFilesSectionComponent', () => {
  let component: PdfFilesSectionComponent;
  let fixture: ComponentFixture<PdfFilesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdfFilesSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfFilesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
