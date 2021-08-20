import './LandingPage.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

const LandingPage = () => (
  <div className="landing-page">
    <div className="wrapper">
      <p className="title">Management Dashboard</p>
    </div>
    <div className="button-wrap">
      <div className="button-container">
        <NavLink to="/EMapp" style={{ textDecoration: 'none' }}>
          <div className="button">
            <p className="text">Enter</p>
          </div>
        </NavLink>
      </div>
    </div>
  </div>
);

export default LandingPage;
