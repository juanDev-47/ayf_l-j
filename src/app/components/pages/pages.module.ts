import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { AtomsModule } from '../atoms/atoms.module';
import { MoleculesModule } from '../molecules/molecules.module';
import { OrganismsModule } from '../organisms/organisms.module';
import { PerfumService } from '../../core/services/perfum/perfum.service';
import { PerfumsComponent } from './dashboard/perfums/perfums.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DashboardComponent,
    PerfumsComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
    AtomsModule,
    MoleculesModule,
    OrganismsModule
  ],
  providers: [PerfumService]
})
export class PagesModule { }
