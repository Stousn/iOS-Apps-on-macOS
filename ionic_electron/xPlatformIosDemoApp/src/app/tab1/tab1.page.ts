import { Component } from '@angular/core';
import { WeatherService, RootObject } from '../services/weather/weather.service';
import { LoadingController, AlertController } from '@ionic/angular';
import { StorageService } from '../services/storage/storage.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  providers: [WeatherService]
})

/**
 * Search Weather Component
 */
export class Tab1Page {

  weatherData: RootObject

  weatherService: any

  imgURL: string

  isLoaderOpen: boolean

  error = false

  constructor(weatherService: WeatherService, public loadingController: LoadingController,
    public alertController: AlertController, public storageService: StorageService) {
    this.weatherService = weatherService

    this.init()
  }

  /** initialize component */
  private async init() {

    // for testing only: loads weather data for Leoben
    // this.weatherService.getWeather()
    // .subscribe(data => {
    //   this.weatherData = <RootObject>data
    //   console.log(data)
    // })

    this.loadCachedWeather()
    this.loadWeather()

  }

  /** load weather from location */
  loadWeather() {
    this.weatherService.getWeatherForLocation()
      .then(observable => {
        try {
          observable.subscribe(data => {
            this.weatherData = <RootObject>data
            console.log(data)
            this.imgURL = this.weatherService.getWeatherIconUrl(this.weatherData.weather[0].icon)

            this.cacheWeather(data, this.imgURL)
          })
        } catch (err) {
          throw observable.message
        }
      }).catch(err => {
        this.error = true
        this.presentPrompt('We are unable to locate your device. Please use the search tab and search manually.\n(' + err + ')')
      })
  }

  /** save weather data and imageURL in storage */
  cacheWeather(data: RootObject, imageURL: string) {
    this.storageService.save(this.storageService.LOCATION_WEATHER, data)
    this.storageService.save(this.storageService.LOCATION_WEATHER_IMAGE, imageURL)
  }

  /** load old weather data and imageURL from storage and update UI */
  loadCachedWeather() {
    this.storageService.load(this.storageService.LOCATION_WEATHER).then(data => {
      if (data) {
        this.weatherData = <RootObject> data
      }
    })
    this.storageService.load(this.storageService.LOCATION_WEATHER_IMAGE).then(url => {
      if (url) {
        this.imgURL = url
      }
    })

  }

  /** show UI message for location error  */
  async presentPrompt(message: string) {
    const alert = await this.alertController.create({
      header: 'Location error',
      message: message,
      buttons: [{
        text: 'Ok'
      }]
    });
    await alert.present()
  }

}
