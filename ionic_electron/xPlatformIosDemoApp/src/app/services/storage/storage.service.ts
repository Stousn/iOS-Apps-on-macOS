import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  THEME:string = "theme"

  constructor(private storage: Storage) {}

  load(key:string) {
    return this.storage.get(key)
  }

  save(key:string, value:any) {
    this.storage.set(key, value)
  }

}
