import { Component, OnInit } from '@angular/core';
import { FruitsService } from 'src/services/fruits.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  
  constructor(public fruitService: FruitsService) { }
  
  //TODO add some functionality
  ngOnInit(): void {
    this.fruitService.getFruits();
  }

}
