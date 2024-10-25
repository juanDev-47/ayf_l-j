import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { AtomsModule } from '../atoms/atoms.module';



@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    AtomsModule
  ],
  exports: [NavbarComponent]
})
export class OrganismsModule { }
