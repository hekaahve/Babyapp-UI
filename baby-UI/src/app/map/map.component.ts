import { Component, OnInit } from '@angular/core';
import { MapService } from 'src/services/map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor(public map: MapService) { }

  ngOnInit(): void {
    this.map.initMap()
  }

}
