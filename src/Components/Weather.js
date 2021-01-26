import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../Styles/weatherCard.css'
import { formatTime } from '../helper'
const Weather = (props) => {
  const { coordinates } = props
  const [weather, setWeather] = useState('')

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://community-open-weather-map.p.rapidapi.com/weather',
      params: {
        lat: coordinates[0],
        lon: coordinates[1],
        id: '2172797',
        lang: 'null',
        units: 'imperial',
        mode: 'xml, html',
        temp_min: true,
        temp_max: true,
      },
      headers: {
        'x-rapidapi-key': '61fb615d42msh939627156058392p1f2204jsn675a97e76bf5',
        'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
      },
    }
    axios
      .request(options)
      .then(function (response) {
        console.log(response)
        setWeather({
          current: {
            location: response.data.name || 'No Location',
            country: response.data.sys.country || 'No Location',
            description: response.data.weather[0].description || 'No Info',
            icon: response.data.weather[0].icon || 'No icon',
            temp: response.data.main.temp || 0,
            low: response.data.main.temp_min || 0,
            high: response.data.main.temp_max,
            feels_like: response.data.main.feels_like || 0,
            humidity: response.data.main.humidity || 0,
            sunrise: response.data.sys.sunrise || 0,
            sunset: response.data.sys.sunset || 0,
            wind: {
              speed: response.data.wind.speed || 0,
              degrees: response.data.wind.deg || 0,
            },
            visibility: response.data.visibility || 0,
          },
        })
      })
      .catch(function (error) {
        console.error(error)
      })
  }, [coordinates])

  if (weather === '') {
    return (
      <div className='outer-card'>
        <div className='weather-card'>
          <h1>Loading...</h1>
        </div>
      </div>
    )
  } else {
    return (
      <div className='outer-card'>
        <div className='weather-card'>
          <h1>
            {weather.current.location}, {weather.current.country}
          </h1>

          <img
            src={
              'http://openweathermap.org/img/wn/' +
              weather.current.icon +
              '@2x.png'
            }
            alt='Weather Icon'
            className='icon'
          />
          <p className='description'>{weather.current.description}</p>
          <div className='weather-body'>
            <p>Feels Like: {weather.current.feels_like} &#176;F </p>
            <p className='temperatures'>
              Currently: {weather.current.temp} &#176;F
            </p>
            <p className='temperatures'>
              Today's Low: {weather.current.low} &#176;F
            </p>
            <p className='temperatures'>
              Today's High: {weather.current.high} &#176;F{' '}
            </p>
            <p className='humidity'>Humidity: {weather.current.humidity}%</p>
            <p className='visibility'>
              Visibility: {weather.current.visibility}
            </p>
            <p className='suntimes'>
              <span className='sun'>
                Sunrise: {formatTime(weather.current.sunrise)}
              </span>
              <span className='sun'>
                Sunset: {formatTime(weather.current.sunset)}
              </span>
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Weather
