# Project Work: iOS Apps on macOS
__Author:__ Stefan Reip, BSc  
__Tutor:__ DI Johannes Feiner  
__Study:__ IT&Mobile Security (Master) - FH JOANNEUM Kapfenberg  
__Course:__ Project Work

## Problem
Apple has it's own ecosystem. It's clearly separated form other platforms which is due to the fact that Apple provides software and hardware. Nevertheless, Apple develops different operating systems for different purposes. For desktop and laptop pcs there is macOS, iOS is a mobile operating system for smartphone and tablet and then there are tvOS for Apple TV and watchOS for smartwatch. For obvious reasons watchOS and iOS are very tight coupled and Apple watch apps are actually just a part of an iOS application. For desktop software it is different. Tough, some apps developed by Apple itself - like Safari - already make it possible to hand over the state between iOS and macOS it still is a completely different architecture. Until now it is not possible to run exactly the same iOS app on macOS.

## Ideas
The main idea of this project work is it to run an iOS app on desktop using the least expensive (regarding time and effort for developers) way. The reusability of the majority source code should be given.

## Method
The method consists of the following steps:  
1. Research work on existing methods to use iOS apps on macOS
	* Existing frameworks for hybrid applications
	* Porting software and tools
	* iOS emulators for macOS
	* iOS simulators for macOS
	* macOS Mojave feature presented on WWDC18 (Marzipan)
2. Choose one method paying attention to the criteria below
	* Effort for developers
	* Supplementary source code for each platform
	* Minimal code duplication (maximum code reusage)
	* ...
3. Development of one demo application (prototype) using the method chosen in 2.
	* Features see below

## Prototype Features
The demo iOS and macOS hybrid app should at least contain the following features:
* GPS usage
* Network usage (e.g. call an API)
* At least one more sensor that is available on macOS and iOS
* At least one sensor that is only available on iOS (changed: feature that is available on macOS)

=> If it is possible to use native iOS code, the base for the prototype could be the WeatherApp written in NaMoApps

## The Solution
1. Methods
	* The outcome of methods step 1 from above can be found in the documentation of [methods](methods/methods.md)
2. Impement an example with Ionic/Electron
3. ~~Compare with Project Catalyst~~

## Requirements
* node / npm (Version 10.X.X)
* git bash (on older Windows versions in order to run .sh scripts)

## Start-Up
* In order to automate runing the following scripts are provided
  * `install_all.sh`
    * Installs dependencies from node package manager (ionic, electron, angular, ...)
  * `start_electron.sh`
    * builds the Angular app
    * runs Angular application on local webserver
    * starts electron in a new window
  * `start_ionic.sh`
    * builds the Angular app
    * runs Angular application on local webserver
    * starts ionic app in a new browser tab (if not automatically: use http://localhost:4200 as URL)

## Folder Info
* Angular
	* `ionic_electron/xPlatformIosDemoApp/www/` is the dist folder
	* `ionic_electron/xPlatformIosDemoApp/src/app` is the source code folder of the webapp
	* build with `ng build --prod` in xPlatformIosDemoApp
* Ionic 
	* start local webserver with `npm start` in `ionic_electron/xPlatformIosDemoApp/`
	* open http://localhost:4200 in browser window 
* Electron 
	* `ionic_electron/xPlatformIosDemoApp/main.js` is the startup file
	* start local webserver with `npm start` in `ionic_electron/xPlatformIosDemoApp/`
	* start window with `npm run electron` in `ionic_electron/xPlatformIosDemoApp/` in a second terminal

## Solutions (and Problems)
* ~~Angular Versions~~
	* Angular7 in Electron
	* Angular5 in Ionic
	* Solution
		* Raise version in Ionic to 7
* ~~New Version of `RxJS` with old code~~
	* Possible solutions
		* ~~`ionic serve` and fix import errors (shown in terminal and browser on `localhost:8100`)~~
		* lower RxJS version for ionic only (see if it still works)
		* ~~lower RxJS versions for both and downgrade Electrons code~~
* ~~White screen in Electron window~~
	* Problem: path used - security block
	* Solution: Run webserver locally and use url instead of path
* ~~Node Version update~~
	* Problem: build failed after node update to version 12.X.X
	* Solution: use version 10.X.X of node. 
		* Hint: If multiple versions are required on one machine: search for nvm (node version manager)
