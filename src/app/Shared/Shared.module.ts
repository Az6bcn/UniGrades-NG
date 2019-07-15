import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableListComponent } from './Components/table-list/table-list.component';
import { TableItemComponent } from './Components/table-item/table-item.component';
import { SpinnerComponent } from './Components/spinner/spinner.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TableListComponent,
    TableItemComponent,
    SpinnerComponent],
  exports: [SpinnerComponent]
})
export class SharedModule { }
