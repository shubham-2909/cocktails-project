import React from 'react'
import { NavLink } from 'react-router-dom'

const Error = () => {
  return (
    <section className='section error-page'>
      <div className='error-container'>
        <h1>oops! its a dead end</h1>
        <NavLink to={'/'} className='btn btn-primary'>
          back to home
        </NavLink>
      </div>
    </section>
  )
}

export default Error
