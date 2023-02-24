import React, { useState } from "react";
import {useNavigate} from "react-router-dom";

const Signin = (props) => {
  const navigate =  useNavigate();
  const [user, setUser] = useState({
    email: "",

    password: "",
  });

  let name, value;

  const handlerInputs = (e) => {
    name = e.target.name;

    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();

    const {email,  password } = user;

    const res = await fetch("/loginUser", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await res.json();

    if (data.status === 422 || !data) {
      window.alert("Invalid SignIn");

      console.log("Invalid SignIn");
    } else {
      window.alert("Successfully SignIn");

      console.log("Successfully SignIn");

      navigate('/', {replace: true});
    }
  };
  return (
    <>
      <h2 className="form-title">Login</h2>
      <form>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            name="email"
            value={user.email}
            onChange={handlerInputs}
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="password"
            value={user.password}
            onChange={handlerInputs}
          />
        </div>

        <button type="submit" className="btn btn-primary" onClick={PostData}>
          Submit
        </button>
      </form>
    </>
  );
};

export default Signin;
