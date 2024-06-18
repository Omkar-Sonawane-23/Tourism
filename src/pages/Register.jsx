import React, { useState } from "react";
import "../styles/register.css";
import Google from "../assets/google.png";
import show from "../assets/hide-password.png";
import eye from "../assets/show-password.png";
import Lock from "../assets/forgot-password.png";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Register = ({registered,setRegistered}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [registerDetails,setRegisterDetails]=useState({
    username:"",
    email:"",
    password:"",
  })
  
const handleInput=(e)=>{
  const {name,value}=e.target;
  setRegisterDetails({
    ...registerDetails,
    [name]:value
  })
}
const handleSaveToLocalStorage = (e) => {
  e.preventDefault()
  localStorage.setItem('registerDetails', JSON.stringify(registerDetails));
  console.log(JSON.stringify(registerDetails));
  toast.success("Registered Successfully");
  setRegistered(true);
  navigate("/");
}
  const togglePasswordVisibility = (e) => {
    e.preventDefault();
    setPasswordVisible(!passwordVisible);
  };
const navigate=useNavigate();
  return (
    <div className="register">
    
      <div className="register-box">
        <div className="register-bg"></div>
        <div className="register-input text-white">
          <div className="auth-google">
            <h1 className="text-black">Register with Google</h1>
          </div>
          <div className="form-auth p-2">
            <form action="">
              <div className="mt-3">
                <label className="text-lg font-medium">Username</label>
                <input
                  className= " text-black/80 w-full border border-white rounded-xl p-2.5 mt-1"
                  placeholder="Enter your username" value={registerDetails.username} name="username"
                  type="username" onChange={handleInput}
                />
              </div>
              <div className="mt-4">
                <label className="text-lg font-medium">Email</label>
                <input
                  className="text-black/80 w-full border border-white rounded-xl p-2.5 mt-1"
                  placeholder="Enter your email" name="email" onChange={handleInput}
                  type="email"
                />
              </div>
              <div className="mt-4">
                <label className="text-lg font-medium">Password</label>
                <div className="flex justify-center items-center space-x-2">
        <input
          className="text-black/80 w-full border border-white rounded-xl p-2.5 mt-1"
          placeholder="Enter your password"
          name="password"
          onChange={handleInput}
          type={passwordVisible ? "text" : "password"}
        />
        <button
          className="bg-transparent p-2.5 mt-1"
          onClick={togglePasswordVisibility}
        >
          <img src={passwordVisible ? show : eye} alt="Toggle visibility" className="w-6 h-6" />
        </button>
      </div>
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <input type="checkbox" id="remember" />
                    <label
                      className="ml-2 text-base text-black r"
                      htmlFor="remember"
                    >
                      Remember me
                    </label>
                  </div>
                  <button className="text-base text-black fp">
                    Forget password
                  </button>
                </div>
              </div>
              <div className="mt-8 flex flex-col gap-y-4">
                <button onClick={
                  handleSaveToLocalStorage
                } className="active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl text-black text-lg sir">
                  Sign Up
                </button>
                <button className="flex rounded-xl py-3 border border-white items-center justify-center gap-2 active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all">
                  <img src={Google} alt="Google logo" className="h-6 w-6" />
                  Sign In with Google
                </button>
              </div>
              <div className="registered">
                Already registered?{" "}
                <span
                  className="ml-2"
                  style={{
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                >
                  <Link to="/login">Login</Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
