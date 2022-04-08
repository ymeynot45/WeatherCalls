const testCase = '"id": 4887398'
const cityName = 'Chicago'
const APIKEY = '20f7632ffc2c022654e4093c6947b4f4'
const URL = (cityName, APIKEY) => {
  return `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${APIKEY}`
}
const display = document.getElementById('weatherDisplay')

const weatherCall = (cityName, APIKEY) => {
  completeUrl = buildUrl(cityName, APIKEY)
}

const buildUrl = (cityName, APIKEY) => {
  completeUrl = URL(cityName, APIKEY)
  return completeUrl
}

let findWeatherData = async function (completeUrl) {
  try {const response = await fetch(completeUrl)
  const weatherData = await response.json()
  // console.log(weatherData.name)
  // console.log(weatherData.main.temp)
  return weatherData
  } catch (error) {
    alert(error)
  }
}

const imperialConversion = (kTemp) => {
  const fahrenheit = ((kTemp - 273.15) * (9/5) + 32)
  return fahrenheit
}

const celsiusConversion = (kTemp) => {
  const celsius = (kTemp - 273.15)
  return celsius
}

const locationForm = () => {
  frame = document.getElementById('userInput')
  let createform = document.createElement('form')
  createform.setAttribute('id', 'locationForm')
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
  cityImput.setAttribute('id', 'cityInput')
  cityImput.setAttribute('type', 'text')
  cityImput.setAttribute('name', "City")
  createform.appendChild(cityImput)

  let submitCity = document.createElement('input')
  submitCity.setAttribute('id', 'citySubmitButton')
  submitCity.setAttribute('type', 'submit')
  submitCity.setAttribute('value', "Enter")
  submitCity.setAttribute('name', 'citySubmit')
  createform.appendChild(submitCity)

  locationForm.addEventListener ('submit', handleSubmit)
}



document.body.addEventListener('load',locationForm())

// console.log(buildUrl('Chicago', APIKEY))
// console.log(findWeatherData(buildUrl(cityName, APIKEY)))
