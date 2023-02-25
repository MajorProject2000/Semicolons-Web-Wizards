import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Layout.css";
const Layout = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({ jwtoken: "" });
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
      <nav style={{backgroundColor: 'transparent',zIndex: '1'}} className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="www.youtube.com" style={{color: 'white',fontWeight: '500'}}>
            <img style={{paddingRight:'10px'}} src="https://www.persistent.com/wp-content/themes/persistent/dist/images/persistent-logo-favicon-icon_83d9bf54.ico" alt="" width="30" height="24" className="d-inline-block align-text-top" />
            Persistent
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link style={{color: 'coral'}} className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link style={{color: 'coral'}}  className="nav-link active" aria-current="page" to="/events">Event</Link>
              </li>
              <li className="nav-item">
                <Link style={{color: 'coral'}}  className="nav-link active" aria-current="page" to="/registerEvent">RegisterEvent</Link>
              </li>
              <li className="nav-item">
                <Link style={{color: 'coral'}}  className="nav-link active" aria-current="page" to="/about">About us</Link>
              </li>
              <li className="nav-item">
                <Link style={{color: 'coral'}}  className="nav-link active" aria-current="page" to="/contact">Contact us</Link>
              </li>
              <li className="nav-item">
                {!isLoading && data.jwtoken ? <button className="btn_login" onClick={LogoutHandler}>Logout</button> : <Link style={{color: 'coral'}}  className="nav-link active" aria-current="page" to="/login">Login</Link>}
              </li>
             
            </ul>
          </div>
        </div>
      </nav>

      
    </>
  );
};

export default Layout;