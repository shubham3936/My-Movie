import React from 'react'
import "./Navbar.css";
import logo from "../Images/Navbar/icons8-movie-64.png"
function Navbar() {
  return (
    <div className='navbar_container'>
        <img className='navbar_logo' src={logo} />
        <button className='navbar_button'>Sign in</button>
    </div>
  )
}

export default Navbar