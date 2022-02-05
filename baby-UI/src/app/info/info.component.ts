import { Component, OnInit } from '@angular/core';
import { WeightsService } from 'src/services/weights.service';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  ChartOptions: any;

  constructor(public weightService: WeightsService) { }
  
  //TODO add some functionality
  ngOnInit(): void {
  }
  chartOptions: EChartsOption = {
    title: {
      text: 'Age/weight'
    },
    legend: {},
  tooltip: {},
  dataset: [
    {
      dimensions: [
        'Age',
        'Weight',
        'Name',
        { name: 'Name', type: 'ordinal' }// TODO: type to date 
      ],
      // Provide a set of data.
      source: this.weightService.getNinni()
    },
    {
      dimensions: [
        'Age',
        'Weight',
        'Name',
        { name: 'Name', type: 'ordinal' }// TODO: type to date 
      ],
      // Provide a set of data.
      source: this.weightService.getPos2SD()
    }
  ],
  // The category map the first row in the dataset by default.
  xAxis: { type: 'category', name: "Age (months)" },
  yAxis: {name: "Weight (kg)"},
  series: [
      { type: 'line',
      datasetIndex:0,
      encode:{
        x:'Age',
        y:'Weight'
      }
    },
    { type: 'line',
    datasetIndex:1,
    encode:{
      x:'Age',
      y:'Weight'
    }
  },
    ]
  };

}
