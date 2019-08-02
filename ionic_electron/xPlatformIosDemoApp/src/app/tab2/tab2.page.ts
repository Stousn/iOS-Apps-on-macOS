import { Component } from '@angular/core';
import { WeatherService, RootObject } from '../services/weather/weather.service';
import { AlertController } from '@ionic/angular';
import { StorageService } from '../services/storage/storage.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  providers: [WeatherService]
})
export class Tab2Page {

  weatherData: RootObject

  weatherService: any

  imgURL: string

  searchText: string

  errorMsg: string

  searchActive: boolean

  constructor(weatherService: WeatherService, public alertController: AlertController,
    public storageService: StorageService) {
    this.weatherService = weatherService

    this.init()
  }

  private async init() {

    this.loadCachedWeather()

  }

    search = function(event) {
      console.log(this.searchText)

      this.searchActive = true

      this.weatherData = null

      this.weatherService.getWeatherForSearch(this.searchText)
      .subscribe(data => {
          this.weatherData = <RootObject>data
          console.log(data)

          this.imgURL = this.weatherService.getWeatherIconUrl(this.weatherData.weather[0].icon)

          this.cacheWeather(data, this.imgURL)
        }, error => {
          console.log(error.error.message)
          this.searchActive = false
          this.presentPrompt(error.error.message + '. Please try again!')
        })
    }

  /** save weather data and imageURL in storage */
  cacheWeather(data: RootObject, imageURL: string) {
    this.storageService.save(this.storageService.SEARCH_WEATHER, data)
    this.storageService.save(this.storageService.SEARCH_WEATHER_IMAGE, imageURL)
  }

  /** load old weather data and imageURL from storage and update UI */
  loadCachedWeather() {
    this.storageService.load(this.storageService.SEARCH_WEATHER).then(data => {
      if (data) {
        this.weatherData = <RootObject>data
      }
    })
    this.storageService.load(this.storageService.SEARCH_WEATHER_IMAGE).then(url => {
      if (url) {
        this.imgURL = url
      }
    })
  }

  /** show UI message for location error  */
  async presentPrompt(message: string) {
    const alert = await this.alertController.create({
      header: 'Search error',
      message: message,
      buttons: [{
          text: 'Ok'
        }]
    });
    await alert.present();
    this.searchText = null;
  }

}
