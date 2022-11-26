// Setup empty JS object to act as endpoint for all routes
projectData = {};


// Require Express to run server and routes
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require('dotenv').config()
//const logger =require("morgan");
// Start up an instance of app
const app = express()
/* Middleware*/
//app.use(logger('dev'));
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = process.env.PORT || 5000;

const server = app.listen(port, () => {
  console.log(`that server http://localhost:${port}

    =========is RUNNING==========
    `)
})

// GET method route
app.get('/weatherData', function (req, res) {
  console.log(`
    /*
    "data successfully sent to the client"
    ===>
    */`);
  res.send(projectData)
})

// POST method route
app.post('/postWeather', function (req, res) {
  let data = req.body;
  projectData = data;
  console.log(`
    "===> 
    data successfully received from the client"
    `)
  res.send()
  console.log(data)
})