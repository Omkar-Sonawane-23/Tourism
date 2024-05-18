import React, {useState} from 'react';
import '../styles/register.css';
import Google from '../assets/google.png';
import show from '../assets/hide-password.png';
import eye from '../assets/show-password.png'; 
import Lock from '../assets/forgot-password.png';
import { Link } from 'react-router-dom';

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className='register'>
        <div className='register-box'>
            <div className='login-bg'></div>
            <div className='login-input'>
                <div className='auth-google'>
                    <img src={Google} alt="" className='sm-icon'/>Sign In with Google
                </div>
                <div style={{display: 'flex', marginTop: '15px',justifyContent: 'center', alignItems: 'center', width: '90%'}}>
                <div className='connect-line'></div>
                <span className='connect-login'>Or login with</span>
                <div className='connect-line'></div>
            </div>
            <div className='form-auth'>
                <form action="">
                    <input type='email' placeholder='Email' className='auth-email' required/>
                    <input type={passwordVisible ? 'text' : 'password'} placeholder='Password' className='auth-email' onClick={togglePasswordVisibility} required/>
                    <i className="eye-icon-login" onClick={togglePasswordVisibility}>
                    <img src={passwordVisible ? show : eye} alt="" />
                    </i>
                <div style={{marginTop: '10px', display: 'flex', justifyContent: 'space-between', verticalAlign: 'middle'}}>
                  <label className="custom-checkbox">
                    <input type="checkbox" className='remember-checkbox'/>
                    <span className="checkmark"></span><span className='remember-me'>Remember me</span>
                  </label>
                  <div style={{display: 'flex', verticalAlign: 'middle', marginTop: '4px', cursor: 'pointer'}}>
                    <img src={Lock} alt="" style={{verticalAlign: 'middle', marginRight: '0.5rem', width: '1rem', height: '1rem'}}/><span className='forgot-password'>Forgot password?</span></div>
                </div>
                </form>
                <button type='submit' className='auth-continue'>Sign In</button>
            </div>
            <div className='registered'>Not yet registered? <span style={{fontWeight: 'bold', cursor: 'pointer'}}><Link to='/register'>Register</Link></span></div>
            </div>
        </div>
    </div>
  )
}

export default Login