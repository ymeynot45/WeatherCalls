const testCase = '"id": 4887398'
// const cityName = 'Chicago'
const APIKEY = '20f7632ffc2c022654e4093c6947b4f4'
const insertCityUrl = (cityName, APIKEY) => {
  return `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${APIKEY}`
}
const DISPLAY = document.getElementById('weatherDisplay')

const buildUrl = (cityName, APIKEY) => {
  completeUrl = insertCityUrl(cityName, APIKEY)
  return completeUrl
}

let findWeatherData = async function (completeUrl) {
  try {const response = await fetch(completeUrl)
  const weatherData = await response.json()
  console.log(weatherData.name) // works
  console.log(weatherData.main.temp) // works
  weatherData
  } catch (error) {
    alert(error)
  }
}

const clearForm = () => {
  document.getElementById('locationEntryForm').reset();
};

const updatePage = (weatherData) => {
  updateTemperature(weatherData)
  updateWind(weatherData)
  updatePrecipitation(weatherData)
  updateSunriseSunset(weatherData)
}

const updateTemperature = (weatherData) => {
  const frame = document.getElementById('temperature')
  // frame.innerHTML = weatherData.
  console.log(weatherData) // undefined
}

const updateWind = (weatherData) => {
  updateWindSpeed(weatherData)
  updateWindDirection(weatherData)
}

const updateWindSpeed = (weatherData) => {
  const frame = document.getElementById('windSpeed')
}

const updateWindDirection = (weatherData) => {
  const frame = document.getElementById('windDirection')
}

const updatePrecipitation = (weatherData) => {
  const frame = document.getElementById('percipitation')
}

const updateSunriseSunset = (weatherData) => {
  updateSunrise(weatherData)
  updateSunset(weatherData)
}

const updateSunrise = (weatherData) => {
  const frame = document.getElementById('sunrise')
}

const updateSunset = (weatherData) => {
  const frame = document.getElementById('sunset')
}

const imperialConversion = (kTemp) => {
  const fahrenheit = ((kTemp - 273.15) * (9/5) + 32)
  return fahrenheit
}

const celsiusConversion = (kTemp) => {
  const celsius = (kTemp - 273.15)
  return celsius
}

const makeWeatherCall = (city, APIKEY) => {
  weatherData = findWeatherData(buildUrl(city, APIKEY))
  clearForm()
  return weatherData
}

const locationForm = () => {
  frame = document.getElementById('userInput')
  let createform = document.createElement('form')
  createform.setAttribute('id', 'locationEntryForm')
  createform.setAttribute('action', '')
  createform.setAttribute('method', 'post')
  frame.appendChild(createform)

  let heading = document.createElement('h5')
  heading.interHTML = "City"
  createform.append(heading)

  let line = document.createElement('hr')
  createform.appendChild(line)

  let linebreak = document.createElement('br')
  createform.appendChild(linebreak)

  let cityImput = document.createElement('input')
  cityImput.setAttribute('id', 'cityInputBox')
  cityImput.setAttribute('type', 'text')
  cityImput.setAttribute('name', "city")
  createform.appendChild(cityImput)

  let submitCity = document.createElement('input')
  submitCity.setAttribute('id', 'citySubmitButton')
  submitCity.setAttribute('type', 'submit')
  submitCity.setAttribute('value', "Enter")
  submitCity.setAttribute('name', 'citySubmit')
  createform.appendChild(submitCity)

  locationEntryForm.addEventListener ('submit', handleSubmit)
}

const handleSubmit = (e) => {
  e.preventDefault()
  const city = e.target[0].value
  // Every thing else goes here
  weatherData = makeWeatherCall(city, APIKEY)
  console.log(weatherData) // undefined
  updatePage(weatherData)
}

document.body.addEventListener('load',locationForm())

// console.log(buildUrl('Chicago', APIKEY))
// console.log(findWeatherData(buildUrl(cityName, APIKEY)))
