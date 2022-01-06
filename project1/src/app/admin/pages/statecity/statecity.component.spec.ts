import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatecityComponent } from './statecity.component';

describe('StatecityComponent', () => {
  let component: StatecityComponent;
  let fixture: ComponentFixture<StatecityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatecityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatecityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
