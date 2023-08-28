import React ,{useState} from 'react'
import "./SignInBody.css"
function SignInBody() {
  const [showSignInBox, setShowSignInBox] = useState(true);
  
  function goToSignuppage()
  {
    setShowSignInBox(false)
  }
  function goTosigninpage()
  {
    setShowSignInBox(true)
  }
  return (
    <>
    {showSignInBox ? (
      <div className='container'>
        <div className='SignIn_form'>
            <p className='signin_title'>Sign In</p>
            <input placeholder='Email address ' type='text' />
            <input placeholder='Password' type='password' />
            <button>Log In</button>
            <button>Login as guest User</button>
            <p className='signin_text'>New to MyMovie ? <span onClick={goToSignuppage}>Sign Up Now</span></p>
        </div>
      </div>
    ):(
    <div className='container'>
      <div className='SignIn_form'>
          <p className='signin_title'>Sign In</p>
          <input placeholder='Name' type='text' />
          <input placeholder='Email address ' type='text' />
          <input placeholder='Password' type='password' />
          <button>Sign Up</button>
          <button>Login as guest User</button>
          <p className='signin_text'>Have an account ? <span onClick={goTosigninpage}>Sign In Now</span></p>
      </div>
    </div>
    )}
       
    </>
  )
}

export default SignInBody