import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  darkmode: boolean

  private DARK: string = '(prefers-color-scheme: dark)'

  private LIGHT: string = '(prefers-color-scheme: light)'

  constructor() {
    this.init()
  }

  private init() {

    this.detectColorScheme()
  }

  private detectColorScheme() {
    if (!window.matchMedia) {
      this.darkmode = false
      return
    }    
    const mqDark = window.matchMedia(this.DARK)
    if (mqDark.matches) {
      this.darkmode = true
    } else {
      this.darkmode = false
    }
  }

  colorShemeChanged() {
    console.log("Darkmode:" + this.darkmode)

    if (this.darkmode) {
      document.documentElement.style.setProperty('--ion-background-color', '#333')
      document.documentElement.style.setProperty('--ion-text-color', '#CCC')
    } else {
      document.documentElement.style.setProperty('--ion-background-color', '')
      document.documentElement.style.setProperty('--ion-text-color', '')
    }
  }
}
