// import React, { useState } from "react";
// import "../styles/login.css";
// import Google from "../assets/google.png";
// import logo from "../assets/bg-register.jpg";
// import show from "../assets/hide-password.png";
// import eye from "../assets/show-password.png";
// import {auth} from './firebaseconfig';

// import Lock from "../assets/forgot-password.png";
// import { Link } from "react-router-dom";
// import { signInWithEmailAndPassword } from "firebase/auth";

// const Login = () => {
//   const [passwordVisible, setPasswordVisible] = useState(false);
//   const [loginEmail, setLoginEmail] = useState("");
//   const [loginPassword, setloginPassword] = useState("");
//   const togglePasswordVisibility = () => {
//     setPasswordVisible(!passwordVisible);
//   };
// const login = async () => {
//   try{
    
//     const user = await signInWithEmailAndPassword(auth,loginEmail,loginPassword);
//     console.log(user);
//   }catch(error){
//     console.log(error.message);
//   }
// };
//   return (
//     <div className="register">
//       <div className="register-box">
//         <div className="login-bg"></div>
//         <div className="login-input">
//           <div className="auth-google">
//             <h1>Login Form</h1>
//           </div>
//           <div className="form-auth">
//             <form action="">
//               <div>
//                 <label className="text-lg font-medium">Email</label>
//                 <input
//                   className="w-full border border-black rounded-xl p-3 mt-1 bg-transparent"
//                   placeholder="Enter your email"
//                   type={passwordVisible ? "text" : "password"}
//                   onClick={togglePasswordVisibility} onChange={(event) =>{setLoginEmail(event.target.value);}}
//                 />
//               </div>
//               <div className="mt-4 p">
//                 <label className="text-lg font-medium">Password</label>
//                 <input
//                   className="w-full border border-black rounded-xl p-3 mt-1 bg-transparent"
//                   placeholder="Enter your password"
//                   type="password" onChange={(event) =>{setloginPassword(event.target.value);}}
//                 />
//                 <i
//                   className="eye-icon-login text-white"
//                   onClick={togglePasswordVisibility}
//                 >
//                   <img src={passwordVisible ? show : eye} alt="" />
//                 </i>
//               </div>
//               <div className="mt-8">
//                 <div className="flex justify-between items-center">
//                   <div className="flex items-center">
//                     <input type="checkbox" id="remember" />
//                     <label className="ml-2 text-base r" htmlFor="remember">
//                       Remember me
//                     </label>
//                   </div>
//                   <button className="text-base text-black fp">
//                     Forget password
//                   </button>
//                 </div>
//               </div>
//               <div className="mt-8 flex flex-col gap-y-4">
//                 <button className="active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl text-black text-lg si" onClick={login}>
//                   Sign in
//                 </button>
//                 <button className="flex rounded-xl py-3 border border-black items-center justify-center gap-2 active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all">
//                   <img src={Google} alt="Google logo" className="h-6 w-6" />
//                   Sign In with Google
//                 </button>
//               </div>
//               <div className="registered">
//                 Not yet registered?{" "}
//                 <span
//                   className="ml-2"
//                   style={{
//                     fontWeight: "bold",
//                     cursor: "pointer",
//                   }}
//                 >
//                   <Link to="/register">Register Here</Link>
//                 </span>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from "react";
import "../styles/login.css";
import Google from "../assets/google.png";
import show from "../assets/hide-password.png";
import eye from "../assets/show-password.png";
import { auth } from './firebaseconfig';
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const login = async (event) => {
    event.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      console.log('User logged in:', user.user);
    } catch (error) {
      console.error('Error logging in:', error.message);
    }
  };

  return (
    <div className="register">
      <div className="register-box">
        <div className="login-bg"></div>
        <div className="login-input">
          <div className="auth-google">
            <h1>Login Form</h1>
          </div>
          <div className="form-auth">
            <form onSubmit={login}>
              <div>
                <label className="text-lg font-medium">Email</label>
                <input
                  className="w-full border border-black rounded-xl p-3 mt-1 bg-transparent"
                  placeholder="Enter your email"
                  type="email"
                  onChange={(event) => setLoginEmail(event.target.value)}
                />
              </div>
              <div className="mt-4 p">
                <label className="text-lg font-medium">Password</label>
                <div className="relative">
                  <input
                    className="w-full border border-black rounded-xl p-3 mt-1 bg-transparent"
                    placeholder="Enter your password"
                    type={passwordVisible ? "text" : "password"}
                    onChange={(event) => setLoginPassword(event.target.value)}
                  />
                  <i
                    className="eye-icon-login absolute top-1/2 transform -translate-y-1/2 right-3 cursor-pointer"
                    onClick={togglePasswordVisibility}
                  >
                    <img src={passwordVisible ? show : eye} alt="Toggle visibility" />
                  </i>
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
                <button
                  type="submit"
                  className="active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl text-black text-lg si"
                >
                  Sign in
                </button>
                
                <button
                  type="button"
                  className="flex rounded-xl py-3 border border-black items-center justify-center gap-2 active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all"
                >
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

