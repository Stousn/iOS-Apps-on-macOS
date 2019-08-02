import { Injectable } from '@angular/core'
import { Geolocation } from '@ionic-native/geolocation/ngx'

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private geolocation: Geolocation) { }

  getCurrentLocation() {

    // uses geolocation from ionic-native

    // var options = {
    //   enableHighAccuracy: true,
    //   timeout: 5000,
    //   maximumAge: 0
    // };


    // return new Promise((resolve, reject) => {
    //   this.geolocation.getCurrentPosition().then((resp) => {
    //     // resp.coords.latitude
    //     // resp.coords.longitude
    //     resolve(resp)
    //   }).catch((err) => {
    //     console.log('Error getting location', err)
    //     reject(err)
    //   })
    // })

    // uses Navigator geolocation
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resp => {
        // resp.coords.latitude
        // resp.coords.longitude
        resolve(resp)
      }, err => {
        console.log('Error getting location', err)
        reject(err)
      })
    })
  }
}
