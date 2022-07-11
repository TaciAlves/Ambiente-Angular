import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor() { }

  getPeople(): Observable<any> {
    let peopleArray = [
      {
        firstName: 'Taciara',
        lastName: 'Alves',
        age: 26
      },
      {
        firstName: 'Deborah',
        lastName: 'Eolalia',
        age: 20
      },
      {
        firstName: 'José',
        lastName: 'Alves',
        age: 30
      },
      {
        firstName: 'Lucas',
        lastName: 'Santos',
        age: 35
      }
    ]
    return of(peopleArray);
  }
}
