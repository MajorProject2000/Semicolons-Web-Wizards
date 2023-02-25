import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout";
import Footer from "../Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.css";
const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div>
        <Layout />
       
<div className="wrapper1">
    <img className="banner" src="images/hero_2.jpg" alt="" />
    <div className="overlay">
        <div className="container">
            <div className="banner_data">
                <h1>Engage yourself <br /> in event <br />Volunteering</h1>
                <p className="fs-5 mt-3">Open Your Heart To Those In Need Indoor. Outdoor. Remote.</p>
                {/* <a href="www.google.com">Register <i className="fas fa-caret-right"></i></a> */}
            </div>
        </div>
    </div>
</div>

<div style={{marginTop:'100px',}} className="container">

  <div className="row">
    <div align="center" className="col-md-12">
      <div className="data">
        <p className="fs-2">
          Event Categories
        </p>
    </div>
    </div>
  </div>
  <div className="row mt-3 mb-5">
   <div align="center" className="col-md-3">
              <i className="fa-solid fa-medkit fa-3x"></i>
              <p className="service_header">Health care events</p>
              <p className="service_desc">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
                modi earum odio at aut. Unde ullam ex ducimus minima
              </p>
            </div>
            <div align="center" className="col-md-3">
              <i className="fa-solid fa-user-friends fa-3x"></i>
              <p className="service_header">Social events</p>
              <p className="service_desc">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
                modi earum odio at aut. Unde ullam ex ducimus minima
              </p>
            </div>
            <div align="center" className="col-md-3">
              <i className="fab fa-envira fa-3x"></i>
              <p className="service_header">Environmental events</p>
              <p className="service_desc">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
                modi earum odio at aut. Unde ullam ex ducimus minima
              </p>
            </div>
            <div align="center" className="col-md-3">
              <i className="fas fa-server fa-3x"></i>
              <p className="service_header">Techincal events</p>
              <p className="service_desc">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
                modi earum odio at aut. Unde ullam ex ducimus minima
              </p>
            </div>
  </div>
</div>

 
<div  style={{marginTop:'100px'}} className="contact mb-5">
  <div className="row">
    <div align="center" className="col-md-12">
      <div className="data1">
        <p className="fs-2">
          Featured Events!
        </p>
    </div>
    <p style={{color:'gray'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit modi earum odio at Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit modi earum odio at</p>
    </div>
  </div>

<div className="row mt-3">
  <div className="col-md-6">
    <div className="card" style={{width: '18rem'}}>
      <img src="images/hero_2.jpg" className="card-img-top" alt="..." />
      <div className="card-body">
        <p className="fs-3 event">Event Name</p>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <div className="learn">
          <a href="www.google.com">Learn more </a>
        </div>
      </div>
    </div>
  </div>
  <div className="col-md-6">
    <div className="card" style={{width: '18rem'}}>
      <img src="images/hero_2.jpg" className="card-img-top" alt="..." />
      <div className="card-body">
        <p className="fs-3 event">Event Name</p>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <div className="learn">
          <a href="">Learn more </a>
        </div>
      </div>
    </div>
  </div>
  <div align="center" className="col-md-12">
    <button className="btn1 mt-5">View More</button>
  </div>
</div>

</div>

<div style={{marginTop:'140px'}} className="about container mb-3">
  <div className="row mt-5">
    <div className="col-md-6">
      <div className="data2">
        <p className="fs-2">
          About Us!
        </p>
    </div>
    <p className="mt-3 about_content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ipsum iste quos voluptatum maxime odit, sint, eum, delectus iusto minima nulla? Accusantium velit, nam eaque maxime reiciendis quo expedita beatae!</p>
    </div>
    <div className="col-md-6">
      <div className="about_data">
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, unde sint. Iste esse obcaecati doloremque aliquid, mollitia laudantium magni cupiditate explicabo? Aspernatur, magnam laudantium excepturi similique laboriosam cumque assumenda quae.
        </p>
      </div>
    </div>
  </div>
</div>

<div style={{marginTop:'150px'}} className="wrapper">
  <img className="banner1" src="images/hero_2.jpg" alt="" />
  <div className="overlay1">
      <div className="container">
          <div className="banner1_data">
              <h1 className="mb-3">Make a difference</h1>
            <Link to="/physicalEvent" className="btn_2">Become Volunteer</Link>
            </div>
      </div>
  </div>
</div> 



        <Footer />
      </div>
    </>
  );
};

export default Home;