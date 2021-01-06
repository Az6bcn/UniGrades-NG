import { Component, OnInit, Input } from '@angular/core';
import { Grade } from 'src/app/Models/Grade';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
  dataPie: Array<{ 'name': string, 'value': number }>;
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
  gradient = true;
  showLegend = false;
  showLabels = true;
  isDoughnut = false;
  legendPosition = 'right';
  view: any[] = [700, 400];
  @Input() set data(data: Array<Grade>) {
    // this.dataPie = this.parsePieChartData(data);
    this.dataPie = this.getChartData(data);
  }

  constructor() { }

  ngOnInit() {
  }
  // parsePieChartData(grades: Array<Grade>) {
  //   const labelsToShow = grades.map(x => x.percentageName);
  //   const dataToPlot = grades.map(x => x.grade);

  //   const randomColorsToPlotData = new Array<string>();

  //   // tslint:disable-next-line: prefer-for-of
  //   for (let i = 0; i < dataToPlot.length; i++) {
  //     randomColorsToPlotData.push(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
  //   }

  //   return {
  //     labels: labelsToShow,
  //     datasets: [
  //       {
  //         data: dataToPlot,
  //         backgroundColor: [...randomColorsToPlotData],
  //         hoverBackgroundColor: [...randomColorsToPlotData]
  //       }
  //     ]
  //   };
  // }

  getChartData(grades: Array<Grade>): Array<{ 'name': string, 'value': number }> {
    const data = grades.map(x => {
      return { name: x.percentageName, value: x.grade };
    });

    return new Array<{ 'name': string, 'value': number }>(...data);
  }
}
