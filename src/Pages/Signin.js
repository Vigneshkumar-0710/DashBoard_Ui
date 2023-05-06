import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useState} from "react";

import './Signin.css'

import {GoogleLogin} from 'react-google-login';
import { Apple,GoogleLoginBtn } from "./Icons";

const clientId='159676038920-vrl6m394je5bd6crps9htma6l10gctch.apps.googleusercontent.com';
function Signin(){
	
	const navigate=useNavigate();
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	localStorage.setItem('username','vick123@gmail.com');
	localStorage.setItem('password','vicky0710.');
	function handleSubmit(e) {
		e.preventDefault();
		// Check if username and password match stored values
		const storedUsername = localStorage.getItem('username');
		const storedPassword = localStorage.getItem('password');
		if (username === storedUsername && password === storedPassword) {
		  setIsLoggedIn(true);
		  navigate('dashboard');
		  // Store isLoggedIn in local storage or cookie
		  localStorage.setItem('isLoggedIn', true);
		}else {
			alert("Credentials are not Match!!");
		}
	  }
    
    
	const onSuccess=(res)=>{
         //alert('login successful');
		 console.log(res.profileObj);
		 navigate('dashboard');
		 

	}
	const onFailure=(res)=>{
		if (res.error === "popup_closed_by_user") {
			alert("Authentication window closed by user. Please try again.");
		  }
		console.log(res);
	}
	const customStyles = {
		backgroundColor: '#4285f4',
		color: 'white',
		borderRadius: '4px',
		padding: '10px 20px',
		fontSize: '16px',
	  };
    return(
        <div className="main-div">
			
            <div className="left-div">
            <h2 className="heading"> Board.</h2>
            </div>
            <div className="right-div">
            <div className='sign-in-box'>
						<div className='right-box'>
                        <div className='Si'> 
                        Sign in
                        </div>
                        
                        <div className="p">Sign in to your account</div>
                        <div className="authentication-buttons">
							<div className="parent-class">
						<GoogleLogin clientId={clientId} buttonText='Sign in with Google' 
							onSuccess={onSuccess} onFailure={onFailure}
							cookiePolicy="single_host_origin"
							isSignedIn={true}
							className="custom-google-login"
							render={renderProps => (
        <button className="custom-google-login" onClick={renderProps.onClick} disabled={renderProps.disabled}>
          <GoogleLoginBtn className="custom-google-icon" />
          Login with Google
        </button>
      )}
							// disabledStyle={true}
							// style={customStyles}
						/>
						</div>
                        {/* <button className="button-1">
                        
                        <FontAwesomeIcon icon={faCookie} />
                        Sign in with Google
                        </button> */}
                        <button className="button-1">
                        < Apple /> Sign in with Apple</button>
                        </div>
						<form onSubmit={handleSubmit} className="input-fields">
                        {/* <div > */}
							<div className='input-container'>
                                <div className="labelname">Email Address</div>
								<input
								    className="email-box"
									placeholder='someone@example.com'
									fullWidth
									type='text'
									label='Email address'
									value={username}
									onChange={(e) => setUsername(e.target.value)}
								/>
							</div>
							<div className='input-container'>
                                <div className="labelname">Password</div>
								<input
								className="password-box"
									fullWidth
									type={'password'}
									value={password}
									label='Password'
									onChange={(e) => setPassword(e.target.value)}
								/>
							</div>
							

							<div className='login-checkbox-desc-holder '>
								<div className='checkbox-holder'>
									{/* <Checkbox
										isChecked={[checkboxValid]}
										index={0}
										onValueChange={() => {
											setCheckboxValid(!checkboxValid);
										}}
									/> */}
								</div>
							</div>
                            <div className='forgot-password'>
									<a className="link" >Forgot Password?</a>
								</div>
							<div className='button-container'>
								<button
								    
									className='login-btn'
									
									type='submit'
									>
									Sign In
								</button>
							</div>
							
                            {/* </div> */}
							</form>

								<p className='body2'>
									Don’t have an account?  
                                    <a className="link"> Register Here</a>
								</p>	
						</div>
					</div>

            </div>
         <Outlet/>
        </div>
    )
}
export default Signin;