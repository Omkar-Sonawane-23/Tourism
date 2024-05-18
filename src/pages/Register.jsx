import React, {useState} from 'react';
import '../styles/register.css';
import Google from '../assets/google.png';
import show from '../assets/hide-password.png';
import eye from '../assets/show-password.png'; 
import Lock from '../assets/forgot-password.png';
import { Link } from 'react-router-dom';

const Register = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
  
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className='register'>
        <div className='register-box'>
            <div className='register-bg'></div>
            <div className='register-input'>
                <div className='auth-google'>
                    <img src={Google} alt="" className='sm-icon'/>Sign Up with Google
                </div>
                <div style={{display: 'flex', marginTop: '15px',justifyContent: 'center', alignItems: 'center', width: '90%'}}>
                <div className='connect-line'></div>
                <span className='connect'>Or register with</span>
                <div className='connect-line'></div>
            </div>
            <div className='form-auth'>
                <form action="">
                    <input type='text' placeholder='Username' className='auth-email' required/>
                    <input type='email' placeholder='Email' className='auth-email' required/>
                    <input type={passwordVisible ? 'text' : 'password'} placeholder='Password' className='auth-email' onClick={togglePasswordVisibility} required/>
                    <i className="eye-icon" onClick={togglePasswordVisibility}>
                    <img src={passwordVisible ? show : eye} alt="" />
                    </i>
                <div style={{marginTop: '10px', display: 'flex', justifyContent: 'space-between', verticalAlign: 'middle'}}>
                  <label className="custom-checkbox">
                    <input type="checkbox" className='remember-checkbox'/>
                    <span className="checkmark"></span><span className='remember-me'>Remember me</span>
                  </label>
                  </div>
                </form>
                <button type='submit' className='auth-continue'>Sign Up</button>
            </div>
            <div className='registered'>Already registered? <span style={{fontWeight: 'bold', cursor: 'pointer'}}><Link to='/login'>Login</Link></span></div>
            </div>
        </div>
    </div>
  )
}

export default Register