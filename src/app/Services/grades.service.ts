import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Grade } from '../Models/Grade';
import { environment } from 'src/environments/environment';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Response } from '../Models/Response';

@Injectable({
  providedIn: 'root'
})
export class GradesService {
  private baseUrl = environment.baseURL;

  constructor(private http: HttpClient) { }

AddGrade(grade: Grade) {
    const url = `${this.baseUrl}/subjectmarks`;

    return this.http.post<Response<Grade>>(url, grade)
      .pipe(
        catchError(this.handleError)
      );
  }



  private handleError(error: HttpErrorResponse) {

    return throwError(error.error);
  }
}
