import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { SideEffect } from './side-effect';

@Injectable({
  providedIn: 'root'
})
export class SideEffectService {

  private sideEffectsUrl = 'http://localhost:8080/side-effect';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getSideEffects(): Observable<SideEffect[]> {
    return this.http.get<SideEffect[]>(this.sideEffectsUrl)
      .pipe(
        tap(_ => console.log('fetched side effects')),
        catchError(this.handleError<SideEffect[]>('getSideEffects', []))
      );
  }

  /**
   * Gets side effect by short description
   *
   * @param shortDescription
   * @returns sideEffect by shortDescription
   */

  getSideEffectByShortDescription(shortDescription: String): Observable<SideEffect> {
    const url = `${this.sideEffectsUrl}/${shortDescription}`;
    return this.http.get<SideEffect>(url, this.httpOptions).pipe(
      tap(_ => console.log(`fetched side effects shortDescription=${shortDescription}`)),
      catchError(this.handleError<SideEffect>('getSideEffect'))
    )
  }

  /**
   * Adds new Side Effect
   *
   * @param sideEffect
   * @returns new SideEffect
   */

  addSideEffect(sideEffect: SideEffect): Observable<SideEffect> {
    return this.http.post<SideEffect>(this.sideEffectsUrl, sideEffect, this.httpOptions).pipe(
      tap((newSideEffect: SideEffect) => console.log(`added sideEffect w/ shortDescription=${newSideEffect.shortDescription}`)),
      catchError(this.handleError<SideEffect>('addSideEffect'))
    )
  }

  /**
   * Deletes side effect by short description
   *
   * @param sideEffect
   * @returns
   */

  deleteSideEffect(sideEffect: SideEffect | string): Observable<SideEffect> {
    const shortDescription = typeof sideEffect === 'string' ? sideEffect : sideEffect.shortDescription;
    const url = `${this.sideEffectsUrl}/${shortDescription}`;

    return this.http.delete<SideEffect>(url, this.httpOptions).pipe(
      tap(_ => console.log(`deleted sideEffect shortDescription=${shortDescription}`)),
      catchError(this.handleError<SideEffect>('deleteSideEffect'))
    );
  }


  /**
   * TODO - Import this method from a ts file and share it among
   * other services as a utility method
   *
   * @param operation
   * @param result
   * @returns
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(operation);
      console.error(error);
      return of(result as T);
    };
  }
}
