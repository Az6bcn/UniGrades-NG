import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { CoursesGradeListComponent } from './courses-grade-list.component';



describe('CoursesGradeListComponent', () => {
  let component: CoursesGradeListComponent;
  let fixture: ComponentFixture<CoursesGradeListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesGradeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesGradeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
