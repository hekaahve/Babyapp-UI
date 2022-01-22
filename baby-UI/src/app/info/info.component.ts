import { Component, OnInit } from '@angular/core';
import { FruitsService } from 'src/services/fruits.service';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  ChartOptions: any;

  constructor(public fruitService: FruitsService) { }
  
  //TODO add some functionality
  ngOnInit(): void {
    this.fruitService.getFruits();
  }
  chartOptions: EChartsOption = {
    title: {
      text: 'Age/weight'
    },
    legend: {},
  tooltip: {},
  dataset: {
    // Provide a set of data.
    //dimensions: ['Age', '0.1', '0.2', '0.3'],
    source: [
      {"Age":"0", "Ninni":3.789, "+2SD":4.5, "+1SD":4},
      {"Age":"0.1", "Ninni":3.950},
      {"Age":"0.2", "Ninni":4.76},
      {"Age":"0.3", "Ninni":5.285},

      {"Age":"0", "+2SD":4.5},
      {"Age":"0.1", "+2SD":5.6},
      {"Age":"0.2", "+2SD":7},
      {"Age":"0.3", "+2SD":8},
      {"Age":"0.4", "+2SD":8.9},
      {"Age":"0.5", "+2SD":9.5},

      {"Age":"0", "+1SD":4},
      {"Age":"0.1", "+1SD":5.1},
      {"Age":"0.2", "+1SD":5.5},
      {"Age":"0.3", "+1SD":7.2},
      {"Age":"0.4", "+1SD":8},
      {"Age":"0.5", "+1SD":8.6},
    ]
  },
  // Declare an x-axis (category axis).
  // The category map the first row in the dataset by default.
  xAxis: { type: 'category', name: "Age (months)" },
  // Declare a y-axis (value axis).
  yAxis: {name: "Weight (kg)"},
  // Declare several 'bar' series,
  // every series will auto-map to each rows by default. TODO: Continue ECharts Docs/Datasets
  series: [{ type: 'line', color:'pink' }, { type: 'line' }, { type: 'line' }]
  };

}
