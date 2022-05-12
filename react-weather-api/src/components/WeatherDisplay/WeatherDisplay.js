import './WeatherDisplay.css'

function WeatherDisplay(props) {
  const { temp, feelsLike, description, icon, cod, message } = props

  if (cod !== 200) {
    return (
      <small>{message}</small>
    )
  }

  return(
    <div className="WeatherDisplay">
      <h1>
        <img alt='' src={icon}/>
        <span>{temp}°</span>
      </h1>
      <small>feels like: {feelsLike}°</small>
      <p>{description}</p>
    </div>
  )
}

export default WeatherDisplay