import { SubjectGrades } from 'src/app/Models/Subject-grades';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';


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

  private handleError(error: HttpErrorResponse) {

    return throwError(error.error);
  }
}
