import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteFileBtnComponent } from './delete-file-btn.component';

describe('DeleteFileBtnComponent', () => {
  let component: DeleteFileBtnComponent;
  let fixture: ComponentFixture<DeleteFileBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteFileBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteFileBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
