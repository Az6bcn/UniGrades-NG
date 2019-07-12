import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubjectRoutingModule } from './subject-routing.module';
import { CoursesComponent } from './Components/courses/courses.component';
import { CoursesGradesComponent } from './Components/courses-grades/courses-grades.component';
import { GradesComponent } from './Components/grades/grades.component';


@NgModule({
  declarations: [CoursesComponent, CoursesGradesComponent, GradesComponent],
  imports: [
    CommonModule,
    SubjectRoutingModule
  ],
})
export class SubjectModule { }
