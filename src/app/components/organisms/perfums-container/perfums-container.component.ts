import { Component, OnInit } from '@angular/core';
import { PerfumService } from '@services/perfum/perfum.service';

export interface Fragrance {
  id: number;
  name: string;
  brand: string;
  description: string;
  price: number;
  imageUrl: string;
  stock: number;
  category: string;
  gender: string;
}
@Component({
  selector: 'app-perfums-container',
  templateUrl: './perfums-container.component.html',
  styleUrl: './perfums-container.component.scss',
})
export class PerfumsContainerComponent implements OnInit {
  fragrances: Fragrance[] = [];
  isLoading = false;
  error: string | null = null;
  opcionesFiltro = [
    { value: 'Todos', label: 'Todos' },
    { value: 'Mujer', label: 'Mujer' },
    { value: 'Hombre', label: 'Hombre' },
    { value: 'Unisex', label: 'Unisex' }
  ];
  limpiar!: boolean;

  constructor(private perfumsService: PerfumService) {}

  ngOnInit(): void {
    this.getPerfumData();
  }

  getPerfumData(){
    this.perfumsService.searchFragrances().subscribe(
      (data) => {
        this.fragrances = data;
      },
      (error) => {
        console.error("Error al cargar los perfumes:", error);
      }
    )
  }

  onFiltroChange(valor: string) {
    this.onClear();
    setTimeout(() => this.onSearchTerm(valor), 400);
    
  }

  onClear(){
    this.limpiar = true;
    setTimeout(() => this.limpiar = false, 0);
  }

  onSearchTerm(term: string) {
    this.error = null;
    if (term.trim()) {
      this.perfumsService.searchFragrance(term).subscribe({
        next: (results: Fragrance[]) => {
          this.fragrances = [];          
          this.fragrances = results;
          this.onLoadingChange(false);
        },
        // error: (error: String) => this.handleSearchError(error),
    });
    } else {
      this.onLoadingChange(false);
      this.getPerfumData();
    }
  }

  onLoadingChange(loading: boolean) {
    this.isLoading = loading;
  }

  handleSearchError(error: any) {
    this.error = 'Error al buscar fragancias. Por favor, intenta nuevamente.';
    console.error('Search error:', error);
  }

}
