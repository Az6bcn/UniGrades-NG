import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CoursesGradesComponent } from './courses-grades.component';

describe('CoursesGradesComponent', () => {
  let component: CoursesGradesComponent;
  let fixture: ComponentFixture<CoursesGradesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesGradesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesGradesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
