import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  // Import it up here
import { LocationService } from '../location/location.service';
import { deprecate } from 'util';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private WEATHER_API_URI = 'http://api.openweathermap.org/data/2.5/weather?'

  private ICON_API_URI = 'http://openweathermap.org/img/w/'

  private API_KEY = 'APPID=3ae7d7caf4a4e14a912fafcea3d68014'

  private WEATHER_API_UNIT = 'units=metric'

  constructor(private http: HttpClient, private locationService: LocationService) {
    this.locationService = locationService
  }

  /** @deprecated
   * for testing only. Use *getWeatherForSearch(location: string)* instead
   * */
  getWeather() {
    console.warn('Calling deprecated function getWeather()');
    const url = this.WEATHER_API_URI + 'q=Leoben' + '&' + this.API_KEY + '&' + this.WEATHER_API_UNIT
    return this.http.get(url)
  }

  /** returns Observable of weather for the current position determined with location service or an error */
  getWeatherForLocation() {
    return this.locationService.getCurrentLocation()
    .then(loc => {
      console.log(loc)
      const pos: Position = <Position>loc
      const lat = 'lat=' + pos.coords.latitude
      const lon = '&lon=' + pos.coords.longitude

      const url = this.WEATHER_API_URI + lat + lon + '&' + this.API_KEY + '&' + this.WEATHER_API_UNIT
      return this.http.get(url)
    }).catch(err => {
      return err
    })
  }

  /** returns Observable of weather for location */
  getWeatherForSearch(location: string) {
    const url = this.WEATHER_API_URI + 'q=' + location + '&' + this.API_KEY + '&' + this.WEATHER_API_UNIT
    return this.http.get(url)
  }

  /** returns url of weather icon with icon code */
  getWeatherIconUrl(icon: string) {
    return this.ICON_API_URI + icon + '.png'
  }

}

export interface Coord {
  lon: number;
  lat: number;
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Main {
  temp: number;
  pressure: number;
  humidity: number;
  temp_min: number;
  temp_max: number;
}

export interface Wind {
  speed: number;
  deg: number;
}

// not working in ts because it starts with a number
// export interface Rain {
//   3h: number
// }

export interface Clouds {
  all: number;
}

export interface Sys {
  type: number;
  id: number;
  message: number;
  country: string;
  sunrise: number;
  sunset: number;
}

export interface RootObject {
  coord: Coord;
  weather: Weather[];
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  rain: any;  // set rain to any fixes vsc error for unknown type rain in RootObject in tap1.page.html
  clouds: Clouds;
  dt: number;
  sys: Sys;
  id: number;
  name: string;
  cod: number;
}
