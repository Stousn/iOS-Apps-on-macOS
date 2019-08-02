import { Component } from '@angular/core';
import { StorageService } from '../services/storage/storage.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  darkmode: boolean

  private DARK_SCHEME = '(prefers-color-scheme: dark)'

  private LIGHT_SCHEME = '(prefers-color-scheme: light)'

  private DARK = 'dark'

  private LIGHT = 'light'

  private storageService: any

  constructor(storageService: StorageService) {
    this.storageService = storageService
    this.init()
  }

  private init() {
    this.storageService.load(this.storageService.THEME)
    .then(theme => {
      console.log(theme)
      if (undefined === theme || null === theme) {
        this.detectColorScheme()
        this.colorShemeChanged()
      } else if (theme === this.DARK) {
        this.darkmode = true
        this.colorShemeChanged()
      } else {
        this.darkmode = false
        this.colorShemeChanged()
      }
    })
  }

  private detectColorScheme() {
    if (!window.matchMedia) {
      this.darkmode = false
      return
    }
    const mqDark = window.matchMedia(this.DARK_SCHEME)
    if (mqDark.matches) {
      this.darkmode = true
    } else {
      this.darkmode = false
    }
  }

  /** change ui if color toggle is clicked */
  colorShemeChanged() {
    console.log('Darkmode:' + this.darkmode)

    if (this.darkmode) {
      document.documentElement.style.setProperty('--ion-background-color', '#333')
      document.documentElement.style.setProperty('--ion-text-color', '#CCC')
      this.storageService.save(this.storageService.THEME, this.DARK)
    } else {
      document.documentElement.style.setProperty('--ion-background-color', '')
      document.documentElement.style.setProperty('--ion-text-color', '')
      this.storageService.save(this.storageService.THEME, this.LIGHT)
    }
  }
}
