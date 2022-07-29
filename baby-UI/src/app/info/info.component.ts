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
  Ninni: any;

  constructor(public weightService: WeightsService) { }
  
  ngOnInit() {
    //TODO: fetch all, then filter in datasource-sections
    this.weightService.getNinni().subscribe(data => {
      console.log(data)
      this.Ninni = data;
      this.setOptions();
    })
  }
  clickme() {
    //TODO: saves input-values from Age, weight and name to DB
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
          x:'age',
          y:'weight'
        }
      },
      { type: 'line',
      datasetIndex:1,
      encode:{
        x:'age',
        y:'weight'
      }
    },
      ]
      
    }
  }
}
