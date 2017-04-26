import React from 'react';
import HomeEvents from 'containers/events/HomeEvents';
import frontPage from 'img/front-page.png';
import 'scss/home.scss';

const PageHome = () => (
  <div>
    <div className="row bot-1">
      <div className="col-12 hero">
        <img className="image" src={frontPage} alt="of lab" />
        <div className="pillars">
          <p className="pillar">Mentoring</p>
          <p className="pillar">Networking</p>
          <p className="pillar">Projects</p>
          <p className="pillar">Events</p>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-7 offset-md-1 col-md-6">
        <div className="col-12">
          <h4>Mentoring:</h4>
          <p>The SSE has a mentor on duty every day that can help with intro SE and CS classes</p>
          <p>Hours: 10am - 6pm Mon - Fri</p>
        </div>
        <div className="col-12">
          <h4>Projects:</h4>
          <p><strong style={{ color: '#1E5A8D' }}>Sandbox:</strong> SSE plays with sand</p>
          <p><strong style={{ color: '#1E5A8D' }}>HDR Display:</strong> SSE breaks a TV</p>
          <p><strong style={{ color: '#1E5A8D' }}>Jukebox</strong> SSE relives the 80&apos;s</p>
          <p><strong style={{ color: '#1E5A8D' }}>Course Planner</strong> SSE copies CSH</p>
        </div>
      </div>
      <div className="col-5 col-md-4 left-border">
        <div className="col-12">
          <h4>Upcoming Events</h4>
          <HomeEvents />
        </div>
      </div>
    </div>
  </div>
);

export default PageHome;
