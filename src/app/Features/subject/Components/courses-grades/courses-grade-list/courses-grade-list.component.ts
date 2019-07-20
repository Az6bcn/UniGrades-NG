import { Component, OnInit, Input } from '@angular/core';
import { Grade } from 'src/app/Models/Grade';

@Component({
  selector: 'app-courses-grade-list',
  templateUrl: './courses-grade-list.component.html',
  styleUrls: ['./courses-grade-list.component.css']
})
export class CoursesGradeListComponent implements OnInit {
@Input() data: Array<Grade>;
  constructor() { }

  ngOnInit() {
  }

}
