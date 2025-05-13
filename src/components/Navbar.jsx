import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="nav-1">
          get the app
        </div>
        <div className="nav-2">
          <div className="navbtn">Investor Relations</div>
          <div className="navbtn">Add restaurant</div>
          <div className="navbtn">Log in</div>
          <div className="navbtn">Sign up </div>
        </div>

      </div>
    </>
  )
}

export default Navbar
