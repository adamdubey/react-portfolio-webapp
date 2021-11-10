import React from 'react';
import authImg from '../MERN-logo.png';

const About = () => {
  return (
    <div id="about" className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={authImg} alt="author-image" />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">About</h1>
          <p>
            Common Technologies and Frameworks used for Full Stack Web
            Development include the MERN Stack (MongoDB, Express, ReactJS and
            NodeJS).
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
