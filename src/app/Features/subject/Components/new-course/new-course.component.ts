import { AcademicSemesterEnum } from './../../../../Models/Enums/AcademicSemester.Enum';
import { CacheService } from './../../../../Services/cache.service';
import { Subject } from './../../../../Models/Subject';
import { AcademicSemestersOption } from './../../../../Models/AcademicSemestersOption';
import { UserService } from './../../../../Core/Services/user.service';
import { FormBuilder, Validators, FormGroup, AbstractControl } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { SubjectsService } from './../../../../Services/subjects.service';
import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { finalize } from 'rxjs/operators';
import { IOption } from 'ng-select';
import { Router, ActivatedRoute } from '@angular/router';
import * as moment from 'moment';


@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.css']
})
export class NewCourseComponent implements OnInit {

  courseForm: FormGroup;
  isLoading$ = new BehaviorSubject<boolean>(true);
  academicSemestersOptions: Array<IOption> = new AcademicSemestersOption().getAcademicOptions();
  private courseToEdit: Subject;
  title: string;
  constructor(private subjectService: SubjectsService,
              private notifierService: NotifierService,
              private fb: FormBuilder,
              private userService: UserService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private cachedService: CacheService) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];

    if (id > 0) {
      this.subjectService.GetSubjectById(id)
        .pipe(finalize(() => this.isLoading$.next(false)))
        .subscribe(resp => {
          this.title = 'Edit Course';
          this.courseForm = this.buildCourseForm(this.fb);
          this.courseForm.setValue({
                subjectName: resp.subjectName,
                courseYear: moment(resp.courseYear).format('MM/DD/YYYY'),
                totalPercentage: resp.totalPercentage,
                userId: resp.userId,
                AcademicSemesterId: resp.academicSemesterId.toString()
              });
        });
    }
    else {
      this.title = 'Add Course';
      this.courseForm = this.buildCourseForm(this.fb);
      this.isLoading$.next(false);

    }

  }

  save(course: Subject) {
    course.courseYear = moment(course.courseYear).format('MM-DD-YYYY');
    course.academicSemesterId = (course.academicSemesterId as number);
    this.subjectService.AddSubject(course)
      .pipe(
        finalize(() => this.isLoading$.next(false))
      )
      .subscribe(response => {
        if (response.success) {
          this.notifierService.notify('success', 'Added Successfully');
          this.router.navigate(['../my-courses'], {relativeTo: this.activatedRoute});
        }
      },
        error => {
          this.notifierService.notify('error', error.error);
        });
  }

  editCourse(course) {
    this.subjectService.EditCourse(course)
    .pipe(
      finalize(() => this.isLoading$.next(false))
    )
    .subscribe(response => {
      if (response.success) {
        this.notifierService.notify('success', 'Course Edited Successfully');
      }
    },
    error => {
      this.notifierService.notify('error', error.error);
    });
  }


  isValid(courseForm: FormGroup) {
    return courseForm.invalid;
  }
  gerUserId(): string {
    return this.userService.currentUser().id;
  }

  cancel() {
    if (this.title === 'Edit Course') {
      this.router.navigate(['../../my-courses'], {relativeTo: this.activatedRoute});
    } else {
      this.router.navigate(['../my-courses'], {relativeTo: this.activatedRoute});
    }
  }

  buildCourseForm(builder: FormBuilder) {
    return builder.group({
      subjectName: ['', Validators.required],
      courseYear: ['', Validators.required],
      totalPercentage: ['', Validators.required],
      userId: [this.gerUserId(), Validators.required],
      AcademicSemesterId: ['', Validators.required]
    });
  }

  get subjectname(): AbstractControl { return this.courseForm.get('subjectName'); }
  get courseyear(): AbstractControl { return this.courseForm.get('courseYear'); }
  get totalpercentage(): AbstractControl { return this.courseForm.get('totalPercentage'); }
  get academicsemester(): AbstractControl { return this.courseForm.get('AcademicSemesterId'); }
}
