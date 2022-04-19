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
  try {
    const response = await fetch(completeUrl)
    const weatherData = await response.json()
    console.log("After the api call ", weatherData.name) // works
    console.log("After the api call ", weatherData.main.temp) // works
    updatePage(weatherData)
  } catch (error) {
    alert(error)
  }
}

const clearForm = () => {
  document.getElementById('locationEntryForm').reset();
};

const updatePage = (weatherData) => {
  console.log("WeatherData  ", weatherData)
  updateTemperature(weatherData.main.temp)
  updateWind(weatherData.wind)
  updatePrecipitation(weatherData)
  updateSunriseSunset(weatherData.sys)
}

const updateTemperature = (temp) => {
  const frame = document.getElementById('temperature')
  frame.innerHTML = intialConversion(temp)
}

const updateWind = (weatherData) => {
  updateWindSpeed(weatherData.speed)
  updateWindDirection(weatherData.deg)
}

const updateWindSpeed = (weatherData) => {
  const frame = document.getElementById('windSpeed')
  frame.innerHTML = weatherData + " MPH"
}

const updateWindDirection = (weatherData) => {
  const frame = document.getElementById('windDirection')
  frame.innerHTML = weatherData
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

const intialConversion = (kTemp) => {
  const fahrenheit = ((kTemp - 273.15) * (9/5) + 32)
  const display = document.getElementById('temperatureUnitDisplay')
  display.innerHTML = "F"
  return fahrenheit.toFixed(1)
}

const toImperialConversion = (cTemp) => {
  const fahrenheit = ((cTemp * 9/5) + 32)
  return fahrenheit
}

const toCelsiusConversion = (fTemp) => {
  const celsius = ((fTemp - 32) * 5/9)
  return celsius
}

const conversionListener = () => {
  button = document.getElementById('conversionButton')
  button.addEventListener('click', tempConversionSet)
}

const tempConversionSet = () => {
  let display = document.getElementById('temperatureUnitDisplay')
  let currentTemp = document.getElementById('temperature').innerHTML
  if(display.innerHTML === "C") {
    display.innerHTML = "F"
    currentTemp = toImperialConversion(currentTemp)
    document.getElementById('temperature').innerHTML = currentTemp.toFixed(1)
  }else if (display.innerHTML === "F"){
    display.innerHTML = "C"
    currentTemp = toCelsiusConversion(currentTemp)
    document.getElementById('temperature').innerHTML = currentTemp.toFixed(1)
  }
}

const makeWeatherCall = async function(city, APIKEY){
  const weatherData = await findWeatherData(buildUrl(city, APIKEY))
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

  let cityImput = document.createElement('input')
  cityImput.setAttribute('id', 'cityInputBox')
  cityImput.setAttribute('type', 'text')
  cityImput.setAttribute('name', "Input City")
  cityImput.setAttribute('placeholder', "City")
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
  const weatherData = makeWeatherCall(city, APIKEY)
}

const addElements = () => {
  locationForm()
  conversionListener()
}

window.addEventListener('load', addElements)

// console.log(buildUrl('Chicago', APIKEY))
// console.log(findWeatherData(buildUrl(cityName, APIKEY)))
