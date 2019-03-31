import { Component } from '@angular/core';
import { WeatherService, RootObject } from '../services/weather/weather.service';

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

  constructor(weatherService: WeatherService) {
    this.weatherService = weatherService

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

        this.imgURL = this.weatherService.getWeatherIconUrl(this.weatherData.weather[0].icon)
      })
    })

    

  }

}
