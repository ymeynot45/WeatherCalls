const APIKEY = '7e27e0dc168db6f6048cc43a08a5543f'
const buildCityLocationUrl = (cityName, stateCode, country, APIKEY) => {
  return `http://api.openweathermap.org/geo/1.0/direct?q=${cityName},${stateCode},${country}&limit=1&appid=${APIKEY}`
}
const insertLatLonUrl = (lat, lon, APIKEY) => {
  return `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${APIKEY}`
}

const STATENAMES = [ 'State: if applicable',
  'Alabama (AL)',
  'Alaska (AK)',
  'Arizona (AZ)',
  'Arkansas (AR)',
  'California (CA)',
  'Colorado (CO)',
  'Connecticut (CT)',
  'Delaware (DE)',
  'District Of Columbia (DC)',
  'Florida (FL)',
  'Georgia (GA)',
  'Hawaii (HI)',
  'Idaho (ID)',
  'Illinois (IL)',
  'Indiana (IN)',
  'Iowa (IA)',
  'Kansas (KS)',
  'Kentucky (KY)',
  'Louisiana (LA)',
  'Maine (ME)',
  'Maryland (MD)',
  'Massachusetts (MA)',
  'Michigan (MI)',
  'Minnesota (MN)',
  'Mississippi (MS)',
  'Missouri (MO)',
  'Montana (MT)',
  'Nebraska (NE)',
  'Nevada (NV)',
  'New Hampshire (NH)',
  'New Jersey (NJ)',
  'New Mexico (NM)',
  'New York (NY)',
  'North Carolina (NC)',
  'North Dakota (ND)',
  'Ohio (OH)',
  'Oklahoma (OK)',
  'Oregon (OR)',
  'Pennsylvania (PA)',
  'Rhode Island (RI)',
  'South Carolina (SC)',
  'South Dakota (SD)',
  'Tennessee (TN)',
  'Texas (TX)',
  'Utah (UT)',
  'Vermont (VT)',
  'Virginia (VA)',
  'Washington (WA)',
  'West Virginia (WV)',
  'Wisconsin (WI)',
  'Wyoming (WY)'
]

const STATECODES = [ '',
  "AL",
  "AK",
  "AZ",
  "AR",
  "CA",
  "CO",
  "CT",
  "DE",
  "DC",
  "FL",
  "GA",
  "HI",
  "ID",
  "IL",
  "IN",
  "IA",
  "KS",
  "KY",
  "LA",
  "ME",
  "MD",
  "MA",
  "MI",
  "MN",
  "MS",
  "MO",
  "MT",
  "NE",
  "NV",
  "NH",
  "NJ",
  "NM",
  "NY",
  "NC",
  "ND",
  "OH",
  "OK",
  "OR",
  "PA",
  "RI",
  "SC",
  "SD",
  "TN",
  "TX",
  "UT",
  "VT",
  "VA",
  "WA",
  "WV",
  "WI",
  "WY"
]

const DISPLAY = document.getElementById('weather_display')

const makeAPICall = async function(city, stateCode, country, APIKEY){
  const completeCityUrl = buildCityLocationUrl(city, stateCode, country, APIKEY)
  console.log("location url", completeCityUrl)
  const locationData = await findLocationData(completeCityUrl)
  console.log("location data when building the weather URL ", locationData)
  const weatherData = await findWeatherData(insertLatLonUrl(locationData[0].lat , locationData[0].lon , APIKEY)) //Currently hard coded to work with only the first city from the api call.
  clearForm()
}

const findLocationData = async function (completeCityUrl) {
  try {
    const response = await fetch(completeCityUrl)
    const locationData = await response.json()
    console.log("location data after json call ", locationData)
    return locationData
  } catch (error) {
    alert(error)
  }
}

const buildWeatherUrl = (lat, lon, APIKEY) => {
  completeWeatherUrl = insertLatLonUrl(lat, lon, APIKEY)
  return completeWeatherUrl
}


const findWeatherData = async function (completeWeatherUrl) {
  try {
    const response = await fetch(completeWeatherUrl)
    const weatherData = await response.json()
    updatePage(weatherData)
  } catch (error) {
    alert(error)
  }
}

