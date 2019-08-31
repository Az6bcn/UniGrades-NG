import { Subject } from './../Models/Subject';
import { SubjectGrades } from 'src/app/Models/Subject-grades';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError, } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import {Response} from './../Models/Response';
import { Grade } from '../Models/Grade';

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {
  private baseUrl = environment.baseURL;
  constructor(private http: HttpClient) { }

  GetSubjectGrades(userId: string): Observable<Array<SubjectGrades>> {

    const url = `${this.baseUrl}/subjects/subjectsgrades/${userId}`;

    return this.http.get<Array<SubjectGrades>>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  GetSubjects(userId: string): Observable<Array<Subject>> {

    const url = `${this.baseUrl}/subjects/${userId}`;

    return this.http.get<Array<Subject>>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  AddSubject(subject: Subject) {
    const url = `${this.baseUrl}/subjects`;

    return this.http.post<Response<Subject>>(url, subject)
      .pipe(
        catchError(this.handleError)
      );
  }



  DeleteCourse(courseId: number): Observable<Response<Subject>> {
    const url = `${this.baseUrl}/subjects/${courseId}`;

    return this.http.delete<Response<Subject>>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  EditCourse(course: Subject) {
    const url = `${this.baseUrl}/subjects`;

    return this.http.put<Response<Subject>>(url, course)
      .pipe(
        catchError(this.handleError)
      );
  }

  GetSubjectById(id: number): Observable<Subject> {
    const url = `${this.baseUrl}/subjects/${id}`;

    return this.http.get<Subject>(url)
      .pipe(
        catchError(this.handleError)
      );

  }

  private handleError(error: HttpErrorResponse) {

    return throwError(error.error);
  }
}
