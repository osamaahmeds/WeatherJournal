<p align="center" width="100%">
    <img width="15%" src="/website/images/MY-LOGO-black.png">
</p>

# Weather Journal app ==> Udacity Project

simple weather app created with node.js and express.js

## Table of Contents
* [General Info](#general-information)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Screenshots](#screenshots)
* [List Of Files](#List-of-files)
* [Lessons Learned](#Lessons-Learned)
* [Setup](#Setup)
* [Environment & Requirements](#Environment-&-Requirements)
* [Installation](#Installation)
* [Running the project](#Running-the-project)
* [Sources & Acknowledgements](#sources-&-Acknowledgements)
* [Contact & Authors](#contact-&-Authors)
* [Feedback](#Feedback)
* [Support](#Support)
* [License](#License)
* [Copyright](#Copyright)



## General Information
- This project requires to create an asynchronous web app that uses Web API and user data to dynamically update the UI.


## Technologies Used
**Client:**
- HTML   - HTML5
- CSS    - CSS3
- JAVASCRIPT - version ES6  

**Server:** 
- Node -v 10.19.0
- Npm -v 6.14.4
- Express -v 4.17.1
- cors": -v 2.8.5
- body-parser": -v 1.19.0


## Features

- Live previews
- Cross platform
- animated svg icon
- Local server running and producing feedback to the Command Line through a working callback function.


## Screenshots
![Example screenshot](/website/images/ScreenshotWeather.png)


## List of files

📦weather-journal \
 ┣ 📂website \
 ┃ ┣ 📂images \
 ┃ ┃ ┣ 📂animated\
 ┃ ┃ ┃ ┣ 📜barometer-svgrepo-com.svg\
 ┃ ┃ ┃ ┣ 📜cloudy-day-1.svg\
 ┃ ┃ ┃ ┣ 📜cloudy-day-3.svg\
 ┃ ┃ ┃ ┣ 📜cloudy-night-1.svg\
 ┃ ┃ ┃ ┣ 📜cloudy-night-3.svg\
 ┃ ┃ ┃ ┣ 📜cloudy.svg\
 ┃ ┃ ┃ ┣ 📜day.svg\
 ┃ ┃ ┃ ┣ 📜mist.svg\
 ┃ ┃ ┃ ┣ 📜night.svg\
 ┃ ┃ ┃ ┣ 📜rainy-1.svg\
 ┃ ┃ ┃ ┣ 📜rainy-6.svg\
 ┃ ┃ ┃ ┣ 📜rainy-7.svg\
 ┃ ┃ ┃ ┣ 📜snowy-5.svg\
 ┃ ┃ ┃ ┣ 📜thunder.svg\
 ┃ ┃ ┃ ┗ 📜weather.svg\
 ┃ ┃ ┣ 📜MY-LOGO-black.png\
 ┃ ┃ ┣ 📜ScreenshotWeather.png\
 ┃ ┃ ┣ 📜c.jpg\
 ┃ ┃ ┗ 📜weather.ico\
 ┃ ┣ 📜app.js\
 ┃ ┣ 📜index.html\
 ┃ ┗ 📜style.css\
 ┣ 📜LICENSE.txt\
 ┣ 📜README.md\
 ┣ 📜package-lock.json\
 ┣ 📜package.json\
 ┗ 📜server.js\


## Lessons Learned

- Create API credentials on OpenWeatherMap.com
- APIs and Routes
- asynchronous function
- setup a Node environment with Express and the necessary project dependencies
- setup a server with GET and POST routes
- use the Fetch API with my credentials 


## Setup
## Environment & Requirements

For development, you will only need Node.js and a node global package, and NPM

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g


## Installation
Install my-project with npm
Run Locally

Go to the project directory and open your terminal there then write:

```bash
  cd weather-journal-app/
```

Install dependencies

```bash
  npm install
```

## Running the project
Start the server

```bash
  npm start
```
or 

```bash
  npm run start
```
or 

```bash
  node server.js
```


## Sources & Acknowledgements

- [Udacity](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd0011?utm_source=gsem_brand&utm_medium=ads_r&utm_campaign=12908932988_c&utm_term=124509202031&utm_keyword=%2Budacity%20%2Bfront%20%2Bend_b&gclid=Cj0KCQiA4b2MBhD2ARIsAIrcB-QbkAFWCf5ecF9ouzvrpuhtkh5Q5IsGm_uLQN6dq2bS5rjPeYz7-UsaApOoEALw_wcB)
 - [Awesome Readme Templates](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)
 - [Awesome README](https://github.com/matiassingers/awesome-readme)
 - [How to write a Good readme](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)
 - [Routing :: expressjs.com](https://expressjs.com/en/guide/routing.html)
 - [Fetch API :: MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
 - [JavaScript Promises: an introduction](https://web.dev/promises/)
 - [Express/Node introduction](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction)
 - [JavaScript Promises: an introduction](https://web.dev/promises/)
 - [JFetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
 - [ Using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
 - [Property accessors](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors)
 - [HTTP request methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)
 - [Routing](https://expressjs.com/en/guide/routing.html)
 - [How to Easily Update Node.js to the Latest Version](https://www.whitesourcesoftware.com/free-developer-tools/blog/update-node-js/)
 - [Express/Node introduction](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction )
 - [Routing](https://expressjs.com/en/guide/routing.html)
 - [Node.js](https://nodejs.org/en/)
 - [NPM](https://www.npmjs.com/)
 - [Express](http://expressjs.com/)
 - [Cors](https://www.npmjs.com/package/cors)
 - [Font Awesome](https://fontawesome.com/)








