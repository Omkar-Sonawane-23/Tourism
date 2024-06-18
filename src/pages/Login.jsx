import React, { useState } from "react";
import "../styles/login.css";
import Google from "../assets/google.png";
import logo from "../assets/bg-register.jpg";
import show from "../assets/hide-password.png";
import eye from "../assets/show-password.png";
import Lock from "../assets/forgot-password.png";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = (props) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
const navigate=useNavigate();
  const togglePasswordVisibility = (e) => {
    e.preventDefault();
    setPasswordVisible(!passwordVisible);
  };
  const [registerDetails,setRegisterDetails]=useState({
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
  const data=localStorage.getItem('registerDetails');
  const parsedData=data ? JSON.parse(data):"";
 
   if(parsedData.email==registerDetails.email && parsedData.password==registerDetails.password){
    props.setRegistered(true);
    toast.success("Logged in Successfully");
    navigate("/");
  }
  else{
    toast.error("Wrong Credentials!");
  }
  
  
}
  return (
    <div className="register">
      <div className="register-box">
        <div className="login-bg"></div>
        <div className="login-input">
          <div className="auth-google">
            <h1>Login Form</h1>
          </div>
          <div className="form-auth">
            <form action="">
              <div>
                <label className="text-lg font-medium">Email</label>
                <input
                  className="w-full border border-black rounded-xl p-3 mt-1 bg-transparent"
                  placeholder="Enter your email" name="email" onChange={handleInput}
                  type= "text"
                  
                />
              </div>
              <div className="mt-4 p">
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
                    <label className="ml-2 text-base r" htmlFor="remember">
                      Remember me
                    </label>
                  </div>
                  <button className="text-base text-black fp">
                    Forget password
                  </button>
                </div>
              </div>
              <div className="mt-8 flex flex-col gap-y-4">
                <button onClick={handleSaveToLocalStorage} className="active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl text-black text-lg si">
                  Sign in
                </button>
                <button className="flex rounded-xl py-3 border border-black items-center justify-center gap-2 active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all">
                  <img src={Google} alt="Google logo" className="h-6 w-6" />
                  Sign In with Google
                </button>
              </div>
              <div className="registered">
                Not yet registered?{" "}
                <span
                  className="ml-2"
                  style={{
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                >
                  <Link to="/register">Register Here</Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
