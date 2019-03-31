import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  // Import it up here
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LocationService } from '../location/location.service';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private WEATHER_API_URI: string = "http://api.openweathermap.org/data/2.5/weather?"

  private API_KEY: string = "APPID=3ae7d7caf4a4e14a912fafcea3d68014"

  private WEATHER_API_UNIT: string = "units=metric"

  constructor(private http: HttpClient, private locationService: LocationService) {
    this.locationService = locationService
  }

  getWeather() {
    let url = this.WEATHER_API_URI + "q=Leoben" + "&" + this.API_KEY + "&" + this.WEATHER_API_UNIT
    return this.http.get(url)
  }

  getWeatherForLocation() {
    return this.locationService.getCurrentLocation()
    .then(loc => {
      console.log(loc)
      let pos:Position = <Position>loc
      let lat = "lat=" + pos.coords.latitude
      let lon = "&lon=" + pos.coords.longitude

      let url = this.WEATHER_API_URI + lat + lon + "&" + this.API_KEY + "&" + this.WEATHER_API_UNIT
      return this.http.get(url)
    })
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
  clouds: Clouds;
  dt: number;
  sys: Sys;
  id: number;
  name: string;
  cod: number;
}