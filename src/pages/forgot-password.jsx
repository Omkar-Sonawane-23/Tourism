import React from "react";
import "./forgot-password.css";
import Lock from "../assets/forgot-password.png"; // Ensure this asset is available

const ForgotPassword = () => {
  return (
    <div className="forgot-password">
      <div className="forgot-password-box">
        <div className="forgot-password-content">
          <img src={Lock} alt="Lock Icon" className="lock-icon" />
          <h1 className="forgot-password-title">FORGOT PASSWORD?</h1>
          <p className="forgot-password-subtitle">
            You can reset your Password here
          </p>
          <form className="forgot-password-form">
            <input
              className="forgot-password-input"
              type="email"
              placeholder="Email address"
            />
            <button className="forgot-password-button" type="submit">
              SEND MY PASSWORD
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
