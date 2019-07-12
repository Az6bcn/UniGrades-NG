import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesGradesComponent } from './Components/courses-grades/courses-grades.component';
import { CoursesComponent } from './Components/courses/courses.component';


const routes: Routes = [
  { path: '',
    component: CoursesGradesComponent
  },
  {
    path: 'courses',
    component: CoursesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubjectRoutingModule { }
