import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Vaccine } from './vaccine';
import { VACCINES } from './mock-vaccines';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VaccineService {

  private vaccinesUrl = 'http://localhost:8080/vaccine';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getVaccines(): Observable<Vaccine[]> {
    // return of(VACCINES);
    return this.http.get<Vaccine[]>(this.vaccinesUrl)
      .pipe(
        tap(_ => console.log('fetched vaccines')),
        catchError(this.handleError<Vaccine[]>('getVaccines', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(operation);
      console.error(error);
      return of(result as T);
    };
  }

}
