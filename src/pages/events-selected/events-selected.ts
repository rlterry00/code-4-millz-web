import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult } from '@ionic-native/native-geocoder';
import { Geolocation } from '@ionic-native/geolocation';

@IonicPage()
@Component({
  selector: 'page-events-selected',
  templateUrl: 'events-selected.html',
})
export class EventsSelectedPage {
  eventInfo = {
    OrganizationUserName: this.navParams.get("OrganizationUserName"),
    DisplayTitle: this.navParams.get("DisplayTitle"),
    Description: this.navParams.get("Description"),
    CategoryName:this.navParams.get("CategoryName"),
    StartTime: this.navParams.get("StartTime"),
    EndTime: this.navParams.get("EndTime"),
    AddressDisplayName: this.navParams.get("AddressDisplayName"),
    StreetAddressOne: this.navParams.get("StreetAddressOne"),
    StreetAddressTwo: this.navParams.get("StreetAddressTwo"),
    City: this.navParams.get("City"),
    State: this.navParams.get("State"),
    Zip: this.navParams.get("Zip"),
    Tags: this.navParams.get("Tags"),
    ImageUrl: this.navParams.get("ImageUrl")
  }

  eventLat = "";
  eventLong = "";
  userCheckedIn = false;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private nativeGeocoder: NativeGeocoder,
              private geolocation: Geolocation,
              public alertCtrl: AlertController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventsSelectedPage');


  this.nativeGeocoder.forwardGeocode(`${this.eventInfo.StreetAddressOne}, ${this.eventInfo.City} ${this.eventInfo.State} ${this.eventInfo.Zip}`)
  .then((coordinates: NativeGeocoderForwardResult) => {
    console.log('long: ' + coordinates[0].latitude + ' and longitude=' + coordinates[0].longitude);
    this.eventLat = coordinates[0].latitude;
    this.eventLong = coordinates[0].longitude;
  })
  .catch((error: any) => console.log(error));
  }

  checkIn() {
    this.geolocation.getCurrentPosition().then((resp) => {
   console.log("user lat: ", resp.coords.latitude)
   console.log( "user long: ", resp.coords.longitude)
   var dist = this.distance(this.eventLat, this.eventLong, resp.coords.latitude, resp.coords.longitude, "M");
   console.log("Distance", dist);
   if(dist > 1) {
     var shortDist = Math.round(dist * 100) / 100;
     let alert = this.alertCtrl.create({
       title: "You are too far away from the event!",
       subTitle: "We show you are " + shortDist + " miles away from the event location.  Please check in while you are at the event",
       buttons: ['OK']
     });
     alert.present();
   } else {
     this.checkUserIn()
   }
    }).catch((error) => {
      console.log('Error getting location', error);


    });
  }

  distance(lat1, lon1, lat2, lon2, unit) {
        var radlat1 = Math.PI * lat1/180
        var radlat2 = Math.PI * lat2/180
        var radlon1 = Math.PI * lon1/180
        var radlon2 = Math.PI * lon2/180
        var theta = lon1-lon2
        var radtheta = Math.PI * theta/180
        var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        dist = Math.acos(dist)
        dist = dist * 180/Math.PI
        dist = dist * 60 * 1.1515
        if (unit=="K") { dist = dist * 1.609344 }
        if (unit=="N") { dist = dist * 0.8684 }
        return dist
    }

    checkUserIn() {
      this.userCheckedIn = true;
    }





}
