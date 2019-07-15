import { SharedModule } from './../../Shared/Shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubjectRoutingModule } from './subject-routing.module';
import { CoursesComponent } from './Components/courses/courses.component';
import { CoursesGradesComponent } from './Components/courses-grades/courses-grades.component';
import { GradesComponent } from './Components/grades/grades.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';



@NgModule({
  imports: [
    CommonModule,
    SubjectRoutingModule,
    SharedModule,
    AccordionModule
  ],
  declarations: [
    CoursesComponent,
    CoursesGradesComponent,
    GradesComponent
  ]
})
export class SubjectModule { }
