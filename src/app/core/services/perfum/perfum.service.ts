import { Injectable } from '@angular/core';
import { Fragrance } from 'src/app/components/molecules/search/search.component';
import { EMPTY, merge, Observable, of } from 'rxjs';
import { perfums } from './data';

@Injectable({
  providedIn: 'root'
})
export class PerfumService {

  constructor() { }

  searchFragrances(): Observable<Fragrance[]> { 
    return  of(perfums);
  }

  searchFragrance(term: string): Observable<Fragrance[]> { 
    let search = term.toLowerCase();

    let filteres = perfums.filter((perfum: Fragrance ) => perfum.name.toLowerCase().includes(search));
    console.log(filteres)
    
    let found = perfums.find((perfum: Fragrance ) => perfum.name.toLowerCase().includes(search));

    return of(filteres) as Observable<Fragrance[]>;
  }

}
