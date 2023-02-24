import React from "react";
import Layout from "./Layout";
//import "./VolunteerRegistration.css";

const VolunteerRegistration = () => {
  return (
    <>
      <Layout />
      <div className="hero overlay registerEventOverlay">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 text-center">
              <h1 className="heading text-white mb-2" data-aos="fade-up">
                Register for Event Here
              </h1>
              <p
                data-aos="fade-up"
                className=" mb-5 text-white lead text-white-50"
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum
                minima dignissimos hic mollitia eius et quam ducimus maiores eos
                magni.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-6" data-aos="fade-up">
              <h2 className="heading">Registration Form</h2>
              <p className="text-black-50">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.
              </p>
            </div>
          </div>
          <div className="wrapper">
            <div className="form-left">
              <h2 className="text-uppercase">information</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Et
                molestie ac feugiat sed. Diam volutpat commodo.
              </p>
              <p className="text">
                <span>Sub Head:</span>
                Vitae auctor eu augudsf ut. Malesuada nunc vel risus commodo
                viverra. Praesent elementum facilisis leo vel.
              </p>
              <div className="form-field">
                <input type="submit" className="account" value="Vote" />
                <input type="submit" className="account" value="rate" />
              </div>
              <p>location icon, timings and other detail in proper format</p>
            </div>
            <form className="form-right">
              <h2 className="text-uppercase">Registration form</h2>
              <div className="mb-3">
                <label>Employee ID</label>
                <input
                  type="number"
                  className="input-field"
                  name="id"
                  required
                />
              </div>
              <div className="row">
                <div className="col-sm-6 mb-3">
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="first_name"
                    id="first_name"
                    className="input-field"
                  />
                </div>
                <div className="col-sm-6 mb-3">
                  <label>BU</label>
                  <input
                    type="text"
                    name="last_name"
                    id="last_name"
                    className="input-field"
                  />
                </div>
              </div>
              <div className="mb-3">
                <label>Email</label>
                <input
                  type="email"
                  className="input-field"
                  name="email"
                  required
                />
              </div>
              <div className="mb-3">
                <label>Phone no.</label>
                <input
                  type="number"
                  className="input-field"
                  name="phone_no"
                  required
                />
              </div>
              <div className="mb-3">
                <label>Gender</label>
                <input type="radio" name="gender" value="male" /> Male
                <input type="radio" name="gender" value="female" /> Female
                <input type="radio" name="gender" value="other" /> Other
              </div>
              <div className="row">
                <div className="col-sm-6 mb-3">
                  <label>Password</label>
                  <input
                    type="password"
                    name="pwd"
                    id="pwd"
                    className="input-field"
                  />
                </div>
                <div className="col-sm-6 mb-3">
                  <label>Confirm Password</label>
                  <input
                    type="password"
                    name="cpwd"
                    id="cpwd"
                    className="input-field"
                  />
                </div>
              </div>
              <div className="mb-3">
                <label className="option">
                  I agree to the Terms and Conditions
                  <input type="checkbox" checked />
                  <span className="checkmark"></span>
                </label>
              </div>
              <div className="form-field">
                <input
                  type="submit"
                  value="Register"
                  className="register"
                  name="register"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default VolunteerRegistration;
