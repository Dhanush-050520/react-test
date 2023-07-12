import React from 'react'
import './App.css'
import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { GoogleOAuthProvider,GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate=useNavigate();

    const subHand=()=>{
      navigate('/dashboard')
    }
    return (
        <div className='logincomp'>
        <div>
        <div className='sidebar1'>
                   <h1 style={{color:'white'}} className='title1'>Board.</h1>
          </div>
      
      
          <div  className='formele'>
          <h1>Sign In</h1>
          <h3>Sign in to your account</h3>
          </div>  
          <div className='laydesign'>
          <span className='spadesign'><FaGoogle/>Sign in with Google</span>
          <span className='spadesign1'><FaApple/>Sign in with Apple</span>
          </div>
          <GoogleOAuthProvider clientId="492360986682-k7mbraaihd844uu1slfsqc7he10ipvmq.apps.googleusercontent.com">
          <GoogleLogin
        onSuccess={credentialResponse => {
          console.log(credentialResponse);
        }}
        onError={() => {
          console.log('Login Failed');
        }}
      /><br/>
              </GoogleOAuthProvider>
           
      </div>
             <div class="loginform">
             <form onSubmit={subHand}>
              <label><b>Username</b></label><br/>
              <input type='text' placeholder='Username'/><br/>
              <label><b>Password</b></label><br/>
              <input type='password' placeholder='Password'/><br/><br/>
              <center>
              <input type="submit" value="Sign in" className='logindesign'/>
              </center>
              </form> 
              </div>
        </div>
        
    )
}
export default Login
