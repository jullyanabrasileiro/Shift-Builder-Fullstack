// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Shift } from '../../models';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root',
// })
// export class ShiftsService {
//   private baseUrl = 'http://localhost:3000';
//   private shifts: Observable<Shift[]>;

//   constructor(private httpClient: HttpClient) {
//     const url = `${this.baseUrl}/shifts`;
//     this.shifts = this.httpClient.get<Shift[]>(url);
//   }

//   getShifts(): Observable<Shift[]> {
//     return this.shifts;
//   }
// }

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Shift } from '../models/shift.model';
import { catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ShiftsService {
  private apiUrl = 'http://localhost:3000/shifts';

  constructor(private http: HttpClient) {}

  getShifts(): Observable<Shift[]> {
    return this.http.get<Shift[]>(this.apiUrl).pipe(
      catchError((error: HttpErrorResponse) => this.handleError(error))
    );
  }

  addShift(shift: Shift): Observable<Shift> {
    return this.http.post<Shift>(this.apiUrl, shift).pipe(
      catchError((error: HttpErrorResponse) => this.handleError(error))
    );
  }

  updateShift(id: number, shift: Shift): Observable<Shift> {
    return this.http.put<Shift>(`${this.apiUrl}/${id}`, shift).pipe(
      catchError((error: HttpErrorResponse) => this.handleError(error))
    );
  }

  deleteShift(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`).pipe(
      catchError((error: HttpErrorResponse) => this.handleError(error))
    );
  }

  getShiftById(id: number): Observable<Shift> {
    return this.http.get<Shift>(`${this.apiUrl}/${id}`).pipe(
      catchError((error: HttpErrorResponse) => this.handleError(error))
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error('Erro HTTP:', error.message);
    return throwError(() => new Error('Algo deu errado com a API.'));
  }
}
