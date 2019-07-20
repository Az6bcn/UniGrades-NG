import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './Components/spinner/spinner.component';
import { PieChartComponent } from './Components/pie-chart/pie-chart.component';
import {ChartModule} from 'primeng/chart';

@NgModule({
  imports: [
    CommonModule,
    ChartModule
  ],
  declarations: [
    SpinnerComponent,
    PieChartComponent],
  exports: [SpinnerComponent, PieChartComponent]
})
export class SharedModule { }
