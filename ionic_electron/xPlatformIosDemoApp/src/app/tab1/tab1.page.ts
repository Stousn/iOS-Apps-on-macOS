import { Component } from '@angular/core';
import { WeatherService, RootObject } from '../services/weather/weather.service';
import { LoadingController } from '@ionic/angular';

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

  weatherData:RootObject

  weatherService:any

  imgURL:string

  isLoaderOpen:boolean

  constructor(weatherService: WeatherService, public loadingController: LoadingController) {
    this.weatherService = weatherService
    this.presentLoading()
    .then(res => {
      this.isLoaderOpen = true;
      if(this.weatherData) {
        this.loadingController.dismiss()
      }
    })

    this.init()
  }

  private async init() {

    
    // this.weatherService.getWeather()
    // .subscribe(data => {
    //   this.weatherData = <RootObject>data
    //   console.log(data)
    // })

    this.weatherService.getWeatherForLocation()
    .then(observable => {
      observable.subscribe(data => {
        this.weatherData = <RootObject>data
        console.log(data)
        if (this.isLoaderOpen) {
          this.loadingController.dismiss()
        }
        this.loadingController.dismiss()
        this.imgURL = this.weatherService.getWeatherIconUrl(this.weatherData.weather[0].icon)
      })
    })

  }

  async presentLoading() {
    if (await !this.weatherData) {
      const loadingElement = await this.loadingController.create({
        message: 'Please wait...',
        spinner: 'crescent'
      });
      return await loadingElement.present();
    }
  }

}
