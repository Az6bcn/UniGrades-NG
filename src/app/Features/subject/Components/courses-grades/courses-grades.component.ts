import { Grade } from './../../../../Models/Grade';
import { UserService } from './../../../../Core/Services/user.service';
import { SubjectsService } from './../../../../Services/subjects.service';
import { Component, OnInit } from '@angular/core';
import { SubjectGrades } from 'src/app/Models/Subject-grades';
import { NotifierService } from 'angular-notifier';
import * as moment from 'moment';

@Component({
  selector: 'app-courses-grades',
  templateUrl: './courses-grades.component.html',
  styleUrls: ['./courses-grades.component.css']
})
export class CoursesGradesComponent implements OnInit {
  coursesGrades: Array<SubjectGrades>;

  constructor(private subjectService: SubjectsService,
              private notifierService: NotifierService,
              private userService: UserService) { }

  ngOnInit() {

    const userID = this.userService.currentUser().id;

    this.subjectService.GetSubjectGrades(userID)
      .subscribe((response: Array<SubjectGrades>) => {
        this.coursesGrades = response;
        //this.parsePieChartData(([].concat(...[coursesGradesRes])));
      },
        error => {
          this.notifierService.notify('error', 'Could not get list of subject-grades ......Please try again later');
        });
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
