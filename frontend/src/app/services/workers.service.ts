import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Worker } from '../models/worker.model';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class WorkersService {
  private apiUrl = 'http://localhost:3000/workers';

  constructor(private http: HttpClient) {}

  getWorkers(): Observable<Worker[]> {
    return this.http.get<Worker[]>(this.apiUrl).pipe(
      catchError((error: HttpErrorResponse) => this.handleError(error))
    );
  }
  getWorkerById(id: number): Observable<Worker> {
    return this.http.get<Worker>(`${this.apiUrl}/${id}`).pipe(
      catchError((error: HttpErrorResponse) => this.handleError(error))
    );
  }

  addWorker(worker: Worker): Observable<Worker> {
    return this.http.post<Worker>(this.apiUrl, worker).pipe(
      catchError((error: HttpErrorResponse) => this.handleError(error))
    );
  }

  updateWorker(id: number, worker: Worker): Observable<Worker> {
    return this.http.put<Worker>(`${this.apiUrl}/${id}`, worker).pipe(
      catchError((error: HttpErrorResponse) => this.handleError(error))
    );
  }

  deleteWorker(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`).pipe(
      catchError((error: HttpErrorResponse) => this.handleError(error))
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error('Erro HTTP:', error.message);
    return throwError(() => new Error('Something wrong with the API.'));
  }
}
