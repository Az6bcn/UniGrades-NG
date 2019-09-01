import { CacheService } from './../../../../Services/cache.service';
import { Grade } from './../../../../Models/Grade';
import { GradesService } from './../../../../Services/grades.service';
import { BehaviorSubject } from 'rxjs';
import { UserService } from './../../../../Core/Services/user.service';
import { Subject } from './../../../../Models/Subject';
import { SubjectsService } from './../../../../Services/subjects.service';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { NotifierService } from 'angular-notifier';
import { AddGradeModalComponent } from '../../Modals/add-grade-modal/add-grade-modal.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
courses: Array<Subject>;
isLoading$ = new BehaviorSubject<boolean>(true);
setModalSpinnerToFalse: boolean;
@ViewChild(AddGradeModalComponent, {static : true}) modalComponent: AddGradeModalComponent;
  constructor(private subjectService: SubjectsService,
              private userService: UserService,
              private gradeService: GradesService,
              private notifierService: NotifierService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private cacheService: CacheService) { }

  ngOnInit() {

    const userID = this.userService.currentUser().id;

    this.subjectService.GetSubjects(userID)
      .pipe(
        finalize(() => this.isLoading$.next(false))
      )
      .subscribe((response: Array<Subject>) => {
        this.courses = response;
      },
      error => {
        if (error === 'Unknown Error') {
          this.notifierService.notify('error', 'something went wrong... please try again later');
        }
        else {
          this.notifierService.notify('error', error.errorMessage);
        }
      });
  }

  addGrade(subject: Subject) {
    this.modalComponent.openModal(subject);
  }

  addCourse(isAdded: boolean) {
    this.router.navigate(['../add-new-course'], {relativeTo: this.activatedRoute} );
  }
  editCourse(course: Subject) {
    this.cacheService.cachedData.next(course);
    this.router.navigate(['../edit-course' , course.id], {relativeTo: this.activatedRoute} );
  }
  deleteCourse(courseId: number) {
    this.subjectService.DeleteCourse(courseId)
      .pipe(
        finalize(() => this.isLoading$.next(false))
      )
      .subscribe(response => {

          const index = this.courses.findIndex(x => x.id === courseId);
          this.courses.splice(index, 1);

          this.notifierService.notify('success', 'Deleted Successfully');

      },
      error => {
        this.notifierService.notify('error', error.errorMessage);
      });
  }

  saveGrade(newGrade: Grade) {
    this.gradeService.AddGrade(newGrade)
    .subscribe(response => {
        this.setModalSpinnerToFalse = false;
        this.notifierService.notify('success', 'Grade Added Successfully');
    },
    error => {
      this.setModalSpinnerToFalse = false;
      this.notifierService.notify('error', error.errorMessage);
    });

  }
}
