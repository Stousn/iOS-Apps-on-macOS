import { Component } from '@angular/core';
import { WeatherService, RootObject } from '../services/weather.service';

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

  weatherService

  constructor(weatherService: WeatherService) {
    this.weatherService = weatherService

    this.init()
  }

  private init() {
    
    this.weatherService.getWeather()
    .subscribe(data => {
      this.weatherData = <RootObject>data
      console.log(data)
    })

    

  }

  private updateWeatherData(weather: JSON) {
    //this.degrees = weather.main.temp
  }

}
