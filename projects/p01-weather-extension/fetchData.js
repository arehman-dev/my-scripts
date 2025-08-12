const API_KEY = '---;
const API_URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=Islamabad&aqi=no`;

fetch(API_URL)
  .then(response => response.json())
  .then(data => {
    console.log(data); // Log the full response for debugging.

    // Correct field mappings
    document.getElementById("text_location").innerText = data.location.name;
    document.getElementById("text_location_country").innerText = data.location.country;
    document.getElementById("text_temp").innerText = Math.round(data.current.temp_c);
    document.getElementById("text_feelslike").innerText = Math.round(data.current.feelslike_c);
    document.getElementById("text_desc").innerText = data.current.condition.text;

    // Weather icon
    const iconUrl = `https:${data.current.condition.icon}`;
    document.getElementById("icon").src = iconUrl;
  })
  .catch(error => {
    console.error("Error fetching weather data:", error);
    alert("Failed to load weather data. Please try again later.");
  });



// _______my old code with fetching issues______

// const API_key = '---'

// fetch("http://api.weatherapi.com/v1/current.json?key=---&q=Islamabad&aqi=no")
// .then(data => data.json())
//   .then((jsonData) => {
//      console.log(jsonData.name)
//      console.log(jsonData.main.temp)
//      console.log(jsonData.main.feels_like)
//      console.log(jsonData.weather[0].description)

//     fetch(`https://openweathermap.org/img/w/${jsonData.weather[0].icon}2x.png`)
//       .then(res => res.blob())
//       .then((result) => {
//         document.getElementById("text_location").innerHTML = jsonData.name
//         document.getElementById("text_location_country").innerHTML = jsonData.sys.country
//         document.getElementById("text_temp").innerHTML = Math.round(jsonData.main.temp)
//         document.getElementById("text_feelslike").innerHTML = Math.round(jsonData.main.feels_like)
//         document.getElementById("text_desc").innerHTML = jsonData.weather[0].description

//         const imageObjectURL = URL.createObjectURL(result)
//         document.getElementById("icon").src = imageObjectURL
//       })
//   })


