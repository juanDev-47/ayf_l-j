import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { AtomsModule } from '../atoms/atoms.module';
import { PerfumsContainerComponent } from './perfums-container/perfums-container.component';
import { PerfumService } from '@services/perfum/perfum.service';
import { MoleculesModule } from "../molecules/molecules.module";



@NgModule({
  declarations: [
    NavbarComponent,
    PerfumsContainerComponent
  ],
  imports: [
    CommonModule,
    AtomsModule,
    MoleculesModule
],
  exports: [NavbarComponent, PerfumsContainerComponent],
  providers: [PerfumService]
})
export class OrganismsModule { }
