
import React, { useState } from "react";
import "../styles/register.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Google from "../assets/google.png";
import { auth } from './firebaseconfig';
import show from "../assets/hide-password.png";
import eye from "../assets/show-password.png";
import { Link } from "react-router-dom";

const Register = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const registerMethod = async (event) => {
    event.preventDefault(); // Prevent form submission
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
      console.log('User registered:', userCredential.user);
    } catch (error) {
      console.error('Error registering user:', error.message);
    }
  };

  return (
    <div className="register">
      <div className="register-box">
        <div className="register-bg"></div>
        <div className="register-input text-white">
          <div className="auth-google">
            <h1 className="text-black">Register with Google</h1>
          </div>
          <div className="form-auth p-2">
            <form onSubmit={registerMethod}>
              <div className="mt-3">
                <label className="text-lg font-medium">Username</label>
                <input

                  className="w-full border border-white rounded-xl p-2.5 mt-1 text-black"

                  className= " text-black/80 w-full border border-white rounded-xl p-2.5 mt-1"

                  placeholder="Enter your username"
                  type="text"
                />
              </div>
              <div className="mt-4">
                <label className="text-lg font-medium">Email</label>
                <input

                  className="w-full border border-white rounded-xl p-2.5 mt-1 text-black"

                  className="text-black/80 w-full border border-white rounded-xl p-2.5 mt-1"

                  placeholder="Enter your email"
                  type="email"
                  onChange={(event) => { setRegisterEmail(event.target.value); }}
                />
              </div>
              <div className="mt-4">
                <label className="text-lg font-medium">Password</label>
                <input

                  className="w-full border border-white rounded-xl p-2.5 mt-1 text-black"
                  placeholder="Enter your password"
                  type={passwordVisible ? "text" : "password"}
                  onChange={(event) => { setRegisterPassword(event.target.value); }}

                  className="text-black/80 w-full border border-white rounded-xl p-2.5 mt-1"
                  placeholder="Enter your password"
                  type={passwordVisible ? "text" : "password"}
                  

                />
                <i
                  className="eye-icon text-white"
                  onClick={togglePasswordVisibility}
                >
                  <img src={passwordVisible ? show : eye} alt="Toggle visibility" />
                </i>
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <input type="checkbox" id="remember" />
                    <label
                      className="ml-2 text-base text-black"
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
                <button
                  type="submit"
                  className="active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl text-black text-lg sir"
                >
                  Sign Up
                </button>
                <button
                  type="button"
                  className="flex rounded-xl py-3 border border-white items-center justify-center gap-2 active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all"
                >
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
