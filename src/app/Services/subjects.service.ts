
import { Subject } from './../Models/Subject';
import { SubjectGrades } from 'src/app/Models/Subject-grades';
import { HttpClient, HttpErrorResponse, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError, } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError, map } from 'rxjs/operators';
import {Response} from './../Models/Response';
import { PaginationInfo, PaginatedResult } from '../Models/PaginationInfo';

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {
  private baseUrl = environment.baseURL;
  constructor(private http: HttpClient) { }

  GetSubjectGrades(userId: string, pageNumber?: number, pageSize?: number): Observable<PaginatedResult<SubjectGrades>> {

    const paginatedResult = new PaginatedResult<SubjectGrades>();

    const url = `${this.baseUrl}/subjects/subjectsgrades/${userId}`;

    const params = this.setHttpQueryParams(pageNumber, pageSize);

    //  observe: 'response' ==>
    // Tells HttpClient that you want the full response with the observe option, now return HttpResponse.
    // which allows you to acces sthe full http response i.e headers, body, status code etc
    return this.http.get<Array<SubjectGrades>>(url, { observe: 'response', params})
      .pipe(
        map(response => {
          // get data from body
          paginatedResult.result = response.body;
          paginatedResult.paginationInfo = this.getPaginationInfoFromHttpResponseHeader(response);
          return paginatedResult;
        }),
        catchError(this.handleError)
      );
  }

  GetSubjects(userId: string, pageNumber?: number, pageSize?: number): Observable<PaginatedResult<Subject>> {

    const paginatedResult = new PaginatedResult<Subject>();
    const url = `${this.baseUrl}/subjects/${userId}`;

    const params = this.setHttpQueryParams(pageNumber, pageSize);

    //  observe: 'response' ==>
    // Tells HttpClient that you want the full response with the observe option, now return HttpResponse.
    // which allows you to acces sthe full http response i.e headers, body, status code etc
    return this.http.get<Array<Subject>>(url, {observe: 'response', params})
      .pipe(
        map(response => {
          paginatedResult.result = response.body;
          paginatedResult.paginationInfo = this.getPaginationInfoFromHttpResponseHeader(response);
          return paginatedResult;
        }),
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
    const url = `${this.baseUrl}/subjects/${course.id}`;

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
    if (error.statusText === 'Unknown Error') {
      return throwError('Unknown Error');
    }
    return throwError(error.error);
  }

  private setHttpQueryParams(pageNumber: number, pageSize: number): HttpParams {

    if ( pageNumber === undefined || pageSize === undefined) {
      // set to default value
      pageNumber = 1;
      pageSize = 5;
    }

    // send http parameters: will map to our query string in the API method.
    const queryParams = new HttpParams()
      .set('pageNumber', pageNumber.toString())
      .set('pageSize', pageSize.toString());

    return queryParams;
  }


  private getPaginationInfoFromHttpResponseHeader<T>(response: any): PaginationInfo {
    // tslint:disable-next-line: no-angle-bracket-type-assertion
    if ((<HttpResponse<Array<T>>> response).headers.has('pagination')) {
      const stringPaginationInfo = response.headers.get('pagination');
      // tslint:disable-next-line: no-angle-bracket-type-assertion
      const paginationInfo = <PaginationInfo> JSON.parse(stringPaginationInfo);

      return paginationInfo;
    }
  }
}
