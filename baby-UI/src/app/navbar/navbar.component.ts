import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  ChartOptions: any;
  countryCasesChartOptions: any;

  constructor() {}
  //TODO add some functionality
  ngOnInit(): void {
    this.setOptions();
  }
  setOptions() {
    this.ChartOptions = {
      title: {
        text: 'Age/weight',
      },
      legend: {},
      tooltip: {},
      dataset: [
        {
          dimensions: [
            'age',
            'weight',
            'name',
            { name: 'name', type: 'ordinal' }, // TODO: type to date
          ],
          source: [
            { age: 1, weight: 5.5, name: 'ninni' },
            { age: 2, weight: 6, name: 'ninni' },
            { age: 3, weight: 6.6, name: 'ninni' },
            { age: 3.4, weight: 5.5, name: 'ninni' },
            { age: 4, weight: 7, name: 'ninni' },
          ],
        },
        {
          dimensions: [
            'age',
            'weight',
            'name',
            { name: 'name', type: 'ordinal' }, // TODO: type to date
          ],
          source: [
            { age: 1, weight: 7, name: 'SD1' },
            { age: 2, weight: 8, name: 'SD1' },
            { age: 3, weight: 7.6, name: 'SD1' },
          ],
        },
      ],
      // The category map the first row in the dataset by default.
      xAxis: { type: 'category', name: 'Age (months)' },
      yAxis: { name: 'Weight (kg)' },
      series: [
        {
          type: 'line',
          datasetIndex: 0,
          label: {
            show: true,
          },
          encode: {
            x: 'age',
            y: 'weight',
          },
        },
        {
          type: 'line',
          datasetIndex: 1,
          label: {
            show: true,
          },
          encode: {
            x: 'age',
            y: 'weight',
          },
        },
      ],
    };
  }
}
