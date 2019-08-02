import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

/** Store key value pairs */
@Injectable({
  providedIn: 'root'
})
export class StorageService {

  THEME = 'theme'

  LOCATION_WEATHER = 'location-weather'

  LOCATION_WEATHER_IMAGE = 'location-weather-image'

  SEARCH_WEATHER_KEY = 'search-weather-key'

  SEARCH_WEATHER = 'search-weather'

  SEARCH_WEATHER_IMAGE = 'search-weather-image'

  constructor(private storage: Storage) {}

  /** load a value identified by key */
  load(key: string) {
    return this.storage.get(key)
  }

  /** store a value identified by key */
  save(key: string, value: any) {
    this.storage.set(key, value)
  }

}
