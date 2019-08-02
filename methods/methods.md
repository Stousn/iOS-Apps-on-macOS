# Methods
[Back to ReadMe](./../README.md)
## The Idea
The main points are to reuse existing work and to reuse as much source code as possible for mobile and desktop platform. Therefore, a web search is the most fitting research method. Another goal should be that on both platforms an native application should be possible.

## Insufficient Methods
* Web Apps
    + The web can be used for cross platform websites and web applications. Its is possible to write software for mobile and desktop using the same code.
    - Web apps are presented in a web browser which requires internet connectivity and prohibits the installation on the device itself
* Progressive Web Apps
    + A growing possibility for cross platform applications are progressive web apps. 
    + The browser support got better in the last years.
    + Progressive web Apps commonly user WebWorkers/ServiceWorkers to achieve offline functionality through caching.
    + PWAs can be "installed" on smart phones
    - Still there is not every native functionality included and polyfills are necessary to support older browsers.
    - It is heavily dependent on browsers which gets difficult for different platforms.
    - It also is not possible to install WebApps on macOS or make them feel native for user (experience)
* Ionic
    + Native cross platform applications using web technology
    + With Angular and HTML5 easy development and deployment is possible
    + Shipment as native app is possible for iOS, Android and Windows 10 in their App Stores
    - However, macOS is not supported and the usage of the application is only possible through the browser for this platform.
* Native Script
    + Another cross platform application using web technologies (JavaScript/TypeScript and Angular support)
    + The major benefit is, that the outcome are native applications that use the same system API like other natively developed applications (developed in Android Studio or Xcode) do 
* Electron
    + Electron is Ionic for Desktop.
    + Electron uses Chromium and renders HTML, CSS and JavaScript including frameworks in a desktop app
    + Time critical code can also be written in C++
    - Electron is not supported on iOS (also all browsers on iOS are WebKit based, even Chrome)
## Sufficient Methods
* [Combine Ionic and Electron](ionic_electron.md "Go to combine Ionic and Electron")
    * Both frameworks provide a possibility to natively run a web application using JavaScript as programming language and HTML5 and CSS for the graphical user interface
    * The platform specific code to run the web app is provided by both frameworks for their platforms
* [Xojo](xojo.md "Go to Xojo")
    * Relatively old framework (from the '90ies)
    * It produces applications for iOS and macOS which can call the native API (Cocoa)
    * Xojo uses a proprietary object-oriented BASIC dialect 
* [Project Catalyst (former Marzipan)](marzipan.md "Go to Marzipan")
    * Native cross platform implementation by Apple itself
    * Code can be written in Swift and both applications can directly be built with Xcode
    * Probably the best way, ~~but the developers preview (which is set for early 2019) is still not released~~ but developers preview requires beta of macOS 10.15 Catalina (which is not recommended for a computer a person depends on).
    
### Comparison of sufficient methods 
The first mention of Marzipan at Apple's Keynote did not reveal many details. We learned more or less that Apple would provide us UiKit for macOS. Back then, we only had Apple internal Apps like Stocks that already used Marzipan. In the lates WWDC (2019), Apple presented Project Catalyst - which is the new name - to be within macOS 10.15 for everyone to use. Also, Twitter already ported its iOS (iPadOS) App to the Mac using Catalyst. From my point of view, this sounds very promising and should be - when available this fall - the best of the sufficient methods. 

Combining Ionic and Electron is my choice for project work because it utilizes the web. HTML and CSS for the presentation of applications on desktop and mobile are not only comparably easy for the developer, but it also got widespread in the last years (e.g., Visual Studio Code, Slack, ÖBB, ...). The code of the app itself is more platform-independent with Ionic and Electron than Xojo or Project Catalyst, as it is providing platform-specific functionality and standard UI elements.

Although it seems to be an interesting approach, I am not very fond of Xojo. The main reason for this is because it uses some BASIC dialect that is not very common - especially not for developers in the Apple universe or mobile development. Furthermore, the framework is from the nineties (like myself). Tough, I am interested in a comparison between Xojo and other frameworks for such cross-platform applications.
    
[Back to ReadMe](./../README.md)
