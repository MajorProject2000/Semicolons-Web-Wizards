import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import Footer from "../Footer";
import EventCard from "../EventCard";
import AOS from "aos";
import "aos/dist/aos.css";
import "./PhysicalEvent.css";
const PhysicalEvent = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/getallProjects");
      const jsonData = await response.json();
      if (response.ok) {
        setData(jsonData);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Layout />
      <div className="hero overlay physicalOverlay">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 text-center mx-auto">
              <span className="subheading-white text-white mb-5">Events</span>

              <p
                data-aos="fade-up"
                className=" mb-5 text-white lead text-white-50"
              >
                Come join us.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="section bg-light">
        <div className="container">
          <div className="row">
            <div className="blog-home2 py-5">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-md-8 text-center">
                    <h2 className="my-3">Events</h2>
                    <h5 className="subtitle font-weight-normal">
                      Volunteer for our events
                    </h5>
                  </div>
                </div>
                <div className="row mt-4">
                  {data &&
                    data.map((item) => (
                      <EventCard
                        key={item._id}
                        id={item._id}
                        project_name={item.project_name}
                        location={item.location}
                        date={item.date}
                        images={item.images}
                      />
                    ))}
                  <EventCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PhysicalEvent;
