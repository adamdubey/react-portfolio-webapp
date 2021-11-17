import React from 'react';
import authImg from '../images/MERN-logo.png';

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
            This Frontend site was built with React.js. Common "portfolio page" websites often include sections like:
            <ul>
              <li>About</li>
              <li>Portfolio</li>
              <li>Testimonials</li>
              <li>Contact</li>
            </ul>
          </p>
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
