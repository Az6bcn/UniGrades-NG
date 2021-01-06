import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './Components/spinner/spinner.component';
import { PieChartComponent } from './Components/pie-chart/pie-chart.component';
import { CustomCardComponent } from './Components/custom-card/custom-card.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { AlertModule } from 'ngx-bootstrap/alert';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  imports: [
    CommonModule,
    TooltipModule.forRoot(),
    AlertModule.forRoot(),
    NgxChartsModule
  ],
  declarations: [
    SpinnerComponent,
    PieChartComponent,
    CustomCardComponent,
  ],
  exports: [SpinnerComponent, PieChartComponent, CustomCardComponent]
})
export class SharedModule { }
