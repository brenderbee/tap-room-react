# Tap Room

#### _Tap Room app created in React. Assignment for Epicodus._

#### By: _**Brenda Franco**_

## Description

_This webpage application is designed to be a Tap Room app that tracks kegs. Each keg will have a name, description, ABV, and total pints left in the keg._

_This project uses Webpack to bundle and minify the code. The view library is React. Babel is used to transpile ES6. All dependencies required are included in this project._

_Development Process differences between Angular and React:_
* Angular CLI is a framework and uses components that has separate files for styles, markup, and javascript.
* While React also uses components, it's just a view library and each component contains the styles, markup, and functionality in a single jsx file.
* While Angular supported classes through ES6 (and therefore object oriented programming), React is functional.
* As a framework, Angular has built in directives for things like repeaters. React uses pure javascript instead since it is a library.
* React definitely seems to require a much smaller breakdown of components than Angular. For example, a button could be a component in React. This would probably not be the case in React.

Component Structure: <br>
<img src="https://raw.githubusercontent.com/brenderbee/tap-room-react/master/src/assets/img/component-structureV3.png" width="800"/>

## Setup/Installation Requirement

* Clone repository on your local computer.
* If you already have Node, Homebrew, and Karma installed, then skip to "Install Dependencies."

  #### Node: Windows / Linux Installation Instructions
  * To install Node on other systems, go to the <a href="https://nodejs.org/en/">Node website</a>, download and install the appropriate installer for your operating system.

  #### Node: OSX Installation Instructions
  * On OS X systems, install Node.js through Homebrew with the following command in your home directory:
    * $ brew install node
  * Confirm that node and npm (node package manager, installed automatically with Node) are in place by checking the versions (Node should be 4.0.x or higher, npm should be 3.6.x or higher):
    * $ node -v
    * $ npm -v

  #### Homebrew Installation
  * If you do not have Homebrew installed yet, you may install it by copying and pasting this command:
    * $ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
  * Next, ensure Homebrew packages are run before the system versions of the same (which may be dated or not what we want) by executing the following:
    * $ echo 'export PATH=/usr/local/bin:$PATH' >> ~/.bash_profile

  #### Karma Installation
  * If you do not have Karma installed globally, then run the following:
    * $ npm install -g karma-cli

  #### Install dependencies
  * Enter the following code in the command line to install all dependencies:
    * $ npm install

  #### Working with the project in Node:
  * To build and bundle the project in webpack run the following:
    * $ npm run build
  * To run the local test server:
    * $ npm run start
  * To run test in Karma:
    * $ npm test


## Known Bugs

_Do not contact anyone with questions or comments regarding this project._

## Technologies Used

_Front-end dependencies_
  * prop-types^15.5.10
  * react^15.5.4
  * react-dom^15.5.4
  * styled-jsx^2.2.7

_Developer Dependencies_
  * babel-core^6.24.1
  * babel-loader^7.0.0
  * babel-preset-es2015^6.24.1
  * babel-preset-react^6.24.1
  * eslint^4.13.1
  * eslint-loader^2.0.0
  * eslint-plugin-react^7.5.1
  * html-webpack-plugin^2.29.0
  * jasmine^3.1.0
  * jasmine-core^2.99.0
  * karma^2.0.0
  * karma-chrome-launcher^2.2.0
  * karma-cli^1.0.1
  * karma-jasmine^1.1.1
  * karma-jasmine-html-reporter^0.2.2
  * karma-jquery^0.2.2
  * karma-webpack^2.0.13
  * react-hot-loader^3.0.0-beta.7
  * webpack^3.4.0
  * webpack-dev-server^2.5.0


### User Stories
* As a patron, I want to see a list/menu of all available kegs. For each keg, I need to see its name, brand, price and ABV.
* As an employee, I want to fill out a form when I tap a new keg to add it to the list.
* As an employee, I want the option to edit a keg's properties after entering them just in case I make a mistake.
* As a patron and/or employee, I want to see how many pints are left in a keg. (A full keg has roughly 124 pints).
* As an employee, I want to be able to click a button next to a keg whenever I sell a pint of it. This should decrease the number of pints left by 1.
* As an employee, I want to be able to see kegs with less than 10 pints left so I can be ready to change them.
* As a patron, I want to have kegs prices to be color-coded for easy readability. Perhaps based on their price (greater or less than $5 per pint, perhaps).
* As a patron, I want to use the alcohol content property to display stronger beers differently than weaker beers.

_Reach Goals_
* As an employee, I want to be able to click a button next to a keg whenever I sell a growler (32 ounce) of it.
* As an employee, I want to be able to click a button next to a keg whenever I sell a large (64 ounce) growler.
* As a patron, I want to filter the available kegs by style of beer.
* As an employee, I want to select an option to put a certain keg on sale. This would lower the cost by a percentage of my choosing, and perhaps change a keg's appearance in the list to draw customers' attention to it.
* As an employee, I might want to program a "happy hour" option I can select to put all kegs on sale.


### Notes
* Add a notes section where you document unforeseen issues and questions during your development process. Commit these notes by themselves.



### License

Copyright (c) 2018 ****_Brenda Franco_****

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