const clearForm = () => {
  document.getElementById('location_entry_form').reset();
};

const updatePage = (weatherData) => {
  console.log("weather data  ", weatherData) // Delete when done
  updateTemperature(weatherData.current.temp)
  // updateWind(weatherData.wind)
  // updatePrecipitation(weatherData)
  // updateSunriseSunset(weatherData.sys)
}

const updateTemperature = (temp) => {
  const frame = document.getElementById('temperature')
  frame.innerHTML = intialConversion(temp)
}

const updateWind = (weatherData) => {
  updateWindSpeed(weatherData.speed)
  updateWindDirection(weatherData.deg)
}

const updateWindSpeed = (windSpeed) => {
  const frame = document.getElementById('wind_speed')
  frame.innerHTML = windSpeed
}

const updateWindDirection = (windDegrees) => {
  const frame = document.getElementById('wind_direction')
  let direction = ''
  if (windDegrees > 348 || windDegrees < 12){
   direction = "North"
  }else if (windDegrees > 11 && windDegrees < 34){
    direction = "North-Northeast"
  }else if (windDegrees > 33 && windDegrees < 57){
    direction = "Northeast"
  }else if (windDegrees > 56 && windDegrees < 79){
    direction = "East-Northeast"
  }else if (windDegrees > 78 && windDegrees < 102){
    direction = "East"
  }else if (windDegrees > 101 && windDegrees < 124){
    direction = "East-Southeast"
  }else if (windDegrees > 123 && windDegrees < 147){
    direction = "Southeast"
  }else if (windDegrees > 146 && windDegrees < 169){
    direction = "South-Southeast"
  }else if (windDegrees > 168 && windDegrees < 192){
    direction = "South"
  }else if (windDegrees > 191 && windDegrees < 214){
    direction = "South-Southwest"
  }else if (windDegrees > 213 && windDegrees < 237){
    direction = "Southwest"
  }else if (windDegrees > 236 && windDegrees < 259){
    direction = "West-Southwest"
  }else if (windDegrees > 258 && windDegrees < 282){
    direction = "West"
  }else if (windDegrees > 281 && windDegrees < 304){
    direction = "West-Northwest"
  }else if (windDegrees > 303 && windDegrees < 327){
    direction = "Northwest"
  }else if (windDegrees > 326 && windDegrees < 349){
    direction = "North-Northwest"}
  frame.innerHTML = direction
}

const updatePrecipitation = (weatherData) => {
  if (weatherData.rain !== undefined) {
    const frame = document.getElementById('percipitation')
    const precipitation = weatherData.rain['1h'] //   -- not yet actionable until I pass a check for undefined.  API doesn't send percipitation data if it isn't raining.
    console.log("rain meter ", precipitation)
    frame.textContent = ("Rain fall, " + precipitation + " inches in the last hour.")
  }
}

const updateSunriseSunset = (weatherData) => {
  updateSunrise(weatherData)
  updateSunset(weatherData)
}

const updateSunrise = (weatherData) => {
  const frame = document.getElementById('sunrise')
  frame.innerHTML = convertTime(weatherData.sunrise)
}

const updateSunset = (weatherData) => {
  const frame = document.getElementById('sunset')
  frame.innerHTML = convertTime(weatherData.sunset)
}

const convertTime = (rawTime) => {
  const rawDate = new Date(rawTime * 1000)
  const wholeDate = rawDate.toString()
  time = wholeDate.slice(-41, -36)
  return time
}

const intialConversion = (kTemp) => {
  const fahrenheit = ((kTemp - 273.15) * (9/5) + 32)
  const display = document.getElementById('temperature_unit_display')
  display.innerHTML = "F"
  return fahrenheit.toFixed(1)
}

const toImperialTempConversion = (mTemp) => {
  const fahrenheit = ((mTemp * 9/5) + 32)
  return fahrenheit
}

const toMetricTempConversion = (iTemp) => {
  const celsius = ((iTemp - 32) * 5/9)
  return celsius
}

const toImperialWindConversion = (mWind) => {
  return (mWind * 2.237).toFixed(2)
}

