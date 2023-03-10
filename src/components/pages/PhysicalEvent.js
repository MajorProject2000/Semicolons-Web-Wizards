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
      const response = await fetch("/v/project_view_all");
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
      <div className="wrapper1">
    <img className="banner" src="images/hero_2.jpg" alt="" />
    <div className="overlay">
        <div className="container">
            <div align='center' style={{marginTop:'40px'}} className="banner_data">
                <h1>Events</h1>
                <p className="fs-5 mt-3">Come join us</p>
            </div>
        </div>
    </div>
</div>

      <div className="section bg-light">
        <div className="container">
          <div className="row">
            <div className="blog-home2 py-5">
              <div className="container">
              <div className="row">
    <div align="center" className="col-md-12">
      <div className="data">
        <p className="fs-2">
          Event Categories
        </p>
    </div>
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