import { Component, OnInit, Input } from '@angular/core';
import { Grade } from 'src/app/Models/Grade';

@Component({
  selector: 'app-courses-grade-item, [app-courses-grade-item]', //attribute selector [app-courses-grade-item]
  templateUrl: './courses-grades-item.component.html',
  styleUrls: ['./courses-grades-item.component.css']
})
export class CoursesGradesItemComponent implements OnInit {
  @Input() data: Grade;

  constructor() { }

  ngOnInit() {
  }

}
