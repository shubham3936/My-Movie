import React from 'react'
import "./Navbar.css";
import logo from "../Images/Navbar/icons8-movie-64.png"
import {useNavigate} from "react-router-dom";
function Navbar({showSignInButton}) {
  
  const navigate = useNavigate()
  function gotoSignPage(){
      navigate('/sign-in')
  }
  return (
    <div className='navbar_container'>
        <img className='navbar_logo' src={logo} />
        {showSignInButton === false ? " ": <button className='navbar_button' onClick={gotoSignPage}>Sign in</button>}
    </div>
  )
}

export default Navbar