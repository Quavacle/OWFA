import React from 'react'
import { formatTwelveHour } from '../helper'

import '../Styles/castSlot.css'

const CastSlot = ({ weather }) => {
  console.log(weather)
  const { feels_like, temp } = weather.main
  const { speed } = weather.wind
  const { icon } = weather.weather[0]
  return (
    <div className='slot'>
      <p>{formatTwelveHour(weather.dt_txt)}</p>
      <p>
        Feels Like <br />
        {feels_like} &#176;F
      </p>
      <p>
        Actual <br />
        {temp} &#176;F
      </p>
      <p>
        Wind Speed
        <br />
        {speed} MPH
      </p>
      <img
        src={'http://openweathermap.org/img/wn/' + icon + '@2x.png'}
        alt='Weather Icon'
        className='icon'
      />
    </div>
  )
}

export default CastSlot
