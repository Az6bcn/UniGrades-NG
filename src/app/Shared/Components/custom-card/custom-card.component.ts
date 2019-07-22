import { Subject } from '../../../Models/Subject';

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-custom-card',
  templateUrl: './custom-card.component.html',
  styleUrls: ['./custom-card.component.css']
})
export class CustomCardComponent implements OnInit {
@Input() courses: Array<Subject>;
  constructor() { }

  ngOnInit() {
    console.log(this.courses);
  }

}
