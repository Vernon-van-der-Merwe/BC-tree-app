import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css'],
})
export class AnalyticsComponent implements OnInit {
  lineChartData: ChartDataSets[] = [
    { data: [100, 135, 214, 189, 250, 376], label: 'Visits' },
  ];
  lineChartLabels: Label[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
  ];
  lineChartOptions = {
    responsive: true,
  };
  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: '#ffffff',
    },
  ];
  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';

  lineChartData2: ChartDataSets[] = [
    { data: [100, 135, 214, 189, 250, 376], label: 'Visits' },
  ];
  lineChartLabels2: Label[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
  ];
  lineChartOptions2 = {
    responsive: true,
  };
  lineChartColors2: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'blue',
    },
  ];
  lineChartLegend2 = true;
  lineChartPlugins2 = [];
  lineChartType2 = 'bar';
  constructor() {}

  ngOnInit(): void {}
}
