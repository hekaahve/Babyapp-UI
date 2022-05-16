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
  age!: any;
  weight!: any;
  name!: any;
  Ninni: any[] = [{id: 1,"age":"0","weight":2.5, "name":"ninni"}];

  constructor(public weightService: WeightsService) { }
  
  ngOnInit() {
    //gets info to chart, but chart loads first. FIX
    this.weightService.getValue().subscribe(data => {
      console.log(data)
      this.Ninni = data;
    })
  }
  clickme() {
    //TODO: saves input-values from Age, weight and name to DB
    console.log('it does nothing',this.age, this.weight, this.name);
    console.log(this.Ninni)
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
        'age',
        'weight',
        'name',
        { name: 'name', type: 'ordinal' }// TODO: type to date 
      ],
      //lataa tämän ensin ennenkuin menee ngInitiin?
      source: this.Ninni
    },
    {
      dimensions: [
        'age',
        'weight',
        'name',
        { name: 'name', type: 'ordinal' }// TODO: type to date 
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
  };

}
