
import React, {useState} from 'react';
import '../styles/register.css';
import Google from '../assets/google.png';
import show from '../assets/hide-password.png';
import eye from '../assets/show-password.png'; 

import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [details,setDetails] = useState({username:'',email:'',password: ''})
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(details)
    setDetails({username:'',email:'',password: ''})
    navigate('/')
  }
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
                <form action="" onSubmit={handleSubmit}>
                    <input type='text' defaultValue={details.username} onChange={(e)=>setDetails({...details, username:e.target.value})} placeholder='Username' className='auth-email' required/>
                    <input type='email'defaultValue={details.email} onChange={(e)=>setDetails({...details, email:e.target.value})} placeholder='Email' className='auth-email' required/>
                    <div className="relative">
                    <input type={passwordVisible ? 'text' : 'password'} placeholder='Password'defaultValue={details.password} onChange={(e)=>setDetails({...details, password:e.target.value})} className='auth-email' onClick={togglePasswordVisibility} required/>
                    <i className="absolute top-6 cursor-pointer right-3" onClick={togglePasswordVisibility}>
                      
                    <img src={passwordVisible ? show : eye} alt="" className='w-6' />
                    </i>
                    </div>
                <div style={{marginTop: '10px', display: 'flex', justifyContent: 'space-between', verticalAlign: 'middle'}}>
                  <label className="custom-checkbox">
                    <input type="checkbox" className='remember-checkbox'/>
                    <span className="checkmark"></span><span className='remember-me'>Remember me</span>
                  </label>
                  </div>
                  <button type='submit' className='auth-continue'>Sign Up</button>
                </form>
                
            </div>
            <div className='registered'>Already registered? <span style={{fontWeight: 'bold', cursor: 'pointer'}}><Link to='/login'>Login</Link></span></div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
