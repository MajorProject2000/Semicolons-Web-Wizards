import React, { useEffect } from "react";
import Layout from "./Layout";
import Footer from "../Footer";

import AOS from "aos";
import "aos/dist/aos.css";
import "./About.css";
const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Layout />
      <div className="hero overlay aboutOverlay">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 text-center">
              <h1 className="heading text-white mb-2" data-aos="fade-up">
                About Us
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

      <div className="section sec-about">
        <div className="container">
          <div className="row g-5 justify-content-between">
            <div className="col-lg-6 has-bg" data-aos="fade-right">
              <img
                src="images/hero_2.jpg"
                alt="Load"
                className="img-fluid img-box-shadow rounded"
              />
            </div>
            <div
              className="col-lg-4 align-self-center"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              <span className="subheading mb-3">About</span>
              <h2 className="heading mb-4">History</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.
              </p>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="section sec-features bg-light">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-4" data-aos="fade-up">
              <span className="subheading mb-3">The Team</span>
              <h2 className="heading">Who We Are</h2>
            </div>
            <div
              className="col-lg-6 text-start"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.
              </p>
            </div>
          </div>
        </div>

        <div className="container">
          <div
            className="features-slider-wrap"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="features-slider" id="features-slider">
              <div className="row">
                <div className="col-md-3 mb-3">
                  <div className="item">
                    <div className="feature bg-color-1">
                      <img
                        src="images/person_1.jpg"
                        alt="Load"
                        className="img-fluid w-50 rounded-circle mb-4"
                      />

                      <h3 className="mb-0">James Scott</h3>
                      <span className="text-black-50 mb-3 d-block">
                        CEO, Co-Founder
                      </span>
                      <p className="text-black-50">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>

                      <a
                        href="https://www.youtube.com/watch?v=oEHHjs1UVXQ&list=PL4cUxeGkcC9iJ_KkrkBZWZRHVwnzLIoUE&index=6"
                        className="more d-block"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-md-3 mb-3">
                  <div className="item">
                    <div className="feature bg-color-2">
                      <img
                        src="images/person_2.jpg"
                        alt="Load"
                        className="img-fluid w-50 rounded-circle mb-4"
                      />

                      <h3 className="mb-0">Hannah White</h3>
                      <span className="text-black-50 mb-3 d-block">
                        CEO, Co-Founder
                      </span>
                      <p className="text-black-50">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>

                      <a
                        href="https://www.youtube.com/watch?v=oEHHjs1UVXQ&list=PL4cUxeGkcC9iJ_KkrkBZWZRHVwnzLIoUE&index=6"
                        className="more d-block"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-md-3 mb-3">
                  <div className="item">
                    <div className="feature bg-color-3">
                      <img
                        src="images/person_3.jpg"
                        alt="Load"
                        className="img-fluid w-50 rounded-circle mb-4"
                      />

                      <h3 className="mb-0">Amy Perez</h3>
                      <span className="text-black-50 mb-3 d-block">
                        CEO, Co-Founder
                      </span>
                      <p className="text-black-50">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>

                      <a
                        href="https://www.youtube.com/watch?v=oEHHjs1UVXQ&list=PL4cUxeGkcC9iJ_KkrkBZWZRHVwnzLIoUE&index=6"
                        className="more d-block"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-md-3 mb-3">
                  <div className="item">
                    <div className="feature bg-color-3">
                      <img
                        src="images/person_3.jpg"
                        alt="Load"
                        className="img-fluid w-50 rounded-circle mb-4"
                      />

                      <h3 className="mb-0">Amy Perez</h3>
                      <span className="text-black-50 mb-3 d-block">
                        CEO, Co-Founder
                      </span>
                      <p className="text-black-50">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>

                      <a
                        href="https://www.youtube.com/watch?v=oEHHjs1UVXQ&list=PL4cUxeGkcC9iJ_KkrkBZWZRHVwnzLIoUE&index=6"
                        className="more d-block"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-md-3 mb-3">
                  <div className="item">
                    <div className="feature bg-color-3">
                      <img
                        src="images/person_3.jpg"
                        alt="Load"
                        className="img-fluid w-50 rounded-circle mb-4"
                      />

                      <h3 className="mb-0">Amy Perez</h3>
                      <span className="text-black-50 mb-3 d-block">
                        CEO, Co-Founder
                      </span>
                      <p className="text-black-50">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>

                      <a
                        href="https://www.youtube.com/watch?v=oEHHjs1UVXQ&list=PL4cUxeGkcC9iJ_KkrkBZWZRHVwnzLIoUE&index=6"
                        className="more d-block"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-md-3 mb-3">
                  <div className="item">
                    <div className="feature bg-color-3">
                      <img
                        src="images/person_3.jpg"
                        alt="Load"
                        className="img-fluid w-50 rounded-circle mb-4"
                      />

                      <h3 className="mb-0">Amy Perez</h3>
                      <span className="text-black-50 mb-3 d-block">
                        CEO, Co-Founder
                      </span>
                      <p className="text-black-50">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>

                      <a
                        href="https://www.youtube.com/watch?v=oEHHjs1UVXQ&list=PL4cUxeGkcC9iJ_KkrkBZWZRHVwnzLIoUE&index=6"
                        className="more d-block"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-md-3 mb-3">
                  <div className="item">
                    <div className="feature bg-color-3">
                      <img
                        src="images/person_3.jpg"
                        alt="Load"
                        className="img-fluid w-50 rounded-circle mb-4"
                      />

                      <h3 className="mb-0">Amy Perez</h3>
                      <span className="text-black-50 mb-3 d-block">
                        CEO, Co-Founder
                      </span>
                      <p className="text-black-50">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>

                      <a
                        href="https://www.youtube.com/watch?v=oEHHjs1UVXQ&list=PL4cUxeGkcC9iJ_KkrkBZWZRHVwnzLIoUE&index=6"
                        className="more d-block"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-md-3 mb-3">
                  <div className="item">
                    <div className="feature bg-color-3">
                      <img
                        src="images/person_3.jpg"
                        alt="Load"
                        className="img-fluid w-50 rounded-circle mb-4"
                      />

                      <h3 className="mb-0">Amy Perez</h3>
                      <span className="text-black-50 mb-3 d-block">
                        CEO, Co-Founder
                      </span>
                      <p className="text-black-50">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>

                      <a
                        href="https://www.youtube.com/watch?v=oEHHjs1UVXQ&list=PL4cUxeGkcC9iJ_KkrkBZWZRHVwnzLIoUE&index=6"
                        className="more d-block"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section ">
        <div className="container">
          <div className="row">
            <div className="col-lg-7" data-aos="fade-up" data-aos-delay="100">
              <div id="features-slider-nav">
                <button className="btn btn-primary prev" data-controls="prev">
                  Prev
                </button>
                <button className="btn btn-primary next" data-controls="next">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-6" data-aos="fade-up">
              <div className="vision">
                <h2>Our Vision</h2>
                <p className="mb-4 lead">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Illum minima dignissimos hic mollitia eius et quam ducimus
                  maiores eos magni.
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
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <div className="mission">
                <h2>Our Mission</h2>
                <p className="mb-4 lead">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Illum minima dignissimos hic mollitia eius et quam ducimus
                  maiores eos magni.
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

      <Footer />
    </>
  );
};

export default About;
