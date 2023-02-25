import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer"

import { useParams } from "react-router-dom";
import Layout from "./Layout";

const EventDetails = () => {
  const { eventId } = useParams();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const [token, setToken] = useState({ jwtoken: "" });
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


  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/v/project_view/${eventId}`);
      const jsonData = await response.json();
      if (response.ok) {
        setData(jsonData);
        setIsLoading(false);
      }
    };
    fetchData();
  }, [eventId]);
  
  if (data)
  {var date = new Date( data.date );
  var month, day;
  if ( !!date.valueOf() ) {
    month = date.toLocaleString('default', { month: 'long' });;
    day = date.getDate();

}}

  return (
    <>
       { !isLoading && <> 
      
  <Layout />
      <div className="wrapper1">
    <img className="banner" src="images/hero_2.jpg" alt="" />
    <div className="overlay" style={{backgroundImage: "url('images/girl.jpg')"}}>
        <div className="container">
            <div align='center' style={{marginTop:'40px'}} className="banner_data">
                <h1>{data.project_name}</h1>
                <p className="fs-5 mt-3">Event details</p>
            </div>
        </div>
    </div>
</div>
	<div className="section bg-light">
		
        <div className="container row">
            <div className="col-md-6 mt-3">
            <img style={{width:'100%',height:'50vh'}} src={data.images} />
            </div>

            <div className="col-md-6">
            <div class="card">
      <div class="card-body">
        <h1>Description</h1>
        <p>Event- {data.project_name}</p>
        <p>Date - {day} {month} </p>
        <p>Time - {data.timing} </p>
        <p>Hours Required - {data.hours_required} </p>
        <p>Location - {data.location}</p>
        <p>Type of Activity - {data.type_of_activity} </p>
<Link to={
              isLoggedIn
                ? `/events/volunteerRegistration/${data._id}`
                : "/login"
            }><button >Join Event</button></Link>
        
      </div>
    </div>
            </div>
        </div>


    <div className="col-md-12 container" >
        <div className="col-md-12 col-sm-12  col-xs-12 p-0">
            <ul className="nav nav-tabs" id="volNavTab">
                
                <h2>Project Details</h2>
                
            </ul>
        </div>
        <p><b>Volunteer to Teach Girl Children which aims to empower young girls through Education.</b>
            As the name suggests, the Girls Education Program in our Foundation is focused on providing help to young disadvantaged females living in urban village around Pune. Volunteers work in a school whose main motto is to educate the girl child in the area.
            These are girls from poor families living in the rural areas , who barely manage to make their ends meet; let alone funding the education for their children. Being uneducated themselves, most of the parents don't believe in sending their girl child to school and rather keep them at home to help in domestic work. However, with years of efforts and awareness spread across these areas and families, these girls are now been allowed to go to schools and get proper education in order to make good out of their lives. 
            <p><b>Volunteers joining this program, will provide their support and contribute in 
            imparting basic education to these girls at the local girl schools. </b>
            Volunteers on this program will enjoy a rewarding experience by assisting the teachers to 
            deliver lessons.</p>
            During the mornings you’ll be working with smaller groups helping them with their reading, 
            writing and numeracy skills. 
            There may be occasions when you’ll be asked to teach one of the classNamees yourself 
            but you’ll be fully supported if this happens.

			</p>
            
    </div>
    </div>
<Footer/>
</>
	}
    </>
  );
};

export default EventDetails;
