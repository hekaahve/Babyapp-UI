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
  countryCasesChartOptions: any;
  age!: any;
  weight!: any;
  name!: any;
  chartValues: any;
  Ninni: any;
  SD2: any;

  constructor(public weightService: WeightsService) { }
  
  ngOnInit() {
    this.weightService.getAll().subscribe(data => {
      console.log(data)
      this.chartValues = data;
      this.Ninni = this.chartValues.filter((n: { name: string; }) => n.name == 'ninni')
      this.SD2 = this.chartValues.filter((n: { name: string; }) => n.name == '2SD')
      this.setOptions();
    })
  }
  clickme() {
    //TODO: saves input-values from Age, weight and name to DB
    this.weightService.addValue(this.age, this.weight, this.name);
    console.log('it does nothing',this.age, this.weight, this.name);
  }

  setOptions(){
    this.ChartOptions = {
      title: {
        text: 'Age/weight'
      },
      legend: {},
    tooltip: {},
    dataset: [
      {
        dimensions: [
          'age',
          'weight',
          'name',
          { name: 'name', type: 'ordinal' }// TODO: type to date 
        ],
        source: this.Ninni
      },
      {
        dimensions: [
          'age',
          'weight',
          'name',
          { name: 'name', type: 'ordinal' }// TODO: type to date 
        ],
        source: this.SD2
      }
    ],
    // The category map the first row in the dataset by default.
    xAxis: { type: 'category', name: "Age (months)" },
    yAxis: {name: "Weight (kg)"},
    series: [
        { type: 'line',
        datasetIndex:0,
        label:{
           show: true, 
        },
        encode:{
          x:'age',
          y:'weight'
        }
      },
      { type: 'line',
      datasetIndex:1,
      label:{
        show: true 
     },
      encode:{
        x:'age',
        y:'weight'
      }
    },
      ]
      
    }
  }
}
