import { Subject } from '../../../Models/Subject';

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }
  addGrade(course: Subject) {
    this.addgrade.emit(course);
  }
  editCourse(course: Subject) {
    this.editcourse.emit(course);
  }
  deleteCourse(courseId: number) {
    this.deletecourse.emit(courseId);
  }
}
