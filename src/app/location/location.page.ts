import { Component, OnInit } from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import { fromLonLat } from 'ol/proj';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import { Icon, Style } from 'ol/style';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import {circular} from 'ol/geom/Polygon';

@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit {
  
  map!: Map;
  isMapInitialized = false;
  
  constructor() { }

  ngOnInit() {
    this.initMap();
  }
  
  async initMap() {
    const position = await this.getCurrentPosition();
    
    const markerFeature = new Feature({
      geometry: new Point(fromLonLat([position.coords.longitude, position.coords.latitude]))
    });
    
    const markerStyle = new Style({
      image: new Icon({
        src: '../../assets/marker-icon-2x.png',
        anchor: [0.1, 1],
        scale: 0.5
      })
    });
    
    markerFeature.setStyle(markerStyle);
    
    const vectorLayer = new VectorLayer({
      source: new VectorSource({
        features: [markerFeature]
      })
    });
    
    this.map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new XYZ({
            url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
          })
        }),
        vectorLayer
      ],
      view: new View({
        center: fromLonLat([position.coords.longitude, position.coords.latitude]),
        zoom: 15,
        maxZoom: 15,
      })
    });
    
    this.isMapInitialized = true;
  }

  getCurrentPosition() {
    return new Promise<GeolocationPosition>((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve(position);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }
}
