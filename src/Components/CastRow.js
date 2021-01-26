import React from 'react'
import CastSlot from './CastSlot'
const CastRow = ({ weather, day }) => {
  return (
    <div class='cast-row'>
      {weather.map((key, index) => {
        return <CastSlot key={index} weather={key} />
      })}
    </div>
  )
}

export default CastRow
