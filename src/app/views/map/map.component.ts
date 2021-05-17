import { Component, OnInit } from '@angular/core';
import {latLng, LayerGroup, layerGroup, tileLayer} from 'leaflet';
import * as L from 'leaflet';
import 'leaflet-rotatedmarker';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  planeIcon = L.icon({
    iconUrl: 'assets/planes/plane.png',
    iconSize: [32, 32]
  });

  planesLayer: LayerGroup = layerGroup();
  mapLayer = tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/light_all/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' });


  layersControl = {
    overlays: {
      Planes: this.planesLayer
    }
  };

  options = {
    layers: [this.mapLayer],
    zoom: 5,
    center: latLng(52, 0),
  };

  constructor() { }

  ngOnInit(): void {
    L.marker([52, 0], {rotationAngle: 45, icon: this.planeIcon, }).addTo(this.planesLayer);
  }

}
