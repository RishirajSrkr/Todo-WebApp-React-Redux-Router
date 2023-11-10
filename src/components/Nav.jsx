import React from 'react'
import {NavLink} from 'react-router-dom'

//css
import '../styles/nav.css'

export default function Nav() {
  return (
    <div className='nav-wrapper'>
        <NavLink to='/'>All Todo</NavLink>
        <NavLink to='/create'>Create Todo</NavLink>
    </div>
  )
}
