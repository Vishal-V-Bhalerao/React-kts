<<<<<<< HEAD
[![Build Status](https://travis-ci.org/orizens/echoes-player.svg?branch=master)](https://travis-ci.org/orizens/echoes-player) [![Code Climate](https://codeclimate.com/github/orizens/echoes-player/badges/gpa.svg)](https://codeclimate.com/github/orizens/echoes-player)

## [Join Echoes Slack Channel](https://join.slack.com/t/echoesplayer/shared_invite/enQtMzcwMDI4OTI3MjAzLTljZDI3YTA2OGY2ZWY1NTg2M2RmN2UyZGIxOTI4Y2IwMGI4Mzg5MWFlZTZhYTQzZWI5NDVjMGE3ZTQ5OTJjNDA)

# Echoes Player - Angular Version (2nd Generation)

Echoes is a great youtube player developed by [Oren Farhi](http://orizens.com).
It's fun & easy to listen or watch videos from youtube with Echoes.
What if youtube was designed to be used as music player?
This repository is an implementation of Echoes Player with Angular (2nd genration)- It's still a work in progress aimed at learning and experimenting Angular (2nd generation).

Echoes Player is also available as a [Chrome Application](https://chrome.google.com/webstore/detail/echoes-player/aaenpaopfebcmdaegggjbkhaedlbbkde)

It can be regarded as the Media Player experience for youtube listening pleasure.

<p align="center">
  <a href="http://echoesplayer.com" target="_blank">
    <img src="https://user-images.githubusercontent.com/878660/30917366-7ffe7ba2-a3a4-11e7-89ab-e85f4b761bcb.png" alt="Webpack, Angular, ngrx, bootstrap" width="75%"/>
  </a>
</p>

## Angular Consulting Services at Orizens

I'm a Senior Javascript Engineer & A Front End Consultant.
My services include:

* consulting to companies and startups on how to approach code in their projects and keep it maintainable.
* I provide project bootstrapping and development - while afterwards, I integrate it on site and guide the team on it.

[Contact Me Here](http://orizens.com/contact)

  <a href="https://orizens.com" target="_blank">
    <img src="https://cloud.githubusercontent.com/assets/878660/23353771/d0adbd12-fcd6-11e6-96be-7a236f8819d9.png" alt="Webpack and Angular" width="20%"/>
  </a>

# Tech Stack

## Included @ngrx solutions:

* [ngrx/store](https://github.com/ngrx/platform/blob/master/docs/store/README.md) - State Management a la "[Redux](https://github.com/reactjs/redux)" based on RxJs
* [ngrx/effects](https://github.com/ngrx/platform/blob/master/docs/effects/README.md) - Side Effects layer for ngrx/store
* ~[ngrx/router-store](https://github.com/ngrx/platform/blob/master/docs/router-store/README.md) - Bindings to connect the Angular Router to @ngrx/store~
* [ngrx-store-localstorage](https://github.com/btroncone/ngrx-store-localstorage) - local sotrage support for ngrx/store
* [ngrx/store-devtools](https://github.com/ngrx/platform/blob/master/docs/store-devtools/README.md) - a connector to [redux devtool](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en-US) for chrome

## Included Technologies & Libraries

* [Angular +5.x](http://angular.io)
* [Angular CLI](https://cli.angular.io/)
* [@ngrx Platform v5](https://github.com/ngrx/platform)
* Bootstrap v3.x (SASS, selected modules)
* Typescript (latest)
* ECMAscript latest

# EchoesPlayer

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Build for Production

Run `npm run build:prod` to build the project minified for production with AOT.

## Configure api keys

Echoes use environment variables to integrate Google Analytics, youtube data api key and youtube client id for authorization.
These defiend as template variables, and are replaced after a successfull build with build-env.js.

### Youtube Keys

Generate your own keys via [google's console](https://console.cloud.google.com/apis/credentials)
Required Keys are:  
`API Key`  
`OAuth client ID`

### Analytics Key (Optional)

The key is the project ID usually can be retreived from the analytics Admin interface. it exist as part of the "script" to paste in your html file.

## Running unit tests

Run `npm test` to execute the unit tests via [Karma](https://karma-runner.github.io).  
Run `npm run test:ci` to execute the unit tests only **Once**

## Running end-to-end tests

Run `npm run e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# Bundle analyze explorer

[look at issue](https://github.com/angular/angular-cli/issues/4172)

1.  make sure `npm i source-map-explorer -g`
1.  `ng build --prod --aot --sm` (the sourcemap is for later steps)
1.  `cd dist && source-map-explorer A-FILE-WITH-HASH.js`
=======
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
>>>>>>> a542acaeb2cd42759f67002b4cbb720254b2db1a
