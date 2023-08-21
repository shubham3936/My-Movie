import React from 'react'
import "./SignInBody.css"
function SignInBody() {
  return (
    <div className='container'>
        <div className='SignIn_form'>
            <p className='signin_title'>Sign In</p>
            <input placeholder='Email address ' type='text' />
            <input placeholder='Password' type='password' />
            <button>Log In</button>
            <button>Login as guest User</button>
            <p className='signin_text'>New to MyMovie ? Sign Up Now</p>
        </div>
    </div>
  )
}

export default SignInBody