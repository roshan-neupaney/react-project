import React from "react";
import { Link } from "react-router-dom";

export default function SigninBox() {
  return (
    <>
      {/* <div className="signIn"> */}
      <div className="signInContainer">
        <div className="welcomeText">
          <h1>Welcome</h1>
          <h5>Please enter your details</h5>
        </div>
        <div className="signinForm">
          <div className="signInInput">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email
            </label>
            <br />
            <input
              type="email"
              className="input-email input-form input-form-resp"
              id="signInEmail"
              placeholder="Enter your email"
            />
          </div>
          <div className="signInInput">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Password
            </label>
            <br />
            <input
              type="password"
              className="input-form input-form-resp"
              id="signInPassword"
              placeholder="Enter your Password"
            />
          </div>
          <div className="rememberMeBox">
            <div className="remember-me ">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Remember me
              </label>
            </div>
              <div className="forgetPasswordBox">
                <Link className="forgetPassword" to="">
                  Forget Password?
                </Link>
              </div>
          </div>
          <button type="button" className="button signIn">
            Sign in
          </button>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}
