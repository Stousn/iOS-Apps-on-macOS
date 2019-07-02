import { Component } from '@angular/core';
import { WeatherService, RootObject } from '../services/weather/weather.service';
import { AlertController } from '@ionic/angular';

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

  constructor(weatherService: WeatherService, public alertController: AlertController) {
    this.weatherService = weatherService

    this.init()
  }

  private async init() {

    
    
  }

    search = function(event) {
      console.log(this.searchText)

      this.searchActive = true

      this.eatherData = null

      this.weatherService.getWeatherForSearch(this.searchText)
      .subscribe(data => {
          this.weatherData = <RootObject>data
          console.log(data)

          this.imgURL = this.weatherService.getWeatherIconUrl(this.weatherData.weather[0].icon)
        }, error => {
          console.log(error.error.message)
          this.searchActive = false
          this.presentPrompt(error.error.message + ". Please try again!")
        })
    }

  async presentPrompt(message: string) {
    let alert = await this.alertController.create({
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
