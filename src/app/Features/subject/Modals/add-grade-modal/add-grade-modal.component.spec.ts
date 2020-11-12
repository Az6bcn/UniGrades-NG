import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddGradeModalComponent } from './add-grade-modal.component';

describe('AddGradeModalComponent', () => {
  let component: AddGradeModalComponent;
  let fixture: ComponentFixture<AddGradeModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddGradeModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGradeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
