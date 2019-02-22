# Project Work: iOS Apps on macOS
__Author:__ Stefan Reip, BSc  
__Tutor:__ DI Johannes Feiner  
__Study:__ IT&Mobile Security (Master) - FH JOANNEUM Kapfenberg  
__Course:__ Project Work

## Problem
Apple has it's own ecosystem. It's clearly seperated form other platforms which is due to the fact that Apple provides software and hardware. Nevertheless, Apple develops different operating systems for different purposes. For desktop and laptop pcs there is macOS, iOS is a mobile operatings system for smartphone and tablet and then there are tvOS for Apple TV and watchOS for smartwatch. For obvious reasons watchOS and iOS are very tight coupled and Apple watch apps are actually just a part of an iOS application. For desktop software it is different. Tough, some apps developed by Apple itself - like Safari - already make it possible to hand over the state between iOS and macOS it still is a completly different aritecture. Until now it is not possible to run exactly the same iOS app on macOS.

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
	* Efford for developers
	* Supplementary source code for each plattform
	* Minimal code duplication (maximum code reusage)
	* ...
3. Development of one demo application (prototype) using the method choosen in 2.
	* Features see below

## Prototype Features
The demo iOS and macOS hybrid app should at least contain the following features:
* GPS usage
* Network usage (e.g. call an API)
* Eventually use of the camera
* At least one more sensor that is available on macOS and iOS
* At least one sensor that is only available on iOS  

=> If it is possible to use native iOS code, the base for the prototype could be the WeatherApp written in NaMoApps
