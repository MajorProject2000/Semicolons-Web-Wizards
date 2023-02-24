import React, { useState } from "react";
import Signin from "./Signin";
import Signup from "./Signup";
import "./Login.css";

const Login = () => {
  const [isSignin, setSignin] = useState(true);
  //   const clickHandler = () => {
  //     setSignin(!isSignin);
  //   };

  return (
    <>
      <div className="form-container-login">
        <div className="slide-controls1"></div>
        <div className="inner">
          <button className="btn loginbtn" onClick={() => setSignin(true)}>
            Login
          </button>
          <button className="btn signupbtn" onClick={() => setSignin(false)}>
            Signup
          </button>
          {isSignin ? <Signin /> : <Signup setSignin={setSignin} />}
        </div>
      </div>
    </>
  );
};

export default Login;
