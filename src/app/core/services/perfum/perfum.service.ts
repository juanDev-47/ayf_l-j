import { Injectable } from '@angular/core';
import { Fragrance } from 'src/app/components/molecules/search/search.component';
import { EMPTY, Observable, of } from 'rxjs';
import { perfums } from './data';

@Injectable({
  providedIn: 'root'
})
export class PerfumService {

  constructor() { }

  searchFragrances(): Observable<Fragrance[]> { 
    return  of(perfums);
  }

  searchFragrance(term: string): Observable<Fragrance> { 
    const found = perfums.find((item: Fragrance) => item.name === term);
    return found ? of(found) : EMPTY
  }

}
