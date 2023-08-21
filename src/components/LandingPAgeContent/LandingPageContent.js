import React from 'react'
import "./LandingPageContent.css";
function LandingPageContent() {
  return (
    <div className='LandingPageContent_container'>
        <p className='landingpagecontent_title'>Unlimited films, Tv Programs and more.</p>
        <p className='landingpagecontent_subtitle'>
            Watch anywhere,cancel at anytime
        </p>
        <p className='landingpagecontent_desc'>Ready to Watch? Enter the Email to start your account</p>
        <div className='landingpagecontent_input'>
            <input type='email'/>
            <button>Get Started</button>
        </div>
    </div>
  )
}

export default LandingPageContent