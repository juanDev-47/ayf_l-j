import { Injectable } from '@angular/core';
import { Fragrance } from 'src/app/components/molecules/search/search.component';
import { Observable, of } from 'rxjs';
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

    
    if(search == "todos") return of(perfums);

    let filteres = perfums.filter((perfum: Fragrance ) => (perfum.name.toLowerCase().includes(search) || perfum.gender.toLowerCase().includes(search) || perfum.brand.toLowerCase().includes(search) ));


    return of(filteres) as Observable<Fragrance[]>;
  }

}
