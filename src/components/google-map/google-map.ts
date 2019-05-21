import { Component, ViewChild, ElementRef } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GoogleMapComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
declare var google;
 @Component({
  selector: 'google-map',
  templateUrl: 'google-map.html'
})
export class GoogleMapComponent {
  @ViewChild("map") mapElenent ;

  map: any;
  map2: any;
  end  = 'chicago,il';
  latitude: number
  longitude: number
  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;

  constructor(private geolocation: Geolocation, public navCtrl: NavController, public navParams: NavParams) {
  //  this.location();
  }
  ngOnInit() {
    // this.initMap();
    this.location();
  }

  location() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.latitude = resp.coords.latitude
      this.longitude = resp.coords.longitude
      console.log("ละติ"+this.latitude);
      console.log("ลองติ"+this.longitude);
      this.initMap() ;
    }).catch((error) => {
      console.log('Error getting location', error);
    });

    let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
      // data.coords.latitude
      // data.coords.longitude
    });
  }
  calculateAndDisplayRoute() {
    this.directionsService.route({
      destination: this.map,
      travelMode: 'DRIVING'
    }, (response, status) => {
      if (status === 'OK') {
        this.directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }

  

  initMap() {
   
    let coords = new google.maps.LatLng(this.latitude,this.longitude);
    // let coords2 = new google.maps.LatLng(16.467908, 102.829960);
   
    let mapOptions: google.maps.MapOptions = {
      center: coords,
      zoom: 14,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }


    this.map = new google.maps.Map(this.mapElenent.nativeElement, mapOptions)
    
    

    let marker: google.maps.Marker = new google.maps.Marker({
      map: this.map,
      
      position: coords
    })

    // let marker2: google.maps.Marker = new google.maps.Marker({
    //   map: this.map,
    //   position: coords2

  // })
  }
  
}