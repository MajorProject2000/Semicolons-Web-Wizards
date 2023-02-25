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

  var date = new Date( props.date );
  var month, day;
  if ( !!date.valueOf() ) {
    month = date.toLocaleString('default', { month: 'short' });;
    day = date.getDate();

}

  return (
    <>
      <div className="col-md-4 on-hover">
        <div className="card border-0 mb-4 card1">
          <Link to={`/events/${props.id}`}>
            <img
              style={{ padding: "0px",width:'100%',height:'200px' }}
              className="card-img-top"
            
              src={props.images}
              alt="wrappixel kit"
            />
          </Link>
          <div className="date-pos bg-info-gradiant p-2 d-inline-block text-center rounded text-white position-absolute">
           {month}<span className="d-block">{day}</span>
          </div>
          <h5 style={{color:'coral'}} className="font-weight-medium mt-3 text-center">
            <Link
              to={`/events/${props.id}`}
              className="text-decoration-none link project_name" style={{color:'coral',fontWeight:'700'}}
            >
              {props.project_name}
      
            </Link>
          </h5>
          <p className="mt-3" style={{color:'#59886b',fontWeight:'700'}}>

            {props.location}
            
          </p>
          <Link
            style={{color:'grey'}}
            to={`/events/${props.id}`}
            className="text-decoration-none mt-2"
          >
            View Event
          </Link>
          <Link
            style={{color:'grey'}}
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