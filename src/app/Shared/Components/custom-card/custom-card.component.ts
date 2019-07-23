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
@Output() addgrade = new EventEmitter<number>();
@Output() deletecourse = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
    console.log(this.courses);
  }
  addGrade(courseId: number) {
    this.addgrade.emit(courseId);
  }
  editCourse(course: Subject) {
    this.editcourse.emit(course);
  }
  deleteCourse(courseId: number) {
    this.deletecourse.emit(courseId);
  }
}
