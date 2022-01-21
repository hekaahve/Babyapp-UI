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
    xAxis: {
      type: 'category',
      data: ['0', '0.1', '0.2', '0.3', '0.4', '0.5', '0.6', '0.7']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: '2SD',
        type: 'line',    
        data: [4.5, 5.7, 7, 8.8, 9.6, 10.1, 10.5],
        smooth: true
      },
      {
        name: '1SD',
        type: 'line',
        data: [4.5, 5.7, 7, 8.8, 9.6, 10.1, 10.5],
        smooth: true
      },
      {
        name: '0SD',
        type: 'line',
        data: [4.5, 5.7, 7, 8.8, 9.6, 10.1, 10.5],
        smooth: true
      },
      {
        name: '-1SD',
        type: 'line',
        data: [4.5, 5.7, 7, 8.8, 9.6, 10.1, 10.5],
        smooth: true
      },
      {
        name: '-2SD',
        type: 'line',
        data: [4.5, 5.7, 7, 8.8, 9.6, 10.1, 10.5],
        smooth: true
      },
      {
        name: 'Ninni',
        type: 'line',
        data: [3.78, 3.526, 3.950, 4.51, 4.76, 5.285],
        smooth: true
      }
    ]
  }

}
