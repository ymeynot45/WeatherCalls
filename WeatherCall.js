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

const STATECODES = [ '',  // Blank default entry for those not in the USA.
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

const COUNTRIES = [ "United States",
  "Afghanistan",
"Åland Islands",
"Albania",
"Algeria",
"American Samoa",
"Andorra",
"Angola",
"Anguilla",
"Antarctica",
"Antigua and Barbuda",
"Argentina",
"Armenia",
"Aruba",
"Australia",
"Austria",
"Azerbaijan",
"Bahamas",
"Bahrain",
"Bangladesh",
"Barbados",
"Belarus",
"Belgium",
"Belize",
"Benin",
"Bermuda",
"Bhutan",
"Bolivia, Plurinational State of",
"Bonaire, Sint Eustatius and Saba",
"Bosnia and Herzegovina",
"Botswana",
"Bouvet Island",
"Brazil",
"British Indian Ocean Territory",
"Brunei Darussalam",
"Bulgaria",
"Burkina Faso",
"Burundi",
"Cambodia",
"Cameroon",
"Canada",
"Cape Verde",
"Cayman Islands",
"Central African Republic",
"Chad",
"Chile",
"China",
"Christmas Island",
"Cocos (keeling) Islands",
"Colombia",
"Comoros",
"Congo",
"Congo, the Democratic Republic of the",
"Cook Islands",
"Costa Rica",
"Côte D'ivoire",
"Croatia",
"Cuba",
"Curaçao",
"Cyprus",
"Czech Republic",
"Denmark",
"Djibouti",
"Dominica",
"Dominican Republic",
"Ecuador",
"Egypt",
"El Salvador",
"Equatorial Guinea",
"Eritrea",
"Estonia",
"Ethiopia",
"Falkland Islands (malvinas)",
"Faroe Islands",
"Fiji",
"Finland",
"France",
"French Guiana",
"French Polynesia",
"French Southern Territories",
"Gabon",
"Gambia",
"Georgia",
"Germany",
"Ghana",
"Gibraltar",
"Greece",
"Greenland",
"Grenada",
"Guadeloupe",
"Guam",
"Guatemala",
"Guernsey",
"Guinea",
"Guinea-Bissau",
"Guyana",
"Haiti",
"Heard Island and Mcdonald Islands",
"Holy See (vatican City State)",
"Honduras",
"Hong Kong",
"Hungary",
"Iceland",
"India",
"Indonesia",
"Iran, Islamic Republic of",
"Iraq",
"Ireland",
"Isle of Man",
"Israel",
"Italy",
"Jamaica",
"Japan",
"Jersey",
"Jordan",
"Kazakhstan",
"Kenya",
"Kiribati",
"Korea, Democratic People's Republic of",
"Korea, Republic of",
"Kuwait",
"Kyrgyzstan",
"Lao People's Democratic Republic",
"Latvia",
"Lebanon",
"Lesotho",
"Liberia",
"Libya",
"Liechtenstein",
"Lithuania",
"Luxembourg",
"Macao",
"Macedonia, the Former Yugoslav Republic of",
"Madagascar",
"Malawi",
"Malaysia",
"Maldives",
"Mali",
"Malta",
"Marshall Islands",
"Martinique",
"Mauritania",
"Mauritius",
"Mayotte",
"Mexico",
"Micronesia, Federated States of",
"Moldova, Republic of",
"Monaco",
"Mongolia",
"Montenegro",
"Montserrat",
"Morocco",
"Mozambique",
"Myanmar",
"Namibia",
"Nauru",
"Nepal",
"Netherlands",
"New Caledonia",
"New Zealand",
"Nicaragua",
"Niger",
"Nigeria",
"Niue",
"Norfolk Island",
"Northern Mariana Islands",
"Norway",
"Oman",
"Pakistan",
"Palau",
"Palestinian Territory, Occupied",
"Panama",
"Papua New Guinea",
"Paraguay",
"Peru",
"Philippines",
"Pitcairn",
"Poland",
"Portugal",
"Puerto Rico",
"Qatar",
"Réunion",
"Romania",
"Russian Federation",
"Rwanda",
"Saint Barthélemy",
"Saint Helena, Ascension and Tristan Da Cunha",
"Saint Kitts and Nevis",
"Saint Lucia",
"Saint Martin (french Part)",
"Saint Pierre and Miquelon",
"Saint Vincent and the Grenadines",
"Samoa",
"San Marino",
"Sao Tome and Principe",
"Saudi Arabia",
"Senegal",
"Serbia",
"Seychelles",
"Sierra Leone",
"Singapore",
"Sint Maarten (dutch Part)",
"Slovakia",
"Slovenia",
"Solomon Islands",
"Somalia",
"South Africa",
"South Georgia and the South Sandwich Islands",
"South Sudan",
"Spain",
"Sri Lanka",
"Sudan",
"Suriname",
"Svalbard and Jan Mayen",
"Swaziland",
"Sweden",
"Switzerland",
"Syrian Arab Republic",
"Taiwan, Province of China",
"Tajikistan",
"Tanzania, United Republic of",
"Thailand",
"Timor-Leste",
"Togo",
"Tokelau",
"Tonga",
"Trinidad and Tobago",
"Tunisia",
"Turkey",
"Turkmenistan",
"Turks and Caicos Islands",
"Tuvalu",
"Uganda",
"Ukraine",
"United Arab Emirates",
"United Kingdom",
"United States Minor Outlying Islands",
"Uruguay",
"Uzbekistan",
"Vanuatu",
"Venezuela, Bolivarian Republic of",
"Viet Nam",
"Virgin Islands, British",
"Virgin Islands, U.s.",
"Wallis and Futuna",
"Western Sahara",
"Yemen",
"Zambia",
"Zimbabwe"
]
const DISPLAYCURRENT = document.getElementById('current_weather_display')
const DISPLAYDAYPLUSONE = document.getElementById('day_plus_one_weather_display')
const DISPLAYDAYPLUSTWO = document.getElementById('day_plus_two_weather_display')
const DISPLAYDAYPLUSTHREE = document.getElementById('day_plus_three_weather_display')
const DISPLAYDAYPLUSFOUR = document.getElementById('day_plus_four_weather_display')
const DISPLAYDAYPLUSFIVE = document.getElementById('day_plus_five_weather_display')
const DISPLAYDAYPLUSSIX = document.getElementById('day_plus_six_weather_display')

const makeAPICall = async function(city, stateCode, country, APIKEY){
  const completeCityUrl = buildCityLocationUrl(city, stateCode, country, APIKEY)
  const locationData = await findLocationData(completeCityUrl)
  const weatherData = await findWeatherData(insertLatLonUrl(locationData[0].lat , locationData[0].lon , APIKEY)) //Currently hard coded to work with only the first city from the api call.
  clearForm()
}

const findLocationData = async function (completeCityUrl) {
  try {
    const response = await fetch(completeCityUrl)
    const locationData = await response.json()
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
    console.log("weather data  ", weatherData) // Delete when done
    updatePage(weatherData.current, DISPLAYCURRENT) // run multiple times with different weather. based on the location it is going!
    updatePage(weatherData.daily[0], DISPLAYDAYPLUSONE)
    updatePage(weatherData.daily[1], DISPLAYDAYPLUSTWO)
    updatePage(weatherData.daily[2], DISPLAYDAYPLUSTHREE)
    updatePage(weatherData.daily[3], DISPLAYDAYPLUSFOUR)
    updatePage(weatherData.daily[4], DISPLAYDAYPLUSFIVE)
    updatePage(weatherData.daily[5], DISPLAYDAYPLUSSIX)
  } catch (error) {
    alert(error)
  }
}

const clearForm = () => {
  document.getElementById('location_entry_form').reset();
};

const updatePage = (weatherData, locationOnPage) => {
  updateTemperature(weatherData.temp, locationOnPage)
  updateWind(weatherData.wind_speed, weatherData.wind_deg, locationOnPage)
  updateSunriseSunset(weatherData.sunrise, weatherData.sunset, locationOnPage)
  updateHumidity(weatherData.humidity, locationOnPage)
  updateCondition(weatherData.weather[0].description, locationOnPage)
  updatePrecipitation(weatherData, locationOnPage)
}

const updateTemperature = (temp, locationOnPage) => {
  if(isNaN(temp)){temp = temp.day}
  const frame = locationOnPage.querySelector('.temperature')
  frame.innerHTML = intialConversion(temp)
}

const updateWind = (windSpeed, windDeg, locationOnPage) => {
  updateWindSpeed(windSpeed, locationOnPage)
  updateWindDirection(windDeg, locationOnPage)
}

const updateWindSpeed = (windSpeed, locationOnPage) => {
  const frame = locationOnPage.querySelector('.wind-speed')
  frame.innerHTML = windSpeed
}

const updateWindDirection = (windDegrees, locationOnPage) => {
  const frame = locationOnPage.querySelector('.wind-direction')
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

const updatePrecipitation = (weatherData, locationOnPage) => {
  if (weatherData.rain !== undefined) {
    const frame = locationOnPage.querySelector('.precipitation')
    const precipitation = weatherData.rain['1h'] //   -- not yet actionable until I pass a check for undefined.  API doesn't send current percipitation data if it isn't raining.
    frame.innerHTML = precipitation
  }else {
    const frame = locationOnPage.querySelector('.precipitation')
    frame.innerHTML = " None "
  }
}

const updateSunriseSunset = (sunrise, sunset, locationOnPage) => {
  updateSunrise(sunrise, locationOnPage)
  updateSunset(sunset, locationOnPage)
}

const updateSunrise = (sunrise, locationOnPage) => {
  const frame = locationOnPage.querySelector('.sunrise')
  frame.innerHTML = convertTime(sunrise)
}

const updateSunset = (sunset, locationOnPage) => {
  const frame = locationOnPage.querySelector('.sunset')
  frame.innerHTML = convertTime(sunset)
}

const updateHumidity = (humidity, locationOnPage) => {
  const frame = locationOnPage.querySelector('.humidity')
  frame.innerHTML = (humidity + "% Humidity")
}

const updateCondition = (condition, locationOnPage) => {
  const frame = locationOnPage.querySelector('.condition')
  frame.innerHTML = condition
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
  const currentSystemFrame = document.getElementById('temperature_unit_display')
    unitConversionSet(currentSystemFrame)
 
}

const unitConversionSet = (systemFrame) => {
  const globalTempUnitFrame = document.querySelectorAll('.temperature-unit-display')
  let currentTemp = document.getElementById('temperature').innerHTML
  if(systemFrame.innerHTML === "C") {
    windConversionSet(systemFrame.innerHTML)
    Array.prototype.forEach.call(globalTempUnitFrame, function(span) {span.innerHTML = "F"})
    currentTemp = toImperialTempConversion(currentTemp)
    document.getElementById('temperature').innerHTML = currentTemp.toFixed(1)
  }else if (systemFrame.innerHTML === "F"){
    windConversionSet(systemFrame.innerHTML)
    Array.prototype.forEach.call(globalTempUnitFrame, function(span) {span.innerHTML = "C"})
    currentTemp = toMetricTempConversion(currentTemp)
    document.getElementById('temperature').innerHTML = currentTemp.toFixed(1)
  }
}

const windConversionSet = (system) => {
  let windSpeedUnit = document.querySelectorAll('.wind-speed-unit-display')
  let currentWindSpeed = document.getElementById('wind_speed')
  if(system === "C") {
    imperialWind = toImperialWindConversion(currentWindSpeed.innerHTML)
    currentWindSpeed.innerHTML = imperialWind
    Array.prototype.forEach.call(windSpeedUnit, function(span) {span.innerHTML = " Miles per hour "})
  }else if (system === "F"){
    metricWind = toMetricWindConversion(currentWindSpeed.innerHTML)
    currentWindSpeed.innerHTML = metricWind
    Array.prototype.forEach.call(windSpeedUnit, function(span) {span.innerHTML = " Meters per Second"})
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

  let stateCodeImput = document.createElement('select')
  stateCodeImput.setAttribute('id', 'state_code_input_box')
  stateCodeImput.setAttribute('name', "Input State")
  createform.appendChild(stateCodeImput)
  STATECODES.forEach (function(e, index){
    const option = document.createElement('option')
    const optionText = document.createTextNode(STATENAMES[index])
    option.appendChild(optionText)
    option.setAttribute('value', e)
    stateCodeImput.appendChild(option)
  })

  let countryImput = document.createElement('select')
  countryImput.setAttribute('id', 'country_input_box')
  countryImput.setAttribute('type', 'text')
  countryImput.setAttribute('name', "Input Country")
  createform.appendChild(countryImput)
  COUNTRIES.forEach (function(e){
    const option = document.createElement('option')
    const optionText = document.createTextNode(e)
    option.appendChild(optionText)
    option.setAttribute('value', e)
    countryImput.appendChild(option)
  })

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
  const test = document.getElementById('city_header').innerHTML = city
  makeAPICall(city, stateCode, country, APIKEY)
}

const addElements = () => {
  locationForm()
  conversionListener()
}

window.addEventListener('load', addElements)

// console.log(buildUrl('Chicago', APIKEY))
// console.log(findWeatherData(buildUrl(cityName, APIKEY)))
