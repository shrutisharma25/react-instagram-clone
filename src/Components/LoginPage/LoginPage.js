import './LoginPage.css';  
import { Grid } from "@material-ui/core";
import React,{Component} from "react";
import inst_image from '../../images/9364675fb26a.svg';
import insta_logo from '../../images/logoinsta.png';
import fb from '../../images/fb.png';
import appstore from '../../images/app.png';
import playstore from '../../images/play.png';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return(
            <div>
                <Grid container>
                    <Grid item xs={2}>
                    </Grid> 
                    <Grid item xs={7}>
                        <div className="loginpage_main">
                            <div>
                                <img src={inst_image} width="420px"/>
                            </div>
                            <div>
                                <div className='loginpage_rightcomponent'> 
                                    <div>
                                      <img className="loginpage_logo" src={insta_logo}/>
                                      <div className='loginpage_signin'>
                                        <input className='loginpage_text' type="text" placeholder='Phone number, username or email' />
                                        <input className='loginpage_text' type="password" placeholder='Password'/>
                                        <button className='loginpage_button' >Sign In</button>
                                        <div>
                                        <hr className='loginpage_hr'/>
                                        <div className='loginpage_or'>OR</div>
                                        <hr className='loginpage_hr'/>
                                        </div>
                                        <div className='login_fb'>
                                            <img className='loginpage_fb'src={fb} width='18px'/>
                                            <a href="www.facebook.com" className='loginpage_fb'>Log in with Facebook</a>
                                        </div>
                                        <div className='login_forgot'>Forgotten your Password?</div>
                                      </div>
                                    </div>
                                    <div className='loginpage_signUpOption'>
                                        <div className='loginpage_signIn'>Don't have an account?<a href="/signup"><sign>Sign Up</sign></a></div>
                                    </div>
                                    <div className='loginpage_app'>Get the app.</div>
                                    <div className='loginpage_appbutton'>
                                        <img className='login_appImage' src={appstore} />
                                        <img className='login_appImage' src={playstore} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                    </Grid> 
                </Grid>
            </div>
        )
    }
}
export default LoginPage;
