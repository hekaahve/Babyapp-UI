import { Component, OnInit } from '@angular/core';
import { FruitsService } from 'src/services/fruits.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  //fruit!: FruitsService;
  fruits: any[] = [];

  constructor(public fruitService: FruitsService) { }
  
  getFruits(): void {
    this.fruits = this.fruitService.getFruits();
  }
  //TODO add some functionality
  ngOnInit(): void {
    this.getFruits();
  }

}
