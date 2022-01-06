import { Injectable } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet-draw';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  public map: any;

  constructor() { }

  initMap(): void {
    this.map = L.map('map', {
      center: [ 61.92411, 25.748151 ],
      zoom: 3
    });
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
    // FeatureGroup is to store editable layers
    var drawnItems = new L.FeatureGroup();
    this.map.addLayer(drawnItems);
    var drawControl = new L.Control.Draw({
        edit: {
            featureGroup: drawnItems
        }
    });
    this.map.addControl(drawControl);//TODO add icons to drawcontrol
  }
}
