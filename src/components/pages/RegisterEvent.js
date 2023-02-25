import React, { useState } from "react";
import FileBase64 from "react-file-base64";
import Layout from "./Layout";
import "./RegisterEvent.css";

const RegisterEvent = () => {
  const [post, setPost] = useState({
    project_name: "",
    description: "",
    location: "",
    date: "",
    timing: "",
    type_of_activity: "",
    hours_required: "",
    images: "",
  });
  const PostData = async (e) => {
    e.preventDefault();

    const {
      project_name,
      description,
      location,
      date,
      timing,
      type_of_activity,
      hours_required,
      images,
    } = post;

    const res = await fetch("/addProject", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        project_name,
        description,
        location,
        date,
        timing,
        type_of_activity,
        hours_required,
        images,
      }),
    });

    const data = await res.json();

    if (data.status === 422 || !data) {
      window.alert("Invalid Registration");

      console.log("Invalid Registration");
    } else {
      window.alert("Post Successful");

      console.log("Post Successful");

      //history.pushState("")
    }
  };

  return (
    <>
      <Layout />
      <div className="wrapper1">
    <img className="banner" src="images/hero_2.jpg" alt="" />
    <div className="overlay">
        <div className="container">
            <div align='center' style={{marginTop:'40px'}} className="banner_data">
                <h1>Register your events here</h1>
                <p className="fs-5 mt-3">Come join us</p>
            </div>
        </div>
    </div>
</div>
      <div className="section">
        <div className="container cont1">
          <div  className="row mb-5">
            <div className="col-lg-12" data-aos="fade-up">
              <h2 className="heading">Registration Form</h2>
              <p className="text-black-50">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.
              </p>
            </div>
          </div>

          <div className="wrapper">
            <form method="POST" className="form-right">
              <div
                className="col-md-12 col-lg-12"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="col-sm-12 mb-3">
                  <label className="ps-3 fw-bold mb-2">Project Name</label>
                  <input
                    type="text"
                    name="project_name"
                    id="name"
                    className="form-control"
                    autoComplete="off"
                    value={post.name}
                    onChange={(e) =>
                      setPost({ ...post, project_name: e.target.value })
                    }
                  />
                </div>
                <div className="col-sm-12 mb-3">
                  <label for="message" className="ps-3 fw-bold mb-2">
                    Description
                  </label>
                  <textarea
                    id="message"
                    className="form-control"
                    cols="30"
                    rows="10"
                    name="description"
                    value={post.description}
                    onChange={(e) =>
                      setPost({ ...post, description: e.target.value })
                    }
                  ></textarea>
                </div>
                <div className="col-sm-12 mb-3">
                  <label className="ps-3 fw-bold mb-2">Location</label>
                  <input
                    type="text"
                    name="location"
                    id="location"
                    className="form-control"
                    autoComplete="off"
                    value={post.location}
                    onChange={(e) =>
                      setPost({ ...post, location: e.target.value })
                    }
                  />
                </div>
                <div className="col-sm-12 mb-3">
                  <label className="ps-3 fw-bold mb-2">Date</label>
                  <input
                    type="date"
                    name="date"
                    id="date"
                    className="form-control"
                    autoComplete="off"
                    value={post.date}
                    onChange={(e) => setPost({ ...post, date: e.target.value })}
                  />
                </div>
                <div className="col-sm-12 mb-3">
                  <label className="ps-3 fw-bold mb-2">Timing</label>
                  <input
                    type="time"
                    name="timing"
                    id="timing"
                    className="form-control"
                    autoComplete="off"
                    value={post.timing}
                    onChange={(e) =>
                      setPost({ ...post, timing: e.target.value })
                    }
                  />
                </div>
                <div className="col-sm-12 mb-3">
                  <label className="ps-3 fw-bold mb-2">Type of Activity</label>
                  <input
                    type="text"
                    name="type_of_activity"
                    id="type_of_activity"
                    className="form-control"
                    autoComplete="off"
                    value={post.type_of_activity}
                    onChange={(e) =>
                      setPost({ ...post, type_of_activity: e.target.value })
                    }
                  />
                </div>
                <div className="col-sm-12 mb-3">
                  <label className="ps-3 fw-bold mb-2">Hours Required</label>
                  <input
                    type="number"
                    name="hours_required"
                    id="hours_required"
                    className="form-control"
                    autoComplete="off"
                    value={post.hours_required}
                    onChange={(e) =>
                      setPost({ ...post, hours_required: e.target.value })
                    }
                  />
                </div>
                <div className="col-sm-12 mb-3">
                  <label className="ps-3 fw-bold mb-2">Upload Photo</label>
                  <br/>
                  <FileBase64
                    type="file"
                    className="form-control"
                    multiple={false}
                    onDone={({ base64 }) =>
                      setPost({ ...post, images: base64 })
                    }
                  />
                </div>
                <div className="col-sm-12 mb-3">
                  <input
                    type="submit"
                    name="signup"
                    id="signup"
                    className="btn btn-primary text-white py-3"
                    value="Submit"
                    onClick={PostData}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterEvent;