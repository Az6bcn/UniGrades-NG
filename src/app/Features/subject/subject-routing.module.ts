import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent } from './Components/courses/courses.component';
import { CoursesGradesComponent } from './Components/courses-grades/courses-grades.component';
import { AuthGuard } from 'src/app/Core/Guards/auth.guard';


const routes: Routes = [

  { path: 'my-courses',
    component: CoursesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'courses-grades',
    component: CoursesGradesComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubjectRoutingModule { }
