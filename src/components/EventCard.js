import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const EventCard = (props) => {
  const [data, setData] = useState({ jwtoken: "" });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/getcookie`);
      const jsonData = await response.json();
      console.log(`data ${jsonData.jwtoken}`);
      if (response.ok) {
        if (jsonData.jwtoken) {
          setData({ jwtoken: jsonData.jwtoken });
          setIsLoggedIn(true);
        } else {
          setData({ jwtoken: "" });
          setIsLoggedIn(false);
        }
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="col-md-4 on-hover">
        <div className="card border-0 mb-4 card1">
          <Link to={`/events/${props.id}`}>
            <img
              style={{ padding: "0px" }}
              className="card-img-top"
              src="images/tree.jpg"
              //   src={props.images}
              alt="wrappixel kit"
            />
          </Link>
          <div className="date-pos bg-info-gradiant p-2 d-inline-block text-center rounded text-white position-absolute">
            Oct<span className="d-block">23</span>
          </div>
          <h5 className="font-weight-medium mt-3 text-center">
            <Link
              to={`/events/${props.id}`}
              className="text-decoration-none link"
            >
              {/* {props.project_name} */}
              Tree Plantation
            </Link>
          </h5>
          <p className="mt-3">
            {/* {props.location} */}
            Business Park, Opp. Corns Sam Restaurant, New Yoark, US
          </p>
          <Link
            to={`/events/${props.id}`}
            className="text-decoration-none linking text-themecolor mt-2"
          >
            View Event
          </Link>
          <Link
            to={
              isLoggedIn
                ? `/events/volunteerRegistration/${props.id}`
                : "/login"
            }
            className="text-decoration-none linking text-themecolor mt-2"
          >
            Register for Event
          </Link>
        </div>
      </div>
    </>
  );
};

export default EventCard;