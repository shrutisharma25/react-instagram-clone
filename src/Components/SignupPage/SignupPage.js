import React from 'react'
import './SignupPage.css';
import insta_logo from '../../images/logoinsta.png';
import appstore from '../../images/app.png';
import playstore from '../../images/play.png';


function SignupPage() {
  return (
    <div className='outerdiv'>
        <div className='maindiv'>
        <img className="logo" src={insta_logo}/>
        <br/>
        <span className="text">Sign up to see photos and videos from your friends</span>
        <br />
        <button className='facebookbutton'> Log in with Facebook</button>
        <hr className='hr'/>
        <div className='or'>OR</div>
        <hr className='hr'/>
        <div className='inputfields'>      
        <input className='signuppage_text' type="text" placeholder='Mobile Number or Email' />
        <input className='signuppage_text' type="text" placeholder='Full Name' />
        <input className='signuppage_text' type="text" placeholder='Username' />
        <input className='signuppage_text' type="password" placeholder='Password'/>
        </div>
        <p className='lowertext'>People who use our service may have uploaded your contact information to Instagram.
        <span className='lowertextspan'>&nbsp;Learn More</span><br/><br/>
        By signing up, you agree to our <span className='lowertextspan'>Terms</span> &nbsp;, <span className='lowertextspan'>Privacy Policy</span> and <span className='lowertextspan'>Cookies Policy</span>.
        </p>
        <button className='signupbutton'>Sign up</button>
        </div>
        <div className='middlediv'>
            Have an account?&nbsp;
            <a href='/'><login>Log in</login></a>
        </div>
        <div className='lowerdiv'>
        <div className='signuppage_app'>Get the app.</div>
        <div className='signuppage_appbutton'>
        <img className='appImage' src={appstore} />
        <img className='appImage' src={playstore} />
        </div>
        </div>
    </div>
  )
}

export default SignupPage