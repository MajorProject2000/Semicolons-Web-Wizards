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
        <div className="hero overlay homeOverlay">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-lg-6 text-left">
                <h1 className="heading text-white mb-2" data-aos="fade-up">
                  Engage yourself in Event Voluntering.
                </h1>
                <p
                  data-aos="fade-up"
                  className=" mb-3 text-white lead text-white-50"
                >
                  Open Your Heart To Those In Need Indoor. Outdoor. Remote.
                </p>
                <p data-aos="fade-up" data-aos-delay="100">
                  <a
                    href="https://www.youtube.com/watch?v=mwtbEGNABWU"
                    className="text-white glightbox d-inline-flex align-items-center"
                  >
                    <span className="icon-play me-2"></span>
                    <span>Enroll Now</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <div className="row">
            <div align="center" className="col-md-12">
              <div className="data">
                <p className="fs-2">Event Categories</p>
              </div>
            </div>
          </div>
          <div className="row mt-3 mb-3">
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
        <div className="section cause-section bg-light">
          <div className="container">
            <div className="row justify-content-center mb-5">
              <div
                className="col-lg-6 text-center"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <span className="subheading mb-3">Events</span>
                <h2 className="heading">Featured Events</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing, elit.
                  Animi quaerat, eaque asperiores quos natus, ratione.
                </p>
              </div>
            </div>
          </div>
          <div className="container mb-5">
            <div
              align="center"
              className="features-slider-wrap position-relative"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="features-slider" id="features-slider">
                <div className="row">
                  <div className="col-md-6">
                    <div className="item">
                      <div className="causes-item bg-white">
                        <a href="https://www.youtube.com/watch?v=oEHHjs1UVXQ&list=PL4cUxeGkcC9iJ_KkrkBZWZRHVwnzLIoUE&index=6">
                          <img
                            src="images/img_v_1-min.jpg"
                            alt="Load"
                            className="img-fluid mb-4 rounded"
                          />
                        </a>
                        <div className="px-4 pb-5 pt-3">
                          <h3>
                            <a href="https://www.youtube.com/watch?v=oEHHjs1UVXQ&list=PL4cUxeGkcC9iJ_KkrkBZWZRHVwnzLIoUE&index=6">
                              Recent
                            </a>
                          </h3>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Soluta labore eligendi tempora laudantium
                            voluptate, amet ad libero facilis nihil officiis.
                          </p>
                          <p>
                            <a
                              href="https://www.youtube.com/watch?v=oEHHjs1UVXQ&list=PL4cUxeGkcC9iJ_KkrkBZWZRHVwnzLIoUE&index=6"
                              className="link-underline"
                            >
                              Learn More
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="item">
                      <div className="causes-item bg-white">
                        <a href="https://www.youtube.com/watch?v=oEHHjs1UVXQ&list=PL4cUxeGkcC9iJ_KkrkBZWZRHVwnzLIoUE&index=6">
                          <img
                            src="images/img_v_2-min.jpg"
                            alt="Load"
                            className="img-fluid mb-4 rounded"
                          />
                        </a>
                        <div className="px-4 pb-5 pt-3">
                          <h3>
                            <a href="https://www.youtube.com/watch?v=oEHHjs1UVXQ&list=PL4cUxeGkcC9iJ_KkrkBZWZRHVwnzLIoUE&index=6">
                              Upcoming
                            </a>
                          </h3>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Soluta labore eligendi tempora laudantium
                            voluptate, amet ad libero facilis nihil officiis.
                          </p>
                          <p>
                            <a
                              href="https://www.youtube.com/watch?v=oEHHjs1UVXQ&list=PL4cUxeGkcC9iJ_KkrkBZWZRHVwnzLIoUE&index=6"
                              className="link-underline"
                            >
                              Learn More
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section">
          <div className="container">
            <div className="row mb-5 align-items-center justify-content-between">
              <div className="col-lg-5" data-aos="fade-up" data-aos-delay="0">
                <span className="subheading mb-3">Who we are</span>
                <h2 className="heading">About Us</h2>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Ducimus sint quae cumque vitae sed aliquid, voluptatibus,
                  doloremque?
                </p>
              </div>

              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                <blockquote>
                  Lorem ipsum dolor sit amet consectetur, adipisicing, elit.
                  Quos deserunt quod, dolores obcaecati. Magni nesciunt
                  architecto, ullam laborum, illum fugit.
                </blockquote>
              </div>
              <p>
                <a
                  href="https://www.youtube.com/watch?v=oEHHjs1UVXQ&list=PL4cUxeGkcC9iJ_KkrkBZWZRHVwnzLIoUE&index=6"
                  className="link-underline"
                >
                  About us
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="section flip-section secondary-bg homeSection">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 mx-auto text-center">
                <span
                  className="subheading-white mb-3 text-white"
                  data-aos="fade-up"
                >
                  Now!
                </span>
                <h3 className="mb-4 heading text-white" data-aos="fade-up">
                  Make a difference
                </h3>
                <Link
                  to="/physicalEvent"
                  className="btn btn-outline-white me-3"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  Become a Volunteer
                </Link>
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
