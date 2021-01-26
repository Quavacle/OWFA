import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'

import Weather from './Components/Weather'
import FiveDay from './Components/FiveDay'
import Nav from './Components/Nav'
import Footer from './Components/Footer'

function App() {
  const [coordinates, setCoordinates] = useState('')

  function getCoordinates() {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject)
    })
  }

  useEffect(() => {
    getCoordinates().then((pos) => {
      setCoordinates([pos.coords.latitude, pos.coords.longitude])
    })
  }, [])

  return (
    <div className='container'>
      <Nav />
      <Switch>
        <Route path='/' exact>
          <Weather coordinates={coordinates} />
        </Route>
        <Route path='/5day'>
          <FiveDay coordinates={coordinates} />
        </Route>
      </Switch>

      <Footer />
    </div>
  )
}

export default App
