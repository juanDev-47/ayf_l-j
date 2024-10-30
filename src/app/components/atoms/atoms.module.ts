import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonAtomComponent } from './button-atom/button-atom.component';
import { BannerComponent } from './banner/banner.component';
import { CardAtomComponent } from './card-atom/card-atom.component';



@NgModule({
  declarations: [
    ButtonAtomComponent,
    BannerComponent,
    CardAtomComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ButtonAtomComponent,BannerComponent, CardAtomComponent]
})
export class AtomsModule { }
