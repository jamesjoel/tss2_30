import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileTypeCategoryComponent } from './file-type-category.component';

describe('FileTypeCategoryComponent', () => {
  let component: FileTypeCategoryComponent;
  let fixture: ComponentFixture<FileTypeCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileTypeCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileTypeCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
