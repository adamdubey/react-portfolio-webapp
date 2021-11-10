import React from 'react';
import Typed from 'react-typed';

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="main-info">
        <h1>Full Stack Web Development</h1>
        <Typed
          className="typed-text"
          strings={[
            'Frontend Web Development',
            'Backend Web Development',
            'Database Design & Integration',
            'CI/CD Automation',
            'Cloud Native Design'
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <a href="#" className="btn-main-offer">
          Read More!
        </a>
      </div>
    </div>
  );
};

export default Header;
