import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CoursesGradesItemComponent } from './courses-grades-item.component';

describe('CoursesGradesItemComponent', () => {
  let component: CoursesGradesItemComponent;
  let fixture: ComponentFixture<CoursesGradesItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesGradesItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesGradesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
