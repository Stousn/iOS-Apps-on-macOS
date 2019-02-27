# Ionic and Electron
[Back to Methods](methods.md)

## Ionic
<!-- Whats it? -->
> One codebase.
Any platform.
Ionic helps developers build and ship beautiful cross-platform hybrid apps. - https://ionicframework.com

Ionic is a web framework for hybrid apps. It is based on HTML5 CSS / Sass and JavaScript / TypeScript. It also uses Angular as a JS framework.

<!-- Who built it? -->
Ben Sperry and Max Lynch founded Drifty Co. in 2012. Today, Ionic is a company which develops the framework with the same name. - https://ionicframework.com/about
### Features
<!-- Features -->
It provides a native application frame which contains some kind of web view that allows developers to write a 'standard' web application and render it inside a native application on iOS or/and Android. It also provides a set of functionalities to interact with the native OS and an API framework to call further native functionality. 

### Licence
Ionic is published under MIT License.

## Electron
<!-- Whats it? -->
> Build cross platform desktop apps with JavaScript, HTML, and CSS. - https://electronjs.org

ElectronJS uses Chromium and Node.js to provide a framework that allows to run web applications on desktop computers. 

At first Electron was developed as Atom Shell for the well known cross platform editor Atom (mind the logos) but later it got an separate framework for different kind of cross platform applications - https://electronjs.org/blog/electron
<!-- Who built it? -->
As Atom was and still is developed by GitHub (which now is part of Microsoft) also Chromium is. 

### Features
<!-- Features -->
Like Ionic for mobile Electron provides a browser-like frame for the web application and the compiled executable is installable as a native application. It is possible to use JavaScript frameworks like Angular and Vue.js but also C++ for time sensitive applications. Electron is available for all three big players in the field of desktop and laptop computing: Windows, macOS and Linux.

## Web Application
<!--How?-->
Both methods use web applications for their main logic. So the web application can be an HTML5 and JavaScript application using CSS to format the user interface. AngularJS seems to be the best choice for an JS framework for manipulating the view and possibly calling back end services or APIs via HTTP (using RxJS) 

## Reusabiliy
All application specific code (business logic) could be reused in this constellation. For the major part of the "browser like frame" both frameworks could be set up. Only integration of native functionality (e.g. sensors) needs to be handled separately per platform.


[Back to Methods](methods.md)
