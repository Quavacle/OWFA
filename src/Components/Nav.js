import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Styles/nav.css'
const Nav = () => {
  return (
    <nav>
      <NavLink to='/'>Current Weather</NavLink>
      <NavLink to='/5day'>5 Day Forecast</NavLink>
    </nav>
  )
}

export default Nav
