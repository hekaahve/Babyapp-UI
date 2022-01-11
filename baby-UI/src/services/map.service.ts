import { Injectable } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet-draw';

const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = iconDefault;

@Injectable({
  providedIn: 'root'
})
export class MapService {
  
  public map: any;

  constructor() { }

  initMap(): void {
    this.map = L.map('map', {center: [ 61.92411, 25.748151 ],zoom: 3}, );
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
        draw:{
          rectangle: false,
          circlemarker: false,
          circle: false,
          marker: {
            icon: L.Marker.prototype.options.icon,
          },
        },
        edit: {
            featureGroup: drawnItems
        }
    });
    this.map.addControl(drawControl);

    this.map.on(L.Draw.Event.CREATED, function (event: any) {
      drawnItems.addLayer(event.layer);
    });

  }
}
