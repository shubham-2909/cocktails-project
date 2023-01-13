import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../logo.svg'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <NavLink to={'/'} className='logo'>
          <img src={logo} alt='cocktails db logo' />
        </NavLink>

        <ul className='nav-links'>
          <li>
            <NavLink to={'/'}>Home</NavLink>
          </li>
          <li>
            <NavLink to={'/about'}>About</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
