import {useState} from 'react';
import './Weather.css'
import RadioButton from '../RadioButton/RadioButton';
import WeatherDisplay from '../WeatherDisplay/WeatherDisplay';

function Weather() {
  const [zip, setZip] = useState('')
  const [unit, setUnit] = useState('')
  const [data, setData] = useState(null)

  // ------------------------------
  async function fetchWeather() {
    const APIkey = '40f4142bf03ba9914cbf1c05a4a22adb'
    const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${APIkey}&units=${unit}`
    const res = await fetch(path)
    const json = await res.json()

    const cod = json.cod
    const message = json.message
    if (cod !== 200) {
      setData({cod,message})
      return
    }

    const temp = json.main.temp
    const feelsLike = json.main.feels_like
    const description = json.weather[0].description
    const getIcon = json.weather[0].icon
    const icon = `http://openweathermap.org/img/wn/${getIcon}@2x.png`

    setData({
      temp,
      feelsLike,
      description,
      icon,
      cod,
      message
    })
  }
  // ------------------------------

  return (
    <div className="Weather">
      {data && <WeatherDisplay {...data} />}
      <form onSubmit={e => {
        e.preventDefault()
        fetchWeather()
      }}>
        <div>
          <input 
            placeholder="Enter ZIP Code"
            value={zip}
            onChange={e => setZip(e.target.value)}/>

          <button type="submit">Submit</button>
        </div>

        <select 
          value={unit}
          onChange={e => setUnit(e.target.value)}
        >
          <option value='metric'>celsius</option>
          <option value='imperial'>fahrenheit</option>
          <option value='standard'>kelvin</option>
        </select>

        <RadioButton 
          label="metric"
          name="unit"
          checked={unit === "metric"}
          onChange={() => setUnit('metric')}
        />

        <RadioButton 
          label="imperial"
          name="unit"
          checked={unit === "imperial"}
          onChange={() => setUnit('imperial')}
        />

        <RadioButton 
          label="standard"
          name="unit"
          checked={unit === "standard"}
          onChange={() => setUnit('standard')}
        />


      </form>
    </div>
  )
}

export default Weather