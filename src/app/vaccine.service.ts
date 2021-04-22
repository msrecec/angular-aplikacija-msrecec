import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Vaccine } from './vaccine';
// import { VACCINES } from './mock-vaccines';
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

  /**
   * TODO - add getVaccineBySuffix and getVaccineByType search methods to components
   *
   */

  addVaccine(vaccine: Vaccine): Observable<Vaccine> {
    return this.http.post<Vaccine>(this.vaccinesUrl, vaccine, this.httpOptions).pipe(
      tap((newVaccine: Vaccine) => console.log(`added vaccine w/ researchName=${newVaccine.researchName}`)),
      catchError(this.handleError<Vaccine>('addVaccine'))
    )
  }

  deleteVaccine(vaccine: Vaccine | string): Observable<Vaccine> {
    const researchName = typeof vaccine === 'string' ? vaccine : vaccine.researchName;
    const url = `${this.vaccinesUrl}/${researchName}`;

    return this.http.delete<Vaccine>(url, this.httpOptions).pipe(
      tap(_ => console.log(`deleted vaccine researchName=${researchName}`)),
      catchError(this.handleError<Vaccine>('deleteVaccine'))
    );
  }

  getVaccineByResearchName(researchName: String): Observable<Vaccine> {
    const url = `${this.vaccinesUrl}/${researchName}`;
    return this.http.get<Vaccine>(url, this.httpOptions).pipe(
      tap(_ => console.log(`fetched vaccine researchName=${researchName}`)),
      catchError(this.handleError<Vaccine>('getVaccine'))
    )
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(operation);
      console.error(error);
      return of(result as T);
    };
  }

}
