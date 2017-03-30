import React from 'react';
import HomeEvents from 'containers/events/HomeEvents';
import frontPage from 'img/front-page.png';
import 'scss/home.scss';

const PageHome = () => (
  <div>
    <div className="row bot-1">
      <div className="col-12 image-container">
        <img className="hero" src={frontPage} alt="of lab" />
      </div>
    </div>
    <div className="row">
      <div className="col-sm-7">
        <div className="col-12">
          <h4>Mentoring Hours:</h4>
          <p>10am - 6pm Mon - Fri</p>
        </div>
        <div className="col-12">
          <h4>Projects:</h4>
          <p>
            Sandbox <br />
            HDR Display <br />
            Jukebox <br />
            Course Planner
          </p>
        </div>
      </div>
      <div className="col-sm-5 left-border">
        <div className="col-12">
          <HomeEvents />
        </div>
      </div>
    </div>
  </div>
);

export default PageHome;
