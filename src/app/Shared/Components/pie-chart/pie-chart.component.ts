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
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#7D0552', '#2E3CBA', '#AAAAAA']
  };
  gradient = true;
  showLegend = false;
  showLabels = true;
  isDoughnut = false;
  legendPosition = 'right';
  view: any[] = [700, 400];
  @Input() set data(data: Array<Grade>) {
    this.dataPie = this.getChartData(data);
  }

  constructor() { }

  ngOnInit() {
  }

  getChartData(grades: Array<Grade>): Array<{ 'name': string, 'value': number }> {
    const data = grades.map(x => {
      return { name: x.percentageName, value: x.grade };
    });

    return new Array<{ 'name': string, 'value': number }>(...data);
  }
}
