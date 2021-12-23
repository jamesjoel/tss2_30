import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadToDriveComponent } from './upload-to-drive.component';

describe('UploadToDriveComponent', () => {
  let component: UploadToDriveComponent;
  let fixture: ComponentFixture<UploadToDriveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadToDriveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadToDriveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
