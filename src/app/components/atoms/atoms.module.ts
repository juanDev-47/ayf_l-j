import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonAtomComponent } from './button-atom/button-atom.component';
import { BannerComponent } from './banner/banner.component';



@NgModule({
  declarations: [
    ButtonAtomComponent,
    BannerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ButtonAtomComponent,BannerComponent]
})
export class AtomsModule { }
