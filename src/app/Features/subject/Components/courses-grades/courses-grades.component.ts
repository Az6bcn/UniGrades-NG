import { PaginatedResult, PaginationInfo } from './../../../../Models/PaginationInfo';
import { BehaviorSubject } from 'rxjs';
import { Grade } from './../../../../Models/Grade';
import { UserService } from './../../../../Core/Services/user.service';
import { SubjectsService } from './../../../../Services/subjects.service';
import { Component, OnInit } from '@angular/core';
import { SubjectGrades } from 'src/app/Models/Subject-grades';
import { NotifierService } from 'angular-notifier';
import * as moment from 'moment';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-courses-grades',
  templateUrl: './courses-grades.component.html',
  styleUrls: ['./courses-grades.component.css']
})
export class CoursesGradesComponent implements OnInit {
  coursesGrades: Array<SubjectGrades>;
  isLoading$ = new BehaviorSubject<boolean>(true);
  paginationInfo: PaginationInfo;

  constructor(private subjectService: SubjectsService,
              private notifierService: NotifierService,
              private userService: UserService) { }

  ngOnInit() {

    const userID = this.userService.currentUser().id;
    this.GetSubjectGrades(userID);

  }


  GetSubjectGrades(userID: string, pageNumber?: number, pageSize?: number) {
    this.subjectService.GetSubjectGrades(userID, pageNumber, pageSize)
      .pipe(
        finalize(() => this.isLoading$.next(false))
      )
      .subscribe((response: PaginatedResult<SubjectGrades>) => {
        this.coursesGrades = response.result;
        this.paginationInfo = response.paginationInfo;
        //this.parsePieChartData(([].concat(...[coursesGradesRes])));
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

  pageChanged(data: {page: number, itemsPerPage: number}) {
    this.paginationInfo.currentPage = data.page;
    console.log(data);
    const userID = this.userService.currentUser().id;
    this.GetSubjectGrades(userID, data.page, data.itemsPerPage);
  }

  getGradeClasses(grade: number) {
    if (grade >= 5.00) {
      return {
        'text-right': true,
        'font-weight-bold': true,
        'color-pass': true
      };
    }
    return {
      'text-right': true,
      'font-weight-bold': true,
      'color-fail': true
    };
  }

  getFontIconClasses(grade: number) {
    if (grade >= 5.00) {
      return {
        'fas fa-thumbs-up': true,
        'color-pass': true
      };
    }
    return {
      'fas fa-thumbs-down': true,
      'color-fail': true
    };
  }


  getYear() {
    return moment().format('YYYY');
  }
}
