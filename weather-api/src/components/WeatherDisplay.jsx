import React from "react"

const WeatherDisplay = (props) => {
  const { temp, feelsLike, description, cod, message } = props
  if (cod !== 200) {
    return <p>{message}</p>
  }
  return (
    <div className="WeatherDisplay">
      <h1>{temp}</h1>
      <small>Feels Like: {feelsLike}</small>
      <p>{description}</p>
    </div>
  )
}

export default WeatherDisplay