const toMetricWindConversion = (iWind) => {
  return (iWind / 2.237).toFixed(2)
}

const conversionListener = () => {
  button = document.getElementById('conversion_button')
  button.addEventListener('click', converstionHandler)
}

const converstionHandler = () => {
  const currentSystem = document.getElementById('temperature_unit_display')
    unitConversionSet(currentSystem)
 
}

const unitConversionSet = (system) => {
  let currentTemp = document.getElementById('temperature').innerHTML
  if(system.innerHTML === "C") {
    windConversionSet(system.innerHTML)
    system.innerHTML = "F"
    currentTemp = toImperialTempConversion(currentTemp)
    document.getElementById('temperature').innerHTML = currentTemp.toFixed(1)
  }else if (system.innerHTML === "F"){
    windConversionSet(system.innerHTML)
    system.innerHTML = "C"
    currentTemp = toMetricTempConversion(currentTemp)
    document.getElementById('temperature').innerHTML = currentTemp.toFixed(1)
  }
}

const windConversionSet = (system) => {
  let display = document.getElementById('wind_speed_unit_display')
  let currentWind = document.getElementById('wind_speed')
  if(system === "C") {
    imperialWind = toImperialWindConversion(currentWind.innerHTML)
    currentWind.innerHTML = imperialWind
    display.innerHTML = "Mile per hour"
  }else if (system === "F"){
    metricWind = toMetricWindConversion(currentWind.innerHTML)
    currentWind.innerHTML = metricWind
    display.innerHTML = "Meters per Second"
  }
}


const locationForm = () => {
  frame = document.getElementById('user_input')
  let createform = document.createElement('form')
  createform.setAttribute('id', 'location_entry_form')
  createform.setAttribute('action', '')
  createform.setAttribute('method', 'post')
  frame.appendChild(createform)

  let cityImput = document.createElement('input')
  cityImput.setAttribute('id', 'city_input_box')
  cityImput.setAttribute('type', 'text')
  cityImput.setAttribute('name', "Input City")
  cityImput.setAttribute('placeholder', "City")
  createform.appendChild(cityImput)

  // let stateCodeImput = document.createElement('input')
  // stateCodeImput.setAttribute('id', 'state_code_input_box')
  // stateCodeImput.setAttribute('type', 'text')
  // stateCodeImput.setAttribute('name', "Input State")
  // stateCodeImput.setAttribute('placeholder', "State")
  // createform.appendChild(stateCodeImput)

  let stateCodeImput = document.createElement('select')
  stateCodeImput.setAttribute('id', 'state_code_input_box')
  stateCodeImput.setAttribute('name', "Input State")
  stateCodeImput.setAttribute('placeholder', "State")
  createform.appendChild(stateCodeImput)
  STATECODES.forEach (function(e, index){
    const option = document.createElement('option')
    const optionText = document.createTextNode(STATENAMES[index])
    option.appendChild(optionText)
    option.setAttribute('value', e)
    stateCodeImput.appendChild(option)
  })

  let countryImput = document.createElement('input')
  countryImput.setAttribute('id', 'country_input_box')
  countryImput.setAttribute('type', 'text')
  countryImput.setAttribute('name', "Input Country")
  countryImput.setAttribute('placeholder', "Country")
  createform.appendChild(countryImput)

  const submitLocation = document.createElement('input')
  submitLocation.setAttribute('id', 'location_submit_button')
  submitLocation.setAttribute('type', 'submit')
  submitLocation.setAttribute('value', "And now your local weather!")
  submitLocation.setAttribute('name', 'location Submit')
  createform.appendChild(submitLocation)

  location_entry_form.addEventListener ('submit', handleSubmit)
}

const handleSubmit = (e) => {
  e.preventDefault()
  const city = e.target[0].value
  const stateCode = e.target[1].value
  const country = e.target[2].value
  // Every thing else goes here
  makeAPICall(city, stateCode, country, APIKEY)
}

const addElements = () => {
  locationForm()
  conversionListener()
}

window.addEventListener('load', addElements)

// console.log(buildUrl('Chicago', APIKEY))
// console.log(findWeatherData(buildUrl(cityName, APIKEY)))
