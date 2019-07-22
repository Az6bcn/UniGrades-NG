import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './Components/spinner/spinner.component';
import { PieChartComponent } from './Components/pie-chart/pie-chart.component';
import {ChartModule} from 'primeng/chart';
import { CustomCardComponent } from './Components/custom-card/custom-card.component';

@NgModule({
  imports: [
    CommonModule,
    ChartModule
  ],
  declarations: [
    SpinnerComponent,
    PieChartComponent,
    CustomCardComponent],
  exports: [SpinnerComponent, PieChartComponent, CustomCardComponent]
})
export class SharedModule { }
