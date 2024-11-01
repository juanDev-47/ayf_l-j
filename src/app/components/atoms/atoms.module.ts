import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonAtomComponent } from './button-atom/button-atom.component';
import { BannerComponent } from './banner/banner.component';
import { CardAtomComponent } from './card-atom/card-atom.component';
import { WsbuttonAtomComponent } from './wsbutton-atom/wsbutton-atom.component';



@NgModule({
  declarations: [
    ButtonAtomComponent,
    BannerComponent,
    CardAtomComponent,
    WsbuttonAtomComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ButtonAtomComponent,BannerComponent, CardAtomComponent, WsbuttonAtomComponent]
})
export class AtomsModule { }
