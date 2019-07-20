import { Component, OnInit, Input } from '@angular/core';
import { Grade } from 'src/app/Models/Grade';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
  dataPie: any;
  @Input() set data(data: Array<Grade>) {
    this.dataPie = this.parsePieChartData(data);
  }
data: any;
  constructor() { }

  ngOnInit() {
  }
  parsePieChartData(grades: Array<Grade>) {
    console.log(grades);
    const labelsToShow = grades.map(x => x.percentageName);
    const dataToPlot = grades.map(x => x.grade);

    return {
      labels: labelsToShow,
      datasets: [
        {
          data: dataToPlot,
          backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#24fc03',
            '#c603fc'
          ],
          hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#24fc03',
            '#c603fc'
          ]
        }
      ]
    };
  }


}
