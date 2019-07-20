import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent } from './Components/courses/courses.component';
import { CoursesGradesComponent } from './Components/courses-grades/courses-grades.component';


const routes: Routes = [
  {
    path: 'courses-grades',
    component: CoursesGradesComponent
  },
  { path: '',
    component: CoursesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubjectRoutingModule { }
