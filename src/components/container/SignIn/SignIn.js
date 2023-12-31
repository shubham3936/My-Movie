import React from 'react'
import "./SignIn.css";
import Navbar from '../../Navbar/Navbar';
import SignInBody from '../../SignInBody/SignInBody';
function SignIn() {
  return (
    <div>
        <Navbar showSignInButton={false} />
        <SignInBody />
    </div>
  )
}

export default SignIn