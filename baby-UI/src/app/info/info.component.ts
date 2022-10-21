import { Component, OnInit, ViewChild } from '@angular/core';
import { WeightsService } from 'src/services/weights.service';
import { EChartsOption } from 'echarts';
import { MatTable } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  id: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { id: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { id: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { id: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { id: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
];

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
})
export class InfoComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = [...ELEMENT_DATA];
  @ViewChild(MatTable) table!: MatTable<PeriodicElement>;

  ChartOptions: any;
  age!: any;
  weight!: any;
  name!: any;
  chartValues: any;
  Ninni: any;
  SD2: any;

  constructor(public weightService: WeightsService) {}

  ngOnInit() {
    this.weightService.getAll().subscribe((data) => {
      console.log(data);
      this.chartValues = data;
      this.Ninni = this.chartValues.filter(
        (n: { name: string }) => n.name == 'ninni'
      );
      this.SD2 = this.chartValues.filter(
        (n: { name: string }) => n.name == '2SD'
      );
      this.setOptions();
    });
  }
  addData() {
    const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
    this.dataSource.push(ELEMENT_DATA[randomElementIndex]);
    this.table.renderRows();
  }
  removeData() {
    this.dataSource.pop();
    this.table.renderRows();
  }
  clickme() {
    this.weightService
      .addValue(this.age, this.weight, this.name)
      .subscribe((res) => console.log(res));
    window.location.reload();
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
          source: this.Ninni,
        },
        {
          dimensions: [
            'age',
            'weight',
            'name',
            { name: 'name', type: 'ordinal' }, // TODO: type to date
          ],
          source: this.SD2,
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
