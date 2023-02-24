import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Layout.css";
const Layout = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/getcookie`);
      const jsonData = await response.json();
      if (response.ok) {
        setData(jsonData);
        console.log(data);
        setIsLoading(false);
        const userResponse = await fetch(`/userDetails/${data.jwtoken}`);
        const userjsonData = await userResponse.json();
        if (userResponse.ok) {
          console.log(userjsonData);
        }
      }
    };
    fetchData();
  }, []);

  const LogoutHandler = async () => {
    const response = await fetch(`/logout`);
    if (response) {
      window.alert("Logout Successful");
      setData({ jwtoken: "" });
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="site-mobile-menu site-navbar-target">
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close">
            <span className="icofont-close js-menu-toggle"></span>
          </div>
        </div>
        <div className="site-mobile-menu-body"></div>
      </div>

      <nav className="site-nav">
        <div className="container">
          <div className="menu-bg-wrap">
            <div className="site-navigation">
              <div className="row g-0 align-items-center">
                <div className="col-2">
                  <a
                    href="https://www.persistent.com/"
                    className="logo m-0 float-start text-white"
                  >
                    Persistent
                  </a>
                </div>
                <div className="col-8 text-center">
                  <ul className="js-clone-nav d-none d-lg-inline-block text-start site-menu mx-auto">
                    <li className="active">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="active">
                      <Link to="/events">Events</Link>
                    </li>
                    <li className="active">
                      <Link to="/registerEvent">RegisterEvent</Link>
                    </li>
                    {/* <li className="has-children">
                      <a href="/">Events</a>
                      <ul className="dropdown">
                        <li>
                          <Link to="/physicalEvent">Physical</Link>
                        </li>
                        <li>
                          <Link to="/virtualEvent">Virtual</Link>
                        </li>
                      </ul>
                    </li> */}
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </div>
                <div classNameName="col-2 text-end">
                  <a
                    href="https://www.youtube.com/watch?v=oEHHjs1UVXQ&list=PL4cUxeGkcC9iJ_KkrkBZWZRHVwnzLIoUE&index=6"
                    className="burger ms-auto float-end site-menu-toggle js-menu-toggle d-inline-block d-lg-none light"
                  >
                    <span></span>
                  </a>

                  {!isLoading && data.jwtoken ? (
                    <button
                      type="button"
                      style={{ color: "black" }}
                      className="call-us d-flex align-items-center btn btn-sm btn-warning pull-right registerButton"
                      onClick={LogoutHandler}
                    >
                      Logout
                    </button>
                  ) : (
                    <Link to="/login">
                      <button
                        type="button"
                        className="call-us d-flex align-items-center btn btn-sm btn-warning pull-right registerButton"
                      >
                        <Link style={{ color: "black" }} to="/login">
                          Login/Register
                        </Link>
                      </button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Layout;
