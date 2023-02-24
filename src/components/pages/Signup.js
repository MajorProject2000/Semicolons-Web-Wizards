import React, { useState } from "react";
const Signup = (props) => {
  const [user, setUser] = useState({
    name: "",

    email: "",

    phone: "",

    password: "",

    cpassword: "",
    bu: "",
    gender: "",
    employee_id: "",
  });

  let name, value;

  const handlerInputs = (e) => {
    name = e.target.name;

    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();

    const { name, email, phone, password, cpassword, bu, gender, employee_id } = user;

    const res = await fetch("/signUpUser", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        name,

        email,

        phone,

        password,

        cpassword,
        bu,
        gender,
        employee_id,
      }),
    });

    const data = await res.json();

    if (data.status === 422 || !data) {
      window.alert("Invalid Registration");

      console.log("Invalid Registration");
    } else {
      window.alert("Registration Successful");

      console.log("Registration Successful");
      props.setSignin(true);

      //history.pushState("")
    }
  };
  return (
    <>
      <section className="signup">
        <div className="container mt-5">
          <div className="signup-content">
            <div className="signup-form">
              <h2 className="form-title">Sign up</h2>
              <form method="POST" className="register-form">
                <div class="mb-3">
                  <label for="exampleInputName1" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputName1"
                    name="name"
                    value={user.name}
                    onChange={handlerInputs}
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputNumber1" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="exampleInputNumber1"
                    name="phone"
                    value={user.phone}
                    onChange={handlerInputs}
                  />
                </div>
                <div class="mb-3">
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
                <div class="mb-3">
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
                <div class="mb-3">
                  <label for="exampleInputCPassword1" className="form-label">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputCPassword1"
                    name="cpassword"
                    value={user.cpassword}
                    onChange={handlerInputs}
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleBUName1" className="form-label">
                    BU
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputBU1"
                    name="bu"
                    value={user.bu}
                    onChange={handlerInputs}
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleGenderName1" className="form-label">
                    Gender
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleGenderName1"
                    name="gender"
                    value={user.gender}
                    onChange={handlerInputs}
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleEmpIdNumber1" className="form-label">
                    Employee Id
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="exampleEmpIdNumber1"
                    name="employee_id"
                    value={user.employee_id}
                    onChange={handlerInputs}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={PostData}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
