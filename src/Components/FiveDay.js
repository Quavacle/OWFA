import React, { useState, useEffect } from 'react'
import axios from 'axios'

import CastRow from './CastRow'
import { formatDate } from '../helper'
import '../Styles/weatherCard.css'
import '../Styles/fiveDay.css'

const FiveDay = ({ coordinates }) => {
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://community-open-weather-map.p.rapidapi.com/forecast',
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
        splitDays(response.data.list)
      })
      .catch((res) => {
        console.log('ERROR: ' + res)
      })
  }, [coordinates])

  function splitDays(casts) {
    const split = casts.reduce((acc, curr) => {
      // Remove time and whitespace from current date
      const day = curr.dt_txt.slice(0, 10).trim()
      if (!acc[day]) {
        acc[day] = []
      }
      acc[day].push(curr)
      return acc
    }, {})
    setWeather(split)
  }

  return weather === null ? (
    <div className='outer-card'>
      <div className='weather-card'>
        <h1>Loading...</h1>
      </div>
    </div>
  ) : (
    <div className='outer-forecast-card'>
      <div className='forecast-card five-container'>
        {Object.keys(weather).map((key) => {
          return (
            <>
              <div className='cast-row-header'>
                <h3>{formatDate(key)}</h3>
              </div>
              <CastRow key={key} day={key} weather={weather[key]} />
            </>
          )
        })}
      </div>
    </div>
  )
}

export default FiveDay
