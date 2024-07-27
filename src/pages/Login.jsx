import React, { useState } from "react";
import "../styles/login.css";
import Google from "../assets/google.png";
import logo from "../assets/bg-register.jpg";
import show from "../assets/hide-password.png";
import eye from "../assets/show-password.png";
import Lock from "../assets/forgot-password.png";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <>

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
                  placeholder="Enter your email"
                  type= "text"
                  
                />
              </div>
              <div className="mt-4 p">
                <label className="text-lg font-medium">Password</label>
                <input
                  className="w-full border border-black rounded-xl p-3 mt-1 bg-transparent"
                  placeholder="Enter your password"
                  type={passwordVisible ? "text" : "password"}
                />
                <i
                  className="eye-icon-login text-white"
                  onClick={togglePasswordVisibility}
                >
                  <img src={passwordVisible ? show : eye} alt="" />
                </i>
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
                <button className="active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl text-black text-lg si">
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
    <Footer />
    </>
  );
};

export default Login;
