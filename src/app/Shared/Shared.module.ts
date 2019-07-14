import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcordionComponent } from './Components/acordion/acordion.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AcordionComponent],
  exports: [AcordionComponent]
})
export class SharedModule { }
