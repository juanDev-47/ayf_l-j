import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonAtomComponent } from './button-atom/button-atom.component';



@NgModule({
  declarations: [
    ButtonAtomComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ButtonAtomComponent]
})
export class AtomsModule { }
