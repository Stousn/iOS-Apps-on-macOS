import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { StorageService } from './services/storage/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  private DARK_SCHEME: string = '(prefers-color-scheme: dark)'

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private storageService: StorageService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready()
    .then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    this.storageService.load(this.storageService.THEME)
      .then(theme => {
        console.log(theme)
        if (undefined === theme || null === theme) {
          this.detectColorScheme()
        } else if (theme === 'dark') {
          this.setDarkTheme()
        }
      })
  }

  private detectColorScheme() {
    if (!window.matchMedia) {
      return;
    }
    const mqDark = window.matchMedia(this.DARK_SCHEME)
    if (mqDark.matches) {
      this.setDarkTheme()
    }
  }

  setDarkTheme() {
      document.documentElement.style.setProperty('--ion-background-color', '#333')
      document.documentElement.style.setProperty('--ion-text-color', '#CCC')
      this.storageService.save(this.storageService.THEME, 'dark')
  }
}
