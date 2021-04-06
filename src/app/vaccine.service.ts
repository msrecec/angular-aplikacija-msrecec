import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Vaccine } from './vaccine';
import { VACCINES } from './mock-vaccines';

@Injectable({
  providedIn: 'root'
})
export class VaccineService {

  constructor() { }

  getVaccines(): Observable<Vaccine[]> {
    return of(VACCINES);
  }

}
