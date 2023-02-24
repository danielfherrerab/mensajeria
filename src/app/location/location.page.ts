import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { tileLayer, latLng, Marker, icon } from 'leaflet';


@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})

export class LocationPage implements OnInit {

  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: 'OpenStreetMap'
      })
    ],
    zoom: 13,
    center: latLng(51.505, -0.09)
  };

  lat = 51.5;
  lng = -0.09;
  
  constructor() {
    
  }

  ngOnInit(): void {
    this.ionViewDidEnter();
  }

  ionViewDidEnter() {
    const map = L.map('mapid', this.options).setView([51.505, -0.09], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: 'OpenStreetMap'
    }).addTo(map);

    L.marker([51.5, -0.09]).addTo(map)
      .bindPopup('Una bonita ventana emergente CSS3.<br> Fácilmente personalizable.')
      .openPopup();
  }
}
