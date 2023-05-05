import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useState} from "react";

import './Signin.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCookie,faAppleAlt } from '@fortawesome/free-solid-svg-icons';
import {GoogleLogin} from 'react-google-login';
import { Apple } from "./Icons";
const clientId='159676038920-vrl6m394je5bd6crps9htma6l10gctch.apps.googleusercontent.com';
function Signin(){
    const [username, setUsername] = useState('');
    const[password,setPassword]=useState('');
    const navigate=useNavigate();
	const onSuccess=(res)=>{
         //alert('login successful');
		 console.log(res.profileObj);
		 navigate('dashboard');
		 

	}
	const onFailure=(res)=>{
		console.log(res);
	}
    return(
        <div className="main-div">
			
            <div className="left-div">
            <h2 className="heading"> Board.</h2>
            </div>
            <div className="right-div">
            <div className='sign-in-box'>
						<div>
                        <div className='Si'> 
                        Sign in
                        </div>
                        
                        <div className="p">Sign in to your account</div>
                        <div className="authentication-buttons">
						<GoogleLogin clientId={clientId} buttonText='Sign in with Google' 
							onSuccess={onSuccess} onFailure={onFailure}
							cookiePolicy="single_host_origin"
							isSignedIn={true}
							className='button-1'
							
						/>
                        {/* <button className="button-1">
                        
                        <FontAwesomeIcon icon={faCookie} />
                        Sign in with Google
                        </button> */}
                        <button className="button-1">
                        < Apple /> Sign in with Apple</button>
                        </div>
                        <div className="input-fields">
							<div className='input-container'>
                                <div className="labelname">Email Address</div>
								<input
								    className="email-box"
									placeholder='someone@example.com'
									fullWidth
									type='text'
									label='Email address'
								/>
							</div>
							<div className='input-container'>
                                <div className="labelname">Password</div>
								<input
								className="password-box"
									fullWidth
									type={'password'}
									label='Password'
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
									
									onClick={()=>(navigate('dashboard'))}
									>
									Sign In
								</button>
							</div>
                            </div>

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