import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, Subject, takeUntil } from 'rxjs';

export interface Fragrance {
  id?: number;
  name: string;
  brand: string;
  description?: string;
  price?: number;
  imageUrl?: string;
  stock?: number;
  category?: string;
}

export interface SearchEvent {
  term: string;
  results: Fragrance[];
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent implements OnInit, OnDestroy {

    // Inputs para personalización desde el padre
    @Input() placeholder: string = 'Ingresa el nombre de la fragancia...';
    @Input() debounceDelay: number = 300;
    
    // Outputs para comunicación con el padre
    @Output() searchResults = new EventEmitter<SearchEvent>();
    @Output() searchTermChange = new EventEmitter<string>();
    @Output() searchError = new EventEmitter<any>();
    @Output() loadingChange = new EventEmitter<boolean>();
  
    searchControl = new FormControl('');
    private destroy$ = new Subject<void>();
    isLoading = false;
  
    constructor() {}
  
    ngOnInit() {
      this.setupSearch();
    }
  
    private setupSearch() {
      this.searchControl.valueChanges.pipe(
        debounceTime(this.debounceDelay),
        distinctUntilChanged(),
        takeUntil(this.destroy$)
      ).subscribe({
        next: (term) => {
          if (term !== null) {
            this.isLoading = true;
            this.loadingChange.emit(true);
            this.searchTermChange.emit(term);
          }
        },
        error: (error) => {
          this.handleError(error);
        }
      });
    }
  
    // Método para recibir resultados desde el padre si es necesario
    updateResults(results: Fragrance[]) {
      this.isLoading = false;
      this.loadingChange.emit(false);
      this.searchResults.emit({
        term: this.searchControl.value || '',
        results
      });
    }
  
    private handleError(error: any) {
      this.isLoading = false;
      this.loadingChange.emit(false);
      this.searchError.emit(error);
    }
  
    // Método para limpiar la búsqueda
    clearSearch() {
      this.searchControl.setValue('');
    }
  
    ngOnDestroy() {
      this.destroy$.next();
      this.destroy$.complete();
    }

}
