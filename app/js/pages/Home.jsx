import React from 'react';
import HomeEvents from 'containers/events/HomeEvents';

const PageHome = () => (
  <div>
    <div className="row bot-1">
      <div className="col-12">
        <div style={{ width: '100%', height: '250px', backgroundColor: '#CECECE' }} />
      </div>
    </div>
    <div className="row">
      <div className="col-md-7">
        <p>Mentoring</p>
        <p>Projects</p>
      </div>
      <div className="col-md-5 left-border">
        <HomeEvents />
      </div>
    </div>
  </div>
);

export default PageHome;
