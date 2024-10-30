import { Component, OnInit } from '@angular/core';
import { PerfumService } from '@services/perfum/perfum.service';

export interface Fragrance {
  id?: number;
  name: string;
  brand: string;
  description?: string;
  price?: number;
  imageUrl?: string;
  stock?: number;
  category?: string;
  gender?: string;
}
@Component({
  selector: 'app-perfums-container',
  templateUrl: './perfums-container.component.html',
  styleUrl: './perfums-container.component.scss',
})
export class PerfumsContainerComponent implements OnInit {
  fragrances: Fragrance[] = [];
  fragrance: Fragrance = {name: '', brand: ''};
  isLoading = false;
  error: string | null = null;

  constructor(private perfumsService: PerfumService) {}

  ngOnInit(): void {
    this.perfumsService.searchFragrances().subscribe(
      (data) => {
        this.fragrances = data;
      },
      (error) => {
        console.error("Error al cargar los perfumes:", error);
      }
    )
  }

  onSearchTerm(term: string) {
    this.error = null;
    if (term.trim()) {
      this.perfumsService.searchFragrance(term).subscribe({
        next: (results: Fragrance) => {
          this.fragrances = [];
          this.fragrances.push(results);
          // Puedes acceder al componente hijo mediante ViewChild si necesitas
          // actualizar algo específico en él
        },
        error: (error: String) => this.handleSearchError(error),
      });
    } else {
      this.fragrances = [];
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
