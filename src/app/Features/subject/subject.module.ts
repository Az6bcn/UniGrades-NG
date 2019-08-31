import { CoursesGradesItemComponent } from './Components/courses-grades/courses-grades-item/courses-grades-item.component';
import { CoursesGradeListComponent } from './Components/courses-grades/courses-grade-list/courses-grade-list.component';
import { SharedModule } from './../../Shared/Shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubjectRoutingModule } from './subject-routing.module';
import { CoursesComponent } from './Components/courses/courses.component';
import { CoursesGradesComponent } from './Components/courses-grades/courses-grades.component';
import { GradesComponent } from './Components/grades/grades.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { AddGradeModalComponent } from './Modals/add-grade-modal/add-grade-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewCourseComponent } from './Components/new-course/new-course.component';
import {SelectModule} from 'ng-select';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@NgModule({
  imports: [
    CommonModule,
    SubjectRoutingModule,
    SharedModule,
    AccordionModule,
    FormsModule,
    ReactiveFormsModule,
    SelectModule,
    BsDatepickerModule.forRoot(),

  ],
  declarations: [
    CoursesComponent,
    CoursesGradesComponent,
    GradesComponent,
    CoursesGradeListComponent,
    CoursesGradesItemComponent,
    AddGradeModalComponent,
    NewCourseComponent,
  ]
})
export class SubjectModule { }
