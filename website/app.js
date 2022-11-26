



/* Global Variables */
const urlBase = "https://api.openweathermap.org/data/2.5/weather?zip="
const apiKey = "&units=metric&appid=f99d2bd53db793fed2337e3ab2be4011"
// get HTML element to pass the weather icon inside it.
let svg = document.getElementById('icon');
// get HTML element to pass the zipcode errors inside it. 
let err = document.getElementById("err");
//
const UiContainer = document.getElementById("entryHolder");
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + 1 + '.' + d.getDate() + '.' + d.getFullYear();


document.getElementById("generate").addEventListener("click", async () => {
  try {
    // we well use the zipcode value to make specific fetch data from API
    let zip = document.getElementById("zip").value;
    let feelings = document.getElementById("feelings").value;
    // before starting to fetch data from API .well check out the value of zip code if it equals = false
    // the fetching won't work ... stop the process
    if (!zip) {
      err.innerHTML = "plese enter zipcod";
      console.log("plese enter zipcod");
    } else {
      // here that means the value of zip code was true and the fetching will continue to work
      // function to fetch data from API server=====> openweathermap.org
      const weatheApiReq =

        fetch(urlBase + zip + apiKey)

          .then((res) => {
            return res.json()
          })
          // here we'll check if the value of zip code is valid or not.
          .then((check) => {
            // if condition will work with invalid code, and that will show what is the message comes from API server to the user 
            if (check.cod !== 200) {
              console.log(check.message)
              // put an API error message in block (UI/UX)
              err.innerHTML = check.message
              // if the UI container of data is displayed, we will disappear it.
              UiContainer.style.transform = "translateY(-700px)"
            }
            // here that means there was no error. and we'll return data to continue the promises.
            return check
          })
          .then((data) => {
            // We will extract customized information according to our needs from the data coming from the server in a variable.
            // to export it to our endpoint server.
            let weatherMain = {
              temp: data.main.temp,
              humidity: data.main.humidity,
              pressure: data.main.pressure,
              city: data.name,
              wind: data.wind.speed,
              icon: data.weather[0].icon,
              description: data.weather[0].description,
              feelings,
              date: newDate
            }
            console.log("good api data request to openweather.org is done ");
            return weatherMain;
          })
          .then(passData => {
            // callback function that will post our data to our endpoint server
            postData(passData); // send data (wet) to our function to process it.

            // callback function that will get (fetch) the data that the user wants from our endpoint server 
            // and update the UI 

            updateUI();
            // here mean the updataUI function worked good , 
            //and we now will delet every thing inside  the err block (UI/UX) if it was there data .
            err.innerHTML = "";
            // show the block that carry the data come from ****(updateUI()) function****
            UiContainer.style.transform = "translateY(0)"
          })
      // catch any error while processing and show it in the console.
    }
  } catch (error) {
    console.log("error", error);
  }

})


// function to fetch (POST) type, data what we need to store it, in our endpoint server.  
const postData = async (weatherMain) => {
  const response = await fetch('/postWeather', { // remeber for allow successful multi port access to our server
    //use full url like this ==> 'http://localhost:8000/postWeather'
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'content-type': 'application/json',

    },
    body: JSON.stringify(weatherMain),
  })
  try {
    const newData = await response;
    // print in console the status of (post response) as anotification in client side
    console.log(`${newData.status} send data to : ${newData.url} :::: ${newData.statusText}`);
    //console.log(newData);
    //return newData;
  } catch (error) {
    console.log("error", error);
  }


}
// function to fetch (GET) type, data from our endpoint server and show it to the user who requests that data.
const updateUI = async () => {
  // asabove ==> full URL==> 'http://localhost:8000/weatherData'
  const request = await fetch('/weatherData');
  try {
    const allData = await request.json();
    let icon = allData.icon
    console.log(allData);
    console.log('data comes from my local server side ');
    document.getElementById('content').innerHTML = allData.feelings;
    document.getElementById('discription').innerHTML = allData.description;
    document.getElementById('icon').innerHTML = allData.icon;
    document.getElementById('date').innerHTML = allData.date;
    document.getElementById('temp').innerHTML = Math.floor(allData.temp);
    document.getElementById('cityName').innerHTML = allData.city;
    document.getElementById('pressure').innerHTML = allData.pressure;
    document.getElementById('humidity').innerHTML = allData.humidity;
    document.getElementById('wind').innerHTML = allData.wind;

    // callback fuction to know what the currently weather's image is.
    iconCatch(icon)

  } catch (error) {
    console.log("error", error);
  }
};
/*
*
  a function that chooses a weather icon dependent on the weather icon status which come from API,
   and work beside updateUI() to make UI more attractive
*
*/
const iconCatch = (icon) => {
  switch (icon) {
    case "01d":
      svg.src = "images/animated/day.svg";
      break;
    case "01n":
      svg.src = "images/animated/night.svg";
      break;
    case "02d":
      svg.src = "images/animated/cloudy-day-1.svg";
      break;
    case "02n":
      svg.src = "images/animated/cloudy-night-1.svg";
      break;
    case "03d":
      svg.src = "images/animated/cloudy-day-3.svg";
      break;
    case "03n":
      svg.src = "images/animated/cloudy-night-3.svg";
      break;
    case "04d":
    case "04n":
      svg.src = "images/animated/cloudy.svg";
      break;
    case "09d":
    case "09n":
      svg.src = "images/animated/rainy-6.svg";
      break;
    case "10d":
      svg.src = "images/animated/rainy-1.svg";
      break;
    case "10n":
      svg.src = "images/animated/rainy-7.svg";
      break;
    case "11d":
    case "11n":
      svg.src = "images/animated/thunder.svg";
      break;
    case "13d":
    case "13n":
      svg.src = "images/animated/snowy-5.svg";
      break;
    case "50d":
    case "50n":
      svg.src = "images/animated/mist.svg";
      break;
    default:
      svg.src = "images/animated/weather.svg";
  }
}
