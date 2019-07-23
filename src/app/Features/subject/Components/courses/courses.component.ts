import { BehaviorSubject } from 'rxjs';
import { UserService } from './../../../../Core/Services/user.service';
import { Subject } from './../../../../Models/Subject';
import { SubjectsService } from './../../../../Services/subjects.service';
import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
courses: Array<Subject>;
isLoading$ = new BehaviorSubject<boolean>(true);
  constructor(private subjectService: SubjectsService,
              private userService: UserService) { }

  ngOnInit() {

    const userID = this.userService.currentUser().id;

    this.subjectService.GetSubjects(userID)
      .pipe(
        finalize(() => this.isLoading$.next(false))
      )
      .subscribe((response: Array<Subject>) => {
        this.courses = response;
        console.log('courses ', response);
      });
  }

  addGrade(courseId: number) {

  }
  editCourse(course: Subject) {

  }
  deleteCourse(courseId: number) {

  }
}
