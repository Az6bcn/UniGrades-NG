import { Subject } from '../../../Models/Subject';

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-custom-card',
  templateUrl: './custom-card.component.html',
  styleUrls: ['./custom-card.component.css']
})
export class CustomCardComponent implements OnInit {
@Input() courses: Array<Subject>;
@Output() editcourse = new EventEmitter<Subject>();
@Output() addgrade = new EventEmitter<Subject>();
@Output() deletecourse = new EventEmitter<number>();
@Output() addcourse = new EventEmitter<boolean>();

  constructor(private notifierService: NotifierService) { }

  ngOnInit() {
  }
  addCourse() {
    this.addcourse.emit(true);
  }
  addGrade(course: Subject) {
    if (course.coveredPercentage === course.totalPercentage) {
      this.notifierService.notify('error', 'Grade cannot be added, total percentage already covered');
      return false;
    }
    this.addgrade.emit(course);
  }
  editCourse(course: Subject) {
    this.editcourse.emit(course);
  }
  deleteCourse(courseId: number) {
    this.deletecourse.emit(courseId);
  }
}